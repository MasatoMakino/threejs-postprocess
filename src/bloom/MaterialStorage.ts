import { Material } from "three";

/**
 * Bloom設定に応じて、オリジナルのマテリアルを格納するためのオブジェクト。
 * Object3D.userData.materialStorageに格納される。
 */
export class MaterialStorage {
  original?: Material | Material[];
  dark?: Material | Material[];

  public updateMaterial(original: Material | Material[]) {
    this.original = original;

    this.copyMaterialArray();
    this.darkenMaterialArray(this.dark);
  }

  private copyMaterialArray(): void {
    if (this.isClone()) {
      this.cloneToDark();
    } else {
      this.copyToDark();
    }
  }

  /**
   * darkenマテリアルのコピーに、クローンを使用するかcopyを使用するかを判定する。
   */
  private isClone(): boolean {
    const darkenHead: Material = this.getHeadMaterial(this.dark);
    const originalHead: Material = this.getHeadMaterial(this.original);

    if (darkenHead == null || darkenHead.type !== originalHead.type) {
      return true;
    }
    return false;
  }

  private getHeadMaterial(mat: Material | Material[]): Material {
    const isArray = Array.isArray(mat);
    if (isArray) return mat[0];
    return mat as Material;
  }

  private copyToDark(): void {
    const isArrayOriginal = Array.isArray(this.original);
    if (!isArrayOriginal) {
      (this.dark as Material[]).forEach((drk, index) => {
        drk.copy(this.original[index]);
      });
    } else {
      (this.dark as Material).copy(this.original as Material);
    }
  }

  private cloneToDark(): void {
    const isArrayOriginal = Array.isArray(this.original);
    if (!isArrayOriginal) {
      this.dark = (this.original as Material[]).map(val => {
        return val.clone();
      });
    } else {
      this.dark = (this.original as Material).clone();
    }
  }

  private darkenMaterialArray(material: Material | Material[]): void {
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
  private static darkenMaterial(material: Material): void {
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
