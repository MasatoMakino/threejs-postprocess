export default () => {
    //language=GLSL
    return `
uniform sampler2D tDiffuse;
varying vec2 vUv;

uniform float strengthX;
uniform float strengthY;
uniform bool hasMap;
uniform sampler2D map;
uniform vec2 aspect;

void main() {
  vec2 uv = vUv;
  if( hasMap ){
    vec2 fixedUV = vUv - 0.5;
    fixedUV *= aspect;
    fixedUV += 0.5;
    
    vec4 displacement = texture2D( map, fixedUV );
    uv +=  displacement.rg * vec2 (strengthX, strengthY);
 }

  vec4 color = texture2D( tDiffuse, uv );
  gl_FragColor = color;
}
  `;
};
