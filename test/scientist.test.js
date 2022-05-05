const { Colour, Scientist} = require("../index");

var black;
var white;
var colour1;

// TODO: not sure if this is best practice
function RGB_to_XYZ(colour) {
    let X = -0.14282 * colour.red + 1.54924 * colour.green + -0.95641 * colour.blue;
    let Y = -0.32466 * colour.red + 1.57837 * colour.green + -0.73191 * colour.blue;
    let Z = -0.68202 * colour.red + 0.77073 * colour.green + 0.56332 * colour.blue;

    let x = X / (X + Y + Z);
    let y = Y / (X + Y + Z);

    return [x, y]
}

beforeEach(() => {
    black = Colour.RGB(0, 0, 0);
    white = Colour.RGB(255, 255, 255);
    colour1 = Colour.RGB(153, 32, 68);
});

test('black and white contrast', () => {
    expect(Scientist.contrast(black, white)).toBe(21);
    expect(Scientist.contrast(white, black)).toBe(21);
});

test('colour1 and white contrast', () => {
    expect(Scientist.contrast(colour1, white)).toBe(7.94);
    expect(Scientist.contrast(white, colour1)).toBe(7.94);
});

test('colour1 and black contrast', () => {
    expect(Scientist.contrast(colour1, black)).toBe(2.64);
    expect(Scientist.contrast(black, colour1)).toBe(2.64);
});

test('contrast with same colour', () => {
    expect(Scientist.contrast(white, white)).toBe(1.00);
    expect(Scientist.contrast(black, black)).toBe(1.00);
    expect(Scientist.contrast(colour1, colour1)).toBe(1.00);
});

test('check negation with black', () => {
    let actual = Scientist.negate(black);
    let expected = white;
    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
    expect(actual.alpha).toBe(expected.alpha);
});

test('correct luminosity value', () => {
    let actual_black = Scientist.luminosity(black);
    let actual_white = Scientist.luminosity(white);
    let expected_black = 0;
    let expected_white = 1;
    expect(actual_black).toBe(expected_black);
    expect(actual_white).toBe(expected_white);
});

test('grayscale of black', () => {
    let actual = Scientist.grayscale(black);
    let expected = black;
    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
    expect(actual.alpha).toBe(expected.alpha);
});

test('grayscale of white', () => {
    let actual = Scientist.grayscale(white);
    let expected = white;
    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
    expect(actual.alpha).toBe(expected.alpha);
});

test('grayscale of colour', () => {
    let actual = Scientist.grayscale(colour1);
    let expected = Colour.RGB(72, 72, 72);
    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
    expect(actual.alpha).toBe(expected.alpha);
});

test('temperature of black', () => {
    let [x, y] = RGB_to_XYZ(black);
    let n = (x - 0.3320) / (0.1858 - y);
    let actual = Scientist.temperature(black);
    let expected = 449 * (n ** 3) + 3525 * (n ** 2) + 6823.3 * n + 5520.33;
    expect(actual).toBe(expected);
});

test('temperature of white', () => {
    let [x, y] = RGB_to_XYZ(white);
    let n = (x - 0.3320) / (0.1858 - y);
    let actual = Scientist.temperature(white);
    let expected = 449 * (n ** 3) + 3525 * (n ** 2) + 6823.3 * n + 5520.33;
    expect(actual).toBe(expected);
});

test('temperature of colour', () => {
    let [x, y] = RGB_to_XYZ(colour1);
    let n = (x - 0.3320) / (0.1858 - y);
    let actual = Scientist.temperature(colour1);
    let expected = 449 * (n ** 3) + 3525 * (n ** 2) + 6823.3 * n + 5520.33;
    expect(actual).toBe(expected);
});

test('colourfulness of black', () => {
    let actual = Scientist.colourfulness(black);
    let expected = 0
    expect(actual).toBe(expected);
});

test('colourfulness of white', () => {
    let actual = Scientist.colourfulness(white);
    let expected = 0
    expect(actual).toBe(expected);
});

test('coloufulness of a colour', () => {
    let actual = Scientist.colourfulness(colour1);
    let expected = 37.03663726636099
    expect(actual).toBe(expected);
});

test('rotate black 360deg', () => {
    let actual = Scientist.rotate(black, 360)
    let expected = black;
    expect(actual.hue).toBe(expected.hue);
    expect(actual.saturationl).toBe(expected.saturationl);
    expect(actual.light).toBe(expected.light);
    expect(actual.alpha).toBe(expected.alpha);
});

test('rotate black -180deg', () => {
    let actual = Scientist.rotate(black, -180);
    let expected = Colour.HSL(184, 0, 0);
    expect(actual.hue).toBe(expected.hue);
    expect(actual.saturationl).toBe(expected.saturationl);
    expect(actual.light).toBe(expected.light);
    expect(actual.alpha).toBe(expected.alpha);
})


