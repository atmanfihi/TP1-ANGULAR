import { ql as Observable, ru as isFunction } from "./core-i2h8T2YR.js";
// node_modules/rxjs/dist/esm5/internal/util/isObservable.js
function isObservable(obj) {
	return !!obj && (obj instanceof Observable || isFunction(obj.lift) && isFunction(obj.subscribe));
}
export { isObservable as t };
