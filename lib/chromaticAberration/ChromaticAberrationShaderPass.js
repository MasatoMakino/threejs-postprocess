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
var ChromaticAberrationShader_1 = require("./ChromaticAberrationShader");
var index_1 = require("../index");
var ChromaticAberrationShaderPass = /** @class */ (function (_super) {
    __extends(ChromaticAberrationShaderPass, _super);
    function ChromaticAberrationShaderPass() {
        return _super.call(this, new ChromaticAberrationShader_1.ChromaticAberrationShader()) || this;
    }
    Object.defineProperty(ChromaticAberrationShaderPass.prototype, "rate", {
        get: function () {
            return this.uniforms.rate.value;
        },
        set: function (value) {
            this.uniforms.rate.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChromaticAberrationShaderPass.prototype, "radiusInner", {
        get: function () {
            return this.uniforms.radiusInner.value;
        },
        set: function (value) {
            this.uniforms.radiusInner.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChromaticAberrationShaderPass.prototype, "radiusOuter", {
        get: function () {
            return this.uniforms.radiusOuter.value;
        },
        set: function (value) {
            this.uniforms.radiusOuter.value = value;
        },
        enumerable: true,
        configurable: true
    });
    return ChromaticAberrationShaderPass;
}(index_1.PostProcessShaderPass));
exports.ChromaticAberrationShaderPass = ChromaticAberrationShaderPass;
