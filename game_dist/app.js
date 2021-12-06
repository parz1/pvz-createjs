/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./base/Game.js":
/*!**********************!*\
  !*** ./base/Game.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _createjs_EaselJS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @createjs/EaselJS */ "./createjs.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config */ "./config/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ "./utils/index.js");




class Game {
  constructor(canvas) {
    this.canvas = canvas
  }
  init() {
    this.stage = new _createjs_EaselJS__WEBPACK_IMPORTED_MODULE_0__.Stage(this.canvas)

    _createjs_EaselJS__WEBPACK_IMPORTED_MODULE_0__.Ticker.framerate = _config__WEBPACK_IMPORTED_MODULE_1__.CONFIG.framerate
    _createjs_EaselJS__WEBPACK_IMPORTED_MODULE_0__.Ticker.on('tick', () => {
      this.update()
    })
    ;(0,_utils__WEBPACK_IMPORTED_MODULE_2__.handleResize)(this.canvas, this.stage)
    window.onresize = () => (0,_utils__WEBPACK_IMPORTED_MODULE_2__.handleResize)(this.canvas, this.stage)
    // TODO STAGE
    // TODO Load source packages (graphics/sounds)
    // TODO store 状态树初始化
  }
  update() {
    this.stage.update()
  }
  exit() {}
}


/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG": () => (/* binding */ CONFIG)
/* harmony export */ });
const CONFIG = {
  canvasWidth: 600,
  canvasHeight: 1080,
  framerate: 60,
}


/***/ }),

/***/ "./createjs.js":
/*!*********************!*\
  !*** ./createjs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stage": () => (/* binding */ Stage),
/* harmony export */   "Container": () => (/* binding */ Container),
/* harmony export */   "Shape": () => (/* binding */ Shape),
/* harmony export */   "Graphics": () => (/* binding */ Graphics),
/* harmony export */   "Ticker": () => (/* binding */ Ticker),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "Bitmap": () => (/* binding */ Bitmap),
/* harmony export */   "ColorFilter": () => (/* binding */ ColorFilter),
/* harmony export */   "Shadow": () => (/* binding */ Shadow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// NOTE: legacy package :(
//       fake export to not use the global variable
//       add some exports if you need
const createjs = window.createjs

const Stage = createjs.Stage
const Container = createjs.Container
const Shape = createjs.Shape
const Graphics = createjs.Graphics
const Ticker = createjs.Ticker
const Text = createjs.Text
const Bitmap = createjs.Bitmap
const ColorFilter = createjs.ColorFilter
const Shadow = createjs.Shadow

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createjs);


/***/ }),

/***/ "./utils/DOM.js":
/*!**********************!*\
  !*** ./utils/DOM.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDOMStage": () => (/* binding */ createDOMStage),
/* harmony export */   "getDOMStage": () => (/* binding */ getDOMStage)
/* harmony export */ });
const createDOMStage = () => {
  const canvas = document.createElement('canvas')
  canvas.setAttribute('id', 'stage')
  return canvas
}

const getDOMStage = () => document.getElementById('stage')


/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDOMStage": () => (/* reexport safe */ _DOM__WEBPACK_IMPORTED_MODULE_0__.createDOMStage),
/* harmony export */   "getDOMStage": () => (/* reexport safe */ _DOM__WEBPACK_IMPORTED_MODULE_0__.getDOMStage),
/* harmony export */   "calculateScale": () => (/* reexport safe */ _resize__WEBPACK_IMPORTED_MODULE_1__.calculateScale),
/* harmony export */   "handleResize": () => (/* reexport safe */ _resize__WEBPACK_IMPORTED_MODULE_1__.handleResize)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./utils/DOM.js");
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resize */ "./utils/resize.js");




/***/ }),

/***/ "./utils/resize.js":
/*!*************************!*\
  !*** ./utils/resize.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateScale": () => (/* binding */ calculateScale),
/* harmony export */   "handleResize": () => (/* binding */ handleResize)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config */ "./config/index.js");


const calculateScale = () =>
  Math.min(window.innerWidth / _config__WEBPACK_IMPORTED_MODULE_0__.CONFIG.canvasWidth, window.innerHeight / _config__WEBPACK_IMPORTED_MODULE_0__.CONFIG.canvasHeight)

const handleResize = (canvas, stage) => {
  const scale = calculateScale()

  const width = _config__WEBPACK_IMPORTED_MODULE_0__.CONFIG.canvasWidth * scale
  const height = _config__WEBPACK_IMPORTED_MODULE_0__.CONFIG.canvasHeight * scale

  canvas.width = width
  canvas.height = height
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  stage.scaleX = scale
  stage.scaleY = scale
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************!*\
  !*** ./app.js ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./utils/index.js");
/* harmony import */ var _base_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/base/Game */ "./base/Game.js");
// import './polyfills'


// import './styles.css'

const init = () => {
  const body = document.getElementsByTagName('body')[0]
  const canvas = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createDOMStage)()
  body.append(canvas)

  window.onload = () => {
    const canvas = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getDOMStage)()
    const game = new _base_Game__WEBPACK_IMPORTED_MODULE_1__.Game(canvas)

    game.init()
  }
}

init()

})();

/******/ })()
;
//# sourceMappingURL=app.js.map