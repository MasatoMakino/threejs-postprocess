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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Common\": () => (/* binding */ Common)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\nclass Common {\n  static initScene() {\n    const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n    return scene;\n  }\n\n  static initLight(scene) {\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(0xffffff, 1.0);\n    scene.add(ambientLight);\n    return ambientLight;\n  }\n\n  static initCamera(scene, W, H, near = 1, far = 400) {\n    const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(45, W / H, near, far);\n    camera.position.set(0, 0, 100);\n    camera.updateMatrixWorld(false);\n    scene.add(camera);\n    return camera;\n  }\n\n  static initControl(camera, render) {\n    let domElement;\n\n    if (render) {\n      domElement = render.domElement;\n    }\n\n    const control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, domElement);\n    control.update();\n    return control;\n  }\n\n  static initRenderer(W, H, option) {\n    option = Object.assign({\n      color: 0x000000,\n      id: \"webgl-canvas\",\n      antialias: true\n    }, option);\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({\n      canvas: document.getElementById(option.id),\n      antialias: option.antialias\n    });\n    renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_1__.Color(option.color));\n    renderer.setSize(W, H);\n    renderer.setPixelRatio(window.devicePixelRatio);\n    return renderer;\n  }\n\n  static initHelper(scene) {\n    const axesHelper = new three__WEBPACK_IMPORTED_MODULE_1__.AxesHelper(30);\n    scene.add(axesHelper);\n  }\n\n}\n\n//# sourceURL=webpack://threejs-postprocess/./demoSrc/Common.js?");

/***/ }),

/***/ "./demoSrc/demoChromaticAberration.js":
/*!********************************************!*\
  !*** ./demoSrc/demoChromaticAberration.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Study\": () => (/* binding */ Study)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Common */ \"./demoSrc/Common.js\");\n/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dat.gui */ \"./node_modules/dat.gui/build/dat.gui.module.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib */ \"./lib/index.js\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var raf_ticker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! raf-ticker */ \"./node_modules/raf-ticker/esm/index.js\");\n\n\n\n\n\nclass Study {\n  constructor() {\n    const W = 640;\n    const H = 480;\n    const scene = _Common__WEBPACK_IMPORTED_MODULE_0__.Common.initScene();\n    scene.fog = new three__WEBPACK_IMPORTED_MODULE_4__.Fog(0x000000, 80, 160);\n    _Common__WEBPACK_IMPORTED_MODULE_0__.Common.initLight(scene);\n    const camera = _Common__WEBPACK_IMPORTED_MODULE_0__.Common.initCamera(scene, W, H);\n    const renderer = _Common__WEBPACK_IMPORTED_MODULE_0__.Common.initRenderer(W, H);\n    const control = _Common__WEBPACK_IMPORTED_MODULE_0__.Common.initControl(camera, renderer);\n    _Common__WEBPACK_IMPORTED_MODULE_0__.Common.initHelper(scene);\n    this.initObject(scene);\n    const postProcessRender = new _lib__WEBPACK_IMPORTED_MODULE_2__.PostProcessRenderer(scene, camera, renderer);\n    const pass = new _lib__WEBPACK_IMPORTED_MODULE_2__.ChromaticAberrationShaderPass();\n    postProcessRender.addComposer([pass]);\n    raf_ticker__WEBPACK_IMPORTED_MODULE_3__.RAFTicker.on(raf_ticker__WEBPACK_IMPORTED_MODULE_3__.RAFTickerEventType.tick, postProcessRender.render);\n    this.initGUI(pass);\n  }\n\n  initObject(scene) {\n    const spot = new three__WEBPACK_IMPORTED_MODULE_4__.PointLight(0xffffff, 3, 0, 2);\n    spot.position.set(0, 0, 0);\n    scene.add(spot);\n    const helper = new three__WEBPACK_IMPORTED_MODULE_4__.PointLightHelper(spot, 2, 0);\n    scene.add(helper);\n    const geo = new three__WEBPACK_IMPORTED_MODULE_4__.SphereGeometry(10, 6, 6);\n    const mat = new three__WEBPACK_IMPORTED_MODULE_4__.MeshLambertMaterial({\n      fog: scene.fog !== undefined\n    });\n    mat.color = new three__WEBPACK_IMPORTED_MODULE_4__.Color(0xff6666);\n    mat.wireframe = true;\n    const center = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(geo, mat);\n    scene.add(center);\n    const satellite = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(geo, mat.clone());\n    satellite.position.set(30, 0, 0);\n    scene.add(satellite);\n    const satellite02 = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(geo, mat);\n    satellite02.position.set(-30, 0, 0);\n    scene.add(satellite02);\n  }\n\n  initGUI(pass) {\n    const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_1__.GUI();\n    this.initGUIPass(gui, pass);\n  }\n\n  initGUIPass(gui, pass) {\n    const folder = gui.addFolder(\"Chromatic Aberration\");\n    folder.add(pass, \"rate\", 0.0, 3.0);\n    folder.add(pass, \"radiusInner\", 0.0, 3.0);\n    folder.add(pass, \"radiusOuter\", 0.0, 3.0);\n    folder.open();\n  }\n\n}\n\nwindow.onload = () => {\n  const study = new Study();\n};\n\n//# sourceURL=webpack://threejs-postprocess/./demoSrc/demoChromaticAberration.js?");

/***/ }),

/***/ "./lib/bloom/BloomEffectComposer.js":
/*!******************************************!*\
  !*** ./lib/bloom/BloomEffectComposer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.BloomEffectComposer = void 0;\n\nconst three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconst PostProcessEffectComposer_1 = __webpack_require__(/*! ../postprocess/PostProcessEffectComposer */ \"./lib/postprocess/PostProcessEffectComposer.js\");\n\nconst UnrealBloomPass_1 = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n\nconst postprocess_1 = __webpack_require__(/*! ../postprocess */ \"./lib/postprocess/index.js\");\n\nconst MaterialSwitcher_1 = __webpack_require__(/*! ./MaterialSwitcher */ \"./lib/bloom/MaterialSwitcher.js\");\n/**\n * 切り替え可能なUnrealBloomPassを内包したEffectComposer.\n * BloomEffectComposer.BLOOMレイヤーに含まれるオブジェクトのみをBloomさせる.\n */\n\n\nclass BloomEffectComposer extends PostProcessEffectComposer_1.PostProcessEffectComposer {\n  constructor(scene, renderer, renderPassOption) {\n    super(renderer);\n    this.switcher = new MaterialSwitcher_1.MaterialSwitcher(scene);\n    const size = renderer.getSize(new three_1.Vector2());\n    this.bloomPass = new UnrealBloomPass_1.UnrealBloomPass(size, 1.5, 0.4, 0.4); // TODO : PR d.ts\n    // @ts-ignore\n\n    this.renderToScreen = false;\n    postprocess_1.RenderPassOption.init(renderPassOption);\n    this.addPass(renderPassOption.renderPass);\n    this.addPass(this.bloomPass);\n    this.onBeforeRender = this.switcher.darkenNonBloomed;\n    this.onAfterRender = this.switcher.restoreMaterial;\n  }\n  /**\n   * 描画結果を反映したテクスチャを取得する。\n   */\n\n\n  get result() {\n    return this.renderTarget2.texture;\n  }\n\n}\n\nexports.BloomEffectComposer = BloomEffectComposer;\nBloomEffectComposer.ENTIRE = 0;\nBloomEffectComposer.BLOOM = 30;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/bloom/BloomEffectComposer.js?");

/***/ }),

/***/ "./lib/bloom/MaterialStorage.js":
/*!**************************************!*\
  !*** ./lib/bloom/MaterialStorage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MaterialStorage = void 0;\n/**\n * Bloom設定に応じて、オリジナルのマテリアルを格納するためのオブジェクト。\n * Object3D.userData.materialStorageに格納される。\n */\n\nclass MaterialStorage {\n  updateMaterial(original) {\n    this.original = original;\n    this.copyMaterialArray();\n    this.darkenMaterialArray(this.dark);\n  }\n\n  copyMaterialArray() {\n    if (this.isClone()) {\n      this.cloneToDark();\n    } else {\n      this.copyToDark();\n    }\n  }\n  /**\n   * darkenマテリアルのコピーに、クローンを使用するかcopyを使用するかを判定する。\n   */\n\n\n  isClone() {\n    const darkenHead = this.getHeadMaterial(this.dark);\n    const originalHead = this.getHeadMaterial(this.original);\n\n    if (darkenHead == null || darkenHead.type !== originalHead.type) {\n      return true;\n    }\n\n    return false;\n  }\n\n  getHeadMaterial(mat) {\n    const isArray = Array.isArray(mat);\n    if (isArray) return mat[0];\n    return mat;\n  }\n\n  copyToDark() {\n    const isArrayOriginal = Array.isArray(this.original);\n\n    if (isArrayOriginal) {\n      this.dark.forEach((drk, index) => {\n        drk.copy(this.original[index]);\n      });\n    } else {\n      this.dark.copy(this.original);\n    }\n  }\n\n  cloneToDark() {\n    const isArrayOriginal = Array.isArray(this.original);\n\n    if (isArrayOriginal) {\n      this.dark = this.original.map(val => {\n        return val.clone();\n      });\n    } else {\n      this.dark = this.original.clone();\n    }\n  }\n\n  darkenMaterialArray(material) {\n    if (!Array.isArray(material)) {\n      MaterialStorage.darkenMaterial(material);\n      return;\n    }\n\n    material.forEach(mat => {\n      MaterialStorage.darkenMaterial(mat);\n    });\n  }\n  /**\n   * マテリアルを反射光のない黒に書き換える。\n   * @param material\n   */\n\n\n  static darkenMaterial(material) {\n    if (material[\"color\"] != null) {\n      material[\"color\"].setHex(0);\n    }\n\n    if (material[\"shininess\"] != null) {\n      material[\"shininess\"] = 0;\n    }\n\n    if (material[\"specular\"] != null) {\n      material[\"specular\"].setHex(0);\n    }\n\n    if (material[\"emissive\"] != null) {\n      material[\"emissive\"].setHex(0);\n    }\n  }\n\n}\n\nexports.MaterialStorage = MaterialStorage;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/bloom/MaterialStorage.js?");

/***/ }),

/***/ "./lib/bloom/MaterialSwitcher.js":
/*!***************************************!*\
  !*** ./lib/bloom/MaterialSwitcher.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MaterialSwitcher = void 0;\n\nconst three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconst BloomEffectComposer_1 = __webpack_require__(/*! ./BloomEffectComposer */ \"./lib/bloom/BloomEffectComposer.js\");\n\nconst MaterialStorage_1 = __webpack_require__(/*! ./MaterialStorage */ \"./lib/bloom/MaterialStorage.js\");\n/**\n * 切り替え可能なUnrealBloomPassにおいて、マテリアルの切り替え処理を担当するクラス。\n */\n\n\nclass MaterialSwitcher {\n  constructor(scene) {\n    this.darkenNonBloomed = () => {\n      this.scene.traverseVisible(this.switchToDarken);\n    };\n\n    this.restoreMaterial = () => {\n      this.scene.traverseVisible(this.switchToOriginalMaterial);\n    };\n    /**\n     * scene上の各オブジェクトに対して、マテリアルの切り替えを行う。\n     * bloom対象外であれば#000のマテリアルに。\n     *\n     * @param obj sceneをtraverseして取得したオブジェクト。\n     */\n\n\n    this.switchToDarken = obj => {\n      if (!this.isDarken(obj)) return;\n\n      if (obj.userData.materialStorage == null) {\n        obj.userData.materialStorage = new MaterialStorage_1.MaterialStorage();\n      }\n\n      const storage = obj.userData.materialStorage;\n      const mesh = obj;\n      storage.updateMaterial(mesh.material);\n      mesh.material = storage.dark;\n    };\n    /**\n     * マテリアルストレージに格納されたオリジナルのマテリアル設定に復帰する。\n     * @param obj\n     */\n\n\n    this.switchToOriginalMaterial = obj => {\n      if (!this.isDarken(obj)) return;\n      const mesh = obj;\n      mesh.material = obj.userData.materialStorage.original;\n    };\n\n    this.scene = scene;\n    this.layers = new three_1.Layers();\n    this.layers.set(BloomEffectComposer_1.BloomEffectComposer.BLOOM);\n  }\n  /**\n   * そのオブジェクトがbloomマスクの対象か否かを判定する。\n   * @param obj\n   */\n\n\n  isDarken(obj) {\n    if (obj.isMesh == null && obj.isLine == null) return false;\n    return !this.layers.test(obj.layers);\n  }\n\n}\n\nexports.MaterialSwitcher = MaterialSwitcher;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/bloom/MaterialSwitcher.js?");

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

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports.default = () => {\n  //language=GLSL\n  return `\nuniform sampler2D tDiffuse;\nuniform float rate;\nuniform float radiusInner;\nuniform float radiusOuter;\n\nvarying vec2 vUv;\n\nvoid main() {\n  float distance = length( vUv - 0.5 )*2.0;\n  distance = smoothstep( radiusInner, radiusOuter, distance);\n  float shift = rate * distance * 0.01;\n\n  float r = texture2D( tDiffuse, vUv + vec2( shift, 0.0 ) ).r;\n  float g = texture2D( tDiffuse, vUv ).g;\n  float b = texture2D( tDiffuse, vUv - vec2( shift, 0.0 ) ).b;\n\n  gl_FragColor = vec4( vec3(r, g, b) , 1.0 );\n}\n  `;\n};\n\n//# sourceURL=webpack://threejs-postprocess/./lib/chromaticAberration/ChromaticAberration.frag.glsl.js?");

/***/ }),

/***/ "./lib/chromaticAberration/ChromaticAberrationShader.js":
/*!**************************************************************!*\
  !*** ./lib/chromaticAberration/ChromaticAberrationShader.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ChromaticAberrationShader = void 0;\n\nconst three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconst index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nconst ChromaticAberration_frag_glsl_1 = __importDefault(__webpack_require__(/*! ./ChromaticAberration.frag.glsl */ \"./lib/chromaticAberration/ChromaticAberration.frag.glsl.js\"));\n\nclass ChromaticAberrationShader extends index_1.PostProcessShader {\n  constructor() {\n    super();\n    this.fragmentShader = ChromaticAberration_frag_glsl_1.default();\n  }\n\n  initUniform() {\n    super.initUniform();\n    this.uniforms = three_1.UniformsUtils.merge([this.uniforms, {\n      rate: {\n        value: 1.0\n      },\n      radiusInner: {\n        value: 0.25\n      },\n      radiusOuter: {\n        value: Math.sqrt(2.0)\n      }\n    }]);\n  }\n\n}\n\nexports.ChromaticAberrationShader = ChromaticAberrationShader;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/chromaticAberration/ChromaticAberrationShader.js?");

/***/ }),

/***/ "./lib/chromaticAberration/ChromaticAberrationShaderPass.js":
/*!******************************************************************!*\
  !*** ./lib/chromaticAberration/ChromaticAberrationShaderPass.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ChromaticAberrationShaderPass = void 0;\n\nconst ChromaticAberrationShader_1 = __webpack_require__(/*! ./ChromaticAberrationShader */ \"./lib/chromaticAberration/ChromaticAberrationShader.js\");\n\nconst index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nclass ChromaticAberrationShaderPass extends index_1.PostProcessShaderPass {\n  get rate() {\n    return this.uniforms.rate.value;\n  }\n\n  set rate(value) {\n    this.uniforms.rate.value = value;\n  }\n\n  get radiusInner() {\n    return this.uniforms.radiusInner.value;\n  }\n\n  set radiusInner(value) {\n    this.uniforms.radiusInner.value = value;\n  }\n\n  get radiusOuter() {\n    return this.uniforms.radiusOuter.value;\n  }\n\n  set radiusOuter(value) {\n    this.uniforms.radiusOuter.value = value;\n  }\n\n  constructor() {\n    super(new ChromaticAberrationShader_1.ChromaticAberrationShader());\n  }\n\n}\n\nexports.ChromaticAberrationShaderPass = ChromaticAberrationShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/chromaticAberration/ChromaticAberrationShaderPass.js?");

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

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports.default = () => {\n  //language=GLSL\n  return `\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\n\nuniform float h;\nuniform float multiS;\nuniform float multiB;\nuniform float addS;\nuniform float addB;\n\n//  Function Patricio Gonzalez Vivo\n//  https://thebookofshaders.com/06/\nvec3 rgb2hsb( in vec3 c ){\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p = mix(vec4(c.bg, K.wz),\n    vec4(c.gb, K.xy),\n    step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r),\n    vec4(c.r, p.yzx),\n    step(p.x, c.r));\n    float d = q.x - min(q.w, q.y);\n    float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),\n    d / (q.x + e),\n    q.x);\n}\n\n//  Function from Iñigo Quiles\n//  https://www.shadertoy.com/view/MsS3Wc\nvec3 hsb2rgb( in vec3 c ){\n    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),\n    6.0)-3.0)-1.0,\n    0.0,\n    1.0 );\n    rgb = rgb*rgb*(3.0-2.0*rgb);\n    return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\nvoid main() {\n  vec4 color = texture2D( tDiffuse, vUv );\n  vec3 hsb = rgb2hsb(color.rgb);\n  hsb.x += h;\n  hsb.y *= multiS;\n  hsb.z *= multiB;\n  hsb.y += addS;\n  hsb.z += addB;\n  color.rgb = hsb2rgb(hsb);\n\n  gl_FragColor = color;\n}\n  `;\n};\n\n//# sourceURL=webpack://threejs-postprocess/./lib/colorFilter/ColorFilter.frag.glsl.js?");

/***/ }),

/***/ "./lib/colorFilter/ColorFilterShader.js":
/*!**********************************************!*\
  !*** ./lib/colorFilter/ColorFilterShader.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ColorFilterShader = void 0;\n\nconst three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconst index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nconst ColorFilter_frag_glsl_1 = __importDefault(__webpack_require__(/*! ./ColorFilter.frag.glsl */ \"./lib/colorFilter/ColorFilter.frag.glsl.js\"));\n\nclass ColorFilterShader extends index_1.PostProcessShader {\n  constructor() {\n    super();\n    this.fragmentShader = ColorFilter_frag_glsl_1.default();\n  }\n\n  initUniform() {\n    super.initUniform();\n    this.uniforms = three_1.UniformsUtils.merge([this.uniforms, {\n      h: {\n        value: 0.0\n      },\n      multiS: {\n        value: 1.0\n      },\n      multiB: {\n        value: 1.0\n      },\n      addS: {\n        value: 0.0\n      },\n      addB: {\n        value: 0.0\n      }\n    }]);\n  }\n\n}\n\nexports.ColorFilterShader = ColorFilterShader;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/colorFilter/ColorFilterShader.js?");

/***/ }),

/***/ "./lib/colorFilter/ColorFilterShaderPass.js":
/*!**************************************************!*\
  !*** ./lib/colorFilter/ColorFilterShaderPass.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ColorFilterShaderPass = void 0;\n\nconst ColorFilterShader_1 = __webpack_require__(/*! ./ColorFilterShader */ \"./lib/colorFilter/ColorFilterShader.js\");\n\nconst index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n/**\n * hsb値をオフセットして、色を変化させるシェーダーパス\n *\n * 例 )\n * multiS = 0.0, addB = 1.0にすると白に飽和する。\n * multiB = 0.0, もしくはaddB = -1.0 でブラックアウト。\n */\n\n\nclass ColorFilterShaderPass extends index_1.PostProcessShaderPass {\n  get h() {\n    return this.uniforms.h.value;\n  }\n\n  set h(value) {\n    this.uniforms.h.value = value;\n  }\n\n  get multiS() {\n    return this.uniforms.multiS.value;\n  }\n\n  set multiS(value) {\n    this.uniforms.multiS.value = value;\n  }\n\n  get multiB() {\n    return this.uniforms.multiB.value;\n  }\n\n  set multiB(value) {\n    this.uniforms.multiB.value = value;\n  }\n\n  get addS() {\n    return this.uniforms.addS.value;\n  }\n\n  set addS(value) {\n    this.uniforms.addS.value = value;\n  }\n\n  get addB() {\n    return this.uniforms.addB.value;\n  }\n\n  set addB(value) {\n    this.uniforms.addB.value = value;\n  }\n\n  constructor() {\n    super(new ColorFilterShader_1.ColorFilterShader());\n  }\n\n}\n\nexports.ColorFilterShaderPass = ColorFilterShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/colorFilter/ColorFilterShaderPass.js?");

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

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports.default = () => {\n  //language=GLSL\n  return `\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\n\nuniform float strengthX;\nuniform float strengthY;\nuniform bool hasMap;\nuniform sampler2D map;\nuniform vec2 aspect;\n\nvoid main() {\n  vec2 uv = vUv;\n  if( hasMap ){\n    vec2 fixedUV = vUv - 0.5;\n    fixedUV *= aspect;\n    fixedUV += 0.5;\n    \n    vec4 displacement = texture2D( map, fixedUV );\n    uv +=  displacement.rg * vec2 (strengthX, strengthY);\n }\n\n  vec4 color = texture2D( tDiffuse, uv );\n  gl_FragColor = color;\n}\n  `;\n};\n\n//# sourceURL=webpack://threejs-postprocess/./lib/displacement/DisplacementMap.frag.glsl.js?");

/***/ }),

/***/ "./lib/displacement/DisplacementMapShader.js":
/*!***************************************************!*\
  !*** ./lib/displacement/DisplacementMapShader.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.DisplacementMapShader = void 0;\n\nconst three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconst index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nconst DisplacementMap_frag_glsl_1 = __importDefault(__webpack_require__(/*! ./DisplacementMap.frag.glsl */ \"./lib/displacement/DisplacementMap.frag.glsl.js\"));\n\nconst three_2 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nclass DisplacementMapShader extends index_1.PostProcessShader {\n  constructor() {\n    super();\n    this.fragmentShader = DisplacementMap_frag_glsl_1.default();\n  }\n\n  initUniform() {\n    super.initUniform();\n    this.uniforms = three_1.UniformsUtils.merge([this.uniforms, {\n      strengthX: {\n        value: 0.0\n      },\n      strengthY: {\n        value: 0.0\n      },\n      map: {\n        value: null\n      },\n      hasMap: {\n        value: false\n      },\n      aspect: {\n        value: new three_2.Vector2(1.0, 1.0)\n      }\n    }]);\n  }\n\n}\n\nexports.DisplacementMapShader = DisplacementMapShader;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/displacement/DisplacementMapShader.js?");

/***/ }),

/***/ "./lib/displacement/DisplacementMapShaderPass.js":
/*!*******************************************************!*\
  !*** ./lib/displacement/DisplacementMapShaderPass.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.DisplacementMapShaderPass = void 0;\n\nconst DisplacementMapShader_1 = __webpack_require__(/*! ./DisplacementMapShader */ \"./lib/displacement/DisplacementMapShader.js\");\n\nconst index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nconst three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconst three_2 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/**\n * DisplacementMapによって画面を歪ませるShaderPass\n */\n\n\nclass DisplacementMapShaderPass extends index_1.PostProcessShaderPass {\n  constructor() {\n    super(new DisplacementMapShader_1.DisplacementMapShader());\n  }\n\n  get map() {\n    return this.uniforms.map.value;\n  }\n  /**\n   * DisplacementMapを読み込む。\n   * 読み込み後にアスペクト比の補正を行う。\n   *\n   * @param url\n   */\n\n\n  loadMap(url) {\n    const texture = new three_1.TextureLoader().load(url, texture => {\n      this.mapSizeW = texture.image.width;\n      this.mapSizeH = texture.image.height;\n      this.updateAspect();\n    });\n    this.uniforms.map.value = texture;\n    this.uniforms.hasMap.value = texture != null;\n  }\n\n  get strengthX() {\n    return this.uniforms.strengthX.value;\n  }\n\n  set strengthX(value) {\n    this.uniforms.strengthX.value = value;\n  }\n\n  get strengthY() {\n    return this.uniforms.strengthY.value;\n  }\n\n  set strengthY(value) {\n    this.uniforms.strengthY.value = value;\n  }\n\n  setSize(width, height) {\n    super.setSize(width, height);\n    this.rendererSizeW = width;\n    this.rendererSizeH = height;\n    this.updateAspect();\n  }\n\n  updateAspect() {\n    if (this.mapSizeW == null || this.rendererSizeW == null) {\n      return;\n    }\n\n    const rendererAspect = this.rendererSizeW / this.rendererSizeH;\n    const mapAspect = this.mapSizeW / this.mapSizeH;\n\n    if (rendererAspect > mapAspect) {\n      this.uniforms.aspect.value = new three_2.Vector2(1.0, mapAspect / rendererAspect);\n    } else {\n      this.uniforms.aspect.value = new three_2.Vector2(rendererAspect / mapAspect, 1.0);\n    }\n  }\n\n}\n\nexports.DisplacementMapShaderPass = DisplacementMapShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/displacement/DisplacementMapShaderPass.js?");

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

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  Object.defineProperty(o, k2, {\n    enumerable: true,\n    get: function () {\n      return m[k];\n    }\n  });\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\n\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\n\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n\n  __setModuleDefault(result, mod);\n\n  return result;\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.FXAAShaderPass = void 0;\n\nconst FXAAShaderModule = __importStar(__webpack_require__(/*! three/examples/jsm/shaders/FXAAShader */ \"./node_modules/three/examples/jsm/shaders/FXAAShader.js\"));\n\nconst postprocess_1 = __webpack_require__(/*! ../postprocess */ \"./lib/postprocess/index.js\");\n/**\n * FXAAShaderを組み込み済みのShaderPass\n */\n\n\nclass FXAAShaderPass extends postprocess_1.PostProcessShaderPass {\n  /**\n   * コンストラクタ\n   */\n  constructor() {\n    super(FXAAShaderModule[\"FXAAShader\"]);\n  }\n\n  setSize(width, height) {\n    super.setSize(width, height);\n    const uniforms = this.material.uniforms;\n    uniforms.resolution.value.x = 1 / width;\n    uniforms.resolution.value.y = 1 / height;\n  }\n\n}\n\nexports.FXAAShaderPass = FXAAShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/fxaa/FXAAShaderPass.js?");

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

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports.default = () => {\n  //language=GLSL\n  return `    \nuniform sampler2D tDiffuse;\nuniform sampler2D mixTexture;\nvarying vec2 vUv;\nvec4 getTexture( sampler2D map ) {\n    return texture2D( map , vUv );\n}\nvoid main() {\n    gl_FragColor = ( getTexture( tDiffuse ) + vec4( 1.0 ) * getTexture( mixTexture ) );\n}`;\n};\n\n//# sourceURL=webpack://threejs-postprocess/./lib/mix/MixShader.frag.glsl.js?");

/***/ }),

/***/ "./lib/mix/MixShader.js":
/*!******************************!*\
  !*** ./lib/mix/MixShader.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MixShader = void 0;\n\nconst index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nconst MixShader_frag_glsl_1 = __importDefault(__webpack_require__(/*! ./MixShader.frag.glsl */ \"./lib/mix/MixShader.frag.glsl.js\"));\n\nconst three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nclass MixShader extends index_1.PostProcessShader {\n  constructor() {\n    super();\n    this.fragmentShader = MixShader_frag_glsl_1.default();\n  }\n\n  initUniform() {\n    super.initUniform();\n    this.uniforms = three_1.UniformsUtils.merge([this.uniforms, {\n      mixTexture: {\n        value: null\n      }\n    }]);\n  }\n\n}\n\nexports.MixShader = MixShader;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/mix/MixShader.js?");

/***/ }),

/***/ "./lib/mix/MixShaderPass.js":
/*!**********************************!*\
  !*** ./lib/mix/MixShaderPass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MixShaderPass = void 0;\n\nconst index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nconst MixShader_1 = __webpack_require__(/*! ./MixShader */ \"./lib/mix/MixShader.js\");\n/**\n * 他のエフェクトコンポーザーの描画結果を受け取り、自身のレンダリング結果に乗算するShaderPass\n */\n\n\nclass MixShaderPass extends index_1.PostProcessShaderPass {\n  get mixTexture() {\n    return this.uniforms.mixTexture.value;\n  }\n\n  set mixTexture(value) {\n    this.uniforms.mixTexture.value = value;\n  }\n\n  constructor(mixTexture) {\n    super(new MixShader_1.MixShader());\n    this.mixTexture = mixTexture;\n  }\n\n}\n\nexports.MixShaderPass = MixShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/mix/MixShaderPass.js?");

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

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports.default = () => {\n  //language=GLSL\n  return `\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\n\nuniform float strength;\nuniform vec3 color;\n\nvoid main() {\n  vec4 original = texture2D( tDiffuse, vUv );\n  vec3 luma = vec3(0.299, 0.587, 0.114);\n  float v = dot(original.rgb, luma);\n  gl_FragColor = vec4 (mix( original.rgb, v * color, strength), original.a);\n}\n  `;\n};\n\n//# sourceURL=webpack://threejs-postprocess/./lib/monotone/Monotone.frag.glsl.js?");

/***/ }),

/***/ "./lib/monotone/MonotoneShader.js":
/*!****************************************!*\
  !*** ./lib/monotone/MonotoneShader.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MonotoneShader = void 0;\n\nconst three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconst index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nconst Monotone_frag_glsl_1 = __importDefault(__webpack_require__(/*! ./Monotone.frag.glsl */ \"./lib/monotone/Monotone.frag.glsl.js\"));\n\nclass MonotoneShader extends index_1.PostProcessShader {\n  constructor() {\n    super();\n    this.fragmentShader = Monotone_frag_glsl_1.default();\n  }\n\n  initUniform() {\n    super.initUniform();\n    this.uniforms = three_1.UniformsUtils.merge([this.uniforms, {\n      strength: {\n        value: 1.0\n      },\n      color: {\n        value: new three_1.Color(0xffffff)\n      }\n    }]);\n  }\n\n}\n\nexports.MonotoneShader = MonotoneShader;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/monotone/MonotoneShader.js?");

/***/ }),

/***/ "./lib/monotone/MonotoneShaderPass.js":
/*!********************************************!*\
  !*** ./lib/monotone/MonotoneShaderPass.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.MonotoneShaderPass = void 0;\n\nconst MonotoneShader_1 = __webpack_require__(/*! ./MonotoneShader */ \"./lib/monotone/MonotoneShader.js\");\n\nconst index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n/**\n *\n */\n\n\nclass MonotoneShaderPass extends index_1.PostProcessShaderPass {\n  get color() {\n    return this.uniforms.color.value;\n  }\n\n  set color(value) {\n    this.uniforms.color.value = value;\n  }\n\n  get strength() {\n    return this.uniforms.strength.value;\n  }\n\n  set strength(value) {\n    this.uniforms.strength.value = value;\n  }\n\n  constructor() {\n    super(new MonotoneShader_1.MonotoneShader());\n  }\n\n}\n\nexports.MonotoneShaderPass = MonotoneShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/monotone/MonotoneShaderPass.js?");

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

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nexports.default = () => {\n  //language=GLSL\n  return `\nuniform sampler2D tDiffuse;\nuniform float rate;\nuniform float radiusInner;\nuniform float radiusOuter;\nuniform vec3 color;\nvarying vec2 vUv;\n\nvoid main() {\n  float distance = length( vUv - 0.5 )*2.0;\n  distance = smoothstep( radiusInner, radiusOuter, distance);  \n  float shift = rate * distance * 0.01;\n\n  vec4 original = texture2D( tDiffuse, vUv );\n  vec3 result = mix( original.rgb, color, shift);\n\n  gl_FragColor = vec4( result , original.a );\n}\n  `;\n};\n\n//# sourceURL=webpack://threejs-postprocess/./lib/peripheralLight/PeripheralLight.frag.glsl.js?");

/***/ }),

/***/ "./lib/peripheralLight/PeripheralLightShader.js":
/*!******************************************************!*\
  !*** ./lib/peripheralLight/PeripheralLightShader.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PeripheralLightShader = void 0;\n\nconst three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconst index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n\nconst PeripheralLight_frag_glsl_1 = __importDefault(__webpack_require__(/*! ./PeripheralLight.frag.glsl */ \"./lib/peripheralLight/PeripheralLight.frag.glsl.js\"));\n\nclass PeripheralLightShader extends index_1.PostProcessShader {\n  constructor() {\n    super();\n    this.fragmentShader = PeripheralLight_frag_glsl_1.default();\n  }\n\n  initUniform() {\n    super.initUniform();\n    this.uniforms = three_1.UniformsUtils.merge([this.uniforms, {\n      rate: {\n        value: 5.0\n      },\n      radiusInner: {\n        value: 0.75\n      },\n      radiusOuter: {\n        value: Math.sqrt(2.0)\n      },\n      color: {\n        value: new three_1.Color(0, 0, 0)\n      }\n    }]);\n  }\n\n}\n\nexports.PeripheralLightShader = PeripheralLightShader;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/peripheralLight/PeripheralLightShader.js?");

/***/ }),

/***/ "./lib/peripheralLight/PeripheralLightShaderPass.js":
/*!**********************************************************!*\
  !*** ./lib/peripheralLight/PeripheralLightShaderPass.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PeripheralLightShaderPass = void 0;\n\nconst PeripheralLightShader_1 = __webpack_require__(/*! ./PeripheralLightShader */ \"./lib/peripheralLight/PeripheralLightShader.js\");\n\nconst index_1 = __webpack_require__(/*! ../index */ \"./lib/index.js\");\n/**\n * 周辺光量の減光を表現するフィルタ。\n */\n\n\nclass PeripheralLightShaderPass extends index_1.PostProcessShaderPass {\n  get rate() {\n    return this.uniforms.rate.value;\n  }\n\n  set rate(value) {\n    this.uniforms.rate.value = value;\n  }\n\n  get radiusInner() {\n    return this.uniforms.radiusInner.value;\n  }\n\n  set radiusInner(value) {\n    this.uniforms.radiusInner.value = value;\n  }\n\n  get radiusOuter() {\n    return this.uniforms.radiusOuter.value;\n  }\n\n  set radiusOuter(value) {\n    this.uniforms.radiusOuter.value = value;\n  }\n\n  get color() {\n    return this.uniforms.color.value;\n  }\n\n  set color(value) {\n    this.uniforms.color.value = value;\n  }\n\n  constructor() {\n    super(new PeripheralLightShader_1.PeripheralLightShader());\n  }\n\n}\n\nexports.PeripheralLightShaderPass = PeripheralLightShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/peripheralLight/PeripheralLightShaderPass.js?");

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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PostProcessEffectComposer = void 0;\n\nconst EffectComposer_1 = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/**\n * レンダリングの前後に任意の処理を実行する機能を追加したEffectComposer.\n */\n\n\nclass PostProcessEffectComposer extends EffectComposer_1.EffectComposer {\n  constructor() {\n    super(...arguments);\n    this.enabled = true;\n  }\n\n}\n\nexports.PostProcessEffectComposer = PostProcessEffectComposer;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/postprocess/PostProcessEffectComposer.js?");

/***/ }),

/***/ "./lib/postprocess/PostProcessRenderer.js":
/*!************************************************!*\
  !*** ./lib/postprocess/PostProcessRenderer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.RenderPassOption = exports.PostProcessRenderer = void 0;\n\nconst three_1 = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconst RenderPass_1 = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n\nconst PostProcessEffectComposer_1 = __webpack_require__(/*! ./PostProcessEffectComposer */ \"./lib/postprocess/PostProcessEffectComposer.js\");\n\nconst raf_ticker_1 = __webpack_require__(/*! raf-ticker */ \"./node_modules/raf-ticker/esm/index.js\");\n/**\n * 複数のエフェクトコンポーザーと、WebGLRendererを管理し、\n * 連続してポストエフェクト処理を行うためのクラス。\n */\n\n\nclass PostProcessRenderer {\n  constructor(scene, camera, renderer) {\n    this._composers = [];\n\n    this.render = arg => {\n      let delta;\n\n      if (arg instanceof raf_ticker_1.RAFTickerEvent) {\n        delta = arg.delta;\n      } else {\n        delta = arg;\n      }\n\n      this._composers.forEach(composer => {\n        if (!composer.enabled) return;\n        if (composer.onBeforeRender) composer.onBeforeRender(delta);\n        composer.render(delta);\n        if (composer.onAfterRender) composer.onAfterRender(delta);\n      });\n    };\n\n    this.renderer = renderer;\n    this.scene = scene;\n    this.camera = camera;\n  }\n\n  get composers() {\n    return this._composers;\n  }\n  /**\n   * シェーダーパスを挟んだEffectComposerを生成、登録する。\n   * @param passes\n   * @param renderPass\n   */\n\n\n  addComposer(passes, renderPass) {\n    const composer = PostProcessRenderer.getComposer(passes, this.renderer, {\n      scene: this.scene,\n      camera: this.camera,\n      renderPass: renderPass\n    });\n\n    this._composers.push(composer);\n\n    return composer;\n  }\n  /**\n   * コンポーザーを生成する。\n   * @param passes\n   * @param renderer\n   * @param renderPassOption\n   */\n\n\n  static getComposer(passes, renderer, renderPassOption) {\n    RenderPassOption.init(renderPassOption);\n    const composer = new PostProcessEffectComposer_1.PostProcessEffectComposer(renderer);\n    composer.addPass(renderPassOption.renderPass);\n    passes.forEach(p => {\n      composer.addPass(p);\n    });\n    return composer;\n  }\n  /**\n   * ウィンドウリサイズ時の処理\n   * @param w\n   * @param h\n   */\n\n\n  setSize(w, h) {\n    this.camera.aspect = w / h;\n    this.camera.updateProjectionMatrix();\n    this.renderer.setPixelRatio(window.devicePixelRatio);\n    this.renderer.setSize(w, h);\n\n    this._composers.forEach(composer => {\n      composer.setSize(w, h);\n    });\n  }\n  /**\n   * WebGLRendererのレンダリングサイズを取得する。\n   */\n\n\n  getSize() {\n    return this.renderer.getSize(new three_1.Vector2());\n  }\n\n}\n\nexports.PostProcessRenderer = PostProcessRenderer;\n/**\n * getComposer関数で利用するRenderPass初期化オプション\n *\n * sceneとcameraのセット、もしくはrenderPassインスタンスを代入する必要がある。\n * sceneとcameraのセットの場合 : RenderPassインスタンスを生成する。\n * renderPassインスタンスの場合 : そのままrenderPassインスタンスを利用する。\n */\n\nclass RenderPassOption {\n  static init(option) {\n    if (option.renderPass == null) {\n      option.renderPass = new RenderPass_1.RenderPass(option.scene, option.camera);\n    }\n  }\n\n}\n\nexports.RenderPassOption = RenderPassOption;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/postprocess/PostProcessRenderer.js?");

/***/ }),

/***/ "./lib/postprocess/PostProcessShader.js":
/*!**********************************************!*\
  !*** ./lib/postprocess/PostProcessShader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PostProcessShader = void 0;\n/**\n * EffectComposer用のShaderオブジェクトに必要な要素を定義したクラス。\n * このクラスのインスタンスをShaderPassに渡すことで、任意のシェーダーエフェクトコンポーザーになる。\n */\n\nclass PostProcessShader {\n  constructor() {\n    //language=GLSL\n    this.vertexShader = `\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }\n  `;\n    this.initUniform();\n  }\n\n  initUniform() {\n    this.uniforms = {\n      tDiffuse: {\n        value: null\n      }\n    };\n  }\n\n}\n\nexports.PostProcessShader = PostProcessShader;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/postprocess/PostProcessShader.js?");

/***/ }),

/***/ "./lib/postprocess/PostProcessShaderPass.js":
/*!**************************************************!*\
  !*** ./lib/postprocess/PostProcessShaderPass.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PostProcessShaderPass = void 0;\n\nconst ShaderPass_1 = __webpack_require__(/*! three/examples/jsm/postprocessing/ShaderPass */ \"./node_modules/three/examples/jsm/postprocessing/ShaderPass.js\");\n\nclass PostProcessShaderPass extends ShaderPass_1.ShaderPass {\n  get tDiffuse() {\n    return this.uniforms.tDiffuse.value;\n  }\n\n  set tDiffuse(value) {\n    this.uniforms.tDiffuse.value = value;\n  }\n\n}\n\nexports.PostProcessShaderPass = PostProcessShaderPass;\n\n//# sourceURL=webpack://threejs-postprocess/./lib/postprocess/PostProcessShaderPass.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"demoChromaticAberration": 0
/******/ 		};
/******/ 		
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkthreejs_postprocess"] = self["webpackChunkthreejs_postprocess"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./demoSrc/demoChromaticAberration.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;