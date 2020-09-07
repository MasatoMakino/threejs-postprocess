"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorFilterShaderPass = void 0;
var ColorFilterShader_1 = require("./ColorFilterShader");
var index_1 = require("../index");
/**
 * hsb値をオフセットして、色を変化させるシェーダーパス
 *
 * 例 )
 * multiS = 0.0, addB = 1.0にすると白に飽和する。
 * multiB = 0.0, もしくはaddB = -1.0 でブラックアウト。
 */
var ColorFilterShaderPass = /** @class */ (function (_super) {
    __extends(ColorFilterShaderPass, _super);
    function ColorFilterShaderPass() {
        return _super.call(this, new ColorFilterShader_1.ColorFilterShader()) || this;
    }
    Object.defineProperty(ColorFilterShaderPass.prototype, "h", {
        get: function () {
            return this.uniforms.h.value;
        },
        set: function (value) {
            this.uniforms.h.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColorFilterShaderPass.prototype, "multiS", {
        get: function () {
            return this.uniforms.multiS.value;
        },
        set: function (value) {
            this.uniforms.multiS.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColorFilterShaderPass.prototype, "multiB", {
        get: function () {
            return this.uniforms.multiB.value;
        },
        set: function (value) {
            this.uniforms.multiB.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColorFilterShaderPass.prototype, "addS", {
        get: function () {
            return this.uniforms.addS.value;
        },
        set: function (value) {
            this.uniforms.addS.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColorFilterShaderPass.prototype, "addB", {
        get: function () {
            return this.uniforms.addB.value;
        },
        set: function (value) {
            this.uniforms.addB.value = value;
        },
        enumerable: false,
        configurable: true
    });
    return ColorFilterShaderPass;
}(index_1.PostProcessShaderPass));
exports.ColorFilterShaderPass = ColorFilterShaderPass;
