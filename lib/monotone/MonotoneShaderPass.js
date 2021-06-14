"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonotoneShaderPass = void 0;
const MonotoneShader_1 = require("./MonotoneShader");
const index_1 = require("../index");
/**
 *
 */
class MonotoneShaderPass extends index_1.PostProcessShaderPass {
    get color() {
        return this.uniforms.color.value;
    }
    set color(value) {
        this.uniforms.color.value = value;
    }
    get strength() {
        return this.uniforms.strength.value;
    }
    set strength(value) {
        this.uniforms.strength.value = value;
    }
    constructor() {
        super(new MonotoneShader_1.MonotoneShader());
    }
}
exports.MonotoneShaderPass = MonotoneShaderPass;
