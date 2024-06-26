import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

const generateWebGLRenderer = (): WebGLRenderer => {
  const renderer = new WebGLRenderer();
  return renderer;
};

export const generateScene = () => {
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
  const webGLRenderer = generateWebGLRenderer();
  return { scene, camera, webGLRenderer };
};
