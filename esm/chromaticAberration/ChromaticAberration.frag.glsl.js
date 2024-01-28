export default () => {
    //language=GLSL
    return /* GLSL */ `
uniform sampler2D tDiffuse;
uniform float rate;
uniform float radiusInner;
uniform float radiusOuter;

varying vec2 vUv;

void main() {
  float distance = length( vUv - 0.5 )*2.0;
  distance = smoothstep( radiusInner, radiusOuter, distance);
  float shift = rate * distance * 0.01;

  float r = texture2D( tDiffuse, vUv + vec2( shift, 0.0 ) ).r;
  float g = texture2D( tDiffuse, vUv ).g;
  float b = texture2D( tDiffuse, vUv - vec2( shift, 0.0 ) ).b;

  gl_FragColor = vec4( vec3(r, g, b) , 1.0 );
}
  `;
};
