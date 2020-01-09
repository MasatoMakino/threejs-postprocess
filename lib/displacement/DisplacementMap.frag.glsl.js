"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    //language=GLSL
    return "\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\n\nuniform float strengthX;\nuniform float strengthY;\nuniform bool hasMap;\nuniform sampler2D map;\nuniform vec2 aspect;\n\nvoid main() {\n  vec2 uv = vUv;\n  if( hasMap ){\n    vec2 fixedUV = vUv - 0.5;\n    fixedUV *= aspect;\n    fixedUV += 0.5;\n    \n    vec4 displacement = texture2D( map, fixedUV );\n    uv +=  displacement.rg * vec2 (strengthX, strengthY);\n }\n\n  vec4 color = texture2D( tDiffuse, uv );\n  gl_FragColor = color;\n}\n  ";
});
