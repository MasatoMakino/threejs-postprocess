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
var index_1 = require("../index");
var MixShader_frag_glsl_1 = __importDefault(require("./MixShader.frag.glsl"));
var three_1 = require("three");
var MixShader = /** @class */ (function (_super) {
    __extends(MixShader, _super);
    function MixShader() {
        var _this = _super.call(this) || this;
        _this.fragmentShader = MixShader_frag_glsl_1.default();
        return _this;
    }
    MixShader.prototype.initUniform = function () {
        _super.prototype.initUniform.call(this);
        this.uniforms = three_1.UniformsUtils.merge([
            this.uniforms,
            {
                mixTexture: { value: null }
            }
        ]);
    };
    return MixShader;
}(index_1.PostProcessShader));
exports.MixShader = MixShader;
