"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Bloom設定に応じて、オリジナルのマテリアルを格納するためのオブジェクト。
 * Object3D.userData.materialStorageに格納される。
 */
var MaterialStorage = /** @class */ (function () {
    function MaterialStorage() {
    }
    MaterialStorage.prototype.updateMaterial = function (original) {
        this.original = original;
        this.copyMaterialArray();
        this.darkenMaterialArray(this.dark);
    };
    MaterialStorage.prototype.copyMaterialArray = function () {
        if (this.isClone()) {
            this.cloneToDark();
        }
        else {
            this.copyToDark();
        }
    };
    /**
     * darkenマテリアルのコピーに、クローンを使用するかcopyを使用するかを判定する。
     */
    MaterialStorage.prototype.isClone = function () {
        var darkenHead = this.getHeadMaterial(this.dark);
        var originalHead = this.getHeadMaterial(this.original);
        if (darkenHead == null || darkenHead.type !== originalHead.type) {
            return true;
        }
        return false;
    };
    MaterialStorage.prototype.getHeadMaterial = function (mat) {
        var isArray = Array.isArray(mat);
        if (isArray)
            return mat[0];
        return mat;
    };
    MaterialStorage.prototype.copyToDark = function () {
        var _this = this;
        var isArrayOriginal = Array.isArray(this.original);
        if (isArrayOriginal) {
            this.dark.forEach(function (drk, index) {
                drk.copy(_this.original[index]);
            });
        }
        else {
            this.dark.copy(this.original);
        }
    };
    MaterialStorage.prototype.cloneToDark = function () {
        var isArrayOriginal = Array.isArray(this.original);
        if (isArrayOriginal) {
            this.dark = this.original.map(function (val) {
                return val.clone();
            });
        }
        else {
            this.dark = this.original.clone();
        }
    };
    MaterialStorage.prototype.darkenMaterialArray = function (material) {
        if (!Array.isArray(material)) {
            MaterialStorage.darkenMaterial(material);
            return;
        }
        material.forEach(function (mat) {
            MaterialStorage.darkenMaterial(mat);
        });
    };
    /**
     * マテリアルを反射光のない黒に書き換える。
     * @param material
     */
    MaterialStorage.darkenMaterial = function (material) {
        if (material["color"] != null) {
            material["color"].setHex(0);
        }
        if (material["shininess"] != null) {
            material["shininess"] = 0;
        }
        if (material["specular"] != null) {
            material["specular"].setHex(0);
        }
        if (material["emissive"] != null) {
            material["emissive"].setHex(0);
        }
    };
    return MaterialStorage;
}());
exports.MaterialStorage = MaterialStorage;
