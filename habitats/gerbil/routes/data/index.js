export const routes = ["/data", "/data2"].map((prefix) => ({
	path: `${prefix}/:id`,
	method: "get",
	handler: async function (request, response, next) {
		response.set("Content-Type", "application/json");
		if (request.params.id.includes("private")) {
			response.set("Cache-Control", "private");
		}
		if (request.params.id.includes("no-store")) {
			response.set("Cache-Control", "private, no-store");
		}
		if (request.params.id.includes("no-cache")) {
			response.set("Cache-Control", "private, no-cache");
		}
		if (request.params.id.includes("cache")) {
			response.set("Cache-Control", "public, max-age=3600");
		}
		if (request.params.id.includes("client")) {
			response.set("Cache-Control", "private, max-age=3600");
		}
		response.send(JSON.stringify({ id: request.params.id }));
	},
}));
