import Colour, { validateContrast, fixContrast } from "../index";

var black: Colour;
var white: Colour;
var textColour1: Colour;
var backgroundColour1: Colour;
var textColour2: Colour;
var backgroundColour2: Colour;
var textColour3: Colour;
var backgroundColour3: Colour;
var textColour4: Colour;
var backgroundColour4: Colour;

beforeEach(() => {
    black = new Colour("#000000");
    white = new Colour("#FFFFFF");
    textColour1 = new Colour("#112A46");
    backgroundColour1 = new Colour("#ACC8E5");
    textColour2 = new Colour("#C4BBBC");
    backgroundColour2 = new Colour("#FFB300");
    textColour3 = new Colour("#520404");
    backgroundColour3 = new Colour("#D010EE");
    textColour4 = new Colour("#F7FF0B");
    backgroundColour4 = new Colour("#737980");
});

test('validate black and white', () => {
    expect(validateContrast(black, white)).toBe(true);
    expect(validateContrast(black, white, true)).toBe(true);
    expect(validateContrast(black, white, false, true)).toBe(true);
    expect(validateContrast(black, white, true, true)).toBe(true);
});

test('validate contrast 1', () => {
    expect(validateContrast(textColour1, backgroundColour1)).toBe(true);
    expect(validateContrast(textColour1, backgroundColour1, true)).toBe(true);
    expect(validateContrast(textColour1, backgroundColour1, false, true)).toBe(true);
    expect(validateContrast(textColour1, backgroundColour1, true, true)).toBe(true);
});

test('validate contrast 2', () => {
    expect(validateContrast(textColour2, backgroundColour2)).toBe(false);
    expect(validateContrast(textColour2, backgroundColour2, true)).toBe(false);
    expect(validateContrast(textColour2, backgroundColour2, false, true)).toBe(false);
    expect(validateContrast(textColour2, backgroundColour2, true, true)).toBe(false);
});

test('validate contrast 3', () => {
    expect(validateContrast(textColour3, backgroundColour3)).toBe(false);
    expect(validateContrast(textColour3, backgroundColour3, true)).toBe(true);
    expect(validateContrast(textColour3, backgroundColour3, false, true)).toBe(false);
    expect(validateContrast(textColour3, backgroundColour3, true, true)).toBe(false);
});

test('fix contrast 1', () => {
    const fixed: Colour[] = fixContrast(textColour1, backgroundColour1);
    expect(fixed[0].toHEX()).toBe("#112A46");
    expect(fixed[1].toHEX()).toBe("#ACC8E5");
    expect(validateContrast(fixed[0], fixed[1])).toBe(true);
});

test('fix contrast 2', () => {
    const fixed: Colour[] = fixContrast(textColour2, backgroundColour2);
    expect(fixed[0].toHEX()).toBe("#656061");
    expect(fixed[1].toHEX()).toBe("#FFD87C");
    expect(validateContrast(fixed[0], fixed[1])).toBe(true);
});

test('fix contrast 3', () => {
    const fixed: Colour[] = fixContrast(textColour3, backgroundColour3);
    expect(fixed[0].toHEX()).toBe("#430404");
    expect(fixed[1].toHEX()).toBe("#D83CF2");
    expect(validateContrast(fixed[0], fixed[1])).toBe(true);
});

test('fix contrast 4', () => {
    const fixed: Colour[] = fixContrast(textColour4, backgroundColour4);
    expect(fixed[0].toHEX()).toBe("#F7FF23");
    expect(fixed[1].toHEX()).toBe("#686D74");
    expect(validateContrast(fixed[0], fixed[1])).toBe(true);
});