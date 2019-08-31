/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"demoBloom.js": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./demoSrc/demoBloom.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bin/bloom/BloomEffectComposer.js":
/*!******************************************!*\
  !*** ./bin/bloom/BloomEffectComposer.js ***!
  \******************************************/
/*! exports provided: BloomEffectComposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BloomEffectComposer\", function() { return BloomEffectComposer; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _postprocess_PostProcessEffectComposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../postprocess/PostProcessEffectComposer */ \"./bin/postprocess/PostProcessEffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var _postprocess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../postprocess */ \"./bin/postprocess/index.js\");\n/* harmony import */ var _MaterialSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MaterialSwitcher */ \"./bin/bloom/MaterialSwitcher.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n/**\n * 切り替え可能なUnrealBloomPassを内包したEffectComposer.\n * BloomEffectComposer.BLOOMレイヤーに含まれるオブジェクトのみをBloomさせる.\n */\n\nvar BloomEffectComposer =\n/*#__PURE__*/\nfunction (_PostProcessEffectCom) {\n  _inherits(BloomEffectComposer, _PostProcessEffectCom);\n\n  function BloomEffectComposer(scene, renderer, renderPassOption) {\n    var _this;\n\n    _classCallCheck(this, BloomEffectComposer);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(BloomEffectComposer).call(this, renderer));\n    _this.switcher = new _MaterialSwitcher__WEBPACK_IMPORTED_MODULE_4__[\"MaterialSwitcher\"](scene);\n    var size = renderer.getSize(new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]());\n    _this.bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass__WEBPACK_IMPORTED_MODULE_2__[\"UnrealBloomPass\"](size, 1.5, 0.4, 0.4); // TODO : PR d.ts\n    // @ts-ignore\n\n    _this.renderToScreen = false;\n    _postprocess__WEBPACK_IMPORTED_MODULE_3__[\"RenderPassOption\"].init(renderPassOption);\n\n    _this.addPass(renderPassOption.renderPass);\n\n    _this.addPass(_this.bloomPass);\n\n    _this.onBeforeRender = _this.switcher.darkenNonBloomed;\n    _this.onAfterRender = _this.switcher.restoreMaterial;\n    return _this;\n  }\n  /**\n   * 描画結果を反映したテクスチャを取得する。\n   */\n\n\n  _createClass(BloomEffectComposer, [{\n    key: \"result\",\n    get: function get() {\n      return this.renderTarget2.texture;\n    }\n  }]);\n\n  return BloomEffectComposer;\n}(_postprocess_PostProcessEffectComposer__WEBPACK_IMPORTED_MODULE_1__[\"PostProcessEffectComposer\"]);\nBloomEffectComposer.ENTIRE = 0;\nBloomEffectComposer.BLOOM = 30;\n\n//# sourceURL=webpack:///./bin/bloom/BloomEffectComposer.js?");

/***/ }),

/***/ "./bin/bloom/MaterialStorage.js":
/*!**************************************!*\
  !*** ./bin/bloom/MaterialStorage.js ***!
  \**************************************/
/*! exports provided: MaterialStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MaterialStorage\", function() { return MaterialStorage; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Bloom設定に応じて、オリジナルのマテリアルを格納するためのオブジェクト。\n * Object3D.userData.materialStorageに格納される。\n */\nvar MaterialStorage =\n/*#__PURE__*/\nfunction () {\n  function MaterialStorage() {\n    _classCallCheck(this, MaterialStorage);\n  }\n\n  _createClass(MaterialStorage, [{\n    key: \"updateMaterial\",\n    value: function updateMaterial(original) {\n      this.original = original;\n      this.copyMaterialArray();\n      this.darkenMaterialArray(this.dark);\n    }\n  }, {\n    key: \"copyMaterialArray\",\n    value: function copyMaterialArray() {\n      if (this.isClone()) {\n        this.cloneToDark();\n      } else {\n        this.copyToDark();\n      }\n    }\n    /**\n     * darkenマテリアルのコピーに、クローンを使用するかcopyを使用するかを判定する。\n     */\n\n  }, {\n    key: \"isClone\",\n    value: function isClone() {\n      var darkenHead = this.getHeadMaterial(this.dark);\n      var originalHead = this.getHeadMaterial(this.original);\n\n      if (darkenHead == null || darkenHead.type !== originalHead.type) {\n        return true;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"getHeadMaterial\",\n    value: function getHeadMaterial(mat) {\n      var isArray = Array.isArray(mat);\n      if (isArray) return mat[0];\n      return mat;\n    }\n  }, {\n    key: \"copyToDark\",\n    value: function copyToDark() {\n      var _this = this;\n\n      var isArrayOriginal = Array.isArray(this.original);\n\n      if (isArrayOriginal) {\n        this.dark.forEach(function (drk, index) {\n          drk.copy(_this.original[index]);\n        });\n      } else {\n        this.dark.copy(this.original);\n      }\n    }\n  }, {\n    key: \"cloneToDark\",\n    value: function cloneToDark() {\n      var isArrayOriginal = Array.isArray(this.original);\n\n      if (isArrayOriginal) {\n        this.dark = this.original.map(function (val) {\n          return val.clone();\n        });\n      } else {\n        this.dark = this.original.clone();\n      }\n    }\n  }, {\n    key: \"darkenMaterialArray\",\n    value: function darkenMaterialArray(material) {\n      if (!Array.isArray(material)) {\n        MaterialStorage.darkenMaterial(material);\n        return;\n      }\n\n      material.forEach(function (mat) {\n        MaterialStorage.darkenMaterial(mat);\n      });\n    }\n    /**\n     * マテリアルを反射光のない黒に書き換える。\n     * @param material\n     */\n\n  }], [{\n    key: \"darkenMaterial\",\n    value: function darkenMaterial(material) {\n      if (material[\"color\"] != null) {\n        material[\"color\"].setHex(0);\n      }\n\n      if (material[\"shininess\"] != null) {\n        material[\"shininess\"] = 0;\n      }\n\n      if (material[\"specular\"] != null) {\n        material[\"specular\"].setHex(0);\n      }\n\n      if (material[\"emissive\"] != null) {\n        material[\"emissive\"].setHex(0);\n      }\n    }\n  }]);\n\n  return MaterialStorage;\n}();\n\n//# sourceURL=webpack:///./bin/bloom/MaterialStorage.js?");

/***/ }),

/***/ "./bin/bloom/MaterialSwitcher.js":
/*!***************************************!*\
  !*** ./bin/bloom/MaterialSwitcher.js ***!
  \***************************************/
/*! exports provided: MaterialSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MaterialSwitcher\", function() { return MaterialSwitcher; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _BloomEffectComposer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BloomEffectComposer */ \"./bin/bloom/BloomEffectComposer.js\");\n/* harmony import */ var _MaterialStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MaterialStorage */ \"./bin/bloom/MaterialStorage.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n/**\n * 切り替え可能なUnrealBloomPassにおいて、マテリアルの切り替え処理を担当するクラス。\n */\n\nvar MaterialSwitcher =\n/*#__PURE__*/\nfunction () {\n  function MaterialSwitcher(scene) {\n    var _this = this;\n\n    _classCallCheck(this, MaterialSwitcher);\n\n    this.darkenNonBloomed = function () {\n      _this.scene.traverseVisible(_this.switchToDarken);\n    };\n\n    this.restoreMaterial = function () {\n      _this.scene.traverseVisible(_this.switchToOriginalMaterial);\n    };\n    /**\n     * scene上の各オブジェクトに対して、マテリアルの切り替えを行う。\n     * bloom対象外であれば#000のマテリアルに。\n     *\n     * @param obj sceneをtraverseして取得したオブジェクト。\n     */\n\n\n    this.switchToDarken = function (obj) {\n      if (!_this.isDarken(obj)) return;\n\n      if (obj.userData.materialStorage == null) {\n        obj.userData.materialStorage = new _MaterialStorage__WEBPACK_IMPORTED_MODULE_2__[\"MaterialStorage\"]();\n      }\n\n      var storage = obj.userData.materialStorage;\n      var mesh = obj;\n      storage.updateMaterial(mesh.material);\n      mesh.material = storage.dark;\n    };\n    /**\n     * マテリアルストレージに格納されたオリジナルのマテリアル設定に復帰する。\n     * @param obj\n     */\n\n\n    this.switchToOriginalMaterial = function (obj) {\n      if (!_this.isDarken(obj)) return;\n      var mesh = obj;\n      mesh.material = obj.userData.materialStorage.original;\n    };\n\n    this.scene = scene;\n    this.layers = new three__WEBPACK_IMPORTED_MODULE_0__[\"Layers\"]();\n    this.layers.set(_BloomEffectComposer__WEBPACK_IMPORTED_MODULE_1__[\"BloomEffectComposer\"].BLOOM);\n  }\n  /**\n   * そのオブジェクトがbloomマスクの対象か否かを判定する。\n   * @param obj\n   */\n\n\n  _createClass(MaterialSwitcher, [{\n    key: \"isDarken\",\n    value: function isDarken(obj) {\n      if (obj.isMesh == null && obj.isLine == null) return false;\n      return !this.layers.test(obj.layers);\n    }\n  }]);\n\n  return MaterialSwitcher;\n}();\n\n//# sourceURL=webpack:///./bin/bloom/MaterialSwitcher.js?");

/***/ }),

/***/ "./bin/bloom/index.js":
/*!****************************!*\
  !*** ./bin/bloom/index.js ***!
  \****************************/
/*! exports provided: BloomEffectComposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BloomEffectComposer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BloomEffectComposer */ \"./bin/bloom/BloomEffectComposer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BloomEffectComposer\", function() { return _BloomEffectComposer__WEBPACK_IMPORTED_MODULE_0__[\"BloomEffectComposer\"]; });\n\n\n\n//# sourceURL=webpack:///./bin/bloom/index.js?");

/***/ }),

/***/ "./bin/chromaticAberration/ChromaticAberration.frag.glsl.js":
/*!******************************************************************!*\
  !*** ./bin/chromaticAberration/ChromaticAberration.frag.glsl.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  //language=GLSL\n  return \"\\nuniform sampler2D tDiffuse;\\nuniform float rate;\\nuniform float radiusInner;\\nuniform float radiusOuter;\\n\\nvarying vec2 vUv;\\n\\nvoid main() {\\n  float distance = length( vUv - 0.5 )*2.0;\\n  distance = smoothstep( radiusInner, radiusOuter, distance);\\n  float shift = rate * distance * 0.01;\\n\\n  float r = texture2D( tDiffuse, vUv + vec2( shift, 0.0 ) ).r;\\n  float g = texture2D( tDiffuse, vUv ).g;\\n  float b = texture2D( tDiffuse, vUv - vec2( shift, 0.0 ) ).b;\\n\\n  gl_FragColor = vec4( vec3(r, g, b) , 1.0 );\\n}\\n  \";\n});\n\n//# sourceURL=webpack:///./bin/chromaticAberration/ChromaticAberration.frag.glsl.js?");

/***/ }),

/***/ "./bin/chromaticAberration/ChromaticAberrationShader.js":
/*!**************************************************************!*\
  !*** ./bin/chromaticAberration/ChromaticAberrationShader.js ***!
  \**************************************************************/
/*! exports provided: ChromaticAberrationShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChromaticAberrationShader\", function() { return ChromaticAberrationShader; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./bin/index.js\");\n/* harmony import */ var _ChromaticAberration_frag_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChromaticAberration.frag.glsl */ \"./bin/chromaticAberration/ChromaticAberration.frag.glsl.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar ChromaticAberrationShader =\n/*#__PURE__*/\nfunction (_PostProcessShader) {\n  _inherits(ChromaticAberrationShader, _PostProcessShader);\n\n  function ChromaticAberrationShader() {\n    var _this;\n\n    _classCallCheck(this, ChromaticAberrationShader);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ChromaticAberrationShader).call(this));\n    _this.fragmentShader = Object(_ChromaticAberration_frag_glsl__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return _this;\n  }\n\n  _createClass(ChromaticAberrationShader, [{\n    key: \"initUniform\",\n    value: function initUniform() {\n      _get(_getPrototypeOf(ChromaticAberrationShader.prototype), \"initUniform\", this).call(this);\n\n      this.uniforms = three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([this.uniforms, {\n        rate: {\n          value: 1.0\n        },\n        radiusInner: {\n          value: 0.25\n        },\n        radiusOuter: {\n          value: Math.sqrt(2.0)\n        }\n      }]);\n    }\n  }]);\n\n  return ChromaticAberrationShader;\n}(_index__WEBPACK_IMPORTED_MODULE_1__[\"PostProcessShader\"]);\n\n//# sourceURL=webpack:///./bin/chromaticAberration/ChromaticAberrationShader.js?");

/***/ }),

/***/ "./bin/chromaticAberration/ChromaticAberrationShaderPass.js":
/*!******************************************************************!*\
  !*** ./bin/chromaticAberration/ChromaticAberrationShaderPass.js ***!
  \******************************************************************/
/*! exports provided: ChromaticAberrationShaderPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChromaticAberrationShaderPass\", function() { return ChromaticAberrationShaderPass; });\n/* harmony import */ var _ChromaticAberrationShader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromaticAberrationShader */ \"./bin/chromaticAberration/ChromaticAberrationShader.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./bin/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar ChromaticAberrationShaderPass =\n/*#__PURE__*/\nfunction (_PostProcessShaderPas) {\n  _inherits(ChromaticAberrationShaderPass, _PostProcessShaderPas);\n\n  _createClass(ChromaticAberrationShaderPass, [{\n    key: \"rate\",\n    get: function get() {\n      return this.uniforms.rate.value;\n    },\n    set: function set(value) {\n      this.uniforms.rate.value = value;\n    }\n  }, {\n    key: \"radiusInner\",\n    get: function get() {\n      return this.uniforms.radiusInner.value;\n    },\n    set: function set(value) {\n      this.uniforms.radiusInner.value = value;\n    }\n  }, {\n    key: \"radiusOuter\",\n    get: function get() {\n      return this.uniforms.radiusOuter.value;\n    },\n    set: function set(value) {\n      this.uniforms.radiusOuter.value = value;\n    }\n  }]);\n\n  function ChromaticAberrationShaderPass() {\n    _classCallCheck(this, ChromaticAberrationShaderPass);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ChromaticAberrationShaderPass).call(this, new _ChromaticAberrationShader__WEBPACK_IMPORTED_MODULE_0__[\"ChromaticAberrationShader\"]()));\n  }\n\n  return ChromaticAberrationShaderPass;\n}(_index__WEBPACK_IMPORTED_MODULE_1__[\"PostProcessShaderPass\"]);\n\n//# sourceURL=webpack:///./bin/chromaticAberration/ChromaticAberrationShaderPass.js?");

/***/ }),

/***/ "./bin/chromaticAberration/index.js":
/*!******************************************!*\
  !*** ./bin/chromaticAberration/index.js ***!
  \******************************************/
/*! exports provided: ChromaticAberrationShaderPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ChromaticAberrationShaderPass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromaticAberrationShaderPass */ \"./bin/chromaticAberration/ChromaticAberrationShaderPass.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ChromaticAberrationShaderPass\", function() { return _ChromaticAberrationShaderPass__WEBPACK_IMPORTED_MODULE_0__[\"ChromaticAberrationShaderPass\"]; });\n\n\n\n//# sourceURL=webpack:///./bin/chromaticAberration/index.js?");

/***/ }),

/***/ "./bin/index.js":
/*!**********************!*\
  !*** ./bin/index.js ***!
  \**********************/
/*! exports provided: PostProcessShader, PostProcessShaderPass, PostProcessRenderer, RenderPassOption, PeripheralLightShaderPass, ChromaticAberrationShaderPass, MixShaderPass, BloomEffectComposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _postprocess___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postprocess/ */ \"./bin/postprocess/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PostProcessShader\", function() { return _postprocess___WEBPACK_IMPORTED_MODULE_0__[\"PostProcessShader\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PostProcessShaderPass\", function() { return _postprocess___WEBPACK_IMPORTED_MODULE_0__[\"PostProcessShaderPass\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PostProcessRenderer\", function() { return _postprocess___WEBPACK_IMPORTED_MODULE_0__[\"PostProcessRenderer\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RenderPassOption\", function() { return _postprocess___WEBPACK_IMPORTED_MODULE_0__[\"RenderPassOption\"]; });\n\n/* harmony import */ var _peripheralLight___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peripheralLight/ */ \"./bin/peripheralLight/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PeripheralLightShaderPass\", function() { return _peripheralLight___WEBPACK_IMPORTED_MODULE_1__[\"PeripheralLightShaderPass\"]; });\n\n/* harmony import */ var _chromaticAberration___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chromaticAberration/ */ \"./bin/chromaticAberration/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ChromaticAberrationShaderPass\", function() { return _chromaticAberration___WEBPACK_IMPORTED_MODULE_2__[\"ChromaticAberrationShaderPass\"]; });\n\n/* harmony import */ var _mix___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mix/ */ \"./bin/mix/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MixShaderPass\", function() { return _mix___WEBPACK_IMPORTED_MODULE_3__[\"MixShaderPass\"]; });\n\n/* harmony import */ var _bloom___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bloom/ */ \"./bin/bloom/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BloomEffectComposer\", function() { return _bloom___WEBPACK_IMPORTED_MODULE_4__[\"BloomEffectComposer\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./bin/index.js?");

/***/ }),

/***/ "./bin/mix/MixShader.frag.glsl.js":
/*!****************************************!*\
  !*** ./bin/mix/MixShader.frag.glsl.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  //language=GLSL\n  return \"    \\nuniform sampler2D tDiffuse;\\nuniform sampler2D mixTexture;\\nvarying vec2 vUv;\\nvec4 getTexture( sampler2D texture ) {\\n    return mapTexelToLinear( texture2D( texture , vUv ) );\\n}\\nvoid main() {\\n    gl_FragColor = ( getTexture( tDiffuse ) + vec4( 1.0 ) * getTexture( mixTexture ) );\\n}\";\n});\n\n//# sourceURL=webpack:///./bin/mix/MixShader.frag.glsl.js?");

/***/ }),

/***/ "./bin/mix/MixShader.js":
/*!******************************!*\
  !*** ./bin/mix/MixShader.js ***!
  \******************************/
/*! exports provided: MixShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MixShader\", function() { return MixShader; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./bin/index.js\");\n/* harmony import */ var _MixShader_frag_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MixShader.frag.glsl */ \"./bin/mix/MixShader.frag.glsl.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar MixShader =\n/*#__PURE__*/\nfunction (_PostProcessShader) {\n  _inherits(MixShader, _PostProcessShader);\n\n  function MixShader() {\n    var _this;\n\n    _classCallCheck(this, MixShader);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MixShader).call(this));\n    _this.fragmentShader = Object(_MixShader_frag_glsl__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return _this;\n  }\n\n  _createClass(MixShader, [{\n    key: \"initUniform\",\n    value: function initUniform() {\n      _get(_getPrototypeOf(MixShader.prototype), \"initUniform\", this).call(this);\n\n      this.uniforms = three__WEBPACK_IMPORTED_MODULE_2__[\"UniformsUtils\"].merge([this.uniforms, {\n        mixTexture: {\n          value: null\n        }\n      }]);\n    }\n  }]);\n\n  return MixShader;\n}(_index__WEBPACK_IMPORTED_MODULE_0__[\"PostProcessShader\"]);\n\n//# sourceURL=webpack:///./bin/mix/MixShader.js?");

/***/ }),

/***/ "./bin/mix/MixShaderPass.js":
/*!**********************************!*\
  !*** ./bin/mix/MixShaderPass.js ***!
  \**********************************/
/*! exports provided: MixShaderPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MixShaderPass\", function() { return MixShaderPass; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./bin/index.js\");\n/* harmony import */ var _MixShader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MixShader */ \"./bin/mix/MixShader.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n/**\n * 他のエフェクトコンポーザーの描画結果を受け取り、自身のレンダリング結果に乗算するShaderPass\n */\n\nvar MixShaderPass =\n/*#__PURE__*/\nfunction (_PostProcessShaderPas) {\n  _inherits(MixShaderPass, _PostProcessShaderPas);\n\n  _createClass(MixShaderPass, [{\n    key: \"mixTexture\",\n    get: function get() {\n      return this.uniforms.mixTexture.value;\n    },\n    set: function set(value) {\n      this.uniforms.mixTexture.value = value;\n    }\n  }]);\n\n  function MixShaderPass(mixTexture) {\n    var _this;\n\n    _classCallCheck(this, MixShaderPass);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MixShaderPass).call(this, new _MixShader__WEBPACK_IMPORTED_MODULE_1__[\"MixShader\"]()));\n    _this.mixTexture = mixTexture;\n    return _this;\n  }\n\n  return MixShaderPass;\n}(_index__WEBPACK_IMPORTED_MODULE_0__[\"PostProcessShaderPass\"]);\n\n//# sourceURL=webpack:///./bin/mix/MixShaderPass.js?");

/***/ }),

/***/ "./bin/mix/index.js":
/*!**************************!*\
  !*** ./bin/mix/index.js ***!
  \**************************/
/*! exports provided: MixShaderPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MixShaderPass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MixShaderPass */ \"./bin/mix/MixShaderPass.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MixShaderPass\", function() { return _MixShaderPass__WEBPACK_IMPORTED_MODULE_0__[\"MixShaderPass\"]; });\n\n\n\n//# sourceURL=webpack:///./bin/mix/index.js?");

/***/ }),

/***/ "./bin/peripheralLight/PeripheralLight.frag.glsl.js":
/*!**********************************************************!*\
  !*** ./bin/peripheralLight/PeripheralLight.frag.glsl.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  //language=GLSL\n  return \"\\nuniform sampler2D tDiffuse;\\nuniform float rate;\\nuniform float radiusInner;\\nuniform float radiusOuter;\\nuniform vec3 color;\\nvarying vec2 vUv;\\n\\nvoid main() {\\n  float distance = length( vUv - 0.5 )*2.0;\\n  distance = smoothstep( radiusInner, radiusOuter, distance);  \\n  float shift = rate * distance * 0.01;\\n\\n  vec4 original = texture2D( tDiffuse, vUv );\\n  vec3 result = mix( original.rgb, color, shift);\\n\\n  gl_FragColor = vec4( result , original.a );\\n}\\n  \";\n});\n\n//# sourceURL=webpack:///./bin/peripheralLight/PeripheralLight.frag.glsl.js?");

/***/ }),

/***/ "./bin/peripheralLight/PeripheralLightShader.js":
/*!******************************************************!*\
  !*** ./bin/peripheralLight/PeripheralLightShader.js ***!
  \******************************************************/
/*! exports provided: PeripheralLightShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PeripheralLightShader\", function() { return PeripheralLightShader; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./bin/index.js\");\n/* harmony import */ var _PeripheralLight_frag_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PeripheralLight.frag.glsl */ \"./bin/peripheralLight/PeripheralLight.frag.glsl.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar PeripheralLightShader =\n/*#__PURE__*/\nfunction (_PostProcessShader) {\n  _inherits(PeripheralLightShader, _PostProcessShader);\n\n  function PeripheralLightShader() {\n    var _this;\n\n    _classCallCheck(this, PeripheralLightShader);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PeripheralLightShader).call(this));\n    _this.fragmentShader = Object(_PeripheralLight_frag_glsl__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return _this;\n  }\n\n  _createClass(PeripheralLightShader, [{\n    key: \"initUniform\",\n    value: function initUniform() {\n      _get(_getPrototypeOf(PeripheralLightShader.prototype), \"initUniform\", this).call(this);\n\n      this.uniforms = three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([this.uniforms, {\n        rate: {\n          value: 5.0\n        },\n        radiusInner: {\n          value: 0.75\n        },\n        radiusOuter: {\n          value: Math.sqrt(2.0)\n        },\n        color: {\n          value: new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0, 0, 0)\n        }\n      }]);\n    }\n  }]);\n\n  return PeripheralLightShader;\n}(_index__WEBPACK_IMPORTED_MODULE_1__[\"PostProcessShader\"]);\n\n//# sourceURL=webpack:///./bin/peripheralLight/PeripheralLightShader.js?");

/***/ }),

/***/ "./bin/peripheralLight/PeripheralLightShaderPass.js":
/*!**********************************************************!*\
  !*** ./bin/peripheralLight/PeripheralLightShaderPass.js ***!
  \**********************************************************/
/*! exports provided: PeripheralLightShaderPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PeripheralLightShaderPass\", function() { return PeripheralLightShaderPass; });\n/* harmony import */ var _PeripheralLightShader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeripheralLightShader */ \"./bin/peripheralLight/PeripheralLightShader.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./bin/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n/**\n * 周辺光量の減光を表現するフィルタ。\n */\n\nvar PeripheralLightShaderPass =\n/*#__PURE__*/\nfunction (_PostProcessShaderPas) {\n  _inherits(PeripheralLightShaderPass, _PostProcessShaderPas);\n\n  _createClass(PeripheralLightShaderPass, [{\n    key: \"rate\",\n    get: function get() {\n      return this.uniforms.rate.value;\n    },\n    set: function set(value) {\n      this.uniforms.rate.value = value;\n    }\n  }, {\n    key: \"radiusInner\",\n    get: function get() {\n      return this.uniforms.radiusInner.value;\n    },\n    set: function set(value) {\n      this.uniforms.radiusInner.value = value;\n    }\n  }, {\n    key: \"radiusOuter\",\n    get: function get() {\n      return this.uniforms.radiusOuter.value;\n    },\n    set: function set(value) {\n      this.uniforms.radiusOuter.value = value;\n    }\n  }, {\n    key: \"color\",\n    get: function get() {\n      return this.uniforms.color.value;\n    },\n    set: function set(value) {\n      this.uniforms.color.value = value;\n    }\n  }]);\n\n  function PeripheralLightShaderPass() {\n    _classCallCheck(this, PeripheralLightShaderPass);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(PeripheralLightShaderPass).call(this, new _PeripheralLightShader__WEBPACK_IMPORTED_MODULE_0__[\"PeripheralLightShader\"]()));\n  }\n\n  return PeripheralLightShaderPass;\n}(_index__WEBPACK_IMPORTED_MODULE_1__[\"PostProcessShaderPass\"]);\n\n//# sourceURL=webpack:///./bin/peripheralLight/PeripheralLightShaderPass.js?");

/***/ }),

/***/ "./bin/peripheralLight/index.js":
/*!**************************************!*\
  !*** ./bin/peripheralLight/index.js ***!
  \**************************************/
/*! exports provided: PeripheralLightShaderPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PeripheralLightShaderPass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PeripheralLightShaderPass */ \"./bin/peripheralLight/PeripheralLightShaderPass.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PeripheralLightShaderPass\", function() { return _PeripheralLightShaderPass__WEBPACK_IMPORTED_MODULE_0__[\"PeripheralLightShaderPass\"]; });\n\n\n\n//# sourceURL=webpack:///./bin/peripheralLight/index.js?");

/***/ }),

/***/ "./bin/postprocess/PostProcessEffectComposer.js":
/*!******************************************************!*\
  !*** ./bin/postprocess/PostProcessEffectComposer.js ***!
  \******************************************************/
/*! exports provided: PostProcessEffectComposer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostProcessEffectComposer\", function() { return PostProcessEffectComposer; });\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n/**\n * レンダリングの前後に任意の処理を実行する機能を追加したEffectComposer.\n */\n\nvar PostProcessEffectComposer =\n/*#__PURE__*/\nfunction (_EffectComposer) {\n  _inherits(PostProcessEffectComposer, _EffectComposer);\n\n  function PostProcessEffectComposer() {\n    var _this;\n\n    _classCallCheck(this, PostProcessEffectComposer);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostProcessEffectComposer).apply(this, arguments));\n    _this.enabled = true;\n    return _this;\n  }\n\n  return PostProcessEffectComposer;\n}(three_examples_jsm_postprocessing_EffectComposer__WEBPACK_IMPORTED_MODULE_0__[\"EffectComposer\"]);\n\n//# sourceURL=webpack:///./bin/postprocess/PostProcessEffectComposer.js?");

/***/ }),

/***/ "./bin/postprocess/PostProcessRenderer.js":
/*!************************************************!*\
  !*** ./bin/postprocess/PostProcessRenderer.js ***!
  \************************************************/
/*! exports provided: PostProcessRenderer, RenderPassOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostProcessRenderer\", function() { return PostProcessRenderer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RenderPassOption\", function() { return RenderPassOption; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var _PostProcessEffectComposer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostProcessEffectComposer */ \"./bin/postprocess/PostProcessEffectComposer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n/**\n * 複数のエフェクトコンポーザーと、WebGLRendererを管理し、\n * 連続してポストエフェクト処理を行うためのクラス。\n */\n\nvar PostProcessRenderer =\n/*#__PURE__*/\nfunction () {\n  function PostProcessRenderer(scene, camera, renderer) {\n    var _this = this;\n\n    _classCallCheck(this, PostProcessRenderer);\n\n    this._composers = [];\n    /**\n     * requestAnimationFrameハンドラ\n     * @param timestamp\n     */\n\n    this.onRequestAnimationFrame = function (timestamp) {\n      if (_this.lastUpdateTimestamp == null) {\n        _this.lastUpdateTimestamp = timestamp;\n      }\n\n      var delta = timestamp - _this.lastUpdateTimestamp;\n\n      if (_this.onBeforeRequestAnimationFrame) {\n        _this.onBeforeRequestAnimationFrame(timestamp);\n      }\n\n      _this.render(delta);\n\n      _this.lastUpdateTimestamp = timestamp;\n      _this.id = requestAnimationFrame(_this.onRequestAnimationFrame);\n    };\n\n    this.renderer = renderer;\n    this.scene = scene;\n    this.camera = camera;\n  }\n\n  _createClass(PostProcessRenderer, [{\n    key: \"addComposer\",\n\n    /**\n     * シェーダーパスを挟んだEffectComposerを生成、登録する。\n     * @param passes\n     * @param renderer\n     * @param renderPass\n     */\n    value: function addComposer(passes, renderer, renderPass) {\n      var composer = PostProcessRenderer.getComposer(passes, renderer, {\n        scene: this.scene,\n        camera: this.camera,\n        renderPass: renderPass\n      });\n\n      this._composers.push(composer);\n\n      return composer;\n    }\n    /**\n     * コンポーザーを生成する。\n     * @param passes\n     * @param renderer\n     * @param renderPassOption\n     */\n\n  }, {\n    key: \"start\",\n\n    /**\n     * レンダリングを開始する。\n     */\n    value: function start() {\n      if (this.id != null) return;\n      this.id = requestAnimationFrame(this.onRequestAnimationFrame);\n    }\n    /**\n     * レンダリングを停止する。\n     */\n\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      if (this.id == null) return;\n      cancelAnimationFrame(this.id);\n      this.lastUpdateTimestamp = null;\n    }\n    /**\n     * ウィンドウリサイズ時の処理\n     * @param w\n     * @param h\n     */\n\n  }, {\n    key: \"setSize\",\n    value: function setSize(w, h) {\n      this.camera.aspect = w / h;\n      this.camera.updateProjectionMatrix();\n      this.renderer.setPixelRatio(window.devicePixelRatio);\n      this.renderer.setSize(w, h);\n\n      this._composers.forEach(function (composer) {\n        composer.setSize(w, h);\n      });\n    }\n    /**\n     * WebGLRendererのレンダリングサイズを取得する。\n     */\n\n  }, {\n    key: \"getSize\",\n    value: function getSize() {\n      return this.renderer.getSize(new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector2\"]());\n    }\n  }, {\n    key: \"render\",\n    value: function render(delta) {\n      this._composers.forEach(function (composer) {\n        if (!composer.enabled) return;\n        if (composer.onBeforeRender) composer.onBeforeRender(delta);\n        composer.render(delta);\n        if (composer.onAfterRender) composer.onAfterRender(delta);\n      });\n    }\n  }, {\n    key: \"composers\",\n    get: function get() {\n      return this._composers;\n    }\n  }], [{\n    key: \"getComposer\",\n    value: function getComposer(passes, renderer, renderPassOption) {\n      RenderPassOption.init(renderPassOption);\n      var composer = new _PostProcessEffectComposer__WEBPACK_IMPORTED_MODULE_2__[\"PostProcessEffectComposer\"](renderer);\n      composer.addPass(renderPassOption.renderPass);\n      passes.forEach(function (p) {\n        composer.addPass(p);\n      });\n      return composer;\n    }\n  }]);\n\n  return PostProcessRenderer;\n}();\n/**\n * getComposer関数で利用するRenderPass初期化オプション\n *\n * sceneとcameraのセット、もしくはrenderPassインスタンスを代入する必要がある。\n * sceneとcameraのセットの場合 : RenderPassインスタンスを生成する。\n * renderPassインスタンスの場合 : そのままrenderPassインスタンスを利用する。\n */\n\nvar RenderPassOption =\n/*#__PURE__*/\nfunction () {\n  function RenderPassOption() {\n    _classCallCheck(this, RenderPassOption);\n  }\n\n  _createClass(RenderPassOption, null, [{\n    key: \"init\",\n    value: function init(option) {\n      if (option.renderPass == null) {\n        option.renderPass = new three_examples_jsm_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_1__[\"RenderPass\"](option.scene, option.camera);\n      }\n    }\n  }]);\n\n  return RenderPassOption;\n}();\n\n//# sourceURL=webpack:///./bin/postprocess/PostProcessRenderer.js?");

/***/ }),

/***/ "./bin/postprocess/PostProcessShader.js":
/*!**********************************************!*\
  !*** ./bin/postprocess/PostProcessShader.js ***!
  \**********************************************/
/*! exports provided: PostProcessShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostProcessShader\", function() { return PostProcessShader; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * EffectComposer用のShaderオブジェクトに必要な要素を定義したクラス。\n * このクラスのインスタンスをShaderPassに渡すことで、任意のシェーダーエフェクトコンポーザーになる。\n */\nvar PostProcessShader =\n/*#__PURE__*/\nfunction () {\n  function PostProcessShader() {\n    _classCallCheck(this, PostProcessShader);\n\n    //language=GLSL\n    this.vertexShader = \"\\n    varying vec2 vUv;\\n    void main() {\\n      vUv = uv;\\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\\n    }\\n  \";\n    this.initUniform();\n  }\n\n  _createClass(PostProcessShader, [{\n    key: \"initUniform\",\n    value: function initUniform() {\n      this.uniforms = {\n        tDiffuse: {\n          value: null\n        }\n      };\n    }\n  }]);\n\n  return PostProcessShader;\n}();\n\n//# sourceURL=webpack:///./bin/postprocess/PostProcessShader.js?");

/***/ }),

/***/ "./bin/postprocess/PostProcessShaderPass.js":
/*!**************************************************!*\
  !*** ./bin/postprocess/PostProcessShaderPass.js ***!
  \**************************************************/
/*! exports provided: PostProcessShaderPass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostProcessShaderPass\", function() { return PostProcessShaderPass; });\n/* harmony import */ var three_examples_jsm_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/postprocessing/ShaderPass */ \"./node_modules/three/examples/jsm/postprocessing/ShaderPass.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar PostProcessShaderPass =\n/*#__PURE__*/\nfunction (_ShaderPass) {\n  _inherits(PostProcessShaderPass, _ShaderPass);\n\n  function PostProcessShaderPass() {\n    _classCallCheck(this, PostProcessShaderPass);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(PostProcessShaderPass).apply(this, arguments));\n  }\n\n  _createClass(PostProcessShaderPass, [{\n    key: \"tDiffuse\",\n    get: function get() {\n      return this.uniforms.tDiffuse.value;\n    },\n    set: function set(value) {\n      this.uniforms.tDiffuse.value = value;\n    }\n  }]);\n\n  return PostProcessShaderPass;\n}(three_examples_jsm_postprocessing_ShaderPass__WEBPACK_IMPORTED_MODULE_0__[\"ShaderPass\"]);\n\n//# sourceURL=webpack:///./bin/postprocess/PostProcessShaderPass.js?");

/***/ }),

/***/ "./bin/postprocess/index.js":
/*!**********************************!*\
  !*** ./bin/postprocess/index.js ***!
  \**********************************/
/*! exports provided: PostProcessShader, PostProcessShaderPass, PostProcessRenderer, RenderPassOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PostProcessRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostProcessRenderer */ \"./bin/postprocess/PostProcessRenderer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PostProcessRenderer\", function() { return _PostProcessRenderer__WEBPACK_IMPORTED_MODULE_0__[\"PostProcessRenderer\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RenderPassOption\", function() { return _PostProcessRenderer__WEBPACK_IMPORTED_MODULE_0__[\"RenderPassOption\"]; });\n\n/* harmony import */ var _PostProcessShader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostProcessShader */ \"./bin/postprocess/PostProcessShader.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PostProcessShader\", function() { return _PostProcessShader__WEBPACK_IMPORTED_MODULE_1__[\"PostProcessShader\"]; });\n\n/* harmony import */ var _PostProcessShaderPass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostProcessShaderPass */ \"./bin/postprocess/PostProcessShaderPass.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PostProcessShaderPass\", function() { return _PostProcessShaderPass__WEBPACK_IMPORTED_MODULE_2__[\"PostProcessShaderPass\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./bin/postprocess/index.js?");

/***/ }),

/***/ "./demoSrc/Common.js":
/*!***************************!*\
  !*** ./demoSrc/Common.js ***!
  \***************************/
/*! exports provided: Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Common\", function() { return Common; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Common =\n/*#__PURE__*/\nfunction () {\n  function Common() {\n    _classCallCheck(this, Common);\n  }\n\n  _createClass(Common, null, [{\n    key: \"initScene\",\n    value: function initScene() {\n      var scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n      return scene;\n    }\n  }, {\n    key: \"initLight\",\n    value: function initLight(scene) {\n      var ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__[\"AmbientLight\"](0xffffff, 1.0);\n      scene.add(ambientLight);\n      return ambientLight;\n    }\n  }, {\n    key: \"initCamera\",\n    value: function initCamera(scene, W, H) {\n      var near = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n      var far = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 400;\n      var camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, W / H, near, far);\n      camera.position.set(0, 0, 100);\n      camera.updateMatrixWorld(false);\n      scene.add(camera);\n      return camera;\n    }\n  }, {\n    key: \"initControl\",\n    value: function initControl(camera, render) {\n      var domElement;\n\n      if (render) {\n        domElement = render.domElement;\n      }\n\n      var control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__[\"OrbitControls\"](camera, domElement);\n      control.update();\n      return control;\n    }\n  }, {\n    key: \"initRenderer\",\n    value: function initRenderer(W, H) {\n      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0x000000;\n      var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"webgl-canvas\";\n      var antialias = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;\n      var renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n        canvas: document.getElementById(id),\n        antialias: antialias\n      });\n      renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](color));\n      renderer.setSize(W, H);\n      renderer.setPixelRatio(window.devicePixelRatio);\n      return renderer;\n    }\n  }, {\n    key: \"initHelper\",\n    value: function initHelper(scene) {\n      var axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__[\"AxesHelper\"](30);\n      scene.add(axesHelper);\n    }\n  }, {\n    key: \"render\",\n    value: function render(control, renderer, scene, camera, onBeforeRender) {\n      var rendering = function rendering() {\n        Common.ts;\n\n        if (onBeforeRender) {\n          onBeforeRender();\n        }\n\n        control.update();\n        renderer.render(scene, camera);\n        requestAnimationFrame(rendering);\n      };\n\n      rendering();\n    }\n  }]);\n\n  return Common;\n}();\n\n//# sourceURL=webpack:///./demoSrc/Common.js?");

/***/ }),

/***/ "./demoSrc/demoBloom.js":
/*!******************************!*\
  !*** ./demoSrc/demoBloom.js ***!
  \******************************/
/*! exports provided: StudyBloom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StudyBloom\", function() { return StudyBloom; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Common */ \"./demoSrc/Common.js\");\n/* harmony import */ var _bin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bin */ \"./bin/index.js\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_SMAAPass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/postprocessing/SMAAPass */ \"./node_modules/three/examples/jsm/postprocessing/SMAAPass.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar StudyBloom =\n/*#__PURE__*/\nfunction () {\n  function StudyBloom() {\n    _classCallCheck(this, StudyBloom);\n\n    var W = 640;\n    var H = 480;\n    var scene = _Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initScene();\n    scene.fog = new three__WEBPACK_IMPORTED_MODULE_0__[\"Fog\"](0x000000, 80, 160);\n    _Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initLight(scene);\n    var camera = _Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initCamera(scene, W, H);\n    var renderer = _Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initRenderer(W, H);\n    var control = _Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initControl(camera, renderer);\n    _Common__WEBPACK_IMPORTED_MODULE_1__[\"Common\"].initHelper(scene);\n    this.initObject(scene);\n    this.postRenderer = new _bin__WEBPACK_IMPORTED_MODULE_2__[\"PostProcessRenderer\"](scene, camera, renderer);\n    var size = this.postRenderer.getSize();\n    var renderPass = new three_examples_jsm_postprocessing_RenderPass__WEBPACK_IMPORTED_MODULE_4__[\"RenderPass\"](scene, camera);\n    this.bloom = new _bin__WEBPACK_IMPORTED_MODULE_2__[\"BloomEffectComposer\"](scene, renderer, {\n      renderPass: renderPass\n    });\n    var mixPass = new _bin__WEBPACK_IMPORTED_MODULE_2__[\"MixShaderPass\"](this.bloom.result);\n    var smaaPass = new three_examples_jsm_postprocessing_SMAAPass__WEBPACK_IMPORTED_MODULE_5__[\"SMAAPass\"](size.width, size.height);\n    this.postRenderer.composers.push(this.bloom);\n    this.postRenderer.addComposer([mixPass, smaaPass], renderer, renderPass);\n    this.postRenderer.start();\n    this.initGUI();\n  }\n\n  _createClass(StudyBloom, [{\n    key: \"initObject\",\n    value: function initObject(scene) {\n      var spot = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointLight\"](0xffffff, 3, 0, 2);\n      spot.position.set(0, 0, 0);\n      scene.add(spot);\n      var helper = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointLightHelper\"](spot, 2, 0);\n      scene.add(helper);\n      var geo = new three__WEBPACK_IMPORTED_MODULE_0__[\"SphereGeometry\"](10, 32, 32);\n      var mat = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshLambertMaterial\"]({\n        fog: scene.fog !== undefined\n      });\n      mat.color = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xff6666);\n      this.center = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geo, mat);\n      this.center.layers.enable(_bin__WEBPACK_IMPORTED_MODULE_2__[\"BloomEffectComposer\"].BLOOM);\n      scene.add(this.center);\n      this.satellite = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geo, mat.clone());\n      this.satellite.position.set(30, 0, 0);\n      scene.add(this.satellite);\n      var satellite02 = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geo, mat);\n      satellite02.position.set(-30, 0, 0);\n      scene.add(satellite02);\n    }\n  }, {\n    key: \"initGUI\",\n    value: function initGUI() {\n      var gui = new dat_gui__WEBPACK_IMPORTED_MODULE_3__[\"GUI\"]();\n      this.initGUIBloom(gui);\n      this.initGUISatellite(gui);\n      this.initPassGUI(gui);\n      this.initGUIResolution(gui);\n    }\n  }, {\n    key: \"initGUIBloom\",\n    value: function initGUIBloom(gui) {\n      var _this = this;\n\n      var prop = {\n        bloomCenter: true,\n        bloomSatellite: false\n      };\n\n      var switchBloom = function switchBloom(target, isBloom) {\n        if (isBloom) {\n          target.layers.enable(_bin__WEBPACK_IMPORTED_MODULE_2__[\"BloomEffectComposer\"].BLOOM);\n        } else {\n          target.layers.disable(_bin__WEBPACK_IMPORTED_MODULE_2__[\"BloomEffectComposer\"].BLOOM);\n        }\n      };\n\n      var folder = gui.addFolder(\"bloom\");\n      folder.add(prop, \"bloomCenter\").onChange(function (val) {\n        switchBloom(_this.center, val);\n      });\n      folder.add(prop, \"bloomSatellite\").onChange(function (val) {\n        switchBloom(_this.satellite, val);\n      });\n      folder.open();\n    }\n  }, {\n    key: \"initGUISatellite\",\n    value: function initGUISatellite(gui) {\n      var folder = gui.addFolder(\"Satellite\");\n      folder.add(this.satellite.material, \"transparent\");\n      folder.add(this.satellite.material, \"opacity\", 0.0, 1.0);\n      folder.open();\n    }\n  }, {\n    key: \"initPassGUI\",\n    value: function initPassGUI(gui) {\n      var folder = gui.addFolder(\"renderer\");\n      folder.add(this.bloom.bloomPass, \"threshold\", 0.0, 1.0);\n      folder.add(this.bloom.bloomPass, \"strength\", 0.0, 4.0);\n      folder.add(this.bloom.bloomPass, \"radius\", 0.0, 1.0);\n      folder.open();\n    }\n  }, {\n    key: \"initGUIResolution\",\n    value: function initGUIResolution(gui) {\n      var _this2 = this;\n\n      var size = this.postRenderer.getSize();\n      var prop = {\n        width: size.width,\n        height: size.height\n      };\n\n      var onChange = function onChange() {\n        _this2.postRenderer.setSize(prop.width, prop.height);\n      };\n\n      var folder = gui.addFolder(\"Resolution\");\n      folder.add(prop, \"width\", 2, 1920).step(1).onChange(onChange);\n      folder.add(prop, \"height\", 2, 1080).step(1).onChange(onChange);\n      folder.open();\n    }\n  }]);\n\n  return StudyBloom;\n}();\n\nwindow.onload = function () {\n  var study = new StudyBloom();\n};\n\n//# sourceURL=webpack:///./demoSrc/demoBloom.js?");

/***/ })

/******/ });