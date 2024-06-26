import { expect, vi } from "vitest";
import { PostProcessRenderer, PostProcessShaderPass } from "../../src/index.js";
import { generateScene } from "./SceneGenerator.js";

export const renderingPass = (message: string, pass: PostProcessShaderPass) => {
  const { scene, camera, webGLRenderer } = generateScene();
  const renderer = new PostProcessRenderer(scene, camera, webGLRenderer);

  const composer = renderer.createScreenRenderingComposer([pass]);
  composer.onAfterRender = vi.fn();
  composer.onBeforeRender = vi.fn();

  renderer.render(0);
  expect(composer.onAfterRender, message).toBeCalled();
  expect(composer.onBeforeRender, message).toBeCalled();
};
