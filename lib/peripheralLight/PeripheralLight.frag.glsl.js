"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    //language=GLSL
    return `
uniform sampler2D tDiffuse;
uniform float rate;
uniform float radiusInner;
uniform float radiusOuter;
uniform vec3 color;
varying vec2 vUv;

void main() {
  float distance = length( vUv - 0.5 )*2.0;
  distance = smoothstep( radiusInner, radiusOuter, distance);  
  float shift = rate * distance * 0.01;

  vec4 original = texture2D( tDiffuse, vUv );
  vec3 result = mix( original.rgb, color, shift);

  gl_FragColor = vec4( result , original.a );
}
  `;
};
