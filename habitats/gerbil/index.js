import express from "express";
import safeSetHeader from "safe-set-header";
import { log } from "./lib/index.js";
import { routes } from "./routes/index.js";

safeSetHeader({ log });

const app = express();

app.use(
	express.static("public", {
		setHeaders: (response, path) => {
			if (path.endsWith(".html")) {
				response.setHeader("Cache-Control", "private, max-age=0");
			} else {
				response.setHeader("Cache-Control", "public, max-age=86400");
			}
		},
	}),
);
app.use(async (request, response, next) => {
	response.on("finish", () => {
		const { method, path } = request;
		log(
			JSON.stringify({
				request: [method, path].join(" "),
				handler: request.route.path,
				response: response?.statusCode,
			}),
		);
	});
	next();
});

routes.forEach(({ method, path, handler }) => {
	console.log(method, path);
	app[method.toLowerCase()](path, handler);
});

app.listen(3000, () => {
	log("Listening on port 3000.");
});
