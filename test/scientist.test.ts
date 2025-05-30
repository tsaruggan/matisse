import Colour, { negate, rotate, grayscale, contrast, colourfulness, temperature, luminosity } from "../index";

var black: Colour;
var white: Colour;
var colour1: Colour;

// TODO: not sure if this is best practice
function RGB_to_XYZ(colour: Colour): [number, number] {
    let X: number = -0.14282 * colour.red + 1.54924 * colour.green + -0.95641 * colour.blue;
    let Y: number = -0.32466 * colour.red + 1.57837 * colour.green + -0.73191 * colour.blue;
    let Z: number = -0.68202 * colour.red + 0.77073 * colour.green + 0.56332 * colour.blue;

    let x: number = X / (X + Y + Z);
    let y: number = Y / (X + Y + Z);

    return [x, y]
}

beforeEach(() => {
    black = Colour.RGB(0, 0, 0);
    white = Colour.RGB(255, 255, 255);
    colour1 = Colour.RGB(153, 32, 68);
});

test('black and white contrast', () => {
    expect(contrast(black, white)).toBe(21);
    expect(contrast(white, black)).toBe(21);
});

test('colour1 and white contrast', () => {
    expect(contrast(colour1, white)).toBe(7.94);
    expect(contrast(white, colour1)).toBe(7.94);
});

test('colour1 and black contrast', () => {
    expect(contrast(colour1, black)).toBe(2.64);
    expect(contrast(black, colour1)).toBe(2.64);
});

test('contrast with same colour', () => {
    expect(contrast(white, white)).toBe(1.00);
    expect(contrast(black, black)).toBe(1.00);
    expect(contrast(colour1, colour1)).toBe(1.00);
});

test('check negation with black', () => {
    let actual: Colour = negate(black);
    let expected: Colour = white;
    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
    expect(actual.alpha).toBe(expected.alpha);
});

test('correct luminosity value', () => {
    let actual_black: number = luminosity(black);
    let actual_white: number = luminosity(white);
    let expected_black: number = 0;
    let expected_white: number = 1;
    expect(actual_black).toBe(expected_black);
    expect(actual_white).toBe(expected_white);
});

test('grayscale of black', () => {
    let actual: Colour = grayscale(black);
    let expected: Colour = black;
    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
    expect(actual.alpha).toBe(expected.alpha);
});

test('grayscale of white', () => {
    let actual: Colour = grayscale(white);
    let expected: Colour = white;
    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
    expect(actual.alpha).toBe(expected.alpha);
});

test('grayscale of colour', () => {
    let actual: Colour = grayscale(colour1);
    let expected: Colour = Colour.RGB(72, 72, 72);
    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
    expect(actual.alpha).toBe(expected.alpha);
});

test('temperature of black', () => {
    let [x, y]: [number, number] = RGB_to_XYZ(black);
    let n: number = (x - 0.3320) / (0.1858 - y);
    let actual: number = temperature(black);
    let expected: number = 449 * (n ** 3) + 3525 * (n ** 2) + 6823.3 * n + 5520.33;
    expect(actual).toBe(expected);
});

test('temperature of white', () => {
    let [x, y]: [number, number] = RGB_to_XYZ(white);
    let n: number = (x - 0.3320) / (0.1858 - y);
    let actual: number = temperature(white);
    let expected: number = 449 * (n ** 3) + 3525 * (n ** 2) + 6823.3 * n + 5520.33;
    expect(actual).toBe(expected);
});

test('temperature of colour', () => {
    let [x, y]: [number, number] = RGB_to_XYZ(colour1);
    let n: number = (x - 0.3320) / (0.1858 - y);
    let actual: number = temperature(colour1);
    let expected: number = 449 * (n ** 3) + 3525 * (n ** 2) + 6823.3 * n + 5520.33;
    expect(actual).toBe(expected);
});

test('colourfulness of black', () => {
    let actual: number = colourfulness(black);
    let expected: number = 0
    expect(actual).toBe(expected);
});

test('colourfulness of white', () => {
    let actual: number = colourfulness(white);
    let expected: number = 0
    expect(actual).toBe(expected);
});

test('coloufulness of a colour', () => {
    let actual: number = colourfulness(colour1);
    let expected: number = 37.03663726636099
    expect(actual).toBe(expected);
});

test('rotate black 360deg', () => {
    let actual: Colour = rotate(black, 360)
    let expected: Colour = black;
    expect(actual.hue).toBe(expected.hue);
    expect(actual.saturationl).toBe(expected.saturationl);
    expect(actual.light).toBe(expected.light);
    expect(actual.alpha).toBe(expected.alpha);
});

test('rotate black -180deg', () => {
    let actual: Colour = rotate(black, -180);
    let expected: Colour = Colour.HSL(184, 0, 0);
    expect(actual.hue).toBe(expected.hue);
    expect(actual.saturationl).toBe(expected.saturationl);
    expect(actual.light).toBe(expected.light);
    expect(actual.alpha).toBe(expected.alpha);
})


