export const time = (d = new Date()) =>
	[d.getHours(), ":", d.getMinutes(), ":", d.getSeconds()]
		.map((n) => (typeof n === "number" ? n.toString().padStart(2, "0") : n))
		.join("");
