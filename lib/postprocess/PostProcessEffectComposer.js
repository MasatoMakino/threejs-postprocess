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
exports.PostProcessEffectComposer = void 0;
var EffectComposer_1 = require("three/examples/jsm/postprocessing/EffectComposer");
/**
 * レンダリングの前後に任意の処理を実行する機能を追加したEffectComposer.
 */
var PostProcessEffectComposer = /** @class */ (function (_super) {
    __extends(PostProcessEffectComposer, _super);
    function PostProcessEffectComposer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enabled = true;
        return _this;
    }
    return PostProcessEffectComposer;
}(EffectComposer_1.EffectComposer));
exports.PostProcessEffectComposer = PostProcessEffectComposer;
