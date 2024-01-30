import { describe, it, expect } from "vitest";
import { PostProcessRenderer } from "../../src/index.js";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

describe("PostProcessRenderer", () => {
  const generateWebGLRenderer = () => {
    const canvas = document.createElement("canvas");
    const gl = require("gl")(1, 1);
    const renderer = new WebGLRenderer({ context: gl, canvas: canvas });
    return renderer;
  };

  const generateScene = () => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
    return { scene, camera };
  };

  it("should be able to create an instance", () => {
    const { scene, camera } = generateScene();
    const webGLRenderer = generateWebGLRenderer();
    const renderer = new PostProcessRenderer(scene, camera, webGLRenderer);

    expect(renderer).toBeInstanceOf(PostProcessRenderer);
  });
});
