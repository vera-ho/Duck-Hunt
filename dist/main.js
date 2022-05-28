/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas */ \"./src/scripts/canvas.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var DIMX = 800;\n  var DIMY = 528;\n  var foregroundPath = \"./assets/duckhunt_transparent_nicepng.png\"; // Canvas Setup\n\n  var background = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"canvas-background\", DIMX, DIMY);\n  var gameboard = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"canvas-gameboard\", DIMX, DIMY);\n  var foreground = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"canvas-foreground\", DIMX, DIMY);\n  background.setColor(\"skyblue\");\n  foreground.setImage(foregroundPath);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0VBQ2hELElBQU1DLElBQUksR0FBRyxHQUFiO0VBQ0EsSUFBTUMsSUFBSSxHQUFHLEdBQWI7RUFDQSxJQUFNQyxjQUFjLEdBQUcsMkNBQXZCLENBSGdELENBS2hEOztFQUNBLElBQU1DLFVBQVUsR0FBRyxJQUFJTix1REFBSixDQUFXLG1CQUFYLEVBQWdDRyxJQUFoQyxFQUFzQ0MsSUFBdEMsQ0FBbkI7RUFDQSxJQUFNRyxTQUFTLEdBQUcsSUFBSVAsdURBQUosQ0FBVyxrQkFBWCxFQUErQkcsSUFBL0IsRUFBcUNDLElBQXJDLENBQWxCO0VBQ0EsSUFBTUksVUFBVSxHQUFHLElBQUlSLHVEQUFKLENBQVcsbUJBQVgsRUFBZ0NHLElBQWhDLEVBQXNDQyxJQUF0QyxDQUFuQjtFQUVBRSxVQUFVLENBQUNHLFFBQVgsQ0FBb0IsU0FBcEI7RUFDQUQsVUFBVSxDQUFDRSxRQUFYLENBQW9CTCxjQUFwQjtBQUVILENBYkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgRElNWCA9IDgwMDtcbiAgICBjb25zdCBESU1ZID0gNTI4O1xuICAgIGNvbnN0IGZvcmVncm91bmRQYXRoID0gXCIuL2Fzc2V0cy9kdWNraHVudF90cmFuc3BhcmVudF9uaWNlcG5nLnBuZ1wiO1xuXG4gICAgLy8gQ2FudmFzIFNldHVwXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBDYW52YXMoXCJjYW52YXMtYmFja2dyb3VuZFwiLCBESU1YLCBESU1ZKTsgICAgICAgIFxuICAgIGNvbnN0IGdhbWVib2FyZCA9IG5ldyBDYW52YXMoXCJjYW52YXMtZ2FtZWJvYXJkXCIsIERJTVgsIERJTVkpO1xuICAgIGNvbnN0IGZvcmVncm91bmQgPSBuZXcgQ2FudmFzKFwiY2FudmFzLWZvcmVncm91bmRcIiwgRElNWCwgRElNWSk7XG5cbiAgICBiYWNrZ3JvdW5kLnNldENvbG9yKFwic2t5Ymx1ZVwiKTtcbiAgICBmb3JlZ3JvdW5kLnNldEltYWdlKGZvcmVncm91bmRQYXRoKTtcbiAgICBcbn0pIl0sIm5hbWVzIjpbIkNhbnZhcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkRJTVgiLCJESU1ZIiwiZm9yZWdyb3VuZFBhdGgiLCJiYWNrZ3JvdW5kIiwiZ2FtZWJvYXJkIiwiZm9yZWdyb3VuZCIsInNldENvbG9yIiwic2V0SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Canvas; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Canvas = /*#__PURE__*/function () {\n  function Canvas(eleId, dim_x, dim_y) {\n    _classCallCheck(this, Canvas);\n\n    this.canvas = document.getElementById(eleId);\n    this.ctx = this.canvas.getContext(\"2d\");\n    this.canvas.width = dim_x;\n    this.canvas.height = dim_y;\n  }\n\n  _createClass(Canvas, [{\n    key: \"setImage\",\n    value: function setImage(imagePath) {\n      var _this = this;\n\n      var image = new Image();\n      image.src = imagePath;\n\n      image.onload = function () {\n        _this.ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, _this.canvas.width, _this.canvas.height);\n      };\n    }\n  }, {\n    key: \"setColor\",\n    value: function setColor(color) {\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      this.ctx.fillStyle = color;\n      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      this.ctx.fillStyle = \"transparent\";\n      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n  }]);\n\n  return Canvas;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkE7RUFDakIsZ0JBQVlDLEtBQVosRUFBbUJDLEtBQW5CLEVBQTBCQyxLQUExQixFQUFpQztJQUFBOztJQUM3QixLQUFLQyxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkwsS0FBeEIsQ0FBZDtJQUNBLEtBQUtNLEdBQUwsR0FBVyxLQUFLSCxNQUFMLENBQVlJLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtJQUNBLEtBQUtKLE1BQUwsQ0FBWUssS0FBWixHQUFvQlAsS0FBcEI7SUFDQSxLQUFLRSxNQUFMLENBQVlNLE1BQVosR0FBcUJQLEtBQXJCO0VBQ0g7Ozs7V0FFRCxrQkFBU1EsU0FBVCxFQUFvQjtNQUFBOztNQUNoQixJQUFNQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixFQUFkO01BQ0FELEtBQUssQ0FBQ0UsR0FBTixHQUFZSCxTQUFaOztNQUNBQyxLQUFLLENBQUNHLE1BQU4sR0FBZSxZQUFNO1FBQ2pCLEtBQUksQ0FBQ1IsR0FBTCxDQUFTUyxTQUFULENBQW1CSixLQUFuQixFQUEwQixDQUExQixFQUE2QixDQUE3QixFQUFnQ0EsS0FBSyxDQUFDSCxLQUF0QyxFQUE2Q0csS0FBSyxDQUFDRixNQUFuRCxFQUEyRCxDQUEzRCxFQUE4RCxDQUE5RCxFQUFpRSxLQUFJLENBQUNOLE1BQUwsQ0FBWUssS0FBN0UsRUFBb0YsS0FBSSxDQUFDTCxNQUFMLENBQVlNLE1BQWhHO01BQ0gsQ0FGRDtJQUdIOzs7V0FFRCxrQkFBU08sS0FBVCxFQUFnQjtNQUNaLEtBQUtWLEdBQUwsQ0FBU1csU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLZCxNQUFMLENBQVlLLEtBQXJDLEVBQTRDLEtBQUtMLE1BQUwsQ0FBWU0sTUFBeEQ7TUFDQSxLQUFLSCxHQUFMLENBQVNZLFNBQVQsR0FBcUJGLEtBQXJCO01BQ0EsS0FBS1YsR0FBTCxDQUFTYSxRQUFULENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLEtBQUtoQixNQUFMLENBQVlLLEtBQXBDLEVBQTJDLEtBQUtMLE1BQUwsQ0FBWU0sTUFBdkQ7SUFDSDs7O1dBRUQsaUJBQVE7TUFDSixLQUFLSCxHQUFMLENBQVNXLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS2QsTUFBTCxDQUFZSyxLQUFyQyxFQUE0QyxLQUFLTCxNQUFMLENBQVlNLE1BQXhEO01BQ0EsS0FBS0gsR0FBTCxDQUFTWSxTQUFULEdBQXFCLGFBQXJCO01BQ0EsS0FBS1osR0FBTCxDQUFTYSxRQUFULENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLEtBQUtoQixNQUFMLENBQVlLLEtBQXBDLEVBQTJDLEtBQUtMLE1BQUwsQ0FBWU0sTUFBdkQ7SUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQvLi9zcmMvc2NyaXB0cy9jYW52YXMuanM/N2JkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICAgIGNvbnN0cnVjdG9yKGVsZUlkLCBkaW1feCwgZGltX3kpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVJZCk7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IGRpbV94O1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBkaW1feTtcbiAgICB9XG5cbiAgICBzZXRJbWFnZShpbWFnZVBhdGgpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VQYXRoO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6WyJDYW52YXMiLCJlbGVJZCIsImRpbV94IiwiZGltX3kiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VQYXRoIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsImNvbG9yIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;