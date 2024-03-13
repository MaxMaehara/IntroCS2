let maxChange = 3;
let noiseScale = 0.05;
let backgroundColour = 0;
let drawNumber = 1;
let invert = 0;
let fps = 1;

function changedraw(number) {
    drawNumber = number;
}

function sliderChange(value) {
    fps = Number(value);
}

function setup() {
    stretch(500);
    pixelDensity(1);
}

function draw() {
    frameRate(fps);
    if (drawNumber === 1 && invert === 1) {
        invertColors();
    }
    if (drawNumber === 1 && invert === 0) {
        draw1();
    }
    if (drawNumber === 2 && invert === 1) {
        draw2();
    }
    if (drawNumber === 2 && invert === 0) {
        draw2();
    }
}

function draw2() {
    backgroundColour = (backgroundColour + 1) % 255;
    console.log(backgroundColour);
    background(backgroundColour);
}

function stretch(size) {
    createCanvas(size, size);
}

function changeColours() {
    if (invert === 0) {
        invert = 1;
    }
    else {
        invert = 0;
    }

}

function draw1() {
    background(0);
    drawRectangles();
    loadPixels();

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let index = (x + y * width) * 4;
            let r = pixels[index];
            let g = pixels[index + 1];
            let b = pixels[index + 2];

            let noiseValR = noise(x * noiseScale, y * noiseScale, 0);
            let noiseValG = noise(x * noiseScale, y * noiseScale, 100);
            let noiseValB = noise(x * noiseScale, y * noiseScale, 200);

            let changeR = map(noiseValR, 0, 1, -maxChange, maxChange);
            let changeG = map(noiseValG, 0, 1, -maxChange, maxChange);
            let changeB = map(noiseValB, 0, 1, -maxChange, maxChange);

            pixels[index] = constrain(r + changeR, 0, 255);
            pixels[index + 1] = constrain(g + changeG, 0, 255);
            pixels[index + 2] = constrain(b + changeB, 0, 255);
        }
    }

    updatePixels();
}

function invertColors() {
    background(255);
    fill(Math.abs(212 - 255), Math.abs(47 - 255), Math.abs(32 - 255));
    rect(0, 0, 0.4 * width, 0.36 * height);
    fill(Math.abs(235 - 255), Math.abs(239 - 255), Math.abs(234 - 255));
    rect(0.414 * width, 0, 0.586 * width, 0.36 * height);
    rect(0, 0.384 * width, 0.4 * width, 0.2 * height);
    rect(0.414 * width, 0.384 * height, 0.586 * width, 0.2 * height);
    rect(0.1 * width, 0.61 * height, 0.3 * width, 0.4 * height);
    rect(0.8 * width, 0.61 * height, 0.2 * width, 0.39 * height);
    rect(0.414 * width, 0.96 * height, 0.362 * width, 0.04 * height);
    fill(Math.abs(22 - 255), Math.abs(15 - 255), Math.abs(89 - 255));
    rect(0.414 * width, 0.61 * height, 0.362 * width, 0.33 * height);
    fill(Math.abs(241 - 255), Math.abs(207 - 255), Math.abs(78 - 255));
    rect(0, 0.61 * height, 0.086 * width, 0.6 * height);
}

function drawRectangles() {
    background(0);
    fill(212, 47, 32);
    rect(0, 0, 0.4 * width, 0.36 * height);
    fill(235, 239, 234);
    rect(0.414 * width, 0, 0.586 * width, 0.36 * height);
    rect(0, 0.384 * width, 0.4 * width, 0.2 * height);
    rect(0.414 * width, 0.384 * height, 0.586 * width, 0.2 * height);
    rect(0.1 * width, 0.61 * height, 0.3 * width, 0.4 * height);
    rect(0.8 * width, 0.61 * height, 0.2 * width, 0.39 * height);
    rect(0.414 * width, 0.96 * height, 0.362 * width, 0.04 * height);
    fill(22, 15, 89);
    rect(0.414 * width, 0.61 * height, 0.362 * width, 0.33 * height);
    fill(241, 207, 78);
    rect(0, 0.61 * height, 0.086 * width, 0.6 * height);
}
