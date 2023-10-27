import { time } from "../time/index.js";

export const log = (() => {
	if (process.env.DEBUG === "true") {
		return function log(...args) {
			console.log(time(), ...args);
		};
	}
	return () => null;
})();
