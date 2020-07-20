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
exports.MonotoneShader = void 0;
var three_1 = require("three");
var index_1 = require("../index");
var Monotone_frag_glsl_1 = __importDefault(require("./Monotone.frag.glsl"));
var MonotoneShader = /** @class */ (function (_super) {
    __extends(MonotoneShader, _super);
    function MonotoneShader() {
        var _this = _super.call(this) || this;
        _this.fragmentShader = Monotone_frag_glsl_1.default();
        return _this;
    }
    MonotoneShader.prototype.initUniform = function () {
        _super.prototype.initUniform.call(this);
        this.uniforms = three_1.UniformsUtils.merge([
            this.uniforms,
            {
                strength: { value: 1.0 },
                color: { value: new three_1.Color(0xffffff) }
            }
        ]);
    };
    return MonotoneShader;
}(index_1.PostProcessShader));
exports.MonotoneShader = MonotoneShader;
