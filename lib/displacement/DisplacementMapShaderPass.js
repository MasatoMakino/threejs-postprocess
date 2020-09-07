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
exports.DisplacementMapShaderPass = void 0;
var DisplacementMapShader_1 = require("./DisplacementMapShader");
var index_1 = require("../index");
var three_1 = require("three");
var three_2 = require("three");
/**
 * DisplacementMapによって画面を歪ませるShaderPass
 */
var DisplacementMapShaderPass = /** @class */ (function (_super) {
    __extends(DisplacementMapShaderPass, _super);
    function DisplacementMapShaderPass() {
        return _super.call(this, new DisplacementMapShader_1.DisplacementMapShader()) || this;
    }
    Object.defineProperty(DisplacementMapShaderPass.prototype, "map", {
        get: function () {
            return this.uniforms.map.value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * DisplacementMapを読み込む。
     * 読み込み後にアスペクト比の補正を行う。
     *
     * @param url
     */
    DisplacementMapShaderPass.prototype.loadMap = function (url) {
        var _this = this;
        var texture = new three_1.TextureLoader().load(url, function (texture) {
            _this.mapSizeW = texture.image.width;
            _this.mapSizeH = texture.image.height;
            _this.updateAspect();
        });
        this.uniforms.map.value = texture;
        this.uniforms.hasMap.value = texture != null;
    };
    Object.defineProperty(DisplacementMapShaderPass.prototype, "strengthX", {
        get: function () {
            return this.uniforms.strengthX.value;
        },
        set: function (value) {
            this.uniforms.strengthX.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DisplacementMapShaderPass.prototype, "strengthY", {
        get: function () {
            return this.uniforms.strengthY.value;
        },
        set: function (value) {
            this.uniforms.strengthY.value = value;
        },
        enumerable: false,
        configurable: true
    });
    DisplacementMapShaderPass.prototype.setSize = function (width, height) {
        _super.prototype.setSize.call(this, width, height);
        this.rendererSizeW = width;
        this.rendererSizeH = height;
        this.updateAspect();
    };
    DisplacementMapShaderPass.prototype.updateAspect = function () {
        if (this.mapSizeW == null || this.rendererSizeW == null) {
            return;
        }
        var rendererAspect = this.rendererSizeW / this.rendererSizeH;
        var mapAspect = this.mapSizeW / this.mapSizeH;
        if (rendererAspect > mapAspect) {
            this.uniforms.aspect.value = new three_2.Vector2(1.0, mapAspect / rendererAspect);
        }
        else {
            this.uniforms.aspect.value = new three_2.Vector2(rendererAspect / mapAspect, 1.0);
        }
    };
    return DisplacementMapShaderPass;
}(index_1.PostProcessShaderPass));
exports.DisplacementMapShaderPass = DisplacementMapShaderPass;
