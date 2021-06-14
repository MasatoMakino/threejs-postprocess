"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixShader = void 0;
const index_1 = require("../index");
const MixShader_frag_glsl_1 = __importDefault(require("./MixShader.frag.glsl"));
const three_1 = require("three");
class MixShader extends index_1.PostProcessShader {
    constructor() {
        super();
        this.fragmentShader = MixShader_frag_glsl_1.default();
    }
    initUniform() {
        super.initUniform();
        this.uniforms = three_1.UniformsUtils.merge([
            this.uniforms,
            {
                mixTexture: { value: null }
            }
        ]);
    }
}
exports.MixShader = MixShader;
