/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/gameBoard.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/gameBoard.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Acme&family=Josefin+Sans:wght@200;300;700&family=Lobster&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n:root{\r\n--mainColor: rgb(58, 25, 58);\r\n--mainColor1: rgb(74, 7, 136);\r\n--peachDarkest: #181211;\r\n--peachLi: #EFB6AF;\r\n--peachDark: #5F4744;\r\n--peachLightDark: #A77D78;\r\n--peachLight: #F4CDC8;\r\n--peachLighter: #F9E4E2;\r\n}\r\n\r\n\r\n\r\n.gameboard{\r\n    /* border:  2px solid var(--peachDarkest); */\r\n    height: 600px;   \r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.game-vs-label{   \r\n    min-width: 390px;\r\n    margin-top: 20px;   \r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 20px;\r\n    color: var(--peachDarkest);\r\n    font-weight: 700;\r\n    text-shadow: 1px 1px 2px var(--peachDarkest);\r\n    font-family: josefin sans, Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n\r\n.play1-display,.play2-display{\r\n    min-width: 180px;    \r\n    text-transform: uppercase;\r\n  \r\n}\r\n\r\n.play1-display{  \r\n    text-align: right;\r\n    padding-right: 10px;\r\n}\r\n\r\n.play2-display{  \r\n    padding-left: 10px;\r\n}\r\n\r\n.turn-display{\r\n    margin-top: 30px;\r\n    font-size: 20px;\r\n    color: var(--peachDarkest);\r\n    font-weight: 700;   \r\n    font-family: josefin sans, Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n.game-grid{\r\n    margin-top: 10px;\r\n    height: 390px;\r\n    width: 390px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n}\r\n\r\n.grids{\r\n    height: 130px;\r\n    width: 130px;\r\n    border: 2px solid var(--peachDarkest);\r\n    background: var(--peachDark);\r\n    box-shadow: 4px 5px -5px 4px rgba(0,0,0,0.6);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 80px;\r\n    font-family: josefin sans;\r\n    font-weight: 600;\r\n    color: var(--peachLighter);\r\n    text-shadow: 4px 4px 2px var(--peachDarkest);\r\n    cursor: pointer;\r\n}\r\n\r\n.game-board-rounds{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.game-board-rounds>p{\r\ncolor: var(--peachDarkest) !important;\r\n}\r\n\r\n.how-many-rounds,.round-winner{\r\n    display: flex;    \r\n    justify-content: center;\r\n}\r\n\r\n.round-winner{\r\n    margin-top: 5px;\r\n}\r\n\r\n\r\n.each-rounds,.each-round-winner{\r\n    min-width: 90px;\r\n    height: 35px;\r\n    border: 2px solid var(--peachDarkest);\r\n    margin-right: 15px;\r\n    margin-left: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px;\r\n    border-radius: 3px;\r\n    font-family: josefin 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-family: josefin sans;\r\n    font-weight: 700;\r\n}\r\n\r\n.game-rounds{\r\n    margin: 5px;\r\n    border: 2px solid blue;\r\n}\r\n\r\n.each-round-winner{\r\n    height: 30px !important;\r\n    border: 1px solid var(--peachDark);\r\n}", "",{"version":3,"sources":["webpack://./src/css/gameBoard.css"],"names":[],"mappings":";AAIA;AACA,4BAA4B;AAC5B,6BAA6B;AAC7B,uBAAuB;AACvB,kBAAkB;AAClB,oBAAoB;AACpB,yBAAyB;AACzB,qBAAqB;AACrB,uBAAuB;AACvB;;;;AAIA;IACI,4CAA4C;IAC5C,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,0BAA0B;IAC1B,gBAAgB;IAChB,4CAA4C;IAC5C,mEAAmE;AACvE;;;AAGA;IACI,gBAAgB;IAChB,yBAAyB;;AAE7B;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,0BAA0B;IAC1B,gBAAgB;IAChB,mEAAmE;AACvE;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,kCAAkC;IAClC,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,qCAAqC;IACrC,4BAA4B;IAC5B,4CAA4C;IAC5C,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,yBAAyB;IACzB,gBAAgB;IAChB,0BAA0B;IAC1B,4CAA4C;IAC5C,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;AACA,qCAAqC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,eAAe;IACf,YAAY;IACZ,qCAAqC;IACrC,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,qFAAqF;IACrF,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,kCAAkC;AACtC","sourcesContent":["\r\n@import url('https://fonts.googleapis.com/css2?family=Acme&family=Josefin+Sans:wght@200;300;700&family=Lobster&display=swap');\r\n\r\n\r\n:root{\r\n--mainColor: rgb(58, 25, 58);\r\n--mainColor1: rgb(74, 7, 136);\r\n--peachDarkest: #181211;\r\n--peachLi: #EFB6AF;\r\n--peachDark: #5F4744;\r\n--peachLightDark: #A77D78;\r\n--peachLight: #F4CDC8;\r\n--peachLighter: #F9E4E2;\r\n}\r\n\r\n\r\n\r\n.gameboard{\r\n    /* border:  2px solid var(--peachDarkest); */\r\n    height: 600px;   \r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.game-vs-label{   \r\n    min-width: 390px;\r\n    margin-top: 20px;   \r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 20px;\r\n    color: var(--peachDarkest);\r\n    font-weight: 700;\r\n    text-shadow: 1px 1px 2px var(--peachDarkest);\r\n    font-family: josefin sans, Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n\r\n.play1-display,.play2-display{\r\n    min-width: 180px;    \r\n    text-transform: uppercase;\r\n  \r\n}\r\n\r\n.play1-display{  \r\n    text-align: right;\r\n    padding-right: 10px;\r\n}\r\n\r\n.play2-display{  \r\n    padding-left: 10px;\r\n}\r\n\r\n.turn-display{\r\n    margin-top: 30px;\r\n    font-size: 20px;\r\n    color: var(--peachDarkest);\r\n    font-weight: 700;   \r\n    font-family: josefin sans, Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n.game-grid{\r\n    margin-top: 10px;\r\n    height: 390px;\r\n    width: 390px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n}\r\n\r\n.grids{\r\n    height: 130px;\r\n    width: 130px;\r\n    border: 2px solid var(--peachDarkest);\r\n    background: var(--peachDark);\r\n    box-shadow: 4px 5px -5px 4px rgba(0,0,0,0.6);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 80px;\r\n    font-family: josefin sans;\r\n    font-weight: 600;\r\n    color: var(--peachLighter);\r\n    text-shadow: 4px 4px 2px var(--peachDarkest);\r\n    cursor: pointer;\r\n}\r\n\r\n.game-board-rounds{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.game-board-rounds>p{\r\ncolor: var(--peachDarkest) !important;\r\n}\r\n\r\n.how-many-rounds,.round-winner{\r\n    display: flex;    \r\n    justify-content: center;\r\n}\r\n\r\n.round-winner{\r\n    margin-top: 5px;\r\n}\r\n\r\n\r\n.each-rounds,.each-round-winner{\r\n    min-width: 90px;\r\n    height: 35px;\r\n    border: 2px solid var(--peachDarkest);\r\n    margin-right: 15px;\r\n    margin-left: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px;\r\n    border-radius: 3px;\r\n    font-family: josefin 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-family: josefin sans;\r\n    font-weight: 700;\r\n}\r\n\r\n.game-rounds{\r\n    margin: 5px;\r\n    border: 2px solid blue;\r\n}\r\n\r\n.each-round-winner{\r\n    height: 30px !important;\r\n    border: 1px solid var(--peachDark);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/gameOver.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/gameOver.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n:root{\r\n    --mainColor: rgb(58, 25, 58);\r\n    --mainColor1: rgb(74, 7, 136);\r\n    --peachDarkest: #181211;\r\n    --peachLi: #EFB6AF;\r\n    --peachDark: #5F4744;\r\n    --peachLightDark: #A77D78;\r\n    --peachLight: #F4CDC8;\r\n    --peachLighter: #F9E4E2;\r\n    }\r\n\r\n\r\n.game-over{\r\n    /* border: 2px solid green; */\r\n    height: 300px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.game-over div{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    flex-direction: column;\r\n    /* border: 2px solid green; */\r\n    height: 200px;\r\n    font-family: josefin -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n\r\n}\r\n\r\n.game-over h3, .game-over h2{\r\n    color: var(--peachDarkest);\r\n}\r\n\r\n.game-over button{\r\n    height: 30px;\r\n    width: 120px;\r\n    border: none;\r\n    outline: none;\r\n    background: var(--peachDarkest);\r\n    color: var(--peachLi);\r\n    border-radius: 10px;\r\n}", "",{"version":3,"sources":["webpack://./src/css/gameOver.css"],"names":[],"mappings":";AACA;IACI,4BAA4B;IAC5B,6BAA6B;IAC7B,uBAAuB;IACvB,kBAAkB;IAClB,oBAAoB;IACpB,yBAAyB;IACzB,qBAAqB;IACrB,uBAAuB;IACvB;;;AAGJ;IACI,6BAA6B;IAC7B,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,sBAAsB;IACtB,6BAA6B;IAC7B,aAAa;IACb,gJAAgJ;;AAEpJ;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,+BAA+B;IAC/B,qBAAqB;IACrB,mBAAmB;AACvB","sourcesContent":["\r\n:root{\r\n    --mainColor: rgb(58, 25, 58);\r\n    --mainColor1: rgb(74, 7, 136);\r\n    --peachDarkest: #181211;\r\n    --peachLi: #EFB6AF;\r\n    --peachDark: #5F4744;\r\n    --peachLightDark: #A77D78;\r\n    --peachLight: #F4CDC8;\r\n    --peachLighter: #F9E4E2;\r\n    }\r\n\r\n\r\n.game-over{\r\n    /* border: 2px solid green; */\r\n    height: 300px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.game-over div{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    flex-direction: column;\r\n    /* border: 2px solid green; */\r\n    height: 200px;\r\n    font-family: josefin -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n\r\n}\r\n\r\n.game-over h3, .game-over h2{\r\n    color: var(--peachDarkest);\r\n}\r\n\r\n.game-over button{\r\n    height: 30px;\r\n    width: 120px;\r\n    border: none;\r\n    outline: none;\r\n    background: var(--peachDarkest);\r\n    color: var(--peachLi);\r\n    border-radius: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Acme&family=Josefin+Sans:wght@200;300;700&family=Lobster&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n--mainColor: rgb(58, 25, 58);\r\n--mainColor1: rgb(74, 7, 136);\r\n--peachDarkest: #181211;\r\n--peachLi: #EFB6AF;\r\n--peachDark: #5F4744;\r\n--peachLightDark: #A77D78;\r\n--peachLight: #F4CDC8;\r\n--peachLighter: #F9E4E2;\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0;    \r\n}\r\n\r\nbody{\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n\r\n/* Page 1 */\r\n\r\n.game-name{\r\n    color: linear-gradient(180deg, var(--peachDarkest), var(--peachDark));\r\n    /* border: 1px solid red;    */\r\n    text-align: center;\r\n    padding: 10px;\r\n    padding-top: 20px;\r\n    font-size: 3rem;\r\n    font-family: acme;    \r\n}\r\n\r\nsvg {\r\n    display: block;\r\n    font: 2.0em 'Montserrat';\r\n    width: 760px;\r\n    height: 140px;\r\n    margin: 0 auto;\r\n    /* border: 1px solid red;  */\r\n    background: var(--peachDarkest); \r\n} \r\n\r\n.text-copy {\r\n    fill: none;\r\n    stroke: white;\r\n    stroke-dasharray: 6% 29%;\r\n    stroke-width: 5px;\r\n    stroke-dashoffset: 0%;\r\n    animation: stroke-offset 5.5s infinite linear;\r\n}\r\n\r\n.text-copy:nth-child(1){\r\n\tstroke: #4D163D;\r\n\tanimation-delay: -1;\r\n}\r\n\r\n.text-copy:nth-child(2){\r\n\tstroke: var(--peachLi);\r\n\tanimation-delay: -2s;\r\n}\r\n\r\n.text-copy:nth-child(3){\r\n\tstroke: var(--peachLight);\r\n\tanimation-delay: -3s;\r\n}\r\n\r\n.text-copy:nth-child(4){\r\n\tstroke: var(--peachLightDark);\r\n\tanimation-delay: -4s;\r\n}\r\n\r\n.text-copy:nth-child(5){\r\n\tstroke: var(--peachLighter);\r\n\tanimation-delay: -5s;\r\n}\r\n\r\n@keyframes stroke-offset{\r\n\t100% {stroke-dashoffset: -35%;}\r\n}\r\n\r\n\r\n.hide{\r\n    display: none !important;\r\n}\r\n\r\n\r\n.choose-player{\r\nposition: absolute;\r\ndisplay: flex;\r\nplace-self: center;\r\njustify-content: center;\r\nalign-content: center;\r\ntop: 200px;\r\nheight: 100px;\r\nwidth: 540px;\r\n\r\n}\r\n\r\n.choose-player button,\r\n.three-rounds,\r\n.five-rounds,\r\n.start-game{\r\n    height: 30px;\r\n    width: 150px;\r\n    margin: 10px;\r\n    background: linear-gradient(90deg, var(--peachDarkest), var(--peachDark));\r\n    border: 0px solid var(--peachDarkest);\r\n    border-radius: 5px;\r\n    color: white; \r\n    font-family: josefin sans;\r\n    font-weight: 700;\r\n    font-size: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n.player-name{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    /* border: 1px solid rgb(26, 122, 85); */\r\n    margin-top: 50px;\r\n}\r\n\r\n\r\n.player-one label,\r\n.player-two label,\r\n.player-select>p,\r\n.bots-box>p,\r\n.easy-bots>p,\r\n.difficult-bots>p,\r\n.game-board-rounds>p,\r\n.tom,\r\n.mike,\r\n.caleb,\r\n.lui{\r\n    /* border: 1px solid red; */\r\n    font-family: josefin sans;\r\n    font-weight: 700;\r\n    padding: 8px 8px 8px 0px;\r\n    color: var(--peachLight);\r\n}\r\n\r\n\r\n.tom,\r\n.mike,\r\n.caleb,\r\n.lui{\r\n    color: var(--peachDarkest) !important;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.ai-bot{\r\n    background-color: var(--peachDark) !important;\r\n}\r\n\r\n.player-select p{\r\n    text-align: center;\r\n}\r\n\r\n#player-2,\r\n#player-1{\r\n    border: 2px solid var(--peachLight);\r\n    height: 30px;\r\n    outline: none;\r\n   border-radius: 5px;\r\n   padding: 0.6rem 1.2rem;\r\n   color: var(--peachLight);\r\n   background: none;\r\n   font-size: 0.8rem;\r\n    letter-spacing: 0.5px;\r\n    transition: 0.3s;\r\n    width: 100%;\r\n}\r\n\r\n.default-input::after,.default-input1::after{\r\n    content: 'Start game with default name: Leo';\r\n    color:var(--peachLighter);\r\n    font-size: 1rem;\r\n   font-family: josefin sans;\r\n   margin-left: 55px;\r\n}\r\n.default-input1::after{\r\n    content: 'Start game with default name: Nikky';\r\n}\r\n\r\n.player-select{\r\n    padding: 20px;\r\n    background: var(--peachDarkest);\r\n    border-radius: 5px;\r\n    width: 400px;\r\n}\r\n\r\n\r\n\r\n.bots-box{\r\nheight: 100%;\r\nborder: 2px solid var(--peachLight);\r\nmargin-top: 10px;\r\nborder-radius: 5px; \r\n}\r\n\r\n.bot{\r\n    border-top: 2px solid var(--peachLight);\r\n    display: flex;      \r\n}\r\n\r\n.easy-bots,\r\n.difficult-bots{\r\n    margin: 10px;\r\n    flex: 1 0 auto;    \r\n}\r\n\r\n.easy-bot-one-and-two,\r\n.difficult-bot-one-and-two{\r\nheight: 50px;\r\nwidth: 100%;\r\nmargin-top: 0px;\r\nborder: 2px solid var(--peachLight);\r\ndisplay: flex;\r\nborder-radius: 5px;\r\nalign-items: center;\r\n}\r\n\r\n.easy-bot,\r\n.difficult-bot{\r\n    flex: 1 1 auto;\r\n    margin: 5px;\r\n    width: 100%;\r\n    height: 30px;\r\n    background-color: var(--peachLight);\r\n}\r\n\r\n/* Some rounds codes are up */\r\n.three-rounds,\r\n.five-rounds{\r\n    background: var(--peachLighter);\r\n    border: 3px solid var(--peachDark) !important;\r\n    border-radius: 10px !important;\r\n    color: var(--peachDarkest);\r\n}\r\n\r\n.dgame-round{\r\n    background-color: var(--peachDark) !important;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAKA;AACA,4BAA4B;AAC5B,6BAA6B;AAC7B,uBAAuB;AACvB,kBAAkB;AAClB,oBAAoB;AACpB,yBAAyB;AACzB,qBAAqB;AACrB,uBAAuB;AACvB;;AAEA;IACI,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;;AAGA,WAAW;;AAEX;IACI,qEAAqE;IACrE,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,iBAAiB;IACjB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,wBAAwB;IACxB,YAAY;IACZ,aAAa;IACb,cAAc;IACd,4BAA4B;IAC5B,+BAA+B;AACnC;;AAEA;IACI,UAAU;IACV,aAAa;IACb,wBAAwB;IACxB,iBAAiB;IACjB,qBAAqB;IACrB,6CAA6C;AACjD;;AAEA;CACC,eAAe;CACf,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,oBAAoB;AACrB;;AAEA;CACC,yBAAyB;CACzB,oBAAoB;AACrB;;AAEA;CACC,6BAA6B;CAC7B,oBAAoB;AACrB;;AAEA;CACC,2BAA2B;CAC3B,oBAAoB;AACrB;;AAEA;CACC,MAAM,uBAAuB,CAAC;AAC/B;;;AAGA;IACI,wBAAwB;AAC5B;;;AAGA;AACA,kBAAkB;AAClB,aAAa;AACb,kBAAkB;AAClB,uBAAuB;AACvB,qBAAqB;AACrB,UAAU;AACV,aAAa;AACb,YAAY;;AAEZ;;AAEA;;;;IAII,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,yEAAyE;IACzE,qCAAqC;IACrC,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;AACnB;;;;;AAKA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,wCAAwC;IACxC,gBAAgB;AACpB;;;AAGA;;;;;;;;;;;IAWI,2BAA2B;IAC3B,yBAAyB;IACzB,gBAAgB;IAChB,wBAAwB;IACxB,wBAAwB;AAC5B;;;AAGA;;;;IAII,qCAAqC;IACrC,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,mCAAmC;IACnC,YAAY;IACZ,aAAa;GACd,kBAAkB;GAClB,sBAAsB;GACtB,wBAAwB;GACxB,gBAAgB;GAChB,iBAAiB;IAChB,qBAAqB;IACrB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,4CAA4C;IAC5C,yBAAyB;IACzB,eAAe;GAChB,yBAAyB;GACzB,iBAAiB;AACpB;AACA;IACI,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,YAAY;AAChB;;;;AAIA;AACA,YAAY;AACZ,mCAAmC;AACnC,gBAAgB;AAChB,kBAAkB;AAClB;;AAEA;IACI,uCAAuC;IACvC,aAAa;AACjB;;AAEA;;IAEI,YAAY;IACZ,cAAc;AAClB;;AAEA;;AAEA,YAAY;AACZ,WAAW;AACX,eAAe;AACf,mCAAmC;AACnC,aAAa;AACb,kBAAkB;AAClB,mBAAmB;AACnB;;AAEA;;IAEI,cAAc;IACd,WAAW;IACX,WAAW;IACX,YAAY;IACZ,mCAAmC;AACvC;;AAEA,6BAA6B;AAC7B;;IAEI,+BAA+B;IAC/B,6CAA6C;IAC7C,8BAA8B;IAC9B,0BAA0B;AAC9B;;AAEA;IACI,6CAA6C;AACjD","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Acme&family=Josefin+Sans:wght@200;300;700&family=Lobster&display=swap');\r\n\r\n\r\n\r\n\r\n:root{\r\n--mainColor: rgb(58, 25, 58);\r\n--mainColor1: rgb(74, 7, 136);\r\n--peachDarkest: #181211;\r\n--peachLi: #EFB6AF;\r\n--peachDark: #5F4744;\r\n--peachLightDark: #A77D78;\r\n--peachLight: #F4CDC8;\r\n--peachLighter: #F9E4E2;\r\n}\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    margin: 0;    \r\n}\r\n\r\nbody{\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n\r\n/* Page 1 */\r\n\r\n.game-name{\r\n    color: linear-gradient(180deg, var(--peachDarkest), var(--peachDark));\r\n    /* border: 1px solid red;    */\r\n    text-align: center;\r\n    padding: 10px;\r\n    padding-top: 20px;\r\n    font-size: 3rem;\r\n    font-family: acme;    \r\n}\r\n\r\nsvg {\r\n    display: block;\r\n    font: 2.0em 'Montserrat';\r\n    width: 760px;\r\n    height: 140px;\r\n    margin: 0 auto;\r\n    /* border: 1px solid red;  */\r\n    background: var(--peachDarkest); \r\n} \r\n\r\n.text-copy {\r\n    fill: none;\r\n    stroke: white;\r\n    stroke-dasharray: 6% 29%;\r\n    stroke-width: 5px;\r\n    stroke-dashoffset: 0%;\r\n    animation: stroke-offset 5.5s infinite linear;\r\n}\r\n\r\n.text-copy:nth-child(1){\r\n\tstroke: #4D163D;\r\n\tanimation-delay: -1;\r\n}\r\n\r\n.text-copy:nth-child(2){\r\n\tstroke: var(--peachLi);\r\n\tanimation-delay: -2s;\r\n}\r\n\r\n.text-copy:nth-child(3){\r\n\tstroke: var(--peachLight);\r\n\tanimation-delay: -3s;\r\n}\r\n\r\n.text-copy:nth-child(4){\r\n\tstroke: var(--peachLightDark);\r\n\tanimation-delay: -4s;\r\n}\r\n\r\n.text-copy:nth-child(5){\r\n\tstroke: var(--peachLighter);\r\n\tanimation-delay: -5s;\r\n}\r\n\r\n@keyframes stroke-offset{\r\n\t100% {stroke-dashoffset: -35%;}\r\n}\r\n\r\n\r\n.hide{\r\n    display: none !important;\r\n}\r\n\r\n\r\n.choose-player{\r\nposition: absolute;\r\ndisplay: flex;\r\nplace-self: center;\r\njustify-content: center;\r\nalign-content: center;\r\ntop: 200px;\r\nheight: 100px;\r\nwidth: 540px;\r\n\r\n}\r\n\r\n.choose-player button,\r\n.three-rounds,\r\n.five-rounds,\r\n.start-game{\r\n    height: 30px;\r\n    width: 150px;\r\n    margin: 10px;\r\n    background: linear-gradient(90deg, var(--peachDarkest), var(--peachDark));\r\n    border: 0px solid var(--peachDarkest);\r\n    border-radius: 5px;\r\n    color: white; \r\n    font-family: josefin sans;\r\n    font-weight: 700;\r\n    font-size: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n.player-name{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    /* border: 1px solid rgb(26, 122, 85); */\r\n    margin-top: 50px;\r\n}\r\n\r\n\r\n.player-one label,\r\n.player-two label,\r\n.player-select>p,\r\n.bots-box>p,\r\n.easy-bots>p,\r\n.difficult-bots>p,\r\n.game-board-rounds>p,\r\n.tom,\r\n.mike,\r\n.caleb,\r\n.lui{\r\n    /* border: 1px solid red; */\r\n    font-family: josefin sans;\r\n    font-weight: 700;\r\n    padding: 8px 8px 8px 0px;\r\n    color: var(--peachLight);\r\n}\r\n\r\n\r\n.tom,\r\n.mike,\r\n.caleb,\r\n.lui{\r\n    color: var(--peachDarkest) !important;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.ai-bot{\r\n    background-color: var(--peachDark) !important;\r\n}\r\n\r\n.player-select p{\r\n    text-align: center;\r\n}\r\n\r\n#player-2,\r\n#player-1{\r\n    border: 2px solid var(--peachLight);\r\n    height: 30px;\r\n    outline: none;\r\n   border-radius: 5px;\r\n   padding: 0.6rem 1.2rem;\r\n   color: var(--peachLight);\r\n   background: none;\r\n   font-size: 0.8rem;\r\n    letter-spacing: 0.5px;\r\n    transition: 0.3s;\r\n    width: 100%;\r\n}\r\n\r\n.default-input::after,.default-input1::after{\r\n    content: 'Start game with default name: Leo';\r\n    color:var(--peachLighter);\r\n    font-size: 1rem;\r\n   font-family: josefin sans;\r\n   margin-left: 55px;\r\n}\r\n.default-input1::after{\r\n    content: 'Start game with default name: Nikky';\r\n}\r\n\r\n.player-select{\r\n    padding: 20px;\r\n    background: var(--peachDarkest);\r\n    border-radius: 5px;\r\n    width: 400px;\r\n}\r\n\r\n\r\n\r\n.bots-box{\r\nheight: 100%;\r\nborder: 2px solid var(--peachLight);\r\nmargin-top: 10px;\r\nborder-radius: 5px; \r\n}\r\n\r\n.bot{\r\n    border-top: 2px solid var(--peachLight);\r\n    display: flex;      \r\n}\r\n\r\n.easy-bots,\r\n.difficult-bots{\r\n    margin: 10px;\r\n    flex: 1 0 auto;    \r\n}\r\n\r\n.easy-bot-one-and-two,\r\n.difficult-bot-one-and-two{\r\nheight: 50px;\r\nwidth: 100%;\r\nmargin-top: 0px;\r\nborder: 2px solid var(--peachLight);\r\ndisplay: flex;\r\nborder-radius: 5px;\r\nalign-items: center;\r\n}\r\n\r\n.easy-bot,\r\n.difficult-bot{\r\n    flex: 1 1 auto;\r\n    margin: 5px;\r\n    width: 100%;\r\n    height: 30px;\r\n    background-color: var(--peachLight);\r\n}\r\n\r\n/* Some rounds codes are up */\r\n.three-rounds,\r\n.five-rounds{\r\n    background: var(--peachLighter);\r\n    border: 3px solid var(--peachDark) !important;\r\n    border-radius: 10px !important;\r\n    color: var(--peachDarkest);\r\n}\r\n\r\n.dgame-round{\r\n    background-color: var(--peachDark) !important;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/gameBoard.css":
/*!*******************************!*\
  !*** ./src/css/gameBoard.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameBoard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameBoard.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/gameBoard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameBoard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/gameOver.css":
/*!******************************!*\
  !*** ./src/css/gameOver.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameOver_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameOver.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/gameOver.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameOver_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameOver_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameOver_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameOver_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/gameTitle.js":
/*!*************************************!*\
  !*** ./src/components/gameTitle.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameTitle": () => (/* binding */ gameTitle)
/* harmony export */ });

  const gameTitle = (() => {
    const gameName = document.querySelector(".game-name");
    console.log('I am the Title')


    return { gameName }
  })()
  
  





  

/***/ }),

/***/ "./src/components/selectPlayer.js":
/*!****************************************!*\
  !*** ./src/components/selectPlayer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectPlayer": () => (/* binding */ selectPlayer)
/* harmony export */ });




const selectPlayer = (() => {

    const gameMode = document.querySelector(".choose-player");
    const vsBotBtn = document.getElementById('vs-bot');
    
    const playersData = document.querySelector(".player-name");

    const playerOneInput = document.getElementById('player-1');
   
    const playerTwoInput = document.getElementById('player-2');
    
   
    const player2 = document.querySelector(".player-two");
    const vsTwoPlayers = document.getElementById('vs-player-two');

    const selectBotSection = document.querySelector(".bots-box");



    return { gameMode, vsBotBtn, playersData, playerOneInput, playerTwoInput, player2, selectBotSection, vsTwoPlayers }

})()




/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameLogic": () => (/* binding */ gameLogic)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/selectPlayer */ "./src/components/selectPlayer.js");
/* harmony import */ var _components_gameTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gameTitle */ "./src/components/gameTitle.js");





// Player two and Bot

const gameLogic = (function(){
 
    window.onload = () =>{
        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.playersData);      
        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.gameOver)        
        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.gameBoard)  
    }

    
    const removeClasses = (target, arr, className) => arr.forEach((bot) => 
    (bot == target) ? bot.classList.add(className) : bot.classList.remove(className));
      
    const randomMarker = () => Math.floor(Math.random() * 10) > 5 ? 'X' : 'O';  

    // let gameBoardLabel = document.querySelector('.game-vs-label');
    let gameBoardLabelOne = document.querySelector('.play1-display');
    let gameBoardLabelTwo = document.querySelector('.play2-display');
    let turnDisplay = document.querySelector('.turn-display');

    class Player {
        constructor(name,marker) {
            this.name = name;                    
            this.marker = marker;                    
        }
        getName(){
            return this.name
        }
    }

    
   // Play with Bot button event 
    _components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.vsBotBtn.onclick = () => {
        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.gameMode);
        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.elementAppear(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.playersData);
        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.player2);
        gameMode = true;
    }


    let playerOne = new Player('Leo', 'O')
    let playerTwo = new Player('Nikky', 'X'); 
      

    // Play two Player section
    _components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.vsTwoPlayers.onclick =  () =>{
        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.gameMode);
        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.elementAppear(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.playersData);
        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.elementAppear(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.player2);
        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.selectBotSection);      
   

        _components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.playerOneInput.onchange = (e) => {
            console.log(e.target.value)
            playerOne.name = e.target.value;        
           gameBoardLabelOne.textContent = playerOne.name;

        }    

        _components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.playerTwoInput.oninput = (e) => {
            playerTwo.name = e.target.value
           gameBoardLabelTwo.textContent = playerTwo.name;  
        }       
    }
  


    // ROunds variables and function

        let rounds = [];
        let noOfRound = undefined;

        function getRounds(){
            if(document.querySelector('.three-rounds').classList.contains('dgame-round')){
                return 3;
            }
            return 5;
        };



        // select round to play
    const allRounds = document.querySelectorAll('.roud')
    allRounds.forEach(round => {
        round.addEventListener('click', ()=>{
            removeClasses(round, allRounds, 'dgame-round');
        })
    }); 
   

    function createRoundsDivs(){
        noOfRound = getRounds();
        for (let  i = 1;  i < noOfRound + 1 ;  i++) {
            const div = document.createElement('div');
            div.className = `each-rounds round-${i}`;
            div.textContent = `Round: ${i}`
            const roundWinnerDisplay = document.createElement('div');
            roundWinnerDisplay.className = `each-round-winner round-${i}-Winner`;
            document.querySelector('.how-many-rounds').append(div);
            document.querySelector('.round-winner').append(roundWinnerDisplay);
        }            
    }
    // Rounds Logic ends here



    // start game btn
    const startGameBtn = document.getElementById('start-game');
    startGameBtn.onclick = (e) => {
        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.playersData); 
        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_components_gameTitle__WEBPACK_IMPORTED_MODULE_2__.gameTitle.gameName); 
        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.elementAppear(_index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.gameBoard);
        // ticTakToe.elementAppear(ticTakToe.gameOver);
        gameBoardLabelTwo.textContent = playerTwo.name;
        gameBoardLabelOne.textContent = playerOne.name;
        turnDisplay.textContent = `${gameBoardLabelOne.textContent}'s turn`;
        createRoundsDivs();
        selectRound('.round-1', 0)
    }


    const resetRound = () => document.querySelectorAll('.each-rounds').forEach(r => {
            r.style.backgroundColor = '';
            r.style.color = 'black';
        });
    

    const toggleRound = (klass, round) => { 
        resetRound(); selectRound(klass, round)
    }

    const changeRoundColor = (klass) => {
        let e = document.querySelector(klass);
        e.style.backgroundColor = '#5F4744';
        e.style.color = '#F4CDC8';
    }

    function selectRound(klass, roundNo){
        if(noOfRound === 3 && rounds.length === roundNo){
            changeRoundColor(klass);
        } else if(noOfRound === 5 && rounds.length === roundNo){
            changeRoundColor(klass);
        }       
    }


    // Select Bots
    const allBots = document.querySelectorAll('.ai');
    allBots.forEach(bot => {                 
        bot.addEventListener('click', ()=>{           
            removeClasses(bot, allBots, "ai-bot");               
        })       
    });



       
        
        var occurrence = function (array) {
            "use strict";
            let countedMark = array.reduce(function (allItems, mark) {
                if (mark in allItems) {
                    allItems[mark]++
                }
                else {
                    allItems[mark] = 1
                }
                return allItems
              }, {})

              return countedMark
        };


    // Game play Logic   
    const boxes = document.querySelectorAll('.grids');
    const winningDisplay = document.querySelector('.winningStatus');  
    const restartGameBtn = document.querySelector('.restart-btn');
    const newGameBtn = document.querySelector('.new-game-btn');

    const gameObj = {
        spaces: [],
        tick_circle: 'O',
        tick_x: 'X',
        currentPlayer: '',
    }



    let spaces = [];
    const tick_circle = "O";
    const tick_x = 'X';
    let currentPlayer = tick_circle;

    const drawBoard = () => {
        boxes.forEach((box) => {
            box.addEventListener('click', boxClicked)     
        });       
    }


    function displayGameWinner(winner){
        setTimeout(() => {
            _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.gameBoard);
            _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.elementAppear(_index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.gameOver);
            winningDisplay.innerText = `${ winner} has won!`;
        }, 1000);
    }

    

    function checkForWinner(arr){        
        let winner = occurrence(arr);               
        console.log(winner['O'] + 'player O')
        let x = winner.X
        let y = winner.O
        console.log((x > y));

        if(x > y){                  
            displayGameWinner(gameBoardLabelOne.textContent);
            return;
        } else{
            displayGameWinner(gameBoardLabelTwo.textContent);
            console.log(winner['X'] + 'Player X')
        }      
    }


    const boxClicked = (e) => {
        const id = e.target.id;
        console.log(id);
        if(!spaces[id]) {
            spaces[id] = currentPlayer;           
            e.target.innerText = currentPlayer;
            console.log(spaces);
            if(currentPlayer !== 'O'){
                turnDisplay.textContent = `${gameBoardLabelOne.textContent}'s turn` ;
            }else{
                turnDisplay.textContent = `${gameBoardLabelTwo.textContent}'s turn`;
            }

            noOfRound = getRounds();

            if(playerWon()) {                                         
                rounds.push(currentPlayer);
                console.log(rounds);
                // console.log(currentPlayer);   
              
               setTimeout( restart(), 3000); 
                // return;
            }
            
            if( (noOfRound === 3 || noOfRound === 5) &&  rounds.length === 1){
                toggleRound('.round-2', 1);                      
            }               
            
            if( (noOfRound === 3 || noOfRound === 5) &&  rounds.length === 2){
                toggleRound('.round-3', 2);                                    
            }

            if( (noOfRound === 3 ) &&  rounds.length === 3){
                toggleRound('.round-3', 3); 
                checkForWinner(rounds);                    
            }
           
            if( noOfRound === 5 && rounds.length === 3){
                toggleRound('.round-4', 3);
                          
            }

            if( (noOfRound === 5) &&  rounds.length === 4){
                toggleRound('.round-5', 4);                  
            }              

            if( (noOfRound === 5) &&  rounds.length === 5){
                toggleRound('.round-5', 5);
                checkForWinner(rounds);                  
            }              
      



            

            if(playerDraw()) {
                return;
            }
            currentPlayer = (currentPlayer === tick_circle) ? tick_x : tick_circle;
        }
    };
    
    const playerWon = () => {
        if (spaces[0] === currentPlayer) {
          if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins up to top`;
            return true;
          }
          if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins on the left`;
            return true;
          }
          if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins diagonally`;
            return true;
          }
        }
        if (spaces[8] === currentPlayer) {
          if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins on the right`;
            return true;
          }
          if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins on the bottom`;
            return true;
          }
        }
        if (spaces[4] === currentPlayer) {
          if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins vertically on middle`;
            return true;
          }
          if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins horizontally on the middle`;
            return true;
          }
          if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
            winningDisplay.innerText = `${currentPlayer} wins diagonally`;
            return true;
          }
        }
      };

      const playerDraw = () => {
        let draw = 0;
        spaces.forEach((space, i) => {
          if (spaces[i] !== null) draw++;
        });
        if (draw === 9) {
          winningDisplay.innerText = `Draw`; // the logic for draw display will be here;
          restart();
        }
      };

      const restart = () => {
        setTimeout(() => {
          spaces.forEach((space, i) => {
            spaces[i] = null;
          });
          boxes.forEach((box) => {
            box.innerText = '';
          });
          winningDisplay.innerText = ``;
          _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.elementAppear(_index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.gameBoard);
          _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.gameOver);
        }, 1000);
      };

      function restartGame(){
        restart();
        noOfRound = getRounds();
        rounds = [];
        toggleRound('.round-1', 0)
      }

      restartGameBtn.addEventListener('click', restartGame);     
      drawBoard();


})()




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ticTakToe": () => (/* binding */ ticTakToe)
/* harmony export */ });
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_gameBoard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/gameBoard.css */ "./src/css/gameBoard.css");
/* harmony import */ var _css_gameOver_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/gameOver.css */ "./src/css/gameOver.css");
/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameLogic */ "./src/gameLogic.js");
/* harmony import */ var _components_gameTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/gameTitle */ "./src/components/gameTitle.js");
/* harmony import */ var _components_selectPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/selectPlayer */ "./src/components/selectPlayer.js");








// Sections
const ticTakToe = (function(){
        // Game Board
    const gameBoard = document.querySelector('.gameboard');
    const gameBoardLabel = document.querySelector('.game-vs-label');
    const gameOver = document.querySelector('.game-over');
              
    // Grab number of Rounds to be played & Start game btn
    const threeRounds = document.querySelector('.three-rounds');
    const fiveRounds = document.querySelector('.five-rounds');
    
    const startGameBtn = document.getElementById('start-game');

    
    // Function to hide & show section
        // Function to hide section
        function hideElement(elem){
            elem.classList.add('hide');
        }
        // Function to show section
        function elementAppear(tag){
            tag.classList.remove('hide');
        }
   
    return {hideElement, elementAppear, startGameBtn, threeRounds,
        fiveRounds, gameBoard, gameOver, gameBoardLabel
        }

})()



  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0k7QUFDRDtBQUNZO0FBQ1c7QUFDTTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNrQjtBQUNsQjtBQUNBOzs7Ozs7VUN4Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWstdGFrLXRvZS8uL3NyYy9jc3MvZ2FtZUJvYXJkLmNzcyIsIndlYnBhY2s6Ly90aWstdGFrLXRvZS8uL3NyYy9jc3MvZ2FtZU92ZXIuY3NzIiwid2VicGFjazovL3Rpay10YWstdG9lLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGlrLXRhay10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Rpay10YWstdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGlrLXRhay10b2UvLi9zcmMvY3NzL2dhbWVCb2FyZC5jc3M/ZGRjOSIsIndlYnBhY2s6Ly90aWstdGFrLXRvZS8uL3NyYy9jc3MvZ2FtZU92ZXIuY3NzP2M0NjAiLCJ3ZWJwYWNrOi8vdGlrLXRhay10b2UvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3Rpay10YWstdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Rpay10YWstdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aWstdGFrLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aWstdGFrLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aWstdGFrLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rpay10YWstdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGlrLXRhay10b2UvLi9zcmMvY29tcG9uZW50cy9nYW1lVGl0bGUuanMiLCJ3ZWJwYWNrOi8vdGlrLXRhay10b2UvLi9zcmMvY29tcG9uZW50cy9zZWxlY3RQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGlrLXRhay10b2UvLi9zcmMvZ2FtZUxvZ2ljLmpzIiwid2VicGFjazovL3Rpay10YWstdG9lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Rpay10YWstdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rpay10YWstdG9lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Rpay10YWstdG9lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aWstdGFrLXRvZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rpay10YWstdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGlrLXRhay10b2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90aWstdGFrLXRvZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGlrLXRhay10b2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWNtZSZmYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMjAwOzMwMDs3MDAmZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuOnJvb3R7XFxyXFxuLS1tYWluQ29sb3I6IHJnYig1OCwgMjUsIDU4KTtcXHJcXG4tLW1haW5Db2xvcjE6IHJnYig3NCwgNywgMTM2KTtcXHJcXG4tLXBlYWNoRGFya2VzdDogIzE4MTIxMTtcXHJcXG4tLXBlYWNoTGk6ICNFRkI2QUY7XFxyXFxuLS1wZWFjaERhcms6ICM1RjQ3NDQ7XFxyXFxuLS1wZWFjaExpZ2h0RGFyazogI0E3N0Q3ODtcXHJcXG4tLXBlYWNoTGlnaHQ6ICNGNENEQzg7XFxyXFxuLS1wZWFjaExpZ2h0ZXI6ICNGOUU0RTI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5nYW1lYm9hcmR7XFxyXFxuICAgIC8qIGJvcmRlcjogIDJweCBzb2xpZCB2YXIoLS1wZWFjaERhcmtlc3QpOyAqL1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4OyAgIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS12cy1sYWJlbHsgICBcXHJcXG4gICAgbWluLXdpZHRoOiAzOTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDsgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXBlYWNoRGFya2VzdCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCB2YXIoLS1wZWFjaERhcmtlc3QpO1xcclxcbiAgICBmb250LWZhbWlseTogam9zZWZpbiBzYW5zLCBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucGxheTEtZGlzcGxheSwucGxheTItZGlzcGxheXtcXHJcXG4gICAgbWluLXdpZHRoOiAxODBweDsgICAgXFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXkxLWRpc3BsYXl7ICBcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wbGF5Mi1kaXNwbGF5eyAgXFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnR1cm4tZGlzcGxheXtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tcGVhY2hEYXJrZXN0KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IGpvc2VmaW4gc2FucywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtZ3JpZHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzOTBweDtcXHJcXG4gICAgd2lkdGg6IDM5MHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZHN7XFxyXFxuICAgIGhlaWdodDogMTMwcHg7XFxyXFxuICAgIHdpZHRoOiAxMzBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGVhY2hEYXJrZXN0KTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcGVhY2hEYXJrKTtcXHJcXG4gICAgYm94LXNoYWRvdzogNHB4IDVweCAtNXB4IDRweCByZ2JhKDAsMCwwLDAuNik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDgwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBqb3NlZmluIHNhbnM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wZWFjaExpZ2h0ZXIpO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogNHB4IDRweCAycHggdmFyKC0tcGVhY2hEYXJrZXN0KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1ib2FyZC1yb3VuZHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWJvYXJkLXJvdW5kcz5we1xcclxcbmNvbG9yOiB2YXIoLS1wZWFjaERhcmtlc3QpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5ob3ctbWFueS1yb3VuZHMsLnJvdW5kLXdpbm5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDsgICAgXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucm91bmQtd2lubmVye1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5lYWNoLXJvdW5kcywuZWFjaC1yb3VuZC13aW5uZXJ7XFxyXFxuICAgIG1pbi13aWR0aDogOTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wZWFjaERhcmtlc3QpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBqb3NlZmluICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBqb3NlZmluIHNhbnM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLXJvdW5kc3tcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5lYWNoLXJvdW5kLXdpbm5lcntcXHJcXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBlYWNoRGFyayk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZ2FtZUJvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBSUE7QUFDQSw0QkFBNEI7QUFDNUIsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCOzs7O0FBSUE7SUFDSSw0Q0FBNEM7SUFDNUMsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsbUVBQW1FO0FBQ3ZFOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixtRUFBbUU7QUFDdkU7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLDRCQUE0QjtJQUM1Qiw0Q0FBNEM7SUFDNUMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLDRDQUE0QztJQUM1QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxRkFBcUY7SUFDckYseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0NBQWtDO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFjbWUmZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDIwMDszMDA7NzAwJmZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcblxcclxcbjpyb290e1xcclxcbi0tbWFpbkNvbG9yOiByZ2IoNTgsIDI1LCA1OCk7XFxyXFxuLS1tYWluQ29sb3IxOiByZ2IoNzQsIDcsIDEzNik7XFxyXFxuLS1wZWFjaERhcmtlc3Q6ICMxODEyMTE7XFxyXFxuLS1wZWFjaExpOiAjRUZCNkFGO1xcclxcbi0tcGVhY2hEYXJrOiAjNUY0NzQ0O1xcclxcbi0tcGVhY2hMaWdodERhcms6ICNBNzdENzg7XFxyXFxuLS1wZWFjaExpZ2h0OiAjRjRDREM4O1xcclxcbi0tcGVhY2hMaWdodGVyOiAjRjlFNEUyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uZ2FtZWJvYXJke1xcclxcbiAgICAvKiBib3JkZXI6ICAycHggc29saWQgdmFyKC0tcGVhY2hEYXJrZXN0KTsgKi9cXHJcXG4gICAgaGVpZ2h0OiA2MDBweDsgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtdnMtbGFiZWx7ICAgXFxyXFxuICAgIG1pbi13aWR0aDogMzkwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7ICAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wZWFjaERhcmtlc3QpO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggdmFyKC0tcGVhY2hEYXJrZXN0KTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGpvc2VmaW4gc2FucywgR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnBsYXkxLWRpc3BsYXksLnBsYXkyLWRpc3BsYXl7XFxyXFxuICAgIG1pbi13aWR0aDogMTgwcHg7ICAgIFxcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5wbGF5MS1kaXNwbGF5eyAgXFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheTItZGlzcGxheXsgIFxcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50dXJuLWRpc3BsYXl7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXBlYWNoRGFya2VzdCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7ICAgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBqb3NlZmluIHNhbnMsIEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLWdyaWR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMzkwcHg7XFxyXFxuICAgIHdpZHRoOiAzOTBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRze1xcclxcbiAgICBoZWlnaHQ6IDEzMHB4O1xcclxcbiAgICB3aWR0aDogMTMwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBlYWNoRGFya2VzdCk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXBlYWNoRGFyayk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDRweCA1cHggLTVweCA0cHggcmdiYSgwLDAsMCwwLjYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcclxcbiAgICBmb250LWZhbWlseTogam9zZWZpbiBzYW5zO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcGVhY2hMaWdodGVyKTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMnB4IHZhcigtLXBlYWNoRGFya2VzdCk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtYm9hcmQtcm91bmRze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1ib2FyZC1yb3VuZHM+cHtcXHJcXG5jb2xvcjogdmFyKC0tcGVhY2hEYXJrZXN0KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaG93LW1hbnktcm91bmRzLC5yb3VuZC13aW5uZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdW5kLXdpbm5lcntcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZWFjaC1yb3VuZHMsLmVhY2gtcm91bmQtd2lubmVye1xcclxcbiAgICBtaW4td2lkdGg6IDkwcHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGVhY2hEYXJrZXN0KTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBmb250LWZhbWlseTogam9zZWZpbiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LWZhbWlseTogam9zZWZpbiBzYW5zO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1yb3VuZHN7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uZWFjaC1yb3VuZC13aW5uZXJ7XFxyXFxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wZWFjaERhcmspO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG46cm9vdHtcXHJcXG4gICAgLS1tYWluQ29sb3I6IHJnYig1OCwgMjUsIDU4KTtcXHJcXG4gICAgLS1tYWluQ29sb3IxOiByZ2IoNzQsIDcsIDEzNik7XFxyXFxuICAgIC0tcGVhY2hEYXJrZXN0OiAjMTgxMjExO1xcclxcbiAgICAtLXBlYWNoTGk6ICNFRkI2QUY7XFxyXFxuICAgIC0tcGVhY2hEYXJrOiAjNUY0NzQ0O1xcclxcbiAgICAtLXBlYWNoTGlnaHREYXJrOiAjQTc3RDc4O1xcclxcbiAgICAtLXBlYWNoTGlnaHQ6ICNGNENEQzg7XFxyXFxuICAgIC0tcGVhY2hMaWdodGVyOiAjRjlFNEUyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuLmdhbWUtb3ZlcntcXHJcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW47ICovXFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1vdmVyIGRpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuOyAqL1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogam9zZWZpbiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXIgaDMsIC5nYW1lLW92ZXIgaDJ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wZWFjaERhcmtlc3QpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1vdmVyIGJ1dHRvbntcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcGVhY2hEYXJrZXN0KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXBlYWNoTGkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2dhbWVPdmVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCOzs7QUFHSjtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixnSkFBZ0o7O0FBRXBKOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbjpyb290e1xcclxcbiAgICAtLW1haW5Db2xvcjogcmdiKDU4LCAyNSwgNTgpO1xcclxcbiAgICAtLW1haW5Db2xvcjE6IHJnYig3NCwgNywgMTM2KTtcXHJcXG4gICAgLS1wZWFjaERhcmtlc3Q6ICMxODEyMTE7XFxyXFxuICAgIC0tcGVhY2hMaTogI0VGQjZBRjtcXHJcXG4gICAgLS1wZWFjaERhcms6ICM1RjQ3NDQ7XFxyXFxuICAgIC0tcGVhY2hMaWdodERhcms6ICNBNzdENzg7XFxyXFxuICAgIC0tcGVhY2hMaWdodDogI0Y0Q0RDODtcXHJcXG4gICAgLS1wZWFjaExpZ2h0ZXI6ICNGOUU0RTI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4uZ2FtZS1vdmVye1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbjsgKi9cXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXIgZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW47ICovXFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBqb3NlZmluIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtb3ZlciBoMywgLmdhbWUtb3ZlciBoMntcXHJcXG4gICAgY29sb3I6IHZhcigtLXBlYWNoRGFya2VzdCk7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXIgYnV0dG9ue1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wZWFjaERhcmtlc3QpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcGVhY2hMaSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFjbWUmZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDIwMDszMDA7NzAwJmZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcclxcbi0tbWFpbkNvbG9yOiByZ2IoNTgsIDI1LCA1OCk7XFxyXFxuLS1tYWluQ29sb3IxOiByZ2IoNzQsIDcsIDEzNik7XFxyXFxuLS1wZWFjaERhcmtlc3Q6ICMxODEyMTE7XFxyXFxuLS1wZWFjaExpOiAjRUZCNkFGO1xcclxcbi0tcGVhY2hEYXJrOiAjNUY0NzQ0O1xcclxcbi0tcGVhY2hMaWdodERhcms6ICNBNzdENzg7XFxyXFxuLS1wZWFjaExpZ2h0OiAjRjRDREM4O1xcclxcbi0tcGVhY2hMaWdodGVyOiAjRjlFNEUyO1xcclxcbn1cXHJcXG5cXHJcXG4qe1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogUGFnZSAxICovXFxyXFxuXFxyXFxuLmdhbWUtbmFtZXtcXHJcXG4gICAgY29sb3I6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXBlYWNoRGFya2VzdCksIHZhcigtLXBlYWNoRGFyaykpO1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAgICovXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGFjbWU7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG5zdmcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgZm9udDogMi4wZW0gJ01vbnRzZXJyYXQnO1xcclxcbiAgICB3aWR0aDogNzYwcHg7XFxyXFxuICAgIGhlaWdodDogMTQwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wZWFjaERhcmtlc3QpOyBcXHJcXG59IFxcclxcblxcclxcbi50ZXh0LWNvcHkge1xcclxcbiAgICBmaWxsOiBub25lO1xcclxcbiAgICBzdHJva2U6IHdoaXRlO1xcclxcbiAgICBzdHJva2UtZGFzaGFycmF5OiA2JSAyOSU7XFxyXFxuICAgIHN0cm9rZS13aWR0aDogNXB4O1xcclxcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMCU7XFxyXFxuICAgIGFuaW1hdGlvbjogc3Ryb2tlLW9mZnNldCA1LjVzIGluZmluaXRlIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY29weTpudGgtY2hpbGQoMSl7XFxyXFxuXFx0c3Ryb2tlOiAjNEQxNjNEO1xcclxcblxcdGFuaW1hdGlvbi1kZWxheTogLTE7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvcHk6bnRoLWNoaWxkKDIpe1xcclxcblxcdHN0cm9rZTogdmFyKC0tcGVhY2hMaSk7XFxyXFxuXFx0YW5pbWF0aW9uLWRlbGF5OiAtMnM7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvcHk6bnRoLWNoaWxkKDMpe1xcclxcblxcdHN0cm9rZTogdmFyKC0tcGVhY2hMaWdodCk7XFxyXFxuXFx0YW5pbWF0aW9uLWRlbGF5OiAtM3M7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvcHk6bnRoLWNoaWxkKDQpe1xcclxcblxcdHN0cm9rZTogdmFyKC0tcGVhY2hMaWdodERhcmspO1xcclxcblxcdGFuaW1hdGlvbi1kZWxheTogLTRzO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb3B5Om50aC1jaGlsZCg1KXtcXHJcXG5cXHRzdHJva2U6IHZhcigtLXBlYWNoTGlnaHRlcik7XFxyXFxuXFx0YW5pbWF0aW9uLWRlbGF5OiAtNXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc3Ryb2tlLW9mZnNldHtcXHJcXG5cXHQxMDAlIHtzdHJva2UtZGFzaG9mZnNldDogLTM1JTt9XFxyXFxufVxcclxcblxcclxcblxcclxcbi5oaWRle1xcclxcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jaG9vc2UtcGxheWVye1xcclxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5kaXNwbGF5OiBmbGV4O1xcclxcbnBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5hbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxudG9wOiAyMDBweDtcXHJcXG5oZWlnaHQ6IDEwMHB4O1xcclxcbndpZHRoOiA1NDBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNob29zZS1wbGF5ZXIgYnV0dG9uLFxcclxcbi50aHJlZS1yb3VuZHMsXFxyXFxuLmZpdmUtcm91bmRzLFxcclxcbi5zdGFydC1nYW1le1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLXBlYWNoRGFya2VzdCksIHZhcigtLXBlYWNoRGFyaykpO1xcclxcbiAgICBib3JkZXI6IDBweCBzb2xpZCB2YXIoLS1wZWFjaERhcmtlc3QpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBqb3NlZmluIHNhbnM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnBsYXllci1uYW1le1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiKDI2LCAxMjIsIDg1KTsgKi9cXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnBsYXllci1vbmUgbGFiZWwsXFxyXFxuLnBsYXllci10d28gbGFiZWwsXFxyXFxuLnBsYXllci1zZWxlY3Q+cCxcXHJcXG4uYm90cy1ib3g+cCxcXHJcXG4uZWFzeS1ib3RzPnAsXFxyXFxuLmRpZmZpY3VsdC1ib3RzPnAsXFxyXFxuLmdhbWUtYm9hcmQtcm91bmRzPnAsXFxyXFxuLnRvbSxcXHJcXG4ubWlrZSxcXHJcXG4uY2FsZWIsXFxyXFxuLmx1aXtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgICBmb250LWZhbWlseTogam9zZWZpbiBzYW5zO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wZWFjaExpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvbSxcXHJcXG4ubWlrZSxcXHJcXG4uY2FsZWIsXFxyXFxuLmx1aXtcXHJcXG4gICAgY29sb3I6IHZhcigtLXBlYWNoRGFya2VzdCkgIWltcG9ydGFudDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFpLWJvdHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVhY2hEYXJrKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLXNlbGVjdCBwe1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNwbGF5ZXItMixcXHJcXG4jcGxheWVyLTF7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBlYWNoTGlnaHQpO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgIHBhZGRpbmc6IDAuNnJlbSAxLjJyZW07XFxyXFxuICAgY29sb3I6IHZhcigtLXBlYWNoTGlnaHQpO1xcclxcbiAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5kZWZhdWx0LWlucHV0OjphZnRlciwuZGVmYXVsdC1pbnB1dDE6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnU3RhcnQgZ2FtZSB3aXRoIGRlZmF1bHQgbmFtZTogTGVvJztcXHJcXG4gICAgY29sb3I6dmFyKC0tcGVhY2hMaWdodGVyKTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgIGZvbnQtZmFtaWx5OiBqb3NlZmluIHNhbnM7XFxyXFxuICAgbWFyZ2luLWxlZnQ6IDU1cHg7XFxyXFxufVxcclxcbi5kZWZhdWx0LWlucHV0MTo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6ICdTdGFydCBnYW1lIHdpdGggZGVmYXVsdCBuYW1lOiBOaWtreSc7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXItc2VsZWN0e1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wZWFjaERhcmtlc3QpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmJvdHMtYm94e1xcclxcbmhlaWdodDogMTAwJTtcXHJcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wZWFjaExpZ2h0KTtcXHJcXG5tYXJnaW4tdG9wOiAxMHB4O1xcclxcbmJvcmRlci1yYWRpdXM6IDVweDsgXFxyXFxufVxcclxcblxcclxcbi5ib3R7XFxyXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1wZWFjaExpZ2h0KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDsgICAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmVhc3ktYm90cyxcXHJcXG4uZGlmZmljdWx0LWJvdHN7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgZmxleDogMSAwIGF1dG87ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uZWFzeS1ib3Qtb25lLWFuZC10d28sXFxyXFxuLmRpZmZpY3VsdC1ib3Qtb25lLWFuZC10d297XFxyXFxuaGVpZ2h0OiA1MHB4O1xcclxcbndpZHRoOiAxMDAlO1xcclxcbm1hcmdpbi10b3A6IDBweDtcXHJcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wZWFjaExpZ2h0KTtcXHJcXG5kaXNwbGF5OiBmbGV4O1xcclxcbmJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZWFzeS1ib3QsXFxyXFxuLmRpZmZpY3VsdC1ib3R7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVhY2hMaWdodCk7XFxyXFxufVxcclxcblxcclxcbi8qIFNvbWUgcm91bmRzIGNvZGVzIGFyZSB1cCAqL1xcclxcbi50aHJlZS1yb3VuZHMsXFxyXFxuLmZpdmUtcm91bmRze1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wZWFjaExpZ2h0ZXIpO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wZWFjaERhcmspICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXBlYWNoRGFya2VzdCk7XFxyXFxufVxcclxcblxcclxcbi5kZ2FtZS1yb3VuZHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVhY2hEYXJrKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtBQUNBLDRCQUE0QjtBQUM1Qiw2QkFBNkI7QUFDN0IsdUJBQXVCO0FBQ3ZCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7O0FBR0EsV0FBVzs7QUFFWDtJQUNJLHFFQUFxRTtJQUNyRSw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsNkNBQTZDO0FBQ2pEOztBQUVBO0NBQ0MsZUFBZTtDQUNmLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxNQUFNLHVCQUF1QixDQUFDO0FBQy9COzs7QUFHQTtJQUNJLHdCQUF3QjtBQUM1Qjs7O0FBR0E7QUFDQSxrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLFVBQVU7QUFDVixhQUFhO0FBQ2IsWUFBWTs7QUFFWjs7QUFFQTs7OztJQUlJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHlFQUF5RTtJQUN6RSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7Ozs7O0FBS0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsd0NBQXdDO0lBQ3hDLGdCQUFnQjtBQUNwQjs7O0FBR0E7Ozs7Ozs7Ozs7O0lBV0ksMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtBQUM1Qjs7O0FBR0E7Ozs7SUFJSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osYUFBYTtHQUNkLGtCQUFrQjtHQUNsQixzQkFBc0I7R0FDdEIsd0JBQXdCO0dBQ3hCLGdCQUFnQjtHQUNoQixpQkFBaUI7SUFDaEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMseUJBQXlCO0lBQ3pCLGVBQWU7R0FDaEIseUJBQXlCO0dBQ3pCLGlCQUFpQjtBQUNwQjtBQUNBO0lBQ0ksOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7OztBQUlBO0FBQ0EsWUFBWTtBQUNaLG1DQUFtQztBQUNuQyxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7O0FBRUEsWUFBWTtBQUNaLFdBQVc7QUFDWCxlQUFlO0FBQ2YsbUNBQW1DO0FBQ25DLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25COztBQUVBOztJQUVJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUEsNkJBQTZCO0FBQzdCOztJQUVJLCtCQUErQjtJQUMvQiw2Q0FBNkM7SUFDN0MsOEJBQThCO0lBQzlCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BY21lJmZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAyMDA7MzAwOzcwMCZmYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4tLW1haW5Db2xvcjogcmdiKDU4LCAyNSwgNTgpO1xcclxcbi0tbWFpbkNvbG9yMTogcmdiKDc0LCA3LCAxMzYpO1xcclxcbi0tcGVhY2hEYXJrZXN0OiAjMTgxMjExO1xcclxcbi0tcGVhY2hMaTogI0VGQjZBRjtcXHJcXG4tLXBlYWNoRGFyazogIzVGNDc0NDtcXHJcXG4tLXBlYWNoTGlnaHREYXJrOiAjQTc3RDc4O1xcclxcbi0tcGVhY2hMaWdodDogI0Y0Q0RDODtcXHJcXG4tLXBlYWNoTGlnaHRlcjogI0Y5RTRFMjtcXHJcXG59XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFBhZ2UgMSAqL1xcclxcblxcclxcbi5nYW1lLW5hbWV7XFxyXFxuICAgIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1wZWFjaERhcmtlc3QpLCB2YXIoLS1wZWFjaERhcmspKTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgICAqL1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBhY21lOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuc3ZnIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGZvbnQ6IDIuMGVtICdNb250c2VycmF0JztcXHJcXG4gICAgd2lkdGg6IDc2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDE0MHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcGVhY2hEYXJrZXN0KTsgXFxyXFxufSBcXHJcXG5cXHJcXG4udGV4dC1jb3B5IHtcXHJcXG4gICAgZmlsbDogbm9uZTtcXHJcXG4gICAgc3Ryb2tlOiB3aGl0ZTtcXHJcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNiUgMjklO1xcclxcbiAgICBzdHJva2Utd2lkdGg6IDVweDtcXHJcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDAlO1xcclxcbiAgICBhbmltYXRpb246IHN0cm9rZS1vZmZzZXQgNS41cyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvcHk6bnRoLWNoaWxkKDEpe1xcclxcblxcdHN0cm9rZTogIzREMTYzRDtcXHJcXG5cXHRhbmltYXRpb24tZGVsYXk6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb3B5Om50aC1jaGlsZCgyKXtcXHJcXG5cXHRzdHJva2U6IHZhcigtLXBlYWNoTGkpO1xcclxcblxcdGFuaW1hdGlvbi1kZWxheTogLTJzO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb3B5Om50aC1jaGlsZCgzKXtcXHJcXG5cXHRzdHJva2U6IHZhcigtLXBlYWNoTGlnaHQpO1xcclxcblxcdGFuaW1hdGlvbi1kZWxheTogLTNzO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb3B5Om50aC1jaGlsZCg0KXtcXHJcXG5cXHRzdHJva2U6IHZhcigtLXBlYWNoTGlnaHREYXJrKTtcXHJcXG5cXHRhbmltYXRpb24tZGVsYXk6IC00cztcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY29weTpudGgtY2hpbGQoNSl7XFxyXFxuXFx0c3Ryb2tlOiB2YXIoLS1wZWFjaExpZ2h0ZXIpO1xcclxcblxcdGFuaW1hdGlvbi1kZWxheTogLTVzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHN0cm9rZS1vZmZzZXR7XFxyXFxuXFx0MTAwJSB7c3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNSU7fVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uaGlkZXtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY2hvb3NlLXBsYXllcntcXHJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuZGlzcGxheTogZmxleDtcXHJcXG5wbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbnRvcDogMjAwcHg7XFxyXFxuaGVpZ2h0OiAxMDBweDtcXHJcXG53aWR0aDogNTQwcHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jaG9vc2UtcGxheWVyIGJ1dHRvbixcXHJcXG4udGhyZWUtcm91bmRzLFxcclxcbi5maXZlLXJvdW5kcyxcXHJcXG4uc3RhcnQtZ2FtZXtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1wZWFjaERhcmtlc3QpLCB2YXIoLS1wZWFjaERhcmspKTtcXHJcXG4gICAgYm9yZGVyOiAwcHggc29saWQgdmFyKC0tcGVhY2hEYXJrZXN0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7IFxcclxcbiAgICBmb250LWZhbWlseTogam9zZWZpbiBzYW5zO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5wbGF5ZXItbmFtZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNiwgMTIyLCA4NSk7ICovXFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wbGF5ZXItb25lIGxhYmVsLFxcclxcbi5wbGF5ZXItdHdvIGxhYmVsLFxcclxcbi5wbGF5ZXItc2VsZWN0PnAsXFxyXFxuLmJvdHMtYm94PnAsXFxyXFxuLmVhc3ktYm90cz5wLFxcclxcbi5kaWZmaWN1bHQtYm90cz5wLFxcclxcbi5nYW1lLWJvYXJkLXJvdW5kcz5wLFxcclxcbi50b20sXFxyXFxuLm1pa2UsXFxyXFxuLmNhbGViLFxcclxcbi5sdWl7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6IGpvc2VmaW4gc2FucztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tcGVhY2hMaWdodCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50b20sXFxyXFxuLm1pa2UsXFxyXFxuLmNhbGViLFxcclxcbi5sdWl7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wZWFjaERhcmtlc3QpICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5haS1ib3R7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBlYWNoRGFyaykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1zZWxlY3QgcHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcGxheWVyLTIsXFxyXFxuI3BsYXllci0xe1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wZWFjaExpZ2h0KTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICBwYWRkaW5nOiAwLjZyZW0gMS4ycmVtO1xcclxcbiAgIGNvbG9yOiB2YXIoLS1wZWFjaExpZ2h0KTtcXHJcXG4gICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVmYXVsdC1pbnB1dDo6YWZ0ZXIsLmRlZmF1bHQtaW5wdXQxOjphZnRlcntcXHJcXG4gICAgY29udGVudDogJ1N0YXJ0IGdhbWUgd2l0aCBkZWZhdWx0IG5hbWU6IExlbyc7XFxyXFxuICAgIGNvbG9yOnZhcigtLXBlYWNoTGlnaHRlcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICBmb250LWZhbWlseTogam9zZWZpbiBzYW5zO1xcclxcbiAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xcclxcbn1cXHJcXG4uZGVmYXVsdC1pbnB1dDE6OmFmdGVye1xcclxcbiAgICBjb250ZW50OiAnU3RhcnQgZ2FtZSB3aXRoIGRlZmF1bHQgbmFtZTogTmlra3knO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheWVyLXNlbGVjdHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcGVhY2hEYXJrZXN0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5ib3RzLWJveHtcXHJcXG5oZWlnaHQ6IDEwMCU7XFxyXFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGVhY2hMaWdodCk7XFxyXFxubWFyZ2luLXRvcDogMTBweDtcXHJcXG5ib3JkZXItcmFkaXVzOiA1cHg7IFxcclxcbn1cXHJcXG5cXHJcXG4uYm90e1xcclxcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcGVhY2hMaWdodCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7ICAgICAgXFxyXFxufVxcclxcblxcclxcbi5lYXN5LWJvdHMsXFxyXFxuLmRpZmZpY3VsdC1ib3Rze1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIGZsZXg6IDEgMCBhdXRvOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmVhc3ktYm90LW9uZS1hbmQtdHdvLFxcclxcbi5kaWZmaWN1bHQtYm90LW9uZS1hbmQtdHdve1xcclxcbmhlaWdodDogNTBweDtcXHJcXG53aWR0aDogMTAwJTtcXHJcXG5tYXJnaW4tdG9wOiAwcHg7XFxyXFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGVhY2hMaWdodCk7XFxyXFxuZGlzcGxheTogZmxleDtcXHJcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVhc3ktYm90LFxcclxcbi5kaWZmaWN1bHQtYm90e1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBlYWNoTGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTb21lIHJvdW5kcyBjb2RlcyBhcmUgdXAgKi9cXHJcXG4udGhyZWUtcm91bmRzLFxcclxcbi5maXZlLXJvdW5kc3tcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcGVhY2hMaWdodGVyKTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tcGVhY2hEYXJrKSAhaW1wb3J0YW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wZWFjaERhcmtlc3QpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGdhbWUtcm91bmR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBlYWNoRGFyaykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lQm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lQm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVPdmVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZU92ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxyXG4gIGNvbnN0IGdhbWVUaXRsZSA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBnYW1lTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1uYW1lXCIpO1xyXG4gICAgY29uc29sZS5sb2coJ0kgYW0gdGhlIFRpdGxlJylcclxuXHJcblxyXG4gICAgcmV0dXJuIHsgZ2FtZU5hbWUgfVxyXG4gIH0pKClcclxuICBcclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gIGV4cG9ydCB7IGdhbWVUaXRsZSB9IiwiXHJcblxyXG5cclxuXHJcbmNvbnN0IHNlbGVjdFBsYXllciA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZ2FtZU1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob29zZS1wbGF5ZXJcIik7XHJcbiAgICBjb25zdCB2c0JvdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2cy1ib3QnKTtcclxuICAgIFxyXG4gICAgY29uc3QgcGxheWVyc0RhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1uYW1lXCIpO1xyXG5cclxuICAgIGNvbnN0IHBsYXllck9uZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci0xJyk7XHJcbiAgIFxyXG4gICAgY29uc3QgcGxheWVyVHdvSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLTInKTtcclxuICAgIFxyXG4gICBcclxuICAgIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci10d29cIik7XHJcbiAgICBjb25zdCB2c1R3b1BsYXllcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndnMtcGxheWVyLXR3bycpO1xyXG5cclxuICAgIGNvbnN0IHNlbGVjdEJvdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdHMtYm94XCIpO1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHsgZ2FtZU1vZGUsIHZzQm90QnRuLCBwbGF5ZXJzRGF0YSwgcGxheWVyT25lSW5wdXQsIHBsYXllclR3b0lucHV0LCBwbGF5ZXIyLCBzZWxlY3RCb3RTZWN0aW9uLCB2c1R3b1BsYXllcnMgfVxyXG5cclxufSkoKVxyXG5cclxuXHJcbmV4cG9ydCB7IHNlbGVjdFBsYXllciB9IiwiaW1wb3J0IHt0aWNUYWtUb2UgfSBmcm9tIFwiLi9pbmRleFwiXHJcbmltcG9ydCB7IHNlbGVjdFBsYXllciB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VsZWN0UGxheWVyXCI7XHJcbmltcG9ydCB7IGdhbWVUaXRsZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZ2FtZVRpdGxlXCI7XHJcblxyXG5cclxuLy8gUGxheWVyIHR3byBhbmQgQm90XHJcblxyXG5jb25zdCBnYW1lTG9naWMgPSAoZnVuY3Rpb24oKXtcclxuIFxyXG4gICAgd2luZG93Lm9ubG9hZCA9ICgpID0+e1xyXG4gICAgICAgIHRpY1Rha1RvZS5oaWRlRWxlbWVudChzZWxlY3RQbGF5ZXIucGxheWVyc0RhdGEpOyAgICAgIFxyXG4gICAgICAgIHRpY1Rha1RvZS5oaWRlRWxlbWVudCh0aWNUYWtUb2UuZ2FtZU92ZXIpICAgICAgICBcclxuICAgICAgICB0aWNUYWtUb2UuaGlkZUVsZW1lbnQodGljVGFrVG9lLmdhbWVCb2FyZCkgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgY29uc3QgcmVtb3ZlQ2xhc3NlcyA9ICh0YXJnZXQsIGFyciwgY2xhc3NOYW1lKSA9PiBhcnIuZm9yRWFjaCgoYm90KSA9PiBcclxuICAgIChib3QgPT0gdGFyZ2V0KSA/IGJvdC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBib3QuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpKTtcclxuICAgICAgXHJcbiAgICBjb25zdCByYW5kb21NYXJrZXIgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgPiA1ID8gJ1gnIDogJ08nOyAgXHJcblxyXG4gICAgLy8gbGV0IGdhbWVCb2FyZExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtdnMtbGFiZWwnKTtcclxuICAgIGxldCBnYW1lQm9hcmRMYWJlbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5MS1kaXNwbGF5Jyk7XHJcbiAgICBsZXQgZ2FtZUJvYXJkTGFiZWxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheTItZGlzcGxheScpO1xyXG4gICAgbGV0IHR1cm5EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR1cm4tZGlzcGxheScpO1xyXG5cclxuICAgIGNsYXNzIFBsYXllciB7XHJcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSxtYXJrZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm1hcmtlciA9IG1hcmtlcjsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXROYW1lKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgIC8vIFBsYXkgd2l0aCBCb3QgYnV0dG9uIGV2ZW50IFxyXG4gICAgc2VsZWN0UGxheWVyLnZzQm90QnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGljVGFrVG9lLmhpZGVFbGVtZW50KHNlbGVjdFBsYXllci5nYW1lTW9kZSk7XHJcbiAgICAgICAgdGljVGFrVG9lLmVsZW1lbnRBcHBlYXIoc2VsZWN0UGxheWVyLnBsYXllcnNEYXRhKTtcclxuICAgICAgICB0aWNUYWtUb2UuaGlkZUVsZW1lbnQoc2VsZWN0UGxheWVyLnBsYXllcjIpO1xyXG4gICAgICAgIGdhbWVNb2RlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGV0IHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoJ0xlbycsICdPJylcclxuICAgIGxldCBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKCdOaWtreScsICdYJyk7IFxyXG4gICAgICBcclxuXHJcbiAgICAvLyBQbGF5IHR3byBQbGF5ZXIgc2VjdGlvblxyXG4gICAgc2VsZWN0UGxheWVyLnZzVHdvUGxheWVycy5vbmNsaWNrID0gICgpID0+e1xyXG4gICAgICAgIHRpY1Rha1RvZS5oaWRlRWxlbWVudChzZWxlY3RQbGF5ZXIuZ2FtZU1vZGUpO1xyXG4gICAgICAgIHRpY1Rha1RvZS5lbGVtZW50QXBwZWFyKHNlbGVjdFBsYXllci5wbGF5ZXJzRGF0YSk7XHJcbiAgICAgICAgdGljVGFrVG9lLmVsZW1lbnRBcHBlYXIoc2VsZWN0UGxheWVyLnBsYXllcjIpO1xyXG4gICAgICAgIHRpY1Rha1RvZS5oaWRlRWxlbWVudChzZWxlY3RQbGF5ZXIuc2VsZWN0Qm90U2VjdGlvbik7ICAgICAgXHJcbiAgIFxyXG5cclxuICAgICAgICBzZWxlY3RQbGF5ZXIucGxheWVyT25lSW5wdXQub25jaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgcGxheWVyT25lLm5hbWUgPSBlLnRhcmdldC52YWx1ZTsgICAgICAgIFxyXG4gICAgICAgICAgIGdhbWVCb2FyZExhYmVsT25lLnRleHRDb250ZW50ID0gcGxheWVyT25lLm5hbWU7XHJcblxyXG4gICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgIHNlbGVjdFBsYXllci5wbGF5ZXJUd29JbnB1dC5vbmlucHV0ID0gKGUpID0+IHtcclxuICAgICAgICAgICAgcGxheWVyVHdvLm5hbWUgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgIGdhbWVCb2FyZExhYmVsVHdvLnRleHRDb250ZW50ID0gcGxheWVyVHdvLm5hbWU7ICBcclxuICAgICAgICB9ICAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG5cclxuXHJcbiAgICAvLyBST3VuZHMgdmFyaWFibGVzIGFuZCBmdW5jdGlvblxyXG5cclxuICAgICAgICBsZXQgcm91bmRzID0gW107XHJcbiAgICAgICAgbGV0IG5vT2ZSb3VuZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Um91bmRzKCl7XHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aHJlZS1yb3VuZHMnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2RnYW1lLXJvdW5kJykpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDU7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyBzZWxlY3Qgcm91bmQgdG8gcGxheVxyXG4gICAgY29uc3QgYWxsUm91bmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJvdWQnKVxyXG4gICAgYWxsUm91bmRzLmZvckVhY2gocm91bmQgPT4ge1xyXG4gICAgICAgIHJvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Nlcyhyb3VuZCwgYWxsUm91bmRzLCAnZGdhbWUtcm91bmQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7IFxyXG4gICBcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVSb3VuZHNEaXZzKCl7XHJcbiAgICAgICAgbm9PZlJvdW5kID0gZ2V0Um91bmRzKCk7XHJcbiAgICAgICAgZm9yIChsZXQgIGkgPSAxOyAgaSA8IG5vT2ZSb3VuZCArIDEgOyAgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gYGVhY2gtcm91bmRzIHJvdW5kLSR7aX1gO1xyXG4gICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBgUm91bmQ6ICR7aX1gXHJcbiAgICAgICAgICAgIGNvbnN0IHJvdW5kV2lubmVyRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICByb3VuZFdpbm5lckRpc3BsYXkuY2xhc3NOYW1lID0gYGVhY2gtcm91bmQtd2lubmVyIHJvdW5kLSR7aX0tV2lubmVyYDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdy1tYW55LXJvdW5kcycpLmFwcGVuZChkaXYpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm91bmQtd2lubmVyJykuYXBwZW5kKHJvdW5kV2lubmVyRGlzcGxheSk7XHJcbiAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy8gUm91bmRzIExvZ2ljIGVuZHMgaGVyZVxyXG5cclxuXHJcblxyXG4gICAgLy8gc3RhcnQgZ2FtZSBidG5cclxuICAgIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJyk7XHJcbiAgICBzdGFydEdhbWVCdG4ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgdGljVGFrVG9lLmhpZGVFbGVtZW50KHNlbGVjdFBsYXllci5wbGF5ZXJzRGF0YSk7IFxyXG4gICAgICAgIHRpY1Rha1RvZS5oaWRlRWxlbWVudChnYW1lVGl0bGUuZ2FtZU5hbWUpOyBcclxuICAgICAgICB0aWNUYWtUb2UuZWxlbWVudEFwcGVhcih0aWNUYWtUb2UuZ2FtZUJvYXJkKTtcclxuICAgICAgICAvLyB0aWNUYWtUb2UuZWxlbWVudEFwcGVhcih0aWNUYWtUb2UuZ2FtZU92ZXIpO1xyXG4gICAgICAgIGdhbWVCb2FyZExhYmVsVHdvLnRleHRDb250ZW50ID0gcGxheWVyVHdvLm5hbWU7XHJcbiAgICAgICAgZ2FtZUJvYXJkTGFiZWxPbmUudGV4dENvbnRlbnQgPSBwbGF5ZXJPbmUubmFtZTtcclxuICAgICAgICB0dXJuRGlzcGxheS50ZXh0Q29udGVudCA9IGAke2dhbWVCb2FyZExhYmVsT25lLnRleHRDb250ZW50fSdzIHR1cm5gO1xyXG4gICAgICAgIGNyZWF0ZVJvdW5kc0RpdnMoKTtcclxuICAgICAgICBzZWxlY3RSb3VuZCgnLnJvdW5kLTEnLCAwKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCByZXNldFJvdW5kID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVhY2gtcm91bmRzJykuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcclxuICAgICAgICAgICAgci5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCB0b2dnbGVSb3VuZCA9IChrbGFzcywgcm91bmQpID0+IHsgXHJcbiAgICAgICAgcmVzZXRSb3VuZCgpOyBzZWxlY3RSb3VuZChrbGFzcywgcm91bmQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlUm91bmRDb2xvciA9IChrbGFzcykgPT4ge1xyXG4gICAgICAgIGxldCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihrbGFzcyk7XHJcbiAgICAgICAgZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzVGNDc0NCc7XHJcbiAgICAgICAgZS5zdHlsZS5jb2xvciA9ICcjRjRDREM4JztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RSb3VuZChrbGFzcywgcm91bmRObyl7XHJcbiAgICAgICAgaWYobm9PZlJvdW5kID09PSAzICYmIHJvdW5kcy5sZW5ndGggPT09IHJvdW5kTm8pe1xyXG4gICAgICAgICAgICBjaGFuZ2VSb3VuZENvbG9yKGtsYXNzKTtcclxuICAgICAgICB9IGVsc2UgaWYobm9PZlJvdW5kID09PSA1ICYmIHJvdW5kcy5sZW5ndGggPT09IHJvdW5kTm8pe1xyXG4gICAgICAgICAgICBjaGFuZ2VSb3VuZENvbG9yKGtsYXNzKTtcclxuICAgICAgICB9ICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBTZWxlY3QgQm90c1xyXG4gICAgY29uc3QgYWxsQm90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5haScpO1xyXG4gICAgYWxsQm90cy5mb3JFYWNoKGJvdCA9PiB7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICBib3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+eyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzZXMoYm90LCBhbGxCb3RzLCBcImFpLWJvdFwiKTsgICAgICAgICAgICAgICBcclxuICAgICAgICB9KSAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIG9jY3VycmVuY2UgPSBmdW5jdGlvbiAoYXJyYXkpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgICAgIGxldCBjb3VudGVkTWFyayA9IGFycmF5LnJlZHVjZShmdW5jdGlvbiAoYWxsSXRlbXMsIG1hcmspIHtcclxuICAgICAgICAgICAgICAgIGlmIChtYXJrIGluIGFsbEl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsSXRlbXNbbWFya10rK1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsSXRlbXNbbWFya10gPSAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsSXRlbXNcclxuICAgICAgICAgICAgICB9LCB7fSlcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGNvdW50ZWRNYXJrXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgLy8gR2FtZSBwbGF5IExvZ2ljICAgXHJcbiAgICBjb25zdCBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkcycpO1xyXG4gICAgY29uc3Qgd2lubmluZ0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmluZ1N0YXR1cycpOyAgXHJcbiAgICBjb25zdCByZXN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXJ0LWJ0bicpO1xyXG4gICAgY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZ2FtZS1idG4nKTtcclxuXHJcbiAgICBjb25zdCBnYW1lT2JqID0ge1xyXG4gICAgICAgIHNwYWNlczogW10sXHJcbiAgICAgICAgdGlja19jaXJjbGU6ICdPJyxcclxuICAgICAgICB0aWNrX3g6ICdYJyxcclxuICAgICAgICBjdXJyZW50UGxheWVyOiAnJyxcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGxldCBzcGFjZXMgPSBbXTtcclxuICAgIGNvbnN0IHRpY2tfY2lyY2xlID0gXCJPXCI7XHJcbiAgICBjb25zdCB0aWNrX3ggPSAnWCc7XHJcbiAgICBsZXQgY3VycmVudFBsYXllciA9IHRpY2tfY2lyY2xlO1xyXG5cclxuICAgIGNvbnN0IGRyYXdCb2FyZCA9ICgpID0+IHtcclxuICAgICAgICBib3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm94Q2xpY2tlZCkgICAgIFxyXG4gICAgICAgIH0pOyAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheUdhbWVXaW5uZXIod2lubmVyKXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGljVGFrVG9lLmhpZGVFbGVtZW50KHRpY1Rha1RvZS5nYW1lQm9hcmQpO1xyXG4gICAgICAgICAgICB0aWNUYWtUb2UuZWxlbWVudEFwcGVhcih0aWNUYWtUb2UuZ2FtZU92ZXIpO1xyXG4gICAgICAgICAgICB3aW5uaW5nRGlzcGxheS5pbm5lclRleHQgPSBgJHsgd2lubmVyfSBoYXMgd29uIWA7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tGb3JXaW5uZXIoYXJyKXsgICAgICAgIFxyXG4gICAgICAgIGxldCB3aW5uZXIgPSBvY2N1cnJlbmNlKGFycik7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2cod2lubmVyWydPJ10gKyAncGxheWVyIE8nKVxyXG4gICAgICAgIGxldCB4ID0gd2lubmVyLlhcclxuICAgICAgICBsZXQgeSA9IHdpbm5lci5PXHJcbiAgICAgICAgY29uc29sZS5sb2coKHggPiB5KSk7XHJcblxyXG4gICAgICAgIGlmKHggPiB5KXsgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGxheUdhbWVXaW5uZXIoZ2FtZUJvYXJkTGFiZWxPbmUudGV4dENvbnRlbnQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBkaXNwbGF5R2FtZVdpbm5lcihnYW1lQm9hcmRMYWJlbFR3by50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbm5lclsnWCddICsgJ1BsYXllciBYJylcclxuICAgICAgICB9ICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGJveENsaWNrZWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgIGlmKCFzcGFjZXNbaWRdKSB7XHJcbiAgICAgICAgICAgIHNwYWNlc1tpZF0gPSBjdXJyZW50UGxheWVyOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmlubmVyVGV4dCA9IGN1cnJlbnRQbGF5ZXI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNwYWNlcyk7XHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRQbGF5ZXIgIT09ICdPJyl7XHJcbiAgICAgICAgICAgICAgICB0dXJuRGlzcGxheS50ZXh0Q29udGVudCA9IGAke2dhbWVCb2FyZExhYmVsT25lLnRleHRDb250ZW50fSdzIHR1cm5gIDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0dXJuRGlzcGxheS50ZXh0Q29udGVudCA9IGAke2dhbWVCb2FyZExhYmVsVHdvLnRleHRDb250ZW50fSdzIHR1cm5gO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBub09mUm91bmQgPSBnZXRSb3VuZHMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHBsYXllcldvbigpKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJvdW5kcy5wdXNoKGN1cnJlbnRQbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocm91bmRzKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIpOyAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBzZXRUaW1lb3V0KCByZXN0YXJ0KCksIDMwMDApOyBcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIChub09mUm91bmQgPT09IDMgfHwgbm9PZlJvdW5kID09PSA1KSAmJiAgcm91bmRzLmxlbmd0aCA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVSb3VuZCgnLnJvdW5kLTInLCAxKTsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCAobm9PZlJvdW5kID09PSAzIHx8IG5vT2ZSb3VuZCA9PT0gNSkgJiYgIHJvdW5kcy5sZW5ndGggPT09IDIpe1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlUm91bmQoJy5yb3VuZC0zJywgMik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCAobm9PZlJvdW5kID09PSAzICkgJiYgIHJvdW5kcy5sZW5ndGggPT09IDMpe1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlUm91bmQoJy5yb3VuZC0zJywgMyk7IFxyXG4gICAgICAgICAgICAgICAgY2hlY2tGb3JXaW5uZXIocm91bmRzKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCBub09mUm91bmQgPT09IDUgJiYgcm91bmRzLmxlbmd0aCA9PT0gMyl7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVSb3VuZCgnLnJvdW5kLTQnLCAzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIChub09mUm91bmQgPT09IDUpICYmICByb3VuZHMubGVuZ3RoID09PSA0KXtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVJvdW5kKCcucm91bmQtNScsIDQpOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGlmKCAobm9PZlJvdW5kID09PSA1KSAmJiAgcm91bmRzLmxlbmd0aCA9PT0gNSl7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVSb3VuZCgnLnJvdW5kLTUnLCA1KTtcclxuICAgICAgICAgICAgICAgIGNoZWNrRm9yV2lubmVyKHJvdW5kcyk7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxyXG4gICAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBpZihwbGF5ZXJEcmF3KCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50UGxheWVyID0gKGN1cnJlbnRQbGF5ZXIgPT09IHRpY2tfY2lyY2xlKSA/IHRpY2tfeCA6IHRpY2tfY2lyY2xlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IHBsYXllcldvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc3BhY2VzWzBdID09PSBjdXJyZW50UGxheWVyKSB7XHJcbiAgICAgICAgICBpZiAoc3BhY2VzWzFdID09PSBjdXJyZW50UGxheWVyICYmIHNwYWNlc1syXSA9PT0gY3VycmVudFBsYXllcikge1xyXG4gICAgICAgICAgICB3aW5uaW5nRGlzcGxheS5pbm5lclRleHQgPSBgJHtjdXJyZW50UGxheWVyfSB3aW5zIHVwIHRvIHRvcGA7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNwYWNlc1szXSA9PT0gY3VycmVudFBsYXllciAmJiBzcGFjZXNbNl0gPT09IGN1cnJlbnRQbGF5ZXIpIHtcclxuICAgICAgICAgICAgd2lubmluZ0Rpc3BsYXkuaW5uZXJUZXh0ID0gYCR7Y3VycmVudFBsYXllcn0gd2lucyBvbiB0aGUgbGVmdGA7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNwYWNlc1s0XSA9PT0gY3VycmVudFBsYXllciAmJiBzcGFjZXNbOF0gPT09IGN1cnJlbnRQbGF5ZXIpIHtcclxuICAgICAgICAgICAgd2lubmluZ0Rpc3BsYXkuaW5uZXJUZXh0ID0gYCR7Y3VycmVudFBsYXllcn0gd2lucyBkaWFnb25hbGx5YDtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzcGFjZXNbOF0gPT09IGN1cnJlbnRQbGF5ZXIpIHtcclxuICAgICAgICAgIGlmIChzcGFjZXNbMl0gPT09IGN1cnJlbnRQbGF5ZXIgJiYgc3BhY2VzWzVdID09PSBjdXJyZW50UGxheWVyKSB7XHJcbiAgICAgICAgICAgIHdpbm5pbmdEaXNwbGF5LmlubmVyVGV4dCA9IGAke2N1cnJlbnRQbGF5ZXJ9IHdpbnMgb24gdGhlIHJpZ2h0YDtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc3BhY2VzWzZdID09PSBjdXJyZW50UGxheWVyICYmIHNwYWNlc1s3XSA9PT0gY3VycmVudFBsYXllcikge1xyXG4gICAgICAgICAgICB3aW5uaW5nRGlzcGxheS5pbm5lclRleHQgPSBgJHtjdXJyZW50UGxheWVyfSB3aW5zIG9uIHRoZSBib3R0b21gO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNwYWNlc1s0XSA9PT0gY3VycmVudFBsYXllcikge1xyXG4gICAgICAgICAgaWYgKHNwYWNlc1sxXSA9PT0gY3VycmVudFBsYXllciAmJiBzcGFjZXNbN10gPT09IGN1cnJlbnRQbGF5ZXIpIHtcclxuICAgICAgICAgICAgd2lubmluZ0Rpc3BsYXkuaW5uZXJUZXh0ID0gYCR7Y3VycmVudFBsYXllcn0gd2lucyB2ZXJ0aWNhbGx5IG9uIG1pZGRsZWA7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNwYWNlc1szXSA9PT0gY3VycmVudFBsYXllciAmJiBzcGFjZXNbNV0gPT09IGN1cnJlbnRQbGF5ZXIpIHtcclxuICAgICAgICAgICAgd2lubmluZ0Rpc3BsYXkuaW5uZXJUZXh0ID0gYCR7Y3VycmVudFBsYXllcn0gd2lucyBob3Jpem9udGFsbHkgb24gdGhlIG1pZGRsZWA7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHNwYWNlc1syXSA9PT0gY3VycmVudFBsYXllciAmJiBzcGFjZXNbNl0gPT09IGN1cnJlbnRQbGF5ZXIpIHtcclxuICAgICAgICAgICAgd2lubmluZ0Rpc3BsYXkuaW5uZXJUZXh0ID0gYCR7Y3VycmVudFBsYXllcn0gd2lucyBkaWFnb25hbGx5YDtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcGxheWVyRHJhdyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZHJhdyA9IDA7XHJcbiAgICAgICAgc3BhY2VzLmZvckVhY2goKHNwYWNlLCBpKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc3BhY2VzW2ldICE9PSBudWxsKSBkcmF3Kys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGRyYXcgPT09IDkpIHtcclxuICAgICAgICAgIHdpbm5pbmdEaXNwbGF5LmlubmVyVGV4dCA9IGBEcmF3YDsgLy8gdGhlIGxvZ2ljIGZvciBkcmF3IGRpc3BsYXkgd2lsbCBiZSBoZXJlO1xyXG4gICAgICAgICAgcmVzdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3RhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzcGFjZXMuZm9yRWFjaCgoc3BhY2UsIGkpID0+IHtcclxuICAgICAgICAgICAgc3BhY2VzW2ldID0gbnVsbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICAgICAgICAgIGJveC5pbm5lclRleHQgPSAnJztcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgd2lubmluZ0Rpc3BsYXkuaW5uZXJUZXh0ID0gYGA7XHJcbiAgICAgICAgICB0aWNUYWtUb2UuZWxlbWVudEFwcGVhcih0aWNUYWtUb2UuZ2FtZUJvYXJkKTtcclxuICAgICAgICAgIHRpY1Rha1RvZS5oaWRlRWxlbWVudCh0aWNUYWtUb2UuZ2FtZU92ZXIpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZnVuY3Rpb24gcmVzdGFydEdhbWUoKXtcclxuICAgICAgICByZXN0YXJ0KCk7XHJcbiAgICAgICAgbm9PZlJvdW5kID0gZ2V0Um91bmRzKCk7XHJcbiAgICAgICAgcm91bmRzID0gW107XHJcbiAgICAgICAgdG9nZ2xlUm91bmQoJy5yb3VuZC0xJywgMClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVzdGFydEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSk7ICAgICBcclxuICAgICAgZHJhd0JvYXJkKCk7XHJcblxyXG5cclxufSkoKVxyXG5cclxuXHJcbmV4cG9ydCB7Z2FtZUxvZ2ljfSIsImltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9nYW1lQm9hcmQuY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9nYW1lT3Zlci5jc3MnO1xyXG5pbXBvcnQgeyBnYW1lTG9naWMgfSBmcm9tICcuL2dhbWVMb2dpYyc7XHJcbmltcG9ydCB7IGdhbWVUaXRsZSB9IGZyb20gJy4vY29tcG9uZW50cy9nYW1lVGl0bGUnO1xyXG5pbXBvcnQgeyBzZWxlY3RQbGF5ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0UGxheWVyJztcclxuXHJcblxyXG4vLyBTZWN0aW9uc1xyXG5jb25zdCB0aWNUYWtUb2UgPSAoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyBHYW1lIEJvYXJkXHJcbiAgICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkJyk7XHJcbiAgICBjb25zdCBnYW1lQm9hcmRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXZzLWxhYmVsJyk7XHJcbiAgICBjb25zdCBnYW1lT3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXInKTtcclxuICAgICAgICAgICAgICBcclxuICAgIC8vIEdyYWIgbnVtYmVyIG9mIFJvdW5kcyB0byBiZSBwbGF5ZWQgJiBTdGFydCBnYW1lIGJ0blxyXG4gICAgY29uc3QgdGhyZWVSb3VuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhyZWUtcm91bmRzJyk7XHJcbiAgICBjb25zdCBmaXZlUm91bmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpdmUtcm91bmRzJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJyk7XHJcblxyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0byBoaWRlICYgc2hvdyBzZWN0aW9uXHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gaGlkZSBzZWN0aW9uXHJcbiAgICAgICAgZnVuY3Rpb24gaGlkZUVsZW1lbnQoZWxlbSl7XHJcbiAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBGdW5jdGlvbiB0byBzaG93IHNlY3Rpb25cclxuICAgICAgICBmdW5jdGlvbiBlbGVtZW50QXBwZWFyKHRhZyl7XHJcbiAgICAgICAgICAgIHRhZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICBcclxuICAgIHJldHVybiB7aGlkZUVsZW1lbnQsIGVsZW1lbnRBcHBlYXIsIHN0YXJ0R2FtZUJ0biwgdGhyZWVSb3VuZHMsXHJcbiAgICAgICAgZml2ZVJvdW5kcywgZ2FtZUJvYXJkLCBnYW1lT3ZlciwgZ2FtZUJvYXJkTGFiZWxcclxuICAgICAgICB9XHJcblxyXG59KSgpXHJcblxyXG5leHBvcnQge3RpY1Rha1RvZX1cclxuXHJcbiAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9