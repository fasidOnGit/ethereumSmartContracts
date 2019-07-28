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

var web3;

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
  var provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('https://rinkeby.infura.io/v3/53f8390b02fe40b4961e11cfe5d79f20');
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ })

})
//# sourceMappingURL=index.js.d15812c5fc8e46a6535e.hot-update.js.map