/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./styles/style.css":
/*!*****************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./styles/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n:root {\\n  font-size: 10px;\\n}\\n\\nul, \\nol {\\n  list-style: none;\\n}\\n\\nbutton:hover {\\n  cursor: pointer;\\n}\\n\\nbody {\\n  padding-left: 50px;\\n\\n  font-size: 2rem;\\n\\n  background-color: rgb(202, 194, 156);\\n}\\n\\n.input-expense {\\n  width: 100px;\\n}\\n\\n.report {\\n  width: 20%;\\n  max-height: 300px;\\n  overflow-y: auto;\\n\\n  border: 2px solid black;\\n}\\n\\n.record-container {\\n  display: flex;\\n  margin-bottom: 5px;\\n  padding-left: 20px;\\n}\\n\\n.record-container * {\\n  margin-right: 10px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./styles/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./styles/style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./js/Report.js":
/*!**********************!*\
  !*** ./js/Report.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Report\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./js/getData.js\");\n/* eslint-disable no-shadow */\n/* eslint-disable no-prototype-builtins */\n/* eslint-disable class-methods-use-this */\n\n\nclass Report {\n  constructor() {\n    this.createReport();\n  }\n\n  get expenses() {\n    return (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExpenses)();\n  }\n\n  groupExpenses() {\n    return this.expenses.reduce((accum, { date }, ind, arr) => {\n      const key = new Date(date).getMinutes();\n      if (!accum.hasOwnProperty(key)) {\n        accum[key] = arr.filter(({ date }) => new Date(date).getMinutes() === key);\n        return accum;\n      }\n      return accum;\n    }, {});\n  }\n\n  createReport() {\n    console.log(this.expenses);\n    console.log(this.groupExpenses());\n\n    this.report = document.createElement('ul');\n\n    this.report.addEventListener('click', ({ target }) => {\n      const expensesCopy = [...this.expenses];\n      const deleteDate = target.dataset.date;\n      if (target.classList.contains('delete-record')) {\n        const deleteRecordIndex = expensesCopy.findIndex(({ date }) => date === +deleteDate);\n\n        expensesCopy.splice(deleteRecordIndex, 1);\n        localStorage.setItem('expenses', JSON.stringify(expensesCopy));\n\n        this.updateReport();\n      }\n    });\n\n    const datefragment = new DocumentFragment();\n    const horisontalLine = document.createElement('hr');\n    const reportArray = this.groupExpenses();\n\n    const reportMinutes = Object.keys(reportArray).sort((a, b) => b - a);\n\n    reportMinutes.forEach((min) => {\n      const minute = document.createElement('li');\n      minute.textContent = `${min} minutes:`;\n\n      const expensesByMinutes = Object.values(reportArray[min].sort((a, b) => b.date - a.date));\n\n      const expenseUl = document.createElement('ul');\n\n      expensesByMinutes.forEach((expense, index) => {\n        const recordContainer = document.createElement('div');\n        recordContainer.classList.add('record-container');\n\n        const hours = new Date(expensesByMinutes[index].date).getHours();\n        const minutes = new Date(expensesByMinutes[index].date).getMinutes();\n        const seconds = new Date(expensesByMinutes[index].date).getSeconds();\n        const expenseLi = document.createElement('li');\n        expenseLi.dataset.date = expensesByMinutes[index].date;\n        expenseLi.textContent = `\n          ${expensesByMinutes[index].category} --- ${expensesByMinutes[index].value} BYN;\n          date(${hours}:${minutes}:${seconds})`;\n\n        const deleteBtn = document.createElement('button');\n        deleteBtn.classList.add('delete-record');\n        deleteBtn.dataset.date = expensesByMinutes[index].date;\n        deleteBtn.textContent = '✖';\n\n        recordContainer.append(deleteBtn);\n        recordContainer.append(expenseLi);\n\n        expenseUl.append(recordContainer);\n      });\n\n      minute.append(expenseUl);\n      minute.append(horisontalLine.cloneNode());\n      datefragment.append(minute);\n    });\n\n    this.report.append(datefragment);\n\n    return this.report;\n  }\n\n  updateReport() {\n    const reportEl = document.querySelector('#report>ul');\n    reportEl.replaceWith(this.createReport());\n  }\n\n  renderIn(element) {\n    element.append(this.report);\n  }\n}\n\n// @example\n//  *   group([\n//  *      { country: 'Belarus', city: 'Brest' },\n//  *      { country: 'Russia', city: 'Omsk' },\n//  *      { country: 'Russia', city: 'Samara' },\n//  *      { country: 'Belarus', city: 'Grodno' },\n//  *      { country: 'Belarus', city: 'Minsk' },\n//  *      { country: 'Poland', city: 'Lodz' }\n//  *     ],\n//  *     item => item.country,\n//  *     item => item.city\n//  *   )\n//  *            =>\n//  *   Map {\n//  *    \"Belarus\" => [\"Brest\", \"Grodno\", \"Minsk\"],\n//  *    \"Russia\" => [\"Omsk\", \"Samara\"],\n//  *    \"Poland\" => [\"Lodz\"]\n//  *   }\n//  */\n// function group(array, keySelector, valueSelector) {\n//   return array.reduce((accum, item, index, array1) => {\n//     const key = keySelector(item);\n//     if (!accum.has(key)) {\n//       const objectsWithKeySelector = array1.filter((el) => key === keySelector(el));\n//       const arrayOfValues = objectsWithKeySelector.map(valueSelector);\n//       return accum.set(key, arrayOfValues);\n//     }\n//     return accum;\n//   }, new Map());\n// }\n\n\n//# sourceURL=webpack:///./js/Report.js?");

/***/ }),

/***/ "./js/expense.js":
/*!***********************!*\
  !*** ./js/expense.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveExpenseToLocalStorage\": () => /* binding */ saveExpenseToLocalStorage,\n/* harmony export */   \"setDefaultExpense\": () => /* binding */ setDefaultExpense,\n/* harmony export */   \"isInputValid\": () => /* binding */ isInputValid\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./js/getData.js\");\n\n\nconst category = document.querySelector('#category-select');\nconst input = document.querySelector('.input-expense');\nconst save = document.querySelector('#save');\n\nfunction disableInput() {\n  input.setAttribute('disabled', true);\n  save.setAttribute('disabled', true);\n}\n\nfunction enableInput() {\n  if (category.value !== 'none') {\n    input.removeAttribute('disabled');\n    save.removeAttribute('disabled');\n  } else {\n    disableInput();\n  }\n}\n\nfunction saveExpenseToLocalStorage() {\n  const expenseArray = (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExpenses)();\n\n  expenseArray.push({\n    value: +input.value,\n    category: category.value,\n    date: new Date().getTime(),\n  });\n\n  localStorage.setItem('expenses', JSON.stringify(expenseArray));\n}\n\nfunction setDefaultExpense() {\n  category.selectedIndex = 0;\n  input.value = '';\n  disableInput();\n}\n\nfunction isInputValid() {\n  const val = +input.value;\n  const isNumber = Number.isFinite(val);\n\n  return (isNumber && val > 0);\n}\n\nfunction validateInput() {\n  if (!isInputValid()) {\n    input.style.color = 'red';\n  } else {\n    input.style.color = 'black';\n  }\n}\n\nfunction opacityAnimation() {\n  //todo need to add opacity +scale when saving\n}\n\ncategory.addEventListener('change', enableInput);\ninput.addEventListener('input', validateInput);\n\n\n//# sourceURL=webpack:///./js/expense.js?");

/***/ }),

/***/ "./js/getData.js":
/*!***********************!*\
  !*** ./js/getData.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getExpenses\": () => /* binding */ getExpenses\n/* harmony export */ });\nfunction getExpenses() {\n  return JSON.parse(localStorage.getItem('expenses')) || [];\n}\n\nfunction getIntervalData(interval = 'day') {\n  console.log(interval);\n}\n\n\n//# sourceURL=webpack:///./js/getData.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _Report__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report */ \"./js/Report.js\");\n/* harmony import */ var _expense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expense */ \"./js/expense.js\");\n\n\n// import createElement from './utils/createElement';\n\n\n\nconst save = document.querySelector('#save');\nconst reportContainer = document.querySelector('#report');\nconst audio = document.querySelector('#audio');\n\nconst report = new _Report__WEBPACK_IMPORTED_MODULE_1__.default();\n\nreport.renderIn(reportContainer);\n\nsave.addEventListener('click', () => {\n  if ((0,_expense__WEBPACK_IMPORTED_MODULE_2__.isInputValid)()) {\n    audio.play();\n    (0,_expense__WEBPACK_IMPORTED_MODULE_2__.saveExpenseToLocalStorage)();\n    (0,_expense__WEBPACK_IMPORTED_MODULE_2__.setDefaultExpense)();\n    report.updateReport();\n  }\n});\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;