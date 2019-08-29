import { Scene } from "three";
import { Layers } from "three";
import { BloomEffectComposer } from "./BloomEffectComposer";
import { MaterialStorage } from "./MaterialStorage";

/**
 * 切り替え可能なUnrealBloomPassにおいて、マテリアルの切り替え処理を担当するクラス。
 */
export class MaterialSwitcher {
  protected scene: Scene;
  protected layers: Layers;

  constructor(scene: Scene) {
    this.scene = scene;
    this.layers = new Layers();
    this.layers.set(BloomEffectComposer.BLOOM);
  }

  public darkenNonBloomed(): void {
    this.scene.traverse(this.switchToDarken);
  }

  public restoreMaterial(): void {}

  /**
   * scene上の各オブジェクトに対して、マテリアルの切り替えを行う。
   * bloom対象外であれば#000のマテリアルに。
   *
   * @param obj sceneをtraverseして取得したオブジェクト。
   */
  protected switchToDarken = (obj: any) => {
    if (!this.isDarken(obj)) return;

    if (obj.userData.materialStorage == null) {
      obj.userData.materialStorage = new MaterialStorage();
    }
    const storage: MaterialStorage = obj.userData.materialStorage;
    storage.updateMaterial(obj.material);
    obj.material = storage.darken;
  };

  /**
   * そのオブジェクトがbloomマスクの対象か否かを判定する。
   * @param obj
   */
  private isDarken(obj: any): boolean {
    if (obj.isMesh == null && obj.isLine == null) return false;
    return !this.layers.test(obj.layers);
  }
}
