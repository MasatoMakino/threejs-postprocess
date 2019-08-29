import { Material } from "three";

/**
 * Bloom設定に応じて、オリジナルのマテリアルを格納するためのオブジェクト。
 * Object3D.userData.materialStorageに格納される。
 */
export class MaterialStorage {
  original?: Material;
  darken?: Material;

  public updateMaterial(original: Material) {
    this.original = original;

    if (this.darken == null || this.darken.type !== this.original.type) {
      this.darken = this.original.clone();
    } else {
      this.darken.copy(this.original);
    }

    if (this.darken["color"] != null) {
      this.darken["color"].setHex(0);
    }
    if (this.darken["shininess"] != null) {
      this.darken["shininess"] = 0;
    }
    if (this.darken["specular"] != null) {
      this.darken["specular"].setHex(0);
    }
    if (this.darken["emissive"] != null) {
      this.darken["emissive"].setHex(0);
    }
  }
}
