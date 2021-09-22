'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactNative = require('@firebase/auth/react-native');



Object.keys(reactNative).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return reactNative[k];
		}
	});
});
//# sourceMappingURL=index.cjs.js.map
