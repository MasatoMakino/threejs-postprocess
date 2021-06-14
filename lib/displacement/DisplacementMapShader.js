"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplacementMapShader = void 0;
const three_1 = require("three");
const index_1 = require("../index");
const DisplacementMap_frag_glsl_1 = __importDefault(require("./DisplacementMap.frag.glsl"));
const three_2 = require("three");
class DisplacementMapShader extends index_1.PostProcessShader {
    constructor() {
        super();
        this.fragmentShader = DisplacementMap_frag_glsl_1.default();
    }
    initUniform() {
        super.initUniform();
        this.uniforms = three_1.UniformsUtils.merge([
            this.uniforms,
            {
                strengthX: { value: 0.0 },
                strengthY: { value: 0.0 },
                map: { value: null },
                hasMap: { value: false },
                aspect: { value: new three_2.Vector2(1.0, 1.0) }
            }
        ]);
    }
}
exports.DisplacementMapShader = DisplacementMapShader;
