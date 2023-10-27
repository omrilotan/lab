export const routes = [
	{
		path: "/data/:id",
		method: "get",
		handler: async function (request, response, next) {
			response.set("Content-Type", "application/json");
			response.send(JSON.stringify({ id: request.params.id }));
		},
	},
];
