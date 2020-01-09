"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    //language=GLSL
    return "\nuniform sampler2D tDiffuse;\nuniform float rate;\nuniform float radiusInner;\nuniform float radiusOuter;\nuniform vec3 color;\nvarying vec2 vUv;\n\nvoid main() {\n  float distance = length( vUv - 0.5 )*2.0;\n  distance = smoothstep( radiusInner, radiusOuter, distance);  \n  float shift = rate * distance * 0.01;\n\n  vec4 original = texture2D( tDiffuse, vUv );\n  vec3 result = mix( original.rgb, color, shift);\n\n  gl_FragColor = vec4( result , original.a );\n}\n  ";
});
