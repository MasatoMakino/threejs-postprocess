"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeripheralLightShader = void 0;
const three_1 = require("three");
const index_1 = require("../index");
const PeripheralLight_frag_glsl_1 = __importDefault(require("./PeripheralLight.frag.glsl"));
class PeripheralLightShader extends index_1.PostProcessShader {
    constructor() {
        super();
        this.fragmentShader = PeripheralLight_frag_glsl_1.default();
    }
    initUniform() {
        super.initUniform();
        this.uniforms = three_1.UniformsUtils.merge([
            this.uniforms,
            {
                rate: { value: 5.0 },
                radiusInner: { value: 0.75 },
                radiusOuter: { value: Math.sqrt(2.0) },
                color: { value: new three_1.Color(0, 0, 0) }
            }
        ]);
    }
}
exports.PeripheralLightShader = PeripheralLightShader;
