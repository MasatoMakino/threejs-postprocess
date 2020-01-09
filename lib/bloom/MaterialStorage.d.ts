import { Material } from "three";
/**
 * Bloom設定に応じて、オリジナルのマテリアルを格納するためのオブジェクト。
 * Object3D.userData.materialStorageに格納される。
 */
export declare class MaterialStorage {
    original?: Material | Material[];
    dark?: Material | Material[];
    updateMaterial(original: Material | Material[]): void;
    private copyMaterialArray;
    /**
     * darkenマテリアルのコピーに、クローンを使用するかcopyを使用するかを判定する。
     */
    private isClone;
    private getHeadMaterial;
    private copyToDark;
    private cloneToDark;
    private darkenMaterialArray;
    /**
     * マテリアルを反射光のない黒に書き換える。
     * @param material
     */
    private static darkenMaterial;
}
//# sourceMappingURL=MaterialStorage.d.ts.map