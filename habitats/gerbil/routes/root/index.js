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
		<button type="submit" id="scenario1" data-source="/data/test">scenario 1</button>
		<button type="submit" id="scenario2" data-source="/data/test.js">scenario 2</button>
		<button type="submit" id="scenario3" data-source="/data/test.json">scenario 3</button>
		<p>&nbsp;</p>
		<textarea id="output"></textarea>
	</main>
	<script type="module">
		import { scenarios } from "./main.mjs";
		scenarios("#scenario1", "#scenario2", "#scenario3");
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
