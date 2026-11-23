import { M as createComponent, Sc as EnvironmentInjector, Wi as setClassMetadata, dr as Service, fl as inject, jc as Injector, so as ɵɵdefineService, tn as ApplicationRef } from "./core-DuZ-TQ0A.js";
// node_modules/@angular/cdk/fesm2022/_style-loader-chunk.mjs
var appsWithLoaders = /* @__PURE__ */ new WeakMap();
var _CdkPrivateStyleLoader = class _CdkPrivateStyleLoader {
	_appRef;
	_injector = inject(Injector);
	_environmentInjector = inject(EnvironmentInjector);
	load(loader) {
		const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
		let data = appsWithLoaders.get(appRef);
		if (!data) {
			data = {
				loaders: /* @__PURE__ */ new Set(),
				refs: []
			};
			appsWithLoaders.set(appRef, data);
			appRef.onDestroy(() => {
				appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
				appsWithLoaders.delete(appRef);
			});
		}
		if (!data.loaders.has(loader)) {
			data.loaders.add(loader);
			data.refs.push(createComponent(loader, { environmentInjector: this._environmentInjector }));
		}
	}
	static ɵfac = function _CdkPrivateStyleLoader_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || _CdkPrivateStyleLoader)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineService({
		token: _CdkPrivateStyleLoader,
		factory: _CdkPrivateStyleLoader.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CdkPrivateStyleLoader, [{ type: Service }], null, null);
})();
export { _CdkPrivateStyleLoader as t };
