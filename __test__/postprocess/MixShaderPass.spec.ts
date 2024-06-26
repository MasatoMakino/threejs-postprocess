import { Texture } from "three";
import { describe, expect, it } from "vitest";
import { MixShaderPass } from "../../src/index.js";
import { renderingPass } from "./PassRender.js";

describe("MixShaderPass", () => {
  it("should be able to render", () => {
    const texture = new Texture();
    const pass = new MixShaderPass(texture);

    renderingPass("MixShaderPass", pass);

    expect(texture).toBe(pass.mixTexture);
  });
});
