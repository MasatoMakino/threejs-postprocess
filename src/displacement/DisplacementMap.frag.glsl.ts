export default () => {
  //language=GLSL
  return `
uniform sampler2D tDiffuse;
varying vec2 vUv;

uniform float strengthX;
uniform float strengthY;
uniform bool hasMap;
uniform sampler2D map;
uniform float aspect;

void main() {
  vec2 uv = vUv;
  if( hasMap ){
      vec4 displacement = texture2D( map, vUv );
      uv +=  displacement.rg * vec2 (strengthX, strengthY);
  }

  vec4 color = texture2D( tDiffuse, uv );
  gl_FragColor = color;
}
  `;
};
