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
var ColorFilter_frag_glsl_1 = __importDefault(require("./ColorFilter.frag.glsl"));
var ColorFilterShader = /** @class */ (function (_super) {
    __extends(ColorFilterShader, _super);
    function ColorFilterShader() {
        var _this = _super.call(this) || this;
        _this.fragmentShader = ColorFilter_frag_glsl_1.default();
        return _this;
    }
    ColorFilterShader.prototype.initUniform = function () {
        _super.prototype.initUniform.call(this);
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
    };
    return ColorFilterShader;
}(index_1.PostProcessShader));
exports.ColorFilterShader = ColorFilterShader;
