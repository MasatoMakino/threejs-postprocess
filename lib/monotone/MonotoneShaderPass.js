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
exports.MonotoneShaderPass = void 0;
var MonotoneShader_1 = require("./MonotoneShader");
var index_1 = require("../index");
/**
 *
 */
var MonotoneShaderPass = /** @class */ (function (_super) {
    __extends(MonotoneShaderPass, _super);
    function MonotoneShaderPass() {
        return _super.call(this, new MonotoneShader_1.MonotoneShader()) || this;
    }
    Object.defineProperty(MonotoneShaderPass.prototype, "color", {
        get: function () {
            return this.uniforms.color.value;
        },
        set: function (value) {
            this.uniforms.color.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MonotoneShaderPass.prototype, "strength", {
        get: function () {
            return this.uniforms.strength.value;
        },
        set: function (value) {
            this.uniforms.strength.value = value;
        },
        enumerable: false,
        configurable: true
    });
    return MonotoneShaderPass;
}(index_1.PostProcessShaderPass));
exports.MonotoneShaderPass = MonotoneShaderPass;
