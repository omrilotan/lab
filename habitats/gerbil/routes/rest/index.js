export const routes = [
	{
		path: "*",
		method: "get",
		handler: async function (request, response, next) {
			response.status(404);
			response.set("Content-Type", "text/plain");
			response.send("Not Found");
		},
	},
];
