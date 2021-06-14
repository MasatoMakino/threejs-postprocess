"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeripheralLightShaderPass = void 0;
const PeripheralLightShader_1 = require("./PeripheralLightShader");
const index_1 = require("../index");
/**
 * 周辺光量の減光を表現するフィルタ。
 */
class PeripheralLightShaderPass extends index_1.PostProcessShaderPass {
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
    get color() {
        return this.uniforms.color.value;
    }
    set color(value) {
        this.uniforms.color.value = value;
    }
    constructor() {
        super(new PeripheralLightShader_1.PeripheralLightShader());
    }
}
exports.PeripheralLightShaderPass = PeripheralLightShaderPass;
