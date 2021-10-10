"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChromaticAberrationShader = void 0;
const three_1 = require("three");
const index_1 = require("../index");
const ChromaticAberration_frag_glsl_1 = __importDefault(require("./ChromaticAberration.frag.glsl"));
class ChromaticAberrationShader extends index_1.PostProcessShader {
    constructor() {
        super();
        this.fragmentShader = (0, ChromaticAberration_frag_glsl_1.default)();
    }
    initUniform() {
        super.initUniform();
        this.uniforms = three_1.UniformsUtils.merge([
            this.uniforms,
            {
                rate: { value: 1.0 },
                radiusInner: { value: 0.25 },
                radiusOuter: { value: Math.sqrt(2.0) }
            }
        ]);
    }
}
exports.ChromaticAberrationShader = ChromaticAberrationShader;
