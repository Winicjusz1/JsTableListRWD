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

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://WPoneSide/./src/sass/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ \"./src/sass/index.scss\");\n\r\n\r\nconst values = [\r\n    { name: 'Ananas', calories: 33, fat: 0, carbs: 11.8 },\r\n    { name: 'Jabłko', calories: 57, fat: 0.7, carbs: 12.1 },\r\n    { name: 'Pomarańcza', calories: 51, fat: 0.2, carbs: 11.3 },\r\n    { name: 'Wiśnie', calories: 67, fat: 0.4, carbs: 14.6 },\r\n]\r\n\r\nconst valuesContainer = document.querySelector('.app--values');\r\n\r\nconst desktopViewport = window.matchMedia('screen and (min-width: 600px)');\r\n\r\nconst drawValues = (isDesktop) => {\r\n    if (isDesktop) {\r\n        drawDesktopValues();\r\n    } else {\r\n        drawMobileValues();\r\n    }\r\n}\r\n\r\nconst drawMobileValues = () => {\r\n    valuesContainer.innerHTML = '';\r\n\r\n    let list = document.createElement('ul');\r\n\r\n    values.forEach(value => {\r\n        let element = document.createElement('li');\r\n\r\n        let name = document.createElement('div');\r\n        name.innerHTML = `<strong>Nazwa: </strong>${value.name}`;\r\n        let calories = document.createElement('div');\r\n        calories.innerHTML = `<strong>Kalorie: </strong>${value.calories}`;\r\n        let fat = document.createElement('div');\r\n        fat.innerHTML = `<strong>Tłuszcz: </strong>${value.fat}`;\r\n        let carbs = document.createElement('div');\r\n        carbs.innerHTML = `<strong>Węglowodany: </strong>${value.carbs}`;\r\n\r\n        element.appendChild(name);\r\n        element.appendChild(calories);\r\n        element.appendChild(fat);\r\n        element.appendChild(carbs);\r\n\r\n        list.appendChild(element);\r\n    })\r\n\r\n    valuesContainer.appendChild(list);\r\n}\r\n\r\nconst drawDesktopValues = () => {\r\n    valuesContainer.innerHTML = '';\r\n\r\n    let table = document.createElement('table');\r\n\r\n    let thead = document.createElement('thead');\r\n    thead.innerHTML = '<tr><th>Nazwa</th><th>Kalorie</th><th>Tłuszcz</th><th>Węglowodany</th></tr>';\r\n\r\n    let tbody = document.createElement('tbody');\r\n\r\n    values.forEach(value => {\r\n        let row = document.createElement('tr');\r\n        row.innerHTML = `<td>${value.name}</td><td>${value.calories}</td><td>${value.fat}</td><td>${value.carbs}</td>`;\r\n        tbody.appendChild(row);\r\n    })\r\n\r\n    table.appendChild(thead);\r\n    table.appendChild(tbody);\r\n\r\n    valuesContainer.appendChild(table);\r\n}\r\n\r\ndrawValues(desktopViewport.matches);\r\n\r\ndesktopViewport.addListener(isDesktop => {\r\n    drawValues(isDesktop.matches);\r\n})\r\n\n\n//# sourceURL=webpack://WPoneSide/./src/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;