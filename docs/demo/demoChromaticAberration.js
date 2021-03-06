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

/***/ "./demoSrc/Common.js":
/*!***************************!*\
  !*** ./demoSrc/Common.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Common\": () => (/* binding */ Common)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\nclass Common {\n  static initScene() {\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    return scene;\n  }\n\n  static initLight(scene) {\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1.0);\n    scene.add(ambientLight);\n    return ambientLight;\n  }\n\n  static initCamera(scene, W, H, near = 1, far = 400) {\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, W / H, near, far);\n    camera.position.set(0, 0, 100);\n    camera.updateMatrixWorld(false);\n    scene.add(camera);\n    return camera;\n  }\n\n  static initControl(camera, render) {\n    let domElement;\n\n    if (render) {\n      domElement = render.domElement;\n    }\n\n    const control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(camera, domElement);\n    control.update();\n    return control;\n  }\n\n  static initRenderer(W, H, option) {\n    option = Object.assign({\n      color: 0x000000,\n      id: \"webgl-canvas\",\n      antialias: true\n    }, option);\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n      canvas: document.getElementById(option.id),\n      antialias: option.antialias\n    });\n    renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__.Color(option.color));\n    renderer.setSize(W, H);\n    renderer.setPixelRatio(window.devicePixelRatio);\n    return renderer;\n  }\n\n  static initHelper(scene) {\n    const axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__.AxesHelper(30);\n    scene.add(axesHelper);\n  }\n\n}\n\n//# sourceURL=webpack://threejs-postprocess/./demoSrc/Common.js?");

/***/ }),

/***/ "./demoSrc/demoChromaticAberration.js":
/*!********************************************!*\
  !*** ./demoSrc/demoChromaticAberration.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Study\": () => (/* binding */ Study)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Common */ \"./demoSrc/Common.js\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib */ \"./lib/index.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var raf_ticker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! raf-ticker */ \"./node_modules/raf-ticker/esm/index.js\");\n\n\n\n\n\nclass Study {\n  constructor() {\n    const W = 640;\n    const H = 480;\n    const scene = _Common__WEBPACK_IMPORTED_MODULE_1__.Common.initScene();\n    scene.fog = new three__WEBPACK_IMPORTED_MODULE_0__.Fog(0x000000, 80, 160);\n    _Common__WEBPACK_IMPORTED_MODULE_1__.Common.initLight(scene);\n    const camera = _Common__WEBPACK_IMPORTED_MODULE_1__.Common.initCamera(scene, W, H);\n    const renderer = _Common__WEBPACK_IMPORTED_MODULE_1__.Common.initRenderer(W, H);\n    const control = _Common__WEBPACK_IMPORTED_MODULE_1__.Common.initControl(camera, renderer);\n    _Common__WEBPACK_IMPORTED_MODULE_1__.Common.initHelper(scene);\n    this.initObject(scene);\n    const postProcessRender = new _lib__WEBPACK_IMPORTED_MODULE_3__.PostProcessRenderer(scene, camera, renderer);\n    const pass = new _lib__WEBPACK_IMPORTED_MODULE_3__.ChromaticAberrationShaderPass();\n    postProcessRender.addComposer([pass]);\n    raf_ticker__WEBPACK_IMPORTED_MODULE_4__.RAFTicker.on(raf_ticker__WEBPACK_IMPORTED_MODULE_4__.RAFTickerEventType.tick, postProcessRender.render);\n    this.initGUI(pass);\n  }\n\n  initObject(scene) {\n    const spot = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 3, 0, 2);\n    spot.position.set(0, 0, 0);\n    scene.add(spot);\n    const helper = new three__WEBPACK_IMPORTED_MODULE_0__.PointLightHelper(spot, 2, 0);\n    scene.add(helper);\n    const geo = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(10, 6, 6);\n    const mat = new three__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({\n      fog: scene.fog !== undefined\n    });\n    mat.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xff6666);\n    mat.wireframe = true;\n    const center = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geo, mat);\n    scene.add(center);\n    const satellite = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geo, mat.clone());\n    satellite.position.set(30, 0, 0);\n    scene.add(satellite);\n    const satellite02 = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geo, mat);\n    satellite02.position.set(-30, 0, 0);\n    scene.add(satellite02);\n  }\n\n  initGUI(pass) {\n    const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_2__.GUI();\n    this.initGUIPass(gui, pass);\n  }\n\n  initGUIPass(gui, pass) {\n    const folder = gui.addFolder(\"Chromatic Aberration\");\n    folder.add(pass, \"rate\", 0.0, 3.0);\n    folder.add(pass, \"radiusInner\", 0.0, 3.0);\n    folder.add(pass, \"radiusOuter\", 0.0, 3.0);\n    folder.open();\n  }\n\n}\n\nwindow.onload = () => {\n  const study = new Study();\n};\n\n//# sourceURL=webpack://threejs-postprocess/./demoSrc/demoChromaticAberration.js?");

/***/ }),

/***/ "./lib/bloom/BloomEffectComposer.js":
/*!******************************************!*\
  !*** ./lib/bloom/BloomEffectComposer.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.BloomEffectComposer = void 0;\n\nvar three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar PostProcessEffectComposer_1 = __webpack_require__(/*! ../postprocess/PostProcessEffectComposer */ \"./lib/postprocess/PostProcessEffectComposer.js\");\n\nvar UnrealBloomPass_1 = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n\nvar postprocess_1 = __webpack_require__(/*! ../postprocess */ \"./lib/postprocess/index.js\");\n\nvar MaterialSwitcher_1 = __webpack_require__(/*! ./MaterialSwitcher */ \"./lib/bloom/MaterialSwitcher.js\");\n/**\n * 切り替え可能なUnrealBloomPassを内包したEffectComposer.\n * BloomEffectComposer.BLOOMレイヤーに含まれるオブジェクトのみをBloomさせる.\n */\n\n\nvar BloomEffectComposer =\n/** @class */\nfunction (_super) {\n  __extends(BloomEffectComposer, _super);\n\n  function BloomEffectComposer(scene, renderer, renderPassOption) {\n    var _this = _super.call(this, renderer) || this;\n\n    _this.switcher = new MaterialSwitcher_1.MaterialSwitcher(scene);\n    var size = renderer.getSize(new three_1.Vector2());\n    _this.bloomPass = new UnrealBloomPass_1.UnrealBloomPass(size, 1.5, 0.4, 0.4); // TODO : PR d.ts\n    // @ts-ignore\n\n    _this.renderToScreen = false;\n    postprocess_1.RenderPassOption.init(renderPassOption);\n\n    _this.addPass(renderPassOption.renderPass);\n\n    _this.addPass(_this.bloomPass);\n\n    _this.onBeforeRender = _this.switcher.darkenNonBloomed;\n    _this.onAfterRender = _this.switcher.restoreMaterial;\n    return _this;\n  }\n\n  Object.defineProperty(BloomEffectComposer.prototype, \"result\", {\n    /**\n     * 描画結果を反映したテクスチャを取得する。\n     */\n    get: function () {\n      return this.renderTarget2.texture;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  BloomEffectComposer.ENTIRE = 0;\n  BloomEffectComposer.BLOOM = 30;\n  return BloomEffectComposer;\n}(PostProcessEffectComposer_1.PostProcessEffectComposer);\n\nexports.BloomEffectComposer = BloomEffectComposer;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/bloom/BloomEffectComposer.js?");

/***/ }),

/***/ "./lib/bloom/MaterialStorage.js":
/*!**************************************!*\
  !*** ./lib/bloom/MaterialStorage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MaterialStorage = void 0;\n/**\n * Bloom設定に応じて、オリジナルのマテリアルを格納するためのオブジェクト。\n * Object3D.userData.materialStorageに格納される。\n */\n\nvar MaterialStorage =\n/** @class */\nfunction () {\n  function MaterialStorage() {}\n\n  MaterialStorage.prototype.updateMaterial = function (original) {\n    this.original = original;\n    this.copyMaterialArray();\n    this.darkenMaterialArray(this.dark);\n  };\n\n  MaterialStorage.prototype.copyMaterialArray = function () {\n    if (this.isClone()) {\n      this.cloneToDark();\n    } else {\n      this.copyToDark();\n    }\n  };\n  /**\n   * darkenマテリアルのコピーに、クローンを使用するかcopyを使用するかを判定する。\n   */\n\n\n  MaterialStorage.prototype.isClone = function () {\n    var darkenHead = this.getHeadMaterial(this.dark);\n    var originalHead = this.getHeadMaterial(this.original);\n\n    if (darkenHead == null || darkenHead.type !== originalHead.type) {\n      return true;\n    }\n\n    return false;\n  };\n\n  MaterialStorage.prototype.getHeadMaterial = function (mat) {\n    var isArray = Array.isArray(mat);\n    if (isArray) return mat[0];\n    return mat;\n  };\n\n  MaterialStorage.prototype.copyToDark = function () {\n    var _this = this;\n\n    var isArrayOriginal = Array.isArray(this.original);\n\n    if (isArrayOriginal) {\n      this.dark.forEach(function (drk, index) {\n        drk.copy(_this.original[index]);\n      });\n    } else {\n      this.dark.copy(this.original);\n    }\n  };\n\n  MaterialStorage.prototype.cloneToDark = function () {\n    var isArrayOriginal = Array.isArray(this.original);\n\n    if (isArrayOriginal) {\n      this.dark = this.original.map(function (val) {\n        return val.clone();\n      });\n    } else {\n      this.dark = this.original.clone();\n    }\n  };\n\n  MaterialStorage.prototype.darkenMaterialArray = function (material) {\n    if (!Array.isArray(material)) {\n      MaterialStorage.darkenMaterial(material);\n      return;\n    }\n\n    material.forEach(function (mat) {\n      MaterialStorage.darkenMaterial(mat);\n    });\n  };\n  /**\n   * マテリアルを反射光のない黒に書き換える。\n   * @param material\n   */\n\n\n  MaterialStorage.darkenMaterial = function (material) {\n    if (material[\"color\"] != null) {\n      material[\"color\"].setHex(0);\n    }\n\n    if (material[\"shininess\"] != null) {\n      material[\"shininess\"] = 0;\n    }\n\n    if (material[\"specular\"] != null) {\n      material[\"specular\"].setHex(0);\n    }\n\n    if (material[\"emissive\"] != null) {\n      material[\"emissive\"].setHex(0);\n    }\n  };\n\n  return MaterialStorage;\n}();\n\nexports.MaterialStorage = MaterialStorage;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/bloom/MaterialStorage.js?");

/***/ }),

/***/ "./lib/bloom/MaterialSwitcher.js":
/*!***************************************!*\
  !*** ./lib/bloom/MaterialSwitcher.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MaterialSwitcher = void 0;\n\nvar three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar BloomEffectComposer_1 = __webpack_require__(/*! ./BloomEffectComposer */ \"./lib/bloom/BloomEffectComposer.js\");\n\nvar MaterialStorage_1 = __webpack_require__(/*! ./MaterialStorage */ \"./lib/bloom/MaterialStorage.js\");\n/**\n * 切り替え可能なUnrealBloomPassにおいて、マテリアルの切り替え処理を担当するクラス。\n */\n\n\nvar MaterialSwitcher =\n/** @class */\nfunction () {\n  function MaterialSwitcher(scene) {\n    var _this = this;\n\n    this.darkenNonBloomed = function () {\n      _this.scene.traverseVisible(_this.switchToDarken);\n    };\n\n    this.restoreMaterial = function () {\n      _this.scene.traverseVisible(_this.switchToOriginalMaterial);\n    };\n    /**\n     * scene上の各オブジェクトに対して、マテリアルの切り替えを行う。\n     * bloom対象外であれば#000のマテリアルに。\n     *\n     * @param obj sceneをtraverseして取得したオブジェクト。\n     */\n\n\n    this.switchToDarken = function (obj) {\n      if (!_this.isDarken(obj)) return;\n\n      if (obj.userData.materialStorage == null) {\n        obj.userData.materialStorage = new MaterialStorage_1.MaterialStorage();\n      }\n\n      var storage = obj.userData.materialStorage;\n      var mesh = obj;\n      storage.updateMaterial(mesh.material);\n      mesh.material = storage.dark;\n    };\n    /**\n     * マテリアルストレージに格納されたオリジナルのマテリアル設定に復帰する。\n     * @param obj\n     */\n\n\n    this.switchToOriginalMaterial = function (obj) {\n      if (!_this.isDarken(obj)) return;\n      var mesh = obj;\n      mesh.material = obj.userData.materialStorage.original;\n    };\n\n    this.scene = scene;\n    this.layers = new three_1.Layers();\n    this.layers.set(BloomEffectComposer_1.BloomEffectComposer.BLOOM);\n  }\n  /**\n   * そのオブジェクトがbloomマスクの対象か否かを判定する。\n   * @param obj\n   */\n\n\n  MaterialSwitcher.prototype.isDarken = function (obj) {\n    if (obj.isMesh == null && obj.isLine == null) return false;\n    return !this.layers.test(obj.layers);\n  };\n\n  return MaterialSwitcher;\n}();\n\nexports.MaterialSwitcher = MaterialSwitcher;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/bloom/MaterialSwitcher.js?");

/***/ }),

/***/ "./lib/bloom/index.js":
/*!****************************!*\
  !*** ./lib/bloom/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./BloomEffectComposer */ \"./lib/bloom/BloomEffectComposer.js\"), exports);\n\n//# sourceURL=webpack://threejs-postprocess/./lib/bloom/index.js?");

/***/ }),

/***/ "./lib/chromaticAberration/ChromaticAberration.frag.glsl.js":
/*!******************************************************************!*\
  !*** ./lib/chromaticAberration/ChromaticAberration.frag.glsl.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports.default = function () {\n  //language=GLSL\n  return \"\\nuniform sampler2D tDiffuse;\\nuniform float rate;\\nuniform float radiusInner;\\nuniform float radiusOuter;\\n\\nvarying vec2 vUv;\\n\\nvoid main() {\\n  float distance = length( vUv - 0.5 )*2.0;\\n  distance = smoothstep( radiusInner, radiusOuter, distance);\\n  float shift = rate * distance * 0.01;\\n\\n  float r = texture2D( tDiffuse, vUv + vec2( shift, 0.0 ) ).r;\\n  float g = texture2D( tDiffuse, vUv ).g;\\n  float b = texture2D( tDiffuse, vUv - vec2( shift, 0.0 ) ).b;\\n\\n  gl_FragColor = vec4( vec3(r, g, b) , 1.0 );\\n}\\n  \";\n};\n\n//# sourceURL=webpack://threejs-postprocess/./lib/chromaticAberration/ChromaticAberration.frag.glsl.js?");

/***/ }),

/***/ "./lib/chromaticAberration/ChromaticAberrationShader.js":
/*!**************************************************************!*\
  !*** ./lib/chromaticAberration/ChromaticAberrationShader.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ChromaticAberrationShader = void 0;\n\nvar three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nvar ChromaticAberration_frag_glsl_1 = __importDefault(__webpack_require__(/*! ./ChromaticAberration.frag.glsl */ \"./lib/chromaticAberration/ChromaticAberration.frag.glsl.js\"));\n\nvar ChromaticAberrationShader =\n/** @class */\nfunction (_super) {\n  __extends(ChromaticAberrationShader, _super);\n\n  function ChromaticAberrationShader() {\n    var _this = _super.call(this) || this;\n\n    _this.fragmentShader = ChromaticAberration_frag_glsl_1.default();\n    return _this;\n  }\n\n  ChromaticAberrationShader.prototype.initUniform = function () {\n    _super.prototype.initUniform.call(this);\n\n    this.uniforms = three_1.UniformsUtils.merge([this.uniforms, {\n      rate: {\n        value: 1.0\n      },\n      radiusInner: {\n        value: 0.25\n      },\n      radiusOuter: {\n        value: Math.sqrt(2.0)\n      }\n    }]);\n  };\n\n  return ChromaticAberrationShader;\n}(index_1.PostProcessShader);\n\nexports.ChromaticAberrationShader = ChromaticAberrationShader;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/chromaticAberration/ChromaticAberrationShader.js?");

/***/ }),

/***/ "./lib/chromaticAberration/ChromaticAberrationShaderPass.js":
/*!******************************************************************!*\
  !*** ./lib/chromaticAberration/ChromaticAberrationShaderPass.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ChromaticAberrationShaderPass = void 0;\n\nvar ChromaticAberrationShader_1 = __webpack_require__(/*! ./ChromaticAberrationShader */ \"./lib/chromaticAberration/ChromaticAberrationShader.js\");\n\nvar index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nvar ChromaticAberrationShaderPass =\n/** @class */\nfunction (_super) {\n  __extends(ChromaticAberrationShaderPass, _super);\n\n  function ChromaticAberrationShaderPass() {\n    return _super.call(this, new ChromaticAberrationShader_1.ChromaticAberrationShader()) || this;\n  }\n\n  Object.defineProperty(ChromaticAberrationShaderPass.prototype, \"rate\", {\n    get: function () {\n      return this.uniforms.rate.value;\n    },\n    set: function (value) {\n      this.uniforms.rate.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(ChromaticAberrationShaderPass.prototype, \"radiusInner\", {\n    get: function () {\n      return this.uniforms.radiusInner.value;\n    },\n    set: function (value) {\n      this.uniforms.radiusInner.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(ChromaticAberrationShaderPass.prototype, \"radiusOuter\", {\n    get: function () {\n      return this.uniforms.radiusOuter.value;\n    },\n    set: function (value) {\n      this.uniforms.radiusOuter.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  return ChromaticAberrationShaderPass;\n}(index_1.PostProcessShaderPass);\n\nexports.ChromaticAberrationShaderPass = ChromaticAberrationShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/chromaticAberration/ChromaticAberrationShaderPass.js?");

/***/ }),

/***/ "./lib/chromaticAberration/index.js":
/*!******************************************!*\
  !*** ./lib/chromaticAberration/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./ChromaticAberrationShaderPass */ \"./lib/chromaticAberration/ChromaticAberrationShaderPass.js\"), exports);\n\n//# sourceURL=webpack://threejs-postprocess/./lib/chromaticAberration/index.js?");

/***/ }),

/***/ "./lib/colorFilter/ColorFilter.frag.glsl.js":
/*!**************************************************!*\
  !*** ./lib/colorFilter/ColorFilter.frag.glsl.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports.default = function () {\n  //language=GLSL\n  return \"\\nuniform sampler2D tDiffuse;\\nvarying vec2 vUv;\\n\\nuniform float h;\\nuniform float multiS;\\nuniform float multiB;\\nuniform float addS;\\nuniform float addB;\\n\\n//  Function Patricio Gonzalez Vivo\\n//  https://thebookofshaders.com/06/\\nvec3 rgb2hsb( in vec3 c ){\\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\\n    vec4 p = mix(vec4(c.bg, K.wz),\\n    vec4(c.gb, K.xy),\\n    step(c.b, c.g));\\n    vec4 q = mix(vec4(p.xyw, c.r),\\n    vec4(c.r, p.yzx),\\n    step(p.x, c.r));\\n    float d = q.x - min(q.w, q.y);\\n    float e = 1.0e-10;\\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),\\n    d / (q.x + e),\\n    q.x);\\n}\\n\\n//  Function from I\\u00F1igo Quiles\\n//  https://www.shadertoy.com/view/MsS3Wc\\nvec3 hsb2rgb( in vec3 c ){\\n    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),\\n    6.0)-3.0)-1.0,\\n    0.0,\\n    1.0 );\\n    rgb = rgb*rgb*(3.0-2.0*rgb);\\n    return c.z * mix(vec3(1.0), rgb, c.y);\\n}\\n\\nvoid main() {\\n  vec4 color = texture2D( tDiffuse, vUv );\\n  vec3 hsb = rgb2hsb(color.rgb);\\n  hsb.x += h;\\n  hsb.y *= multiS;\\n  hsb.z *= multiB;\\n  hsb.y += addS;\\n  hsb.z += addB;\\n  color.rgb = hsb2rgb(hsb);\\n\\n  gl_FragColor = color;\\n}\\n  \";\n};\n\n//# sourceURL=webpack://threejs-postprocess/./lib/colorFilter/ColorFilter.frag.glsl.js?");

/***/ }),

/***/ "./lib/colorFilter/ColorFilterShader.js":
/*!**********************************************!*\
  !*** ./lib/colorFilter/ColorFilterShader.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ColorFilterShader = void 0;\n\nvar three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nvar ColorFilter_frag_glsl_1 = __importDefault(__webpack_require__(/*! ./ColorFilter.frag.glsl */ \"./lib/colorFilter/ColorFilter.frag.glsl.js\"));\n\nvar ColorFilterShader =\n/** @class */\nfunction (_super) {\n  __extends(ColorFilterShader, _super);\n\n  function ColorFilterShader() {\n    var _this = _super.call(this) || this;\n\n    _this.fragmentShader = ColorFilter_frag_glsl_1.default();\n    return _this;\n  }\n\n  ColorFilterShader.prototype.initUniform = function () {\n    _super.prototype.initUniform.call(this);\n\n    this.uniforms = three_1.UniformsUtils.merge([this.uniforms, {\n      h: {\n        value: 0.0\n      },\n      multiS: {\n        value: 1.0\n      },\n      multiB: {\n        value: 1.0\n      },\n      addS: {\n        value: 0.0\n      },\n      addB: {\n        value: 0.0\n      }\n    }]);\n  };\n\n  return ColorFilterShader;\n}(index_1.PostProcessShader);\n\nexports.ColorFilterShader = ColorFilterShader;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/colorFilter/ColorFilterShader.js?");

/***/ }),

/***/ "./lib/colorFilter/ColorFilterShaderPass.js":
/*!**************************************************!*\
  !*** ./lib/colorFilter/ColorFilterShaderPass.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ColorFilterShaderPass = void 0;\n\nvar ColorFilterShader_1 = __webpack_require__(/*! ./ColorFilterShader */ \"./lib/colorFilter/ColorFilterShader.js\");\n\nvar index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n/**\n * hsb値をオフセットして、色を変化させるシェーダーパス\n *\n * 例 )\n * multiS = 0.0, addB = 1.0にすると白に飽和する。\n * multiB = 0.0, もしくはaddB = -1.0 でブラックアウト。\n */\n\n\nvar ColorFilterShaderPass =\n/** @class */\nfunction (_super) {\n  __extends(ColorFilterShaderPass, _super);\n\n  function ColorFilterShaderPass() {\n    return _super.call(this, new ColorFilterShader_1.ColorFilterShader()) || this;\n  }\n\n  Object.defineProperty(ColorFilterShaderPass.prototype, \"h\", {\n    get: function () {\n      return this.uniforms.h.value;\n    },\n    set: function (value) {\n      this.uniforms.h.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(ColorFilterShaderPass.prototype, \"multiS\", {\n    get: function () {\n      return this.uniforms.multiS.value;\n    },\n    set: function (value) {\n      this.uniforms.multiS.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(ColorFilterShaderPass.prototype, \"multiB\", {\n    get: function () {\n      return this.uniforms.multiB.value;\n    },\n    set: function (value) {\n      this.uniforms.multiB.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(ColorFilterShaderPass.prototype, \"addS\", {\n    get: function () {\n      return this.uniforms.addS.value;\n    },\n    set: function (value) {\n      this.uniforms.addS.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(ColorFilterShaderPass.prototype, \"addB\", {\n    get: function () {\n      return this.uniforms.addB.value;\n    },\n    set: function (value) {\n      this.uniforms.addB.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  return ColorFilterShaderPass;\n}(index_1.PostProcessShaderPass);\n\nexports.ColorFilterShaderPass = ColorFilterShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/colorFilter/ColorFilterShaderPass.js?");

/***/ }),

/***/ "./lib/colorFilter/index.js":
/*!**********************************!*\
  !*** ./lib/colorFilter/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./ColorFilterShaderPass */ \"./lib/colorFilter/ColorFilterShaderPass.js\"), exports);\n\n//# sourceURL=webpack://threejs-postprocess/./lib/colorFilter/index.js?");

/***/ }),

/***/ "./lib/displacement/DisplacementMap.frag.glsl.js":
/*!*******************************************************!*\
  !*** ./lib/displacement/DisplacementMap.frag.glsl.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports.default = function () {\n  //language=GLSL\n  return \"\\nuniform sampler2D tDiffuse;\\nvarying vec2 vUv;\\n\\nuniform float strengthX;\\nuniform float strengthY;\\nuniform bool hasMap;\\nuniform sampler2D map;\\nuniform vec2 aspect;\\n\\nvoid main() {\\n  vec2 uv = vUv;\\n  if( hasMap ){\\n    vec2 fixedUV = vUv - 0.5;\\n    fixedUV *= aspect;\\n    fixedUV += 0.5;\\n    \\n    vec4 displacement = texture2D( map, fixedUV );\\n    uv +=  displacement.rg * vec2 (strengthX, strengthY);\\n }\\n\\n  vec4 color = texture2D( tDiffuse, uv );\\n  gl_FragColor = color;\\n}\\n  \";\n};\n\n//# sourceURL=webpack://threejs-postprocess/./lib/displacement/DisplacementMap.frag.glsl.js?");

/***/ }),

/***/ "./lib/displacement/DisplacementMapShader.js":
/*!***************************************************!*\
  !*** ./lib/displacement/DisplacementMapShader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.DisplacementMapShader = void 0;\n\nvar three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nvar DisplacementMap_frag_glsl_1 = __importDefault(__webpack_require__(/*! ./DisplacementMap.frag.glsl */ \"./lib/displacement/DisplacementMap.frag.glsl.js\"));\n\nvar three_2 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar DisplacementMapShader =\n/** @class */\nfunction (_super) {\n  __extends(DisplacementMapShader, _super);\n\n  function DisplacementMapShader() {\n    var _this = _super.call(this) || this;\n\n    _this.fragmentShader = DisplacementMap_frag_glsl_1.default();\n    return _this;\n  }\n\n  DisplacementMapShader.prototype.initUniform = function () {\n    _super.prototype.initUniform.call(this);\n\n    this.uniforms = three_1.UniformsUtils.merge([this.uniforms, {\n      strengthX: {\n        value: 0.0\n      },\n      strengthY: {\n        value: 0.0\n      },\n      map: {\n        value: null\n      },\n      hasMap: {\n        value: false\n      },\n      aspect: {\n        value: new three_2.Vector2(1.0, 1.0)\n      }\n    }]);\n  };\n\n  return DisplacementMapShader;\n}(index_1.PostProcessShader);\n\nexports.DisplacementMapShader = DisplacementMapShader;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/displacement/DisplacementMapShader.js?");

/***/ }),

/***/ "./lib/displacement/DisplacementMapShaderPass.js":
/*!*******************************************************!*\
  !*** ./lib/displacement/DisplacementMapShaderPass.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.DisplacementMapShaderPass = void 0;\n\nvar DisplacementMapShader_1 = __webpack_require__(/*! ./DisplacementMapShader */ \"./lib/displacement/DisplacementMapShader.js\");\n\nvar index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nvar three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar three_2 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/**\n * DisplacementMapによって画面を歪ませるShaderPass\n */\n\n\nvar DisplacementMapShaderPass =\n/** @class */\nfunction (_super) {\n  __extends(DisplacementMapShaderPass, _super);\n\n  function DisplacementMapShaderPass() {\n    return _super.call(this, new DisplacementMapShader_1.DisplacementMapShader()) || this;\n  }\n\n  Object.defineProperty(DisplacementMapShaderPass.prototype, \"map\", {\n    get: function () {\n      return this.uniforms.map.value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  /**\n   * DisplacementMapを読み込む。\n   * 読み込み後にアスペクト比の補正を行う。\n   *\n   * @param url\n   */\n\n  DisplacementMapShaderPass.prototype.loadMap = function (url) {\n    var _this = this;\n\n    var texture = new three_1.TextureLoader().load(url, function (texture) {\n      _this.mapSizeW = texture.image.width;\n      _this.mapSizeH = texture.image.height;\n\n      _this.updateAspect();\n    });\n    this.uniforms.map.value = texture;\n    this.uniforms.hasMap.value = texture != null;\n  };\n\n  Object.defineProperty(DisplacementMapShaderPass.prototype, \"strengthX\", {\n    get: function () {\n      return this.uniforms.strengthX.value;\n    },\n    set: function (value) {\n      this.uniforms.strengthX.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(DisplacementMapShaderPass.prototype, \"strengthY\", {\n    get: function () {\n      return this.uniforms.strengthY.value;\n    },\n    set: function (value) {\n      this.uniforms.strengthY.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n\n  DisplacementMapShaderPass.prototype.setSize = function (width, height) {\n    _super.prototype.setSize.call(this, width, height);\n\n    this.rendererSizeW = width;\n    this.rendererSizeH = height;\n    this.updateAspect();\n  };\n\n  DisplacementMapShaderPass.prototype.updateAspect = function () {\n    if (this.mapSizeW == null || this.rendererSizeW == null) {\n      return;\n    }\n\n    var rendererAspect = this.rendererSizeW / this.rendererSizeH;\n    var mapAspect = this.mapSizeW / this.mapSizeH;\n\n    if (rendererAspect > mapAspect) {\n      this.uniforms.aspect.value = new three_2.Vector2(1.0, mapAspect / rendererAspect);\n    } else {\n      this.uniforms.aspect.value = new three_2.Vector2(rendererAspect / mapAspect, 1.0);\n    }\n  };\n\n  return DisplacementMapShaderPass;\n}(index_1.PostProcessShaderPass);\n\nexports.DisplacementMapShaderPass = DisplacementMapShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/displacement/DisplacementMapShaderPass.js?");

/***/ }),

/***/ "./lib/displacement/index.js":
/*!***********************************!*\
  !*** ./lib/displacement/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./DisplacementMapShaderPass */ \"./lib/displacement/DisplacementMapShaderPass.js\"), exports);\n\n//# sourceURL=webpack://threejs-postprocess/./lib/displacement/index.js?");

/***/ }),

/***/ "./lib/fxaa/FXAAShaderPass.js":
/*!************************************!*\
  !*** ./lib/fxaa/FXAAShaderPass.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.FXAAShaderPass = void 0;\n\nvar FXAAShaderModule = __importStar(__webpack_require__(/*! three/examples/jsm/shaders/FXAAShader */ \"./node_modules/three/examples/jsm/shaders/FXAAShader.js\"));\n\nvar postprocess_1 = __webpack_require__(/*! ../postprocess */ \"./lib/postprocess/index.js\");\n/**\n * FXAAShaderを組み込み済みのShaderPass\n */\n\n\nvar FXAAShaderPass =\n/** @class */\nfunction (_super) {\n  __extends(FXAAShaderPass, _super);\n  /**\n   * コンストラクタ\n   */\n\n\n  function FXAAShaderPass() {\n    return _super.call(this, FXAAShaderModule[\"FXAAShader\"]) || this;\n  }\n\n  FXAAShaderPass.prototype.setSize = function (width, height) {\n    _super.prototype.setSize.call(this, width, height);\n\n    var uniforms = this.material.uniforms;\n    uniforms.resolution.value.x = 1 / width;\n    uniforms.resolution.value.y = 1 / height;\n  };\n\n  return FXAAShaderPass;\n}(postprocess_1.PostProcessShaderPass);\n\nexports.FXAAShaderPass = FXAAShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/fxaa/FXAAShaderPass.js?");

/***/ }),

/***/ "./lib/fxaa/index.js":
/*!***************************!*\
  !*** ./lib/fxaa/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./FXAAShaderPass */ \"./lib/fxaa/FXAAShaderPass.js\"), exports);\n\n//# sourceURL=webpack://threejs-postprocess/./lib/fxaa/index.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./postprocess/ */ \"./lib/postprocess/index.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./peripheralLight/ */ \"./lib/peripheralLight/index.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./chromaticAberration/ */ \"./lib/chromaticAberration/index.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./mix/ */ \"./lib/mix/index.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./bloom/ */ \"./lib/bloom/index.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./fxaa/ */ \"./lib/fxaa/index.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./displacement/ */ \"./lib/displacement/index.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./colorFilter/ */ \"./lib/colorFilter/index.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./monotone/ */ \"./lib/monotone/index.js\"), exports);\n\n//# sourceURL=webpack://threejs-postprocess/./lib/index.js?");

/***/ }),

/***/ "./lib/mix/MixShader.frag.glsl.js":
/*!****************************************!*\
  !*** ./lib/mix/MixShader.frag.glsl.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports.default = function () {\n  //language=GLSL\n  return \"    \\nuniform sampler2D tDiffuse;\\nuniform sampler2D mixTexture;\\nvarying vec2 vUv;\\nvec4 getTexture( sampler2D map ) {\\n    return texture2D( map , vUv );\\n}\\nvoid main() {\\n    gl_FragColor = ( getTexture( tDiffuse ) + vec4( 1.0 ) * getTexture( mixTexture ) );\\n}\";\n};\n\n//# sourceURL=webpack://threejs-postprocess/./lib/mix/MixShader.frag.glsl.js?");

/***/ }),

/***/ "./lib/mix/MixShader.js":
/*!******************************!*\
  !*** ./lib/mix/MixShader.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MixShader = void 0;\n\nvar index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nvar MixShader_frag_glsl_1 = __importDefault(__webpack_require__(/*! ./MixShader.frag.glsl */ \"./lib/mix/MixShader.frag.glsl.js\"));\n\nvar three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar MixShader =\n/** @class */\nfunction (_super) {\n  __extends(MixShader, _super);\n\n  function MixShader() {\n    var _this = _super.call(this) || this;\n\n    _this.fragmentShader = MixShader_frag_glsl_1.default();\n    return _this;\n  }\n\n  MixShader.prototype.initUniform = function () {\n    _super.prototype.initUniform.call(this);\n\n    this.uniforms = three_1.UniformsUtils.merge([this.uniforms, {\n      mixTexture: {\n        value: null\n      }\n    }]);\n  };\n\n  return MixShader;\n}(index_1.PostProcessShader);\n\nexports.MixShader = MixShader;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/mix/MixShader.js?");

/***/ }),

/***/ "./lib/mix/MixShaderPass.js":
/*!**********************************!*\
  !*** ./lib/mix/MixShaderPass.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MixShaderPass = void 0;\n\nvar index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nvar MixShader_1 = __webpack_require__(/*! ./MixShader */ \"./lib/mix/MixShader.js\");\n/**\n * 他のエフェクトコンポーザーの描画結果を受け取り、自身のレンダリング結果に乗算するShaderPass\n */\n\n\nvar MixShaderPass =\n/** @class */\nfunction (_super) {\n  __extends(MixShaderPass, _super);\n\n  function MixShaderPass(mixTexture) {\n    var _this = _super.call(this, new MixShader_1.MixShader()) || this;\n\n    _this.mixTexture = mixTexture;\n    return _this;\n  }\n\n  Object.defineProperty(MixShaderPass.prototype, \"mixTexture\", {\n    get: function () {\n      return this.uniforms.mixTexture.value;\n    },\n    set: function (value) {\n      this.uniforms.mixTexture.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  return MixShaderPass;\n}(index_1.PostProcessShaderPass);\n\nexports.MixShaderPass = MixShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/mix/MixShaderPass.js?");

/***/ }),

/***/ "./lib/mix/index.js":
/*!**************************!*\
  !*** ./lib/mix/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./MixShaderPass */ \"./lib/mix/MixShaderPass.js\"), exports);\n\n//# sourceURL=webpack://threejs-postprocess/./lib/mix/index.js?");

/***/ }),

/***/ "./lib/monotone/Monotone.frag.glsl.js":
/*!********************************************!*\
  !*** ./lib/monotone/Monotone.frag.glsl.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports.default = function () {\n  //language=GLSL\n  return \"\\nuniform sampler2D tDiffuse;\\nvarying vec2 vUv;\\n\\nuniform float strength;\\nuniform vec3 color;\\n\\nvoid main() {\\n  vec4 original = texture2D( tDiffuse, vUv );\\n  vec3 luma = vec3(0.299, 0.587, 0.114);\\n  float v = dot(original.rgb, luma);\\n  gl_FragColor = vec4 (mix( original.rgb, v * color, strength), original.a);\\n}\\n  \";\n};\n\n//# sourceURL=webpack://threejs-postprocess/./lib/monotone/Monotone.frag.glsl.js?");

/***/ }),

/***/ "./lib/monotone/MonotoneShader.js":
/*!****************************************!*\
  !*** ./lib/monotone/MonotoneShader.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MonotoneShader = void 0;\n\nvar three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nvar Monotone_frag_glsl_1 = __importDefault(__webpack_require__(/*! ./Monotone.frag.glsl */ \"./lib/monotone/Monotone.frag.glsl.js\"));\n\nvar MonotoneShader =\n/** @class */\nfunction (_super) {\n  __extends(MonotoneShader, _super);\n\n  function MonotoneShader() {\n    var _this = _super.call(this) || this;\n\n    _this.fragmentShader = Monotone_frag_glsl_1.default();\n    return _this;\n  }\n\n  MonotoneShader.prototype.initUniform = function () {\n    _super.prototype.initUniform.call(this);\n\n    this.uniforms = three_1.UniformsUtils.merge([this.uniforms, {\n      strength: {\n        value: 1.0\n      },\n      color: {\n        value: new three_1.Color(0xffffff)\n      }\n    }]);\n  };\n\n  return MonotoneShader;\n}(index_1.PostProcessShader);\n\nexports.MonotoneShader = MonotoneShader;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/monotone/MonotoneShader.js?");

/***/ }),

/***/ "./lib/monotone/MonotoneShaderPass.js":
/*!********************************************!*\
  !*** ./lib/monotone/MonotoneShaderPass.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MonotoneShaderPass = void 0;\n\nvar MonotoneShader_1 = __webpack_require__(/*! ./MonotoneShader */ \"./lib/monotone/MonotoneShader.js\");\n\nvar index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n/**\n *\n */\n\n\nvar MonotoneShaderPass =\n/** @class */\nfunction (_super) {\n  __extends(MonotoneShaderPass, _super);\n\n  function MonotoneShaderPass() {\n    return _super.call(this, new MonotoneShader_1.MonotoneShader()) || this;\n  }\n\n  Object.defineProperty(MonotoneShaderPass.prototype, \"color\", {\n    get: function () {\n      return this.uniforms.color.value;\n    },\n    set: function (value) {\n      this.uniforms.color.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(MonotoneShaderPass.prototype, \"strength\", {\n    get: function () {\n      return this.uniforms.strength.value;\n    },\n    set: function (value) {\n      this.uniforms.strength.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  return MonotoneShaderPass;\n}(index_1.PostProcessShaderPass);\n\nexports.MonotoneShaderPass = MonotoneShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/monotone/MonotoneShaderPass.js?");

/***/ }),

/***/ "./lib/monotone/index.js":
/*!*******************************!*\
  !*** ./lib/monotone/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./MonotoneShaderPass */ \"./lib/monotone/MonotoneShaderPass.js\"), exports);\n\n//# sourceURL=webpack://threejs-postprocess/./lib/monotone/index.js?");

/***/ }),

/***/ "./lib/peripheralLight/PeripheralLight.frag.glsl.js":
/*!**********************************************************!*\
  !*** ./lib/peripheralLight/PeripheralLight.frag.glsl.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports.default = function () {\n  //language=GLSL\n  return \"\\nuniform sampler2D tDiffuse;\\nuniform float rate;\\nuniform float radiusInner;\\nuniform float radiusOuter;\\nuniform vec3 color;\\nvarying vec2 vUv;\\n\\nvoid main() {\\n  float distance = length( vUv - 0.5 )*2.0;\\n  distance = smoothstep( radiusInner, radiusOuter, distance);  \\n  float shift = rate * distance * 0.01;\\n\\n  vec4 original = texture2D( tDiffuse, vUv );\\n  vec3 result = mix( original.rgb, color, shift);\\n\\n  gl_FragColor = vec4( result , original.a );\\n}\\n  \";\n};\n\n//# sourceURL=webpack://threejs-postprocess/./lib/peripheralLight/PeripheralLight.frag.glsl.js?");

/***/ }),

/***/ "./lib/peripheralLight/PeripheralLightShader.js":
/*!******************************************************!*\
  !*** ./lib/peripheralLight/PeripheralLightShader.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PeripheralLightShader = void 0;\n\nvar three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nvar PeripheralLight_frag_glsl_1 = __importDefault(__webpack_require__(/*! ./PeripheralLight.frag.glsl */ \"./lib/peripheralLight/PeripheralLight.frag.glsl.js\"));\n\nvar PeripheralLightShader =\n/** @class */\nfunction (_super) {\n  __extends(PeripheralLightShader, _super);\n\n  function PeripheralLightShader() {\n    var _this = _super.call(this) || this;\n\n    _this.fragmentShader = PeripheralLight_frag_glsl_1.default();\n    return _this;\n  }\n\n  PeripheralLightShader.prototype.initUniform = function () {\n    _super.prototype.initUniform.call(this);\n\n    this.uniforms = three_1.UniformsUtils.merge([this.uniforms, {\n      rate: {\n        value: 5.0\n      },\n      radiusInner: {\n        value: 0.75\n      },\n      radiusOuter: {\n        value: Math.sqrt(2.0)\n      },\n      color: {\n        value: new three_1.Color(0, 0, 0)\n      }\n    }]);\n  };\n\n  return PeripheralLightShader;\n}(index_1.PostProcessShader);\n\nexports.PeripheralLightShader = PeripheralLightShader;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/peripheralLight/PeripheralLightShader.js?");

/***/ }),

/***/ "./lib/peripheralLight/PeripheralLightShaderPass.js":
/*!**********************************************************!*\
  !*** ./lib/peripheralLight/PeripheralLightShaderPass.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PeripheralLightShaderPass = void 0;\n\nvar PeripheralLightShader_1 = __webpack_require__(/*! ./PeripheralLightShader */ \"./lib/peripheralLight/PeripheralLightShader.js\");\n\nvar index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n/**\n * 周辺光量の減光を表現するフィルタ。\n */\n\n\nvar PeripheralLightShaderPass =\n/** @class */\nfunction (_super) {\n  __extends(PeripheralLightShaderPass, _super);\n\n  function PeripheralLightShaderPass() {\n    return _super.call(this, new PeripheralLightShader_1.PeripheralLightShader()) || this;\n  }\n\n  Object.defineProperty(PeripheralLightShaderPass.prototype, \"rate\", {\n    get: function () {\n      return this.uniforms.rate.value;\n    },\n    set: function (value) {\n      this.uniforms.rate.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(PeripheralLightShaderPass.prototype, \"radiusInner\", {\n    get: function () {\n      return this.uniforms.radiusInner.value;\n    },\n    set: function (value) {\n      this.uniforms.radiusInner.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(PeripheralLightShaderPass.prototype, \"radiusOuter\", {\n    get: function () {\n      return this.uniforms.radiusOuter.value;\n    },\n    set: function (value) {\n      this.uniforms.radiusOuter.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  Object.defineProperty(PeripheralLightShaderPass.prototype, \"color\", {\n    get: function () {\n      return this.uniforms.color.value;\n    },\n    set: function (value) {\n      this.uniforms.color.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  return PeripheralLightShaderPass;\n}(index_1.PostProcessShaderPass);\n\nexports.PeripheralLightShaderPass = PeripheralLightShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/peripheralLight/PeripheralLightShaderPass.js?");

/***/ }),

/***/ "./lib/peripheralLight/index.js":
/*!**************************************!*\
  !*** ./lib/peripheralLight/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./PeripheralLightShaderPass */ \"./lib/peripheralLight/PeripheralLightShaderPass.js\"), exports);\n\n//# sourceURL=webpack://threejs-postprocess/./lib/peripheralLight/index.js?");

/***/ }),

/***/ "./lib/postprocess/PostProcessEffectComposer.js":
/*!******************************************************!*\
  !*** ./lib/postprocess/PostProcessEffectComposer.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PostProcessEffectComposer = void 0;\n\nvar EffectComposer_1 = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/**\n * レンダリングの前後に任意の処理を実行する機能を追加したEffectComposer.\n */\n\n\nvar PostProcessEffectComposer =\n/** @class */\nfunction (_super) {\n  __extends(PostProcessEffectComposer, _super);\n\n  function PostProcessEffectComposer() {\n    var _this = _super !== null && _super.apply(this, arguments) || this;\n\n    _this.enabled = true;\n    return _this;\n  }\n\n  return PostProcessEffectComposer;\n}(EffectComposer_1.EffectComposer);\n\nexports.PostProcessEffectComposer = PostProcessEffectComposer;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/postprocess/PostProcessEffectComposer.js?");

/***/ }),

/***/ "./lib/postprocess/PostProcessRenderer.js":
/*!************************************************!*\
  !*** ./lib/postprocess/PostProcessRenderer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.RenderPassOption = exports.PostProcessRenderer = void 0;\n\nvar three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar RenderPass_1 = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n\nvar PostProcessEffectComposer_1 = __webpack_require__(/*! ./PostProcessEffectComposer */ \"./lib/postprocess/PostProcessEffectComposer.js\");\n\nvar raf_ticker_1 = __webpack_require__(/*! raf-ticker */ \"./node_modules/raf-ticker/esm/index.js\");\n/**\n * 複数のエフェクトコンポーザーと、WebGLRendererを管理し、\n * 連続してポストエフェクト処理を行うためのクラス。\n */\n\n\nvar PostProcessRenderer =\n/** @class */\nfunction () {\n  function PostProcessRenderer(scene, camera, renderer) {\n    var _this = this;\n\n    this._composers = [];\n\n    this.render = function (arg) {\n      var delta;\n\n      if (arg instanceof raf_ticker_1.RAFTickerEvent) {\n        delta = arg.delta;\n      } else {\n        delta = arg;\n      }\n\n      _this._composers.forEach(function (composer) {\n        if (!composer.enabled) return;\n        if (composer.onBeforeRender) composer.onBeforeRender(delta);\n        composer.render(delta);\n        if (composer.onAfterRender) composer.onAfterRender(delta);\n      });\n    };\n\n    this.renderer = renderer;\n    this.scene = scene;\n    this.camera = camera;\n  }\n\n  Object.defineProperty(PostProcessRenderer.prototype, \"composers\", {\n    get: function () {\n      return this._composers;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  /**\n   * シェーダーパスを挟んだEffectComposerを生成、登録する。\n   * @param passes\n   * @param renderPass\n   */\n\n  PostProcessRenderer.prototype.addComposer = function (passes, renderPass) {\n    var composer = PostProcessRenderer.getComposer(passes, this.renderer, {\n      scene: this.scene,\n      camera: this.camera,\n      renderPass: renderPass\n    });\n\n    this._composers.push(composer);\n\n    return composer;\n  };\n  /**\n   * コンポーザーを生成する。\n   * @param passes\n   * @param renderer\n   * @param renderPassOption\n   */\n\n\n  PostProcessRenderer.getComposer = function (passes, renderer, renderPassOption) {\n    RenderPassOption.init(renderPassOption);\n    var composer = new PostProcessEffectComposer_1.PostProcessEffectComposer(renderer);\n    composer.addPass(renderPassOption.renderPass);\n    passes.forEach(function (p) {\n      composer.addPass(p);\n    });\n    return composer;\n  };\n  /**\n   * ウィンドウリサイズ時の処理\n   * @param w\n   * @param h\n   */\n\n\n  PostProcessRenderer.prototype.setSize = function (w, h) {\n    this.camera.aspect = w / h;\n    this.camera.updateProjectionMatrix();\n    this.renderer.setPixelRatio(window.devicePixelRatio);\n    this.renderer.setSize(w, h);\n\n    this._composers.forEach(function (composer) {\n      composer.setSize(w, h);\n    });\n  };\n  /**\n   * WebGLRendererのレンダリングサイズを取得する。\n   */\n\n\n  PostProcessRenderer.prototype.getSize = function () {\n    return this.renderer.getSize(new three_1.Vector2());\n  };\n\n  return PostProcessRenderer;\n}();\n\nexports.PostProcessRenderer = PostProcessRenderer;\n/**\n * getComposer関数で利用するRenderPass初期化オプション\n *\n * sceneとcameraのセット、もしくはrenderPassインスタンスを代入する必要がある。\n * sceneとcameraのセットの場合 : RenderPassインスタンスを生成する。\n * renderPassインスタンスの場合 : そのままrenderPassインスタンスを利用する。\n */\n\nvar RenderPassOption =\n/** @class */\nfunction () {\n  function RenderPassOption() {}\n\n  RenderPassOption.init = function (option) {\n    if (option.renderPass == null) {\n      option.renderPass = new RenderPass_1.RenderPass(option.scene, option.camera);\n    }\n  };\n\n  return RenderPassOption;\n}();\n\nexports.RenderPassOption = RenderPassOption;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/postprocess/PostProcessRenderer.js?");

/***/ }),

/***/ "./lib/postprocess/PostProcessShader.js":
/*!**********************************************!*\
  !*** ./lib/postprocess/PostProcessShader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PostProcessShader = void 0;\n/**\n * EffectComposer用のShaderオブジェクトに必要な要素を定義したクラス。\n * このクラスのインスタンスをShaderPassに渡すことで、任意のシェーダーエフェクトコンポーザーになる。\n */\n\nvar PostProcessShader =\n/** @class */\nfunction () {\n  function PostProcessShader() {\n    //language=GLSL\n    this.vertexShader = \"\\n    varying vec2 vUv;\\n    void main() {\\n      vUv = uv;\\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\\n    }\\n  \";\n    this.initUniform();\n  }\n\n  PostProcessShader.prototype.initUniform = function () {\n    this.uniforms = {\n      tDiffuse: {\n        value: null\n      }\n    };\n  };\n\n  return PostProcessShader;\n}();\n\nexports.PostProcessShader = PostProcessShader;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/postprocess/PostProcessShader.js?");

/***/ }),

/***/ "./lib/postprocess/PostProcessShaderPass.js":
/*!**************************************************!*\
  !*** ./lib/postprocess/PostProcessShaderPass.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PostProcessShaderPass = void 0;\n\nvar ShaderPass_1 = __webpack_require__(/*! three/examples/jsm/postprocessing/ShaderPass */ \"./node_modules/three/examples/jsm/postprocessing/ShaderPass.js\");\n\nvar PostProcessShaderPass =\n/** @class */\nfunction (_super) {\n  __extends(PostProcessShaderPass, _super);\n\n  function PostProcessShaderPass() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n\n  Object.defineProperty(PostProcessShaderPass.prototype, \"tDiffuse\", {\n    get: function () {\n      return this.uniforms.tDiffuse.value;\n    },\n    set: function (value) {\n      this.uniforms.tDiffuse.value = value;\n    },\n    enumerable: false,\n    configurable: true\n  });\n  return PostProcessShaderPass;\n}(ShaderPass_1.ShaderPass);\n\nexports.PostProcessShaderPass = PostProcessShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/postprocess/PostProcessShaderPass.js?");

/***/ }),

/***/ "./lib/postprocess/index.js":
/*!**********************************!*\
  !*** ./lib/postprocess/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __exportStar = this && this.__exportStar || function (m, exports) {\n  for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n__exportStar(__webpack_require__(/*! ./PostProcessRenderer */ \"./lib/postprocess/PostProcessRenderer.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./PostProcessShader */ \"./lib/postprocess/PostProcessShader.js\"), exports);\n\n__exportStar(__webpack_require__(/*! ./PostProcessShaderPass */ \"./lib/postprocess/PostProcessShaderPass.js\"), exports);\n\n//# sourceURL=webpack://threejs-postprocess/./lib/postprocess/index.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"demoChromaticAberration": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./demoSrc/demoChromaticAberration.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkthreejs_postprocess"] = self["webpackChunkthreejs_postprocess"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;