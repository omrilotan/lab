export async function scenarios(...selectors) {
	selectors.forEach((selector) => {
		document
			.querySelector(selector)
			.addEventListener("click", async (event) => {
				console.log(event.type);
				const dataSource = event.target.getAttribute("data-source");
				const response = await fetch(dataSource);
				if (response.ok) {
					writeResponse(await response.text());
				}
			});
	});
	function writeResponse(string) {
		document
			.querySelector("#output")
			?.appendChild(document.createTextNode(string + "\n"));
	}
}
