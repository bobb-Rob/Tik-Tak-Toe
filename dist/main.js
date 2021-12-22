/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Acme&family=Josefin+Sans:wght@200;300;700&family=Lobster&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\r\\n--mainColor: rgb(58, 25, 58);\\r\\n--mainColor1: rgb(74, 7, 136);\\r\\n--peachDarkest: #181211;\\r\\n--peachLi: #EFB6AF;\\r\\n--peachDark: #5F4744;\\r\\n--peachLightDark: #A77D78;\\r\\n--peachLight: #F4CDC8;\\r\\n--peachLighter: #F9E4E2;\\r\\n}\\r\\n\\r\\n*{\\r\\n    box-sizing: border-box;\\r\\n    margin: 0;    \\r\\n}\\r\\n\\r\\nbody{\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n\\r\\n/* Page 1 */\\r\\n\\r\\n.game-name{\\r\\n    color: linear-gradient(180deg, var(--peachDarkest), var(--peachDark));\\r\\n    /* border: 1px solid red;    */\\r\\n    text-align: center;\\r\\n    padding: 10px;\\r\\n    padding-top: 20px;\\r\\n    font-size: 3rem;\\r\\n    font-family: acme;    \\r\\n}\\r\\n\\r\\nsvg {\\r\\n    display: block;\\r\\n    font: 2.0em 'Montserrat';\\r\\n    width: 760px;\\r\\n    height: 140px;\\r\\n    margin: 0 auto;\\r\\n    /* border: 1px solid red;  */\\r\\n    background: var(--peachDarkest); \\r\\n} \\r\\n\\r\\n.text-copy {\\r\\n    fill: none;\\r\\n    stroke: white;\\r\\n    stroke-dasharray: 6% 29%;\\r\\n    stroke-width: 5px;\\r\\n    stroke-dashoffset: 0%;\\r\\n    animation: stroke-offset 5.5s infinite linear;\\r\\n}\\r\\n\\r\\n.text-copy:nth-child(1){\\r\\n\\tstroke: #4D163D;\\r\\n\\tanimation-delay: -1;\\r\\n}\\r\\n\\r\\n.text-copy:nth-child(2){\\r\\n\\tstroke: var(--peachLi);\\r\\n\\tanimation-delay: -2s;\\r\\n}\\r\\n\\r\\n.text-copy:nth-child(3){\\r\\n\\tstroke: var(--peachLight);\\r\\n\\tanimation-delay: -3s;\\r\\n}\\r\\n\\r\\n.text-copy:nth-child(4){\\r\\n\\tstroke: var(--peachLightDark);\\r\\n\\tanimation-delay: -4s;\\r\\n}\\r\\n\\r\\n.text-copy:nth-child(5){\\r\\n\\tstroke: var(--peachLighter);\\r\\n\\tanimation-delay: -5s;\\r\\n}\\r\\n\\r\\n@keyframes stroke-offset{\\r\\n\\t100% {stroke-dashoffset: -35%;}\\r\\n}\\r\\n\\r\\n\\r\\n.hide{\\r\\n    display: none !important;\\r\\n}\\r\\n\\r\\n\\r\\n.choose-player{\\r\\nposition: absolute;\\r\\ndisplay: flex;\\r\\nplace-self: center;\\r\\njustify-content: center;\\r\\nalign-content: center;\\r\\ntop: 200px;\\r\\nheight: 100px;\\r\\nwidth: 540px;\\r\\n\\r\\n}\\r\\n\\r\\n.choose-player button,\\r\\n.three-rounds,\\r\\n.five-rounds,\\r\\n.start-game{\\r\\n    height: 30px;\\r\\n    width: 150px;\\r\\n    margin: 10px;\\r\\n    background: linear-gradient(90deg, var(--peachDarkest), var(--peachDark));\\r\\n    border: 0px solid var(--peachDarkest);\\r\\n    border-radius: 5px;\\r\\n    color: white; \\r\\n    font-family: josefin sans;\\r\\n    font-weight: 700;\\r\\n    font-size: 1rem;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n.player-name{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    width: 100%;\\r\\n    /* border: 1px solid rgb(26, 122, 85); */\\r\\n    margin-top: 50px;\\r\\n}\\r\\n\\r\\n\\r\\n.player-one label,\\r\\n.player-two label,\\r\\n.player-select>p,\\r\\n.bots-box>p,\\r\\n.easy-bots>p,\\r\\n.difficult-bots>p,\\r\\n.game-board-rounds>p,\\r\\n.tom,\\r\\n.mike,\\r\\n.caleb,\\r\\n.lui{\\r\\n    /* border: 1px solid red; */\\r\\n    font-family: josefin sans;\\r\\n    font-weight: 700;\\r\\n    padding: 8px 8px 8px 0px;\\r\\n    color: var(--peachLight);\\r\\n}\\r\\n\\r\\n\\r\\n.tom,\\r\\n.mike,\\r\\n.caleb,\\r\\n.lui{\\r\\n    color: var(--peachDarkest) !important;\\r\\n    text-align: center;\\r\\n    border-radius: 5px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.ai-bot{\\r\\n    background-color: var(--peachDark) !important;\\r\\n}\\r\\n\\r\\n.player-select p{\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n#player-2,\\r\\n#player-1{\\r\\n    border: 2px solid var(--peachLight);\\r\\n    height: 30px;\\r\\n    outline: none;\\r\\n   border-radius: 5px;\\r\\n   padding: 0.6rem 1.2rem;\\r\\n   color: var(--peachLight);\\r\\n   background: none;\\r\\n   font-size: 0.8rem;\\r\\n    letter-spacing: 0.5px;\\r\\n    transition: 0.3s;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.default-input::after,.default-input1::after{\\r\\n    content: 'Start game with default name: Leo';\\r\\n    color:var(--peachLighter);\\r\\n    font-size: 1rem;\\r\\n   font-family: josefin sans;\\r\\n   margin-left: 55px;\\r\\n}\\r\\n.default-input1::after{\\r\\n    content: 'Start game with default name: Nikky';\\r\\n}\\r\\n\\r\\n.player-select{\\r\\n    padding: 20px;\\r\\n    background: var(--peachDarkest);\\r\\n    border-radius: 5px;\\r\\n    width: 400px;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.bots-box{\\r\\nheight: 100%;\\r\\nborder: 2px solid var(--peachLight);\\r\\nmargin-top: 10px;\\r\\nborder-radius: 5px; \\r\\n}\\r\\n\\r\\n.bot{\\r\\n    border-top: 2px solid var(--peachLight);\\r\\n    display: flex;      \\r\\n}\\r\\n\\r\\n.easy-bots,\\r\\n.difficult-bots{\\r\\n    margin: 10px;\\r\\n    flex: 1 0 auto;    \\r\\n}\\r\\n\\r\\n.easy-bot-one-and-two,\\r\\n.difficult-bot-one-and-two{\\r\\nheight: 50px;\\r\\nwidth: 100%;\\r\\nmargin-top: 0px;\\r\\nborder: 2px solid var(--peachLight);\\r\\ndisplay: flex;\\r\\nborder-radius: 5px;\\r\\nalign-items: center;\\r\\n}\\r\\n\\r\\n.easy-bot,\\r\\n.difficult-bot{\\r\\n    flex: 1 1 auto;\\r\\n    margin: 5px;\\r\\n    width: 100%;\\r\\n    height: 30px;\\r\\n    background-color: var(--peachLight);\\r\\n}\\r\\n\\r\\n/* Some rounds codes are up */\\r\\n.three-rounds,\\r\\n.five-rounds{\\r\\n    background: var(--peachLighter);\\r\\n    border: 3px solid var(--peachDark) !important;\\r\\n    border-radius: 10px !important;\\r\\n    color: var(--peachDarkest);\\r\\n}\\r\\n\\r\\n.dgame-round{\\r\\n    background-color: var(--peachDark) !important;\\r\\n}\\r\\n\\r\\n\\r\\n.gameboard{\\r\\n    border:  2px solid red;\\r\\n    height: 600px;\\r\\n   \\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n.game-grid{\\r\\n    margin-top: 70px;\\r\\n    height: 390px;\\r\\n    width: 390px;\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr;\\r\\n    grid-template-rows: 1fr 1fr 1fr;\\r\\n}\\r\\n\\r\\n.grids{\\r\\n    height: 130px;\\r\\n    width: 130px;\\r\\n    border: 2px solid white;\\r\\n    background: var(--peachDark);\\r\\n}\\r\\n\\r\\n.game-board-rounds{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.game-board-rounds>p{\\r\\ncolor: var(--peachDarkest) !important;\\r\\n}\\r\\n\\r\\n.rounds{\\r\\n    width: 390px;\\r\\n    height: 50px;\\r\\n    border: 2px solid rgb(179, 21, 21);\\r\\n}\\r\\n\\r\\n.game-rounds{\\r\\n    margin: 5px;\\r\\n    border: 2px solid blue;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tik-tak-toe/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tik-tak-toe/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tik-tak-toe/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tik-tak-toe/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tik-tak-toe/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tik-tak-toe/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tik-tak-toe/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tik-tak-toe/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tik-tak-toe/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tik-tak-toe/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/gameTitle.js":
/*!*************************************!*\
  !*** ./src/components/gameTitle.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameTitle\": () => (/* binding */ gameTitle)\n/* harmony export */ });\n\r\n  const gameTitle = (() => {\r\n    const gameName = document.querySelector(\".game-name\");\r\n    console.log('I am the Title')\r\n\r\n\r\n    return { gameName }\r\n  })()\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n  \n\n//# sourceURL=webpack://tik-tak-toe/./src/components/gameTitle.js?");

/***/ }),

/***/ "./src/components/selectPlayer.js":
/*!****************************************!*\
  !*** ./src/components/selectPlayer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectPlayer\": () => (/* binding */ selectPlayer)\n/* harmony export */ });\n\r\n\r\n\r\n\r\nconst selectPlayer = (() => {\r\n\r\n    const gameMode = document.querySelector(\".choose-player\");\r\n    const vsBotBtn = document.getElementById('vs-bot');\r\n    \r\n    const playersData = document.querySelector(\".player-name\");\r\n\r\n    const _playerOneInput = document.getElementById('player-1').defaultValue = 'Leo';\r\n    const playerOneValue = _playerOneInput.value;\r\n\r\n    const _playerTwoInput = document.getElementById('player-2').defaultValue = 'Nikky';\r\n    const playerTwoValue = _playerTwoInput.value;\r\n   \r\n    const player2 = document.querySelector(\".player-two\");\r\n    const vsTwoPlayers = document.getElementById('vs-player-two');\r\n\r\n    const selectBotSection = document.querySelector(\".bots-box\");\r\n\r\n\r\n\r\n    return { gameMode, vsBotBtn, playersData, playerOneValue, playerTwoValue, player2, selectBotSection, vsTwoPlayers }\r\n\r\n})()\r\n\r\n\r\n\n\n//# sourceURL=webpack://tik-tak-toe/./src/components/selectPlayer.js?");

/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameLogic\": () => (/* binding */ gameLogic)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/selectPlayer */ \"./src/components/selectPlayer.js\");\n\r\n\r\n\r\n\r\n// Player two and Bot\r\n\r\nconst gameLogic = (function(){\r\n \r\n    window.onload = () =>{\r\n        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.playersData);      \r\n        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.gameOver)        \r\n        _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.gameBoard)  \r\n    }\r\n\r\n\r\n   // Play with Bot button event \r\n const vsBotBtn = _components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.vsBotBtn;\r\n vsBotBtn.addEventListener('click', ()=>{\r\n     _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.gameMode);\r\n     _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.elementAppear(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.playersData);\r\n     _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.player2);\r\n })\r\n \r\n // Play two Player section\r\n const twoPlayers = _components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.vsTwoPlayers;\r\n twoPlayers.addEventListener('click', ()=>{\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.gameMode);\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.elementAppear(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.playersData);\r\n     _index__WEBPACK_IMPORTED_MODULE_0__.ticTakToe.hideElement(_components_selectPlayer__WEBPACK_IMPORTED_MODULE_1__.selectPlayer.player2);\r\n })\r\n\r\n//  AI bot selection event\r\n    function removeClasses(target, arr, className) {\r\n        arr.forEach((boot) => {\r\n          if(boot == target) { boot.classList.add(className); }\r\n          else { boot.classList.remove(className); }\r\n        });\r\n      }\r\n\r\n    const allBots = document.querySelectorAll('.ai');\r\n    allBots.forEach(bot => {                 \r\n        bot.addEventListener('click', ()=>{           \r\n            removeClasses(bot, allBots, \"ai-bot\");               \r\n        })       \r\n    });\r\n\r\n    // AI selection event ends\r\n    \r\n\r\n// Rounds choice buttons event\r\n    const allRounds = document.querySelectorAll('.roud')\r\n    allRounds.forEach(round => {\r\n        round.addEventListener('click', ()=>{\r\n            removeClasses(round, allRounds, 'dgame-round');\r\n        })\r\n    });   \r\n\r\n\r\n// Start game Button event\r\n\r\nfunction checkForSelection(arrEl, claseName){\r\n    let result = '';\r\n    for(let bot of arrEl){\r\n       if(bot.classList.contains(claseName)){\r\n            result = true;\r\n            return;\r\n        }\r\n        else{\r\n           result = false;\r\n        }       \r\n    }  \r\n    return result \r\n}\r\n\r\n    \r\n\r\n})()\r\n\r\n\r\n\n\n//# sourceURL=webpack://tik-tak-toe/./src/gameLogic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ticTakToe\": () => (/* binding */ ticTakToe)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLogic */ \"./src/gameLogic.js\");\n/* harmony import */ var _components_gameTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gameTitle */ \"./src/components/gameTitle.js\");\n/* harmony import */ var _components_selectPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/selectPlayer */ \"./src/components/selectPlayer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// Sections\r\nconst ticTakToe = (function(){\r\n        // Game Board\r\n    const gameBoard = document.querySelector('.gameboard');\r\n    const gameOver = document.querySelector('.game-over');\r\n              \r\n    // Grab number of Rounds to be played & Start game btn\r\n    const threeRounds = document.querySelector('.three-rounds');\r\n    const fiveRounds = document.querySelector('.five-rounds');\r\n    \r\n    const startGameBtn = document.querySelector('.start-game');\r\n\r\n    \r\n    // Function to hide & show section\r\n        // Function to hide section\r\n        function hideElement(elem){\r\n            elem.classList.add('hide');\r\n        }\r\n        // Function to show section\r\n        function elementAppear(tag){\r\n            tag.classList.remove('hide');\r\n        }\r\n   \r\nreturn {hideElement, elementAppear, startGameBtn, threeRounds,\r\n    fiveRounds, gameBoard, gameOver\r\n}\r\n\r\n})()\r\n\r\n\r\n\r\n  \n\n//# sourceURL=webpack://tik-tak-toe/./src/index.js?");

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