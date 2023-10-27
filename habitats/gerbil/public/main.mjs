export async function scenario({ triggers, dataSourceAttribute, output }) {
	[...triggers].forEach((element) => {
		const dataSource = element.getAttribute(dataSourceAttribute);
		element.appendChild(document.createTextNode(dataSource));
		element.addEventListener("click", async (event) => {
			const response = await fetch(dataSource);
			if (response.ok) {
				output.appendChild(
					document.createTextNode((await response.text()) + "\n"),
				);
			}
		});
	});
}
