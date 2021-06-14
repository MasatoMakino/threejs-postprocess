"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChromaticAberrationShaderPass = void 0;
const ChromaticAberrationShader_1 = require("./ChromaticAberrationShader");
const index_1 = require("../index");
class ChromaticAberrationShaderPass extends index_1.PostProcessShaderPass {
    get rate() {
        return this.uniforms.rate.value;
    }
    set rate(value) {
        this.uniforms.rate.value = value;
    }
    get radiusInner() {
        return this.uniforms.radiusInner.value;
    }
    set radiusInner(value) {
        this.uniforms.radiusInner.value = value;
    }
    get radiusOuter() {
        return this.uniforms.radiusOuter.value;
    }
    set radiusOuter(value) {
        this.uniforms.radiusOuter.value = value;
    }
    constructor() {
        super(new ChromaticAberrationShader_1.ChromaticAberrationShader());
    }
}
exports.ChromaticAberrationShaderPass = ChromaticAberrationShaderPass;
