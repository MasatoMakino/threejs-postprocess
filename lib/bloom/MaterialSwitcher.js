"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialSwitcher = void 0;
var three_1 = require("three");
var BloomEffectComposer_1 = require("./BloomEffectComposer");
var MaterialStorage_1 = require("./MaterialStorage");
/**
 * 切り替え可能なUnrealBloomPassにおいて、マテリアルの切り替え処理を担当するクラス。
 */
var MaterialSwitcher = /** @class */ (function () {
    function MaterialSwitcher(scene) {
        var _this = this;
        this.darkenNonBloomed = function () {
            _this.scene.traverseVisible(_this.switchToDarken);
        };
        this.restoreMaterial = function () {
            _this.scene.traverseVisible(_this.switchToOriginalMaterial);
        };
        /**
         * scene上の各オブジェクトに対して、マテリアルの切り替えを行う。
         * bloom対象外であれば#000のマテリアルに。
         *
         * @param obj sceneをtraverseして取得したオブジェクト。
         */
        this.switchToDarken = function (obj) {
            if (!_this.isDarken(obj))
                return;
            if (obj.userData.materialStorage == null) {
                obj.userData.materialStorage = new MaterialStorage_1.MaterialStorage();
            }
            var storage = obj.userData.materialStorage;
            var mesh = obj;
            storage.updateMaterial(mesh.material);
            mesh.material = storage.dark;
        };
        /**
         * マテリアルストレージに格納されたオリジナルのマテリアル設定に復帰する。
         * @param obj
         */
        this.switchToOriginalMaterial = function (obj) {
            if (!_this.isDarken(obj))
                return;
            var mesh = obj;
            mesh.material = obj.userData.materialStorage.original;
        };
        this.scene = scene;
        this.layers = new three_1.Layers();
        this.layers.set(BloomEffectComposer_1.BloomEffectComposer.BLOOM);
    }
    /**
     * そのオブジェクトがbloomマスクの対象か否かを判定する。
     * @param obj
     */
    MaterialSwitcher.prototype.isDarken = function (obj) {
        if (obj.isMesh == null && obj.isLine == null)
            return false;
        return !this.layers.test(obj.layers);
    };
    return MaterialSwitcher;
}());
exports.MaterialSwitcher = MaterialSwitcher;
