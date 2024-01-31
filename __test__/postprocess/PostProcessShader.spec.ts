import { describe, it, expect } from "vitest";
import { PostProcessShader } from "../../src/index.js";

describe("PostProcessShader", () => {
  it("should correctly instantiate PostProcessShader with default properties", () => {
    const shader = new PostProcessShader();
    expect(shader).toBeInstanceOf(PostProcessShader);
    expect(shader.vertexShader).toBeDefined();
    expect(shader.fragmentShader).toBeUndefined();
    expect(shader.uniforms).toBeDefined();
    expect(shader.uniforms.tDiffuse).toBeDefined();
  });
});
