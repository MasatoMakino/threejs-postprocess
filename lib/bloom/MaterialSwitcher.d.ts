import { Scene, Layers, Object3D } from "three";
/**
 * 切り替え可能なUnrealBloomPassにおいて、マテリアルの切り替え処理を担当するクラス。
 */
export declare class MaterialSwitcher {
    protected scene: Scene;
    protected layers: Layers;
    constructor(scene: Scene);
    darkenNonBloomed: () => void;
    restoreMaterial: () => void;
    /**
     * scene上の各オブジェクトに対して、マテリアルの切り替えを行う。
     * bloom対象外であれば#000のマテリアルに。
     *
     * @param obj sceneをtraverseして取得したオブジェクト。
     */
    protected switchToDarken: (obj: Object3D) => void;
    /**
     * マテリアルストレージに格納されたオリジナルのマテリアル設定に復帰する。
     * @param obj
     */
    protected switchToOriginalMaterial: (obj: Object3D) => void;
    /**
     * そのオブジェクトがbloomマスクの対象か否かを判定する。
     * @param obj
     */
    private isDarken;
}
//# sourceMappingURL=MaterialSwitcher.d.ts.map