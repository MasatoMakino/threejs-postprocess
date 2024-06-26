import { beforeEach, describe, expect, it, test } from "vitest";
import { renderingPass } from "./PassRender.js";
import { MonotoneShaderPass } from "../../src/index.js";
import { Color } from "three";

describe("MonotoneShaderPass", () => {
  it("should be able to render", () => {
    renderingPass("MonotoneShaderPass", new MonotoneShaderPass());
  });
});

describe("MonotoneShaderPass.accessor", () => {
  let pass: MonotoneShaderPass;

  beforeEach(() => {
    pass = new MonotoneShaderPass();
  });

  test("strength getter and setter", () => {
    pass.strength = 0.5;
    expect(pass.strength).toBe(0.5);
  });

  test("color getter and setter", () => {
    const color = new Color(0x123456);
    pass.color = color;
    expect(pass.color.getHex()).toBe(color.getHex());
  });
});
