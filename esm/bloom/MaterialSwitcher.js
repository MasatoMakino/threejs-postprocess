import { Layers } from "three";
import { BloomEffectComposer } from "./BloomEffectComposer.js";
import { MaterialStorage } from "./MaterialStorage.js";
/**
 * 切り替え可能なUnrealBloomPassにおいて、マテリアルの切り替え処理を担当するクラス。
 */
export class MaterialSwitcher {
    constructor(scene) {
        this.darkenNonBloomed = () => {
            this.scene.traverseVisible(this.switchToDarken);
        };
        this.restoreMaterial = () => {
            this.scene.traverseVisible(this.switchToOriginalMaterial);
        };
        /**
         * scene上の各オブジェクトに対して、マテリアルの切り替えを行う。
         * bloom対象外であれば#000のマテリアルに。
         *
         * @param obj sceneをtraverseして取得したオブジェクト。
         */
        this.switchToDarken = (obj) => {
            if (!this.isDarken(obj))
                return;
            if (obj.userData.materialStorage == null) {
                obj.userData.materialStorage = new MaterialStorage();
            }
            const storage = obj.userData.materialStorage;
            const mesh = obj;
            storage.updateMaterial(mesh.material);
            mesh.material = storage.dark;
        };
        /**
         * マテリアルストレージに格納されたオリジナルのマテリアル設定に復帰する。
         * @param obj
         */
        this.switchToOriginalMaterial = (obj) => {
            if (!this.isDarken(obj))
                return;
            const mesh = obj;
            mesh.material = obj.userData.materialStorage.original;
        };
        this.scene = scene;
        this.layers = new Layers();
        this.layers.set(BloomEffectComposer.BLOOM);
    }
    /**
     * そのオブジェクトがbloomマスクの対象か否かを判定する。
     * @param obj
     */
    isDarken(obj) {
        if (obj.isMesh == null && obj.isLine == null)
            return false;
        return !this.layers.test(obj.layers);
    }
}
