import resizeCanvas from "./resizeCanvas";

const vertexShaderSource: string = `// Vertex Shader
#version 300 es
precision highp float;
in vec2 aPosition;

void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const fragmentShaderSource: string = `// Fragment Shader
#version 300 es
precision highp float;
out vec4 outColor;

void main() {
    outColor = vec4(1.0, 0.0, 0.0, 1.0); // Red color
}
`;

function main(): void {
    console.log("Hello TS");
    console.log(vertexShaderSource);
    const canvas: HTMLCanvasElement | null =
        document.querySelector("#gl-canvas");
    if (canvas === null) throw new Error("canvas is null");
    // Initialize the GL context
    const gl: WebGL2RenderingContext | null = canvas.getContext("webgl2");
    // Only continue if WebGL is available and working
    if (gl === null) throw new Error("gl is null");
    const resizeCanvasListener = () => { resizeCanvas(canvas, gl); };
    resizeCanvasListener();
    window.addEventListener('resize', resizeCanvasListener);
    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.addEventListener("load", main);