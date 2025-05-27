export default function resizeCanvas(canvas: HTMLCanvasElement,
    gl: WebGL2RenderingContext) {
    // Set canvas width and height to match the window's inner dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
    console.log(`canvas resized to ${canvas.width}x${canvas.height}`);
}