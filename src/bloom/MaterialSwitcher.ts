import { Scene, Layers, Object3D, Mesh } from "three";
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
    this.scene.traverseVisible(this.switchToDarken);
  }

  public restoreMaterial(): void {
    this.scene.traverseVisible(this.switchToOriginalMaterial);
  }

  /**
   * scene上の各オブジェクトに対して、マテリアルの切り替えを行う。
   * bloom対象外であれば#000のマテリアルに。
   *
   * @param obj sceneをtraverseして取得したオブジェクト。
   */
  protected switchToDarken = (obj: Object3D) => {
    if (!this.isDarken(obj)) return;

    if (obj.userData.materialStorage == null) {
      obj.userData.materialStorage = new MaterialStorage();
    }
    const storage: MaterialStorage = obj.userData.materialStorage;
    const mesh: Mesh = obj as Mesh;

    storage.updateMaterial(mesh.material);
    mesh.material = storage.dark;
  };

  /**
   * マテリアルストレージに格納されたオリジナルのマテリアル設定に復帰する。
   * @param obj
   */
  protected switchToOriginalMaterial = (obj: Object3D) => {
    if (!this.isDarken(obj)) return;
    const mesh: Mesh = obj as Mesh;
    mesh.material = obj.userData.materialStorage.original;
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
