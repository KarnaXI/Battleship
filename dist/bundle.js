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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\r\\n  font-size: 62.5%;\\r\\n}\\r\\np {\\r\\n  font-size: 1.7rem;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    color: red;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-size: 2.4rem;\\r\\n}\\r\\n\\r\\n.player-computer-container {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  justify-content: space-around;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.game-boards-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  gap: 4rem;\\r\\n  justify-items: center;\\r\\n}\\r\\n\\r\\n.board-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(10, 1fr);\\r\\n  width: 100%;\\r\\n  max-width: 500px;\\r\\n}\\r\\n\\r\\n.board-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(10, 1fr);\\r\\n  grid-auto-rows: 4rem;\\r\\n  column-gap: 0.3rem;\\r\\n  row-gap: 0.3rem;\\r\\n  grid-auto-columns: 1fr;\\r\\n}\\r\\n\\r\\n.coordinate {\\r\\n  background: white;\\r\\n  border: solid 1px black;\\r\\n  border-radius: 1rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.valid-placement-hover {\\r\\n  background: yellowgreen;\\r\\n}\\r\\n\\r\\n.invalid-placement-hover {\\r\\n  background: rgb(253, 109, 83);\\r\\n}\\r\\n\\r\\n.rotate-buttons {\\r\\n  margin: 1rem 0 2rem 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _scripts_gameElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/gameElements */ \"./src/scripts/gameElements.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\r\n\r\n\r\n\r\nconst gameApp = document.querySelector(\"div#battle-ship\");\r\n\r\ngameApp.appendChild((0,_scripts_gameElements__WEBPACK_IMPORTED_MODULE_1__.gameContainerElements)()[\"gameContainer\"]);\r\n\r\nconst playerPlayGame = (0,_scripts_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nplayerPlayGame.player.playerPlaceShips();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scripts_ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/ships */ \"./src/scripts/ships.js\");\n/* harmony import */ var _scripts_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/gameboard */ \"./src/scripts/gameboard.js\");\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/player */ \"./src/scripts/player.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst computerPlaceShips = () => {\r\n    const computerGameBoard = (0,_scripts_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    const computer = (0,_scripts_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"computer\");\r\n\r\n}\r\n\r\nconst playerActions = () => {\r\n    const player = (0,_scripts_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"player\");\r\n    \r\n\r\n\r\n    return {player};\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerActions);\n\n//# sourceURL=webpack://battleship/./src/scripts/game.js?");

/***/ }),

/***/ "./src/scripts/gameElements.js":
/*!*************************************!*\
  !*** ./src/scripts/gameElements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameContainerElements\": () => (/* binding */ gameContainerElements)\n/* harmony export */ });\nconst div = document.createElement(\"div\");\r\n\r\nconst gameContainer = div.cloneNode(false);\r\ngameContainer.classList.add(\"game-container\");\r\n\r\nconst playerComputerContainer = div.cloneNode(false);\r\nplayerComputerContainer.classList.add(\"player-computer-container\");\r\n\r\nconst boardsContainer = div.cloneNode(false);\r\nboardsContainer.classList.add(\"game-boards-container\");\r\n\r\nconst playerContainer = div.cloneNode(false);\r\nplayerContainer.classList.add(\"player-container\");\r\nconst playerName = document.createElement(\"h2\");\r\nplayerName.innerText = \"Player\"\r\nplayerContainer.appendChild(playerName);\r\nconst playerDescriptionText = document.createElement(\"p\");\r\nplayerDescriptionText.classList.add(\"player-description-text\");\r\nplayerContainer.appendChild(playerDescriptionText);\r\nconst playerRemainingShips = div.cloneNode(false);\r\nplayerRemainingShips.classList.add(\"player-remaining-ships\");\r\nplayerContainer.appendChild(playerRemainingShips);\r\nconst playerActionsText = div.cloneNode(false);\r\nplayerActionsText.classList.add(\"player-actions-text\");\r\nplayerContainer.appendChild(playerActionsText);\r\nconst playerRotateButton = document.createElement(\"button\");\r\nplayerRotateButton.classList.add(\"player-rotate-button\", \"rotate-buttons\");\r\nplayerRotateButton.innerText = \"Rotate Ship\";\r\nplayerContainer.appendChild(playerRotateButton);\r\n\r\nconst computerContainer = div.cloneNode(false);\r\ncomputerContainer.classList.add(\"computer-container\");\r\nconst computerName = document.createElement(\"h2\");\r\ncomputerName.innerText = \"Computer\"\r\ncomputerContainer.appendChild(computerName);\r\nconst computerDescriptionText = document.createElement(\"p\");\r\ncomputerDescriptionText.classList.add(\"computer-description-text\");\r\ncomputerContainer.appendChild(computerDescriptionText);\r\nconst computerRemainingShips = div.cloneNode(false);\r\ncomputerRemainingShips.classList.add(\"computer-remaining-ships\");\r\ncomputerContainer.appendChild(computerRemainingShips);\r\nconst computerActionsText = div.cloneNode(false);\r\ncomputerActionsText.classList.add(\"computer-actions-text\");\r\ncomputerContainer.appendChild(computerActionsText);\r\nconst computerRotateButton = document.createElement(\"button\");\r\ncomputerRotateButton.classList.add(\"computer-rotate-button\", \"rotate-buttons\");\r\ncomputerRotateButton.innerText = \"Rotate Ship\";\r\ncomputerContainer.appendChild(computerRotateButton);\r\n\r\nplayerComputerContainer.appendChild(playerContainer);\r\nplayerComputerContainer.appendChild(computerContainer);\r\n\r\n\r\nconst playerBoardContainer = div.cloneNode(false);\r\nplayerBoardContainer.classList.add(\"player-board-container\");\r\nplayerBoardContainer.classList.add(\"board-container\");\r\n\r\nconst computerBoardContainer = div.cloneNode(false);\r\ncomputerBoardContainer.classList.add(\"computer-board-container\");\r\ncomputerBoardContainer.classList.add(\"board-container\");\r\n\r\nlet allAvailableCoordinates = [];\r\nlet alphabet = \"ABCDEFGHIJ\";\r\nalphabet = [...alphabet];\r\nfor (let i=0; i < alphabet.length; i++){\r\n    for (let n=1; n < 11; n++){\r\n        allAvailableCoordinates.push(alphabet[i]+n);\r\n    }\r\n}\r\n\r\nplayerBoardContainer.innerHTML = allAvailableCoordinates.map(coordinate => {\r\n    return `\r\n    <button id=\"${coordinate}\" class=\"coordinate\"></button>\r\n    `\r\n}).join('')\r\n\r\ncomputerBoardContainer.innerHTML = allAvailableCoordinates.map(coordinate => {\r\n    return `\r\n    <button id=\"${coordinate}\" class=\"coordinate\"></button>\r\n    `\r\n}).join('')\r\n\r\n\r\nboardsContainer.appendChild(playerBoardContainer);\r\nboardsContainer.appendChild(computerBoardContainer);\r\n\r\ngameContainer.appendChild(playerComputerContainer);\r\ngameContainer.appendChild(boardsContainer);\r\n\r\n\r\nfunction gameContainerElements(){\r\n    return {gameContainer}\r\n}\n\n//# sourceURL=webpack://battleship/./src/scripts/gameElements.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ \"./src/scripts/ships.js\");\n\r\n\r\nconst invalidCoordinates = [\"A11\", \"B11\", \"C11\", \"D11\", \"E11\", \"F11\", \"G11\", \"H11\", \"I11\", \"J11\", \"undefined\",\r\n\"undefined1\",\"undefined2\", \"undefined3\", \"undefined4\", \"undefined5\",\"undefined6\", \"undefined7\", \"undefined8\", \"undefined9\", \"undefined10\"];\r\nlet usedSpots = [];\r\n\r\n// function validatePlacement(coordinateList){\r\n//     let coordinatesToCheck = coordinateList;\r\n//     for (const coordinate of coordinatesToCheck) {\r\n//         if (usedSpots.includes(coordinate) || invalidCoordinates.includes(coordinate)){\r\n//             const canPlace = false;\r\n//             return [canPlace, coordinatesToCheck];\r\n//         }\r\n//         else {\r\n//             const canPlace = true;\r\n//             return [canPlace, coordinatesToCheck]\r\n//         }\r\n//     }\r\n// }\r\n\r\nconst Gameboard = () => {\r\n\r\n    let missedAttacks = [];\r\n    let sunkShips = [];\r\n    let allAttacks = [];\r\n    let shipsPlaced = 4;\r\n\r\n    const theShips = [\r\n        (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Aircraft Carrier', 5),\r\n        (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Battleship', 4),\r\n        (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Cruiser', 3),\r\n        (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Submarine', 3),\r\n        (0,_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Destroyer', 2)\r\n    ] \r\n\r\n    const validatePlacement = ( index, row, column, angle) => {\r\n        const shipToPlace = theShips[index];\r\n        let badCoordinates = [];\r\n        let canPlace = true;\r\n        let getCoordinates = shipToPlace.placeOnBoard(row, column, angle);\r\n        for (const coordinate of getCoordinates) {\r\n            if (usedSpots.includes(coordinate) || invalidCoordinates.includes(coordinate)){\r\n                canPlace = false;\r\n                getCoordinates = shipToPlace.placeOnBoard(row, column, 0);\r\n            }\r\n\r\n            else {\r\n                badCoordinates.push(coordinate);\r\n                shipToPlace.placeOnBoard(row, column, 0);\r\n            }\r\n\r\n        }\r\n\r\n        return [canPlace, getCoordinates, badCoordinates];\r\n    }\r\n\r\n    const placeShip = (index, row, column, angle) =>{\r\n        const shipToPlace = theShips[index];\r\n        let getCoordinates = shipToPlace.placeOnBoard(row, column, angle);\r\n        for (const coordinate of getCoordinates) {\r\n                usedSpots.push(coordinate);\r\n            }\r\n            shipToPlace.createPieces();\r\n    }   \r\n    \r\n    const receiveAttack = (position) => {\r\n        let attackMiss = 0;\r\n\r\n        for (let i = 0; i < theShips.length; i++) {\r\n            if (theShips[i].hit(position)){\r\n                if(theShips[i].isSunk()){\r\n                    sunkShips.push(theShips[i]);\r\n                }\r\n                return true;\r\n            }\r\n            else {\r\n                attackMiss = 1;\r\n            }\r\n        }\r\n        if (attackMiss === 1){\r\n            missedAttacks.push(position);\r\n\r\n        }\r\n\r\n        if (!allAttacks.includes(position)){\r\n            allAttacks.push(position);\r\n        }\r\n\r\n    };\r\n\r\n    return {receiveAttack, theShips, placeShip, missedAttacks, sunkShips, shipsPlaced, validatePlacement};\r\n}\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.js\");\n\r\n\r\nconst Player = (name) => {\r\n\r\n    const getPlayerName = () => name;\r\n    const playerGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    const playerBoard = document.querySelector(`.${getPlayerName()}-board-container`);\r\n    const playerAllCoordinates = playerBoard.querySelectorAll(\".coordinate\");\r\n\r\n    const playerPlaceShips = () => playerAllCoordinates.forEach(coordinate => {\r\n        coordinate.addEventListener('mouseover', (e) => {\r\n            let eventId = e.target.id;\r\n            let validation = playerGameBoard.validatePlacement(playerGameBoard.shipsPlaced, eventId[0], eventId.slice(1), 90);\r\n\r\n\r\n            if(validation[0]){\r\n                for (let validCoordinate of validation[1]){\r\n                    if(!validCoordinate.includes(\"undefined\")){\r\n                        document.getElementById(validCoordinate).classList.add(\"valid-placement-hover\");\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                for (let badCoordinate of validation[2]){\r\n                    if (!badCoordinate.includes(\"undefined\")){\r\n                        document.getElementById(badCoordinate).classList.add(\"invalid-placement-hover\");\r\n                    }\r\n                }\r\n            }\r\n        });\r\n\r\n        coordinate.addEventListener('mouseout', (e) => {\r\n            let eventId = e.target.id;\r\n            if (eventId){\r\n            let validation = playerGameBoard.validatePlacement(playerGameBoard.shipsPlaced, eventId[0], eventId.slice(1), 90);\r\n\r\n                for (let validCoordinate of validation[1]){\r\n                    if(!validCoordinate.includes(\"undefined\")){\r\n                        document.getElementById(validCoordinate).classList.remove(\"valid-placement-hover\");\r\n                    }\r\n                }\r\n                for (let badCoordinate of validation[2]){\r\n                    if (!badCoordinate.includes(\"undefined\")){\r\n                        document.getElementById(badCoordinate).classList.remove(\"invalid-placement-hover\");\r\n                    }\r\n                }\r\n            }});\r\n\r\n\r\n    });\r\n\r\n    let positionsAttacked = [];\r\n    \r\n    let positionsAvailable = [];\r\n    let alphabet = \"ABCDEFGHIJ\";\r\n    alphabet = [...alphabet];\r\n    for (let i=0; i < alphabet.length; i++){\r\n        for (let n=1; n < 11; n++){\r\n            positionsAvailable.push(alphabet[i]+n);\r\n        }\r\n    }\r\n\r\n    const computerAttack = () => {\r\n        const random = Math.floor(Math.random() * positionsAvailable.length);\r\n        const attackCoordinate = positionsAvailable[random];\r\n        playerOneGameBoard.receiveAttack(attackCoordinate);\r\n        positionsAvailable = positionsAvailable.filter(coordinate => coordinate !== attackCoordinate);\r\n        positionsAttacked.push(attackCoordinate);\r\n        return attackCoordinate;\r\n    }\r\n\r\n    const playerAttack = (coordinate) => {\r\n        if (!positionsAttacked.includes(coordinate)){\r\n            computerGameboard.receiveAttack(coordinate);\r\n            positionsAttacked.push(coordinate);\r\n            return coordinate;\r\n        }\r\n        \r\n    }\r\n\r\n    return {getPlayerName, computerAttack, playerAttack, positionsAvailable, positionsAttacked, playerPlaceShips}\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/ships.js":
/*!******************************!*\
  !*** ./src/scripts/ships.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst Ship = (name, length) => {\r\n    const getName = () => name;\r\n\r\n    const shipBody = Array.from({length}, (v,i) => i);\r\n\r\n    let alphabet = \"ABCDEFGHIJ\";\r\n    alphabet = [...alphabet];\r\n    const alphaCode = {};\r\n    for (let i=0; i < alphabet.length; i++){\r\n        alphaCode[alphabet[i]] = i;\r\n    }\r\n\r\n    let shipPosition = [];\r\n    let shipPieces = {};\r\n\r\n\r\n    function createPieces(){\r\n        let pieces = shipPosition.reduce((a, v) => ({ ...a, [v]: \"O\"}), {})\r\n        shipPieces = pieces;\r\n    }\r\n\r\n    function getKeyByValue(object, value) {\r\n        return Object.keys(object).find(key => object[key] === value);\r\n      }\r\n\r\n    const placeOnBoard = (row, column, angle) => {\r\n        if (angle === 90){\r\n            let startCount = alphaCode[(row)];\r\n            for (let i=0; i < shipBody.length; i++){\r\n                shipPosition.push(getKeyByValue(alphaCode,startCount) + column);\r\n                startCount++;\r\n\r\n            }\r\n        }\r\n        else if (angle === 180){\r\n            let startCount = alphaCode[(row)];\r\n            for (let i=0; i < shipBody.length; i++){\r\n                shipPosition.push(getKeyByValue(alphaCode,startCount) + (column));\r\n                column++;\r\n\r\n            }\r\n        }\r\n        else {\r\n            shipPosition = [];\r\n        }\r\n        \r\n        return shipPosition;\r\n    }\r\n\r\n    function hit(position) {\r\n        if (position in shipPieces) {\r\n            shipPieces[position] = \"X\";\r\n            return shipPieces[position];\r\n        }\r\n        else {\r\n            // console.log(\"not hit\")\r\n        }\r\n    }\r\n\r\n    function isSunk(){\r\n        let checkSunk = Object.values(shipPieces).every( value => value === \"X\");\r\n        return checkSunk;\r\n    };\r\n\r\n    return { getName, shipPosition, placeOnBoard, hit, shipPieces, isSunk, createPieces };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n\n\n//# sourceURL=webpack://battleship/./src/scripts/ships.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;