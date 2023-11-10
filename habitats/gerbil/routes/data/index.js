export const routes = ["/data", "/data2"].map((prefix) => ({
	path: `${prefix}/:file`,
	method: "get",
	handler: async function (request, response, next) {
		response.set("Content-Type", "application/json");
		const { file } = request.params;
		if (file.includes("private")) {
			response.set("Cache-Control", "private");
		} else if (file.includes("no-store")) {
			response.set("Cache-Control", "private, no-store");
		} else if (file.includes("no-cache")) {
			response.set("Cache-Control", "private, no-cache");
		} else if (file.includes("cache")) {
			response.set("Cache-Control", "public, max-age=3600");
		} else if (file.includes("client")) {
			response.set("Cache-Control", "private, max-age=3600");
		}
		response.set("file", file);
		response.send(JSON.stringify({ file }));
	},
}));
