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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixShaderPass = void 0;
var index_1 = require("../index");
var MixShader_1 = require("./MixShader");
/**
 * 他のエフェクトコンポーザーの描画結果を受け取り、自身のレンダリング結果に乗算するShaderPass
 */
var MixShaderPass = /** @class */ (function (_super) {
    __extends(MixShaderPass, _super);
    function MixShaderPass(mixTexture) {
        var _this = _super.call(this, new MixShader_1.MixShader()) || this;
        _this.mixTexture = mixTexture;
        return _this;
    }
    Object.defineProperty(MixShaderPass.prototype, "mixTexture", {
        get: function () {
            return this.uniforms.mixTexture.value;
        },
        set: function (value) {
            this.uniforms.mixTexture.value = value;
        },
        enumerable: false,
        configurable: true
    });
    return MixShaderPass;
}(index_1.PostProcessShaderPass));
exports.MixShaderPass = MixShaderPass;
