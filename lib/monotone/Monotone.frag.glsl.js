"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    //language=GLSL
    return `
uniform sampler2D tDiffuse;
varying vec2 vUv;

uniform float strength;
uniform vec3 color;

void main() {
  vec4 original = texture2D( tDiffuse, vUv );
  vec3 luma = vec3(0.299, 0.587, 0.114);
  float v = dot(original.rgb, luma);
  gl_FragColor = vec4 (mix( original.rgb, v * color, strength), original.a);
}
  `;
};
