export const routes = [
	{
		path: "/data/:id",
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
			response.send(JSON.stringify({ id: request.params.id }));
		},
	},
];
