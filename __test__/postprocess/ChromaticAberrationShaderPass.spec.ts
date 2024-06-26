import { beforeEach, describe, expect, it, test } from "vitest";
import { renderingPass } from "./PassRender.js";
import { ChromaticAberrationShaderPass } from "../../src/index.js";

describe("ChromaticAberrationShaderPass", () => {
  it("should be able to render", () => {
    renderingPass(
      "ChromaticAberrationShaderPass",
      new ChromaticAberrationShaderPass(),
    );
  });
});

describe("ChromaticAberrationShaderPass.accessor", () => {
  let pass: ChromaticAberrationShaderPass;

  beforeEach(() => {
    pass = new ChromaticAberrationShaderPass();
  });

  test("rate getter and setter", () => {
    pass.rate = 0.5;
    expect(pass.rate).toBe(0.5);
  });

  test("radiusInner getter and setter", () => {
    pass.radiusInner = 0.5;
    expect(pass.radiusInner).toBe(0.5);
  });

  test("radiusOuter getter and setter", () => {
    pass.radiusOuter = 0.5;
    expect(pass.radiusOuter).toBe(0.5);
  });
});
