"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostProcessShaderPass = void 0;
const ShaderPass_1 = require("three/examples/jsm/postprocessing/ShaderPass");
class PostProcessShaderPass extends ShaderPass_1.ShaderPass {
    get tDiffuse() {
        return this.uniforms.tDiffuse.value;
    }
    set tDiffuse(value) {
        this.uniforms.tDiffuse.value = value;
    }
}
exports.PostProcessShaderPass = PostProcessShaderPass;
