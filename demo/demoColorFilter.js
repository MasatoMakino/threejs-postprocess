(()=>{"use strict";var e,t={276:(e,t,r)=>{var i=r(753),s=r(580);class n{static initScene(){return new i.Z58}static initLight(e,t=Math.PI){const r=new i.$p8(16777215,t);return e.add(r),r}static initCamera(e,t,r,s=1,n=400){const a=new i.ubm(45,t/r,s,n);return a.position.set(0,0,100),a.updateMatrixWorld(!1),e.add(a),a}static initControl(e,t){let r;t&&(r=t.domElement);const i=new s.N(e,r);return i.update(),i}static initRenderer(e,t,r){r=Object.assign({color:0,id:"webgl-canvas",antialias:!0},r);const s=new i.JeP({canvas:document.getElementById(r.id),antialias:r.antialias});return s.setClearColor(new i.Q1f(r.color)),s.setSize(e,t),s.setPixelRatio(window.devicePixelRatio),s}static initHelper(e){const t=new i.IzY(30);e.add(t)}}var a=r(638),o=r(968),c=r(296),l=r(596);class d extends l.s{constructor(){super(...arguments),this.enabled=!0}}var h=r(993);class u{get composers(){return this._composers}constructor(e,t,r){this._composers=[],this.render=e=>{let t;t=e instanceof h.J?e.delta:e,this._composers.forEach((e=>{e.enabled&&(e.onBeforeRender&&e.onBeforeRender(t),e.render(t),e.onAfterRender&&e.onAfterRender(t))}))},this.renderer=r,this.scene=e,this.camera=t}createScreenRenderingComposer(e,t){const r=u.getComposer(e,this.renderer,{scene:this.scene,camera:this.camera,renderPass:t});return this._composers.push(r),r}static getComposer(e,t,r){m.init(r);const i=new d(t);return i.addPass(r.renderPass),e.forEach((e=>{i.addPass(e)})),i.addPass(new c.X),i}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e,t),this._composers.forEach((r=>{r.setSize(e,t)}))}getSize(){return this.renderer.getSize(new i.I9Y)}}class m{static init(e){null==e.renderPass&&(e.renderPass=new o.A(e.scene,e.camera))}}class f{constructor(){this.vertexShader="\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }\n  ",this.initUniform()}initUniform(){this.uniforms={tDiffuse:{value:null}}}}var v=r(45);class p extends v.p{constructor(e,t){super(e,t)}get tDiffuse(){return this.uniforms.tDiffuse.value}set tDiffuse(e){this.uniforms.tDiffuse.value=e}}var g=r(208);class w{updateMaterial(e){this.original=e,this.copyMaterialArray(),this.darkenMaterialArray(this.dark)}copyMaterialArray(){this.isClone()?this.cloneToDark():this.copyToDark()}isClone(){const e=this.getHeadMaterial(this.dark),t=this.getHeadMaterial(this.original);return null==e||e.type!==t.type}getHeadMaterial(e){return Array.isArray(e)?e[0]:e}copyToDark(){Array.isArray(this.original)?this.dark.forEach(((e,t)=>{e.copy(this.original[t])})):this.dark.copy(this.original)}cloneToDark(){const e=Array.isArray(this.original);this.dark=e?this.original.map((e=>e.clone())):this.original.clone()}darkenMaterialArray(e){Array.isArray(e)?e.forEach((e=>{w.darkenMaterial(e)})):w.darkenMaterial(e)}static darkenMaterial(e){null!=e.color&&e.color.setHex(0),null!=e.shininess&&(e.shininess=0),null!=e.specular&&e.specular.setHex(0),null!=e.emissive&&e.emissive.setHex(0)}}class b{constructor(e){this.darkenNonBloomed=()=>{this.scene.traverseVisible(this.switchToDarken)},this.restoreMaterial=()=>{this.scene.traverseVisible(this.switchToOriginalMaterial)},this.switchToDarken=e=>{if(!this.isDarken(e))return;null==e.userData.materialStorage&&(e.userData.materialStorage=new w);const t=e.userData.materialStorage,r=e;t.updateMaterial(r.material),r.material=t.dark},this.switchToOriginalMaterial=e=>{this.isDarken(e)&&(e.material=e.userData.materialStorage.original)},this.scene=e,this.layers=new i.zgK,this.layers.set(y.BLOOM)}isDarken(e){return(null!=e.isMesh||null!=e.isLine)&&!this.layers.test(e.layers)}}class y extends d{constructor(e,t,r){super(t),this.switcher=new b(e);const s=t.getSize(new i.I9Y);this.bloomPass=new g.C(s,1.5,.4,.4),this.renderToScreen=!1,m.init(r),this.addPass(r.renderPass),this.addPass(this.bloomPass),this.onBeforeRender=this.switcher.darkenNonBloomed,this.onAfterRender=this.switcher.restoreMaterial}get result(){return this.renderTarget2.texture}}y.ENTIRE=0,y.BLOOM=30,r(161);class x extends f{constructor(){super(),this.fragmentShader="\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\n\nuniform float h;\nuniform float multiS;\nuniform float multiB;\nuniform float addS;\nuniform float addB;\n\n//  Function Patricio Gonzalez Vivo\n//  https://thebookofshaders.com/06/\nvec3 rgb2hsb( in vec3 c ){\n    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    vec4 p = mix(vec4(c.bg, K.wz),\n    vec4(c.gb, K.xy),\n    step(c.b, c.g));\n    vec4 q = mix(vec4(p.xyw, c.r),\n    vec4(c.r, p.yzx),\n    step(p.x, c.r));\n    float d = q.x - min(q.w, q.y);\n    float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),\n    d / (q.x + e),\n    q.x);\n}\n\n//  Function from Iñigo Quiles\n//  https://www.shadertoy.com/view/MsS3Wc\nvec3 hsb2rgb( in vec3 c ){\n    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),\n    6.0)-3.0)-1.0,\n    0.0,\n    1.0 );\n    rgb = rgb*rgb*(3.0-2.0*rgb);\n    return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\nvoid main() {\n  vec4 color = texture2D( tDiffuse, vUv );\n  vec3 hsb = rgb2hsb(color.rgb);\n  hsb.x += h;\n  hsb.y *= multiS;\n  hsb.z *= multiB;\n  hsb.y += addS;\n  hsb.z += addB;\n  color.rgb = hsb2rgb(hsb);\n\n  gl_FragColor = color;\n}\n  "}initUniform(){super.initUniform(),this.uniforms=i.LlO.merge([this.uniforms,{h:{value:0},multiS:{value:1},multiB:{value:1},addS:{value:0},addB:{value:0}}])}}class S extends p{get h(){return this.uniforms.h.value}set h(e){this.uniforms.h.value=e}get multiS(){return this.uniforms.multiS.value}set multiS(e){this.uniforms.multiS.value=e}get multiB(){return this.uniforms.multiB.value}set multiB(e){this.uniforms.multiB.value=e}get addS(){return this.uniforms.addS.value}set addS(e){this.uniforms.addS.value=e}get addB(){return this.uniforms.addB.value}set addB(e){this.uniforms.addB.value=e}constructor(){super(new x)}}class k{static initGUIResolution(e,t){const r=t.getSize(),i={width:r.width,height:r.height},s=()=>{t.setSize(i.width,i.height)},n=e.addFolder("Resolution");n.add(i,"width",2,1920).step(1).onChange(s),n.add(i,"height",2,1080).step(1).onChange(s),n.open()}static initColorGUI(e,t,r="color"){const i={},s=t[r];return i[r]=s.getHex(),e.addColor(i,r).onChange((e=>{s.setHex(e)})),i}}var M=r(737);class B{constructor(){const e=n.initScene();n.initLight(e);const t=n.initCamera(e,640,480),r=n.initRenderer(640,480,{color:16777215});n.initControl(t,r),n.initHelper(e),this.initObject(e);const i=new u(e,t,r),s=new S,a=new M.I;i.createScreenRenderingComposer([s,a]),h.w.on("tick",i.render),this.initGUI(s,i)}initObject(e){const t=new i.Gu$(10,16,16),r=new i.G_z({fog:void 0!==e.fog,color:new i.Q1f(16711680)}),s=new i.eaF(t,r);e.add(s);const n=r.clone();n.color=new i.Q1f(65280);const a=new i.eaF(t,n);a.position.set(30,0,0),e.add(a);const o=r.clone();o.color=new i.Q1f(2237030);const c=new i.eaF(t,o);c.position.set(-30,0,0),e.add(c)}initGUI(e,t){const r=new a.Ay;this.initGUIEffect(r,e),k.initGUIResolution(r,t)}initGUIEffect(e,t){const r=e.addFolder("ColorFilter");r.add(t,"h",-1,1).step(.01),r.add(t,"multiS",0,1).step(.01),r.add(t,"multiB",0,1).step(.01),r.add(t,"addS",-1,1).step(.01),r.add(t,"addB",-1,1).step(.01),r.open()}}window.onload=()=>{new B}}},r={};function i(e){var s=r[e];if(void 0!==s)return s.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,i),n.exports}i.m=t,e=[],i.O=(t,r,s,n)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,s,n]=e[d],o=!0,c=0;c<r.length;c++)(!1&n||a>=n)&&Object.keys(i.O).every((e=>i.O[e](r[c])))?r.splice(c--,1):(o=!1,n<a&&(a=n));if(o){e.splice(d--,1);var l=s();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,s,n]},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={929:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var s,n,[a,o,c]=r,l=0;if(a.some((t=>0!==e[t]))){for(s in o)i.o(o,s)&&(i.m[s]=o[s]);if(c)var d=c(i)}for(t&&t(r);l<a.length;l++)n=a[l],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(d)},r=self.webpackChunkthreejs_postprocess=self.webpackChunkthreejs_postprocess||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var s=i.O(void 0,[121],(()=>i(276)));s=i.O(s)})();