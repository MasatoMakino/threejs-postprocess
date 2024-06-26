import { beforeEach, describe, expect, it, test } from "vitest";
import { PeripheralLightShaderPass } from "../../src/index.js";
import { renderingPass } from "./PassRender.js";
import { Color } from "three";

describe("PeripheralLightShaderPass", () => {
  it("should be able to render", () => {
    renderingPass("PeripheralLightShaderPass", new PeripheralLightShaderPass());
  });
});

describe("PeripheralLightShaderPass.accessor", () => {
  let pass: PeripheralLightShaderPass;

  beforeEach(() => {
    pass = new PeripheralLightShaderPass();
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

  test("color getter and setter", () => {
    const color = new Color(0x123456);
    pass.color = color;
    expect(pass.color.getHex()).toBe(color.getHex());
  });
});
