const endpoints = [
	"/test1",
	"/test1.json",
	"/test1.js",
	"/test2.js",
	"/test3.js",
	"/private.js",
	"/no-store.js",
	"/no-cache.js",
	"/cache.json",
	"/client.json",
];

const page = `<!DOCTYPE html>
<html>
	<head>
		<title>gerbil</title>
		<meta name="robots" content="noindex, nofollow" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
		<link rel="stylesheet" href="main.css" />
	</head>
	<body>
	<main>
		<h1>Gerbil</h1>
		<div class="columns">
			<div>
				<h2>Endpoint 1: no cache rules</h2>
			</div>
			<div>
				<h2>Endpoint 2: respect origin cache rule</h2>
			</div>
		</div>
		<div class="columns">
			<div>
				${endpoints
					.map(
						(endpoint) =>
							`<button type="submit" class="scenario" data-source="/data${endpoint}"></button>`,
					)
					.join("\n\t\t\t")}
			</div>
			<div>
				${endpoints
					.map(
						(endpoint) =>
							`<button type="submit" class="scenario" data-source="/data2${endpoint}"></button>`,
					)
					.join("\n\t\t\t")}
			</div>
		</div>
		<p>&nbsp;</p>
		<textarea id="output"></textarea>
	</main>
	<script type="module">
		import { scenario } from "./main.mjs";
		scenario({
			triggers: document.querySelectorAll(".scenario"),
			dataSourceAttribute: "data-source",
			output: document.querySelector("#output"),
		});
	</script>
	</body>
</html>`;

export const routes = [
	{
		path: "/",
		method: "get",
		handler: async function (request, response, next) {
			response.set("Content-Type", "text/html");
			response.send(page);
		},
	},
];
