export default () => {
    //language=GLSL
    return `    
uniform sampler2D tDiffuse;
uniform sampler2D mixTexture;
varying vec2 vUv;
vec4 getTexture( sampler2D texture ) {
    return mapTexelToLinear( texture2D( texture , vUv ) );
}
void main() {
    gl_FragColor = ( getTexture( tDiffuse ) + vec4( 1.0 ) * getTexture( mixTexture ) );
}`;
};
