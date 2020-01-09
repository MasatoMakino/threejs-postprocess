/**
 * Bloom設定に応じて、オリジナルのマテリアルを格納するためのオブジェクト。
 * Object3D.userData.materialStorageに格納される。
 */
export class MaterialStorage {
    updateMaterial(original) {
        this.original = original;
        this.copyMaterialArray();
        this.darkenMaterialArray(this.dark);
    }
    copyMaterialArray() {
        if (this.isClone()) {
            this.cloneToDark();
        }
        else {
            this.copyToDark();
        }
    }
    /**
     * darkenマテリアルのコピーに、クローンを使用するかcopyを使用するかを判定する。
     */
    isClone() {
        const darkenHead = this.getHeadMaterial(this.dark);
        const originalHead = this.getHeadMaterial(this.original);
        if (darkenHead == null || darkenHead.type !== originalHead.type) {
            return true;
        }
        return false;
    }
    getHeadMaterial(mat) {
        const isArray = Array.isArray(mat);
        if (isArray)
            return mat[0];
        return mat;
    }
    copyToDark() {
        const isArrayOriginal = Array.isArray(this.original);
        if (isArrayOriginal) {
            this.dark.forEach((drk, index) => {
                drk.copy(this.original[index]);
            });
        }
        else {
            this.dark.copy(this.original);
        }
    }
    cloneToDark() {
        const isArrayOriginal = Array.isArray(this.original);
        if (isArrayOriginal) {
            this.dark = this.original.map(val => {
                return val.clone();
            });
        }
        else {
            this.dark = this.original.clone();
        }
    }
    darkenMaterialArray(material) {
        if (!Array.isArray(material)) {
            MaterialStorage.darkenMaterial(material);
            return;
        }
        material.forEach(mat => {
            MaterialStorage.darkenMaterial(mat);
        });
    }
    /**
     * マテリアルを反射光のない黒に書き換える。
     * @param material
     */
    static darkenMaterial(material) {
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
    }
}
