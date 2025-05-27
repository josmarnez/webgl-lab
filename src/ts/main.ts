import resizeCanvas from "./resizeCanvas";
import mainVert from "/src/glsl/main.vert";

function main(): void {
    console.log("Hello TS");
    console.log(mainVert);
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