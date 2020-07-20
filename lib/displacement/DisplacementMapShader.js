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
exports.DisplacementMapShader = void 0;
var three_1 = require("three");
var index_1 = require("../index");
var DisplacementMap_frag_glsl_1 = __importDefault(require("./DisplacementMap.frag.glsl"));
var three_2 = require("three");
var DisplacementMapShader = /** @class */ (function (_super) {
    __extends(DisplacementMapShader, _super);
    function DisplacementMapShader() {
        var _this = _super.call(this) || this;
        _this.fragmentShader = DisplacementMap_frag_glsl_1.default();
        return _this;
    }
    DisplacementMapShader.prototype.initUniform = function () {
        _super.prototype.initUniform.call(this);
        this.uniforms = three_1.UniformsUtils.merge([
            this.uniforms,
            {
                strengthX: { value: 0.0 },
                strengthY: { value: 0.0 },
                map: { value: null },
                hasMap: { value: false },
                aspect: { value: new three_2.Vector2(1.0, 1.0) }
            }
        ]);
    };
    return DisplacementMapShader;
}(index_1.PostProcessShader));
exports.DisplacementMapShader = DisplacementMapShader;
