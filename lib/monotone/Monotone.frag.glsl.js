"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    //language=GLSL
    return "\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\n\nuniform float strength;\nuniform vec3 color;\n\nvoid main() {\n  vec4 original = texture2D( tDiffuse, vUv );\n  vec3 luma = vec3(0.299, 0.587, 0.114);\n  float v = dot(original.rgb, luma);\n  gl_FragColor = vec4 (mix( original.rgb, v * color, strength), original.a);\n}\n  ";
});
