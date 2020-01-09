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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FXAAShaderModule = __importStar(require("three/examples/jsm/shaders/FXAAShader"));
var postprocess_1 = require("../postprocess");
/**
 * FXAAShaderを組み込み済みのShaderPass
 */
var FXAAShaderPass = /** @class */ (function (_super) {
    __extends(FXAAShaderPass, _super);
    /**
     * コンストラクタ
     */
    function FXAAShaderPass() {
        return _super.call(this, FXAAShaderModule["FXAAShader"]) || this;
    }
    FXAAShaderPass.prototype.setSize = function (width, height) {
        _super.prototype.setSize.call(this, width, height);
        var uniforms = this.material.uniforms;
        uniforms.resolution.value.x = 1 / width;
        uniforms.resolution.value.y = 1 / height;
    };
    return FXAAShaderPass;
}(postprocess_1.PostProcessShaderPass));
exports.FXAAShaderPass = FXAAShaderPass;
