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
var PeripheralLightShader_1 = require("./PeripheralLightShader");
var index_1 = require("../index");
/**
 * 周辺光量の減光を表現するフィルタ。
 */
var PeripheralLightShaderPass = /** @class */ (function (_super) {
    __extends(PeripheralLightShaderPass, _super);
    function PeripheralLightShaderPass() {
        return _super.call(this, new PeripheralLightShader_1.PeripheralLightShader()) || this;
    }
    Object.defineProperty(PeripheralLightShaderPass.prototype, "rate", {
        get: function () {
            return this.uniforms.rate.value;
        },
        set: function (value) {
            this.uniforms.rate.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeripheralLightShaderPass.prototype, "radiusInner", {
        get: function () {
            return this.uniforms.radiusInner.value;
        },
        set: function (value) {
            this.uniforms.radiusInner.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeripheralLightShaderPass.prototype, "radiusOuter", {
        get: function () {
            return this.uniforms.radiusOuter.value;
        },
        set: function (value) {
            this.uniforms.radiusOuter.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PeripheralLightShaderPass.prototype, "color", {
        get: function () {
            return this.uniforms.color.value;
        },
        set: function (value) {
            this.uniforms.color.value = value;
        },
        enumerable: true,
        configurable: true
    });
    return PeripheralLightShaderPass;
}(index_1.PostProcessShaderPass));
exports.PeripheralLightShaderPass = PeripheralLightShaderPass;
