import client from "@routes/client";

export const routes = [
	{
		path: "/echo",
		method: "get",
		handler: client(),
	},
];
