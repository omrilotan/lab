import { routes as root } from "./root/index.js";
import { routes as data } from "./data/index.js";
import { routes as echo } from "./echo/index.js";
import { routes as rest } from "./rest/index.js";

export const routes = [...root, ...data, ...echo, ...rest];
