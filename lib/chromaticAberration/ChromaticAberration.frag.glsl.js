"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    //language=GLSL
    return "\nuniform sampler2D tDiffuse;\nuniform float rate;\nuniform float radiusInner;\nuniform float radiusOuter;\n\nvarying vec2 vUv;\n\nvoid main() {\n  float distance = length( vUv - 0.5 )*2.0;\n  distance = smoothstep( radiusInner, radiusOuter, distance);\n  float shift = rate * distance * 0.01;\n\n  float r = texture2D( tDiffuse, vUv + vec2( shift, 0.0 ) ).r;\n  float g = texture2D( tDiffuse, vUv ).g;\n  float b = texture2D( tDiffuse, vUv - vec2( shift, 0.0 ) ).b;\n\n  gl_FragColor = vec4( vec3(r, g, b) , 1.0 );\n}\n  ";
});
