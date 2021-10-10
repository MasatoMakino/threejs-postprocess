"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonotoneShader = void 0;
const three_1 = require("three");
const index_1 = require("../index");
const Monotone_frag_glsl_1 = __importDefault(require("./Monotone.frag.glsl"));
class MonotoneShader extends index_1.PostProcessShader {
    constructor() {
        super();
        this.fragmentShader = (0, Monotone_frag_glsl_1.default)();
    }
    initUniform() {
        super.initUniform();
        this.uniforms = three_1.UniformsUtils.merge([
            this.uniforms,
            {
                strength: { value: 1.0 },
                color: { value: new three_1.Color(0xffffff) }
            }
        ]);
    }
}
exports.MonotoneShader = MonotoneShader;
