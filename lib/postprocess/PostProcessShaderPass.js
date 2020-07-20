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
exports.PostProcessShaderPass = void 0;
var ShaderPass_1 = require("three/examples/jsm/postprocessing/ShaderPass");
var PostProcessShaderPass = /** @class */ (function (_super) {
    __extends(PostProcessShaderPass, _super);
    function PostProcessShaderPass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PostProcessShaderPass.prototype, "tDiffuse", {
        get: function () {
            return this.uniforms.tDiffuse.value;
        },
        set: function (value) {
            this.uniforms.tDiffuse.value = value;
        },
        enumerable: false,
        configurable: true
    });
    return PostProcessShaderPass;
}(ShaderPass_1.ShaderPass));
exports.PostProcessShaderPass = PostProcessShaderPass;
