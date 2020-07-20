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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FXAAShaderPass = void 0;
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
