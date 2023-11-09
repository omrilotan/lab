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
		<p>Test scenario:</p>
		<button type="submit" class="scenario" data-source="/data/test1"></button>
		<button type="submit" class="scenario" data-source="/data/test1.json"></button>
		<button type="submit" class="scenario" data-source="/data/test1.js"></button>
		<button type="submit" class="scenario" data-source="/data/test2.js"></button>
		<button type="submit" class="scenario" data-source="/data/test3.js"></button>
		<button type="submit" class="scenario" data-source="/data/private.js"></button>
		<button type="submit" class="scenario" data-source="/data/no-store.js"></button>
		<button type="submit" class="scenario" data-source="/data/no-cache.js"></button>
		<button type="submit" class="scenario" data-source="/data/cache.json"></button>
		<button type="submit" class="scenario" data-source="/data/client.json"></button>
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
