webpackHotUpdate("static/development/pages/index.js",{

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
 // import * as HDWalletProvider from 'truffle-hdwallet-provider'
//Hijacks the provider from the web3 that is installed from Metamask.

var web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(window.web3.currentProvider);
} else {
  //we are on the server *OR* the user is not running metamask
  // const provider = new HDWalletProvider(
  //     'word win world fall valid field awkward tool bridge knee blush afford',
  //     // 'https://mainnet.infura.io/L40Is7cV2Vr6TCf0ZCoI'
  //     // 'https://rinkeby.infura.io/L40Is7cV2Vr6TCf0ZCoI'
  //     'https://rinkeby.infura.io/v3/53f8390b02fe40b4961e11cfe5d79f20'
  // );
  // web3 = new Web3(provider);
  var provider1 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('https://rinkeby.infura.io/v3/53f8390b02fe40b4961e11cfe5d79f20');
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./node_modules/truffle-hdwallet-provider/dist/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/any-promise/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/any-promise/loader.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/any-promise/register-shim.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/decode-uri-component/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/define-properties/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/es-abstract/GetIntrinsic.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/es-abstract/es5.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/es-abstract/helpers/assertRecord.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/es-abstract/helpers/isFinite.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/es-abstract/helpers/isNaN.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/es-abstract/helpers/mod.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/es-abstract/helpers/sign.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/es-to-primitive/es5.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/es-to-primitive/helpers/isPrimitive.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/eth-lib/lib/array.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/eth-lib/lib/bytes.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/eth-lib/lib/hash.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/for-each/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/function-bind/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/global/window.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/has/src/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/is-callable/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/is-function/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/object-assign/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/object-keys/implementation.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/object-keys/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/parse-headers/parse-headers.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/query-string/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/strict-uri-encode/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/string.prototype.trim/implementation.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/string.prototype.trim/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/string.prototype.trim/polyfill.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/string.prototype.trim/shim.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/swarm-js/lib/api-browser.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/swarm-js/lib/pick.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/swarm-js/lib/swarm-hash.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/swarm-js/lib/swarm.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/url-set-query/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/websocket/lib/browser.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/websocket/lib/version.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/websocket/package.json":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/xhr-request-promise/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/xhr-request/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/xhr-request/lib/ensure-header.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/xhr-request/lib/normalize-response.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/xhr-request/lib/request-browser.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/xhr/index.js":
false,

/***/ "./node_modules/truffle-hdwallet-provider/node_modules/xtend/immutable.js":
false

})
//# sourceMappingURL=index.js.c4e3adc18f8463b8c47a.hot-update.js.map