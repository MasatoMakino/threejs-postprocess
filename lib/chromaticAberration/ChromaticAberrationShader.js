"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var three_1 = require("three");
var index_1 = require("../index");
var ChromaticAberration_frag_glsl_1 = __importDefault(require("./ChromaticAberration.frag.glsl"));
var ChromaticAberrationShader = /** @class */ (function (_super) {
    __extends(ChromaticAberrationShader, _super);
    function ChromaticAberrationShader() {
        var _this = _super.call(this) || this;
        _this.fragmentShader = ChromaticAberration_frag_glsl_1.default();
        return _this;
    }
    ChromaticAberrationShader.prototype.initUniform = function () {
        _super.prototype.initUniform.call(this);
        this.uniforms = three_1.UniformsUtils.merge([
            this.uniforms,
            {
                rate: { value: 1.0 },
                radiusInner: { value: 0.25 },
                radiusOuter: { value: Math.sqrt(2.0) }
            }
        ]);
    };
    return ChromaticAberrationShader;
}(index_1.PostProcessShader));
exports.ChromaticAberrationShader = ChromaticAberrationShader;
