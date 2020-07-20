"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    //language=GLSL
    return "    \nuniform sampler2D tDiffuse;\nuniform sampler2D mixTexture;\nvarying vec2 vUv;\nvec4 getTexture( sampler2D map ) {\n    return texture2D( map , vUv );\n}\nvoid main() {\n    gl_FragColor = ( getTexture( tDiffuse ) + vec4( 1.0 ) * getTexture( mixTexture ) );\n}";
});
