"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorFilterShader = void 0;
const three_1 = require("three");
const index_1 = require("../index");
const ColorFilter_frag_glsl_1 = __importDefault(require("./ColorFilter.frag.glsl"));
class ColorFilterShader extends index_1.PostProcessShader {
    constructor() {
        super();
        this.fragmentShader = (0, ColorFilter_frag_glsl_1.default)();
    }
    initUniform() {
        super.initUniform();
        this.uniforms = three_1.UniformsUtils.merge([
            this.uniforms,
            {
                h: { value: 0.0 },
                multiS: { value: 1.0 },
                multiB: { value: 1.0 },
                addS: { value: 0.0 },
                addB: { value: 0.0 }
            }
        ]);
    }
}
exports.ColorFilterShader = ColorFilterShader;
