const { Colour, Inspector} = require("../matisse");

var black;
var white;
var textColour1;
var backgroundColour1;
var textColour2;
var backgroundColour2;
var textColour3;
var backgroundColour3;
var textColour4;
var backgroundColour4;

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
    expect(Inspector.validateContrast(black, white)).toBe(true);
    expect(Inspector.validateContrast(black, white, true)).toBe(true);
    expect(Inspector.validateContrast(black, white, false, true)).toBe(true);
    expect(Inspector.validateContrast(black, white, true, true)).toBe(true);
});

test('validate contrast 1', () => {
    expect(Inspector.validateContrast(textColour1, backgroundColour1)).toBe(true);
    expect(Inspector.validateContrast(textColour1, backgroundColour1, true)).toBe(true);
    expect(Inspector.validateContrast(textColour1, backgroundColour1, false, true)).toBe(true);
    expect(Inspector.validateContrast(textColour1, backgroundColour1, true, true)).toBe(true);
});

test('validate contrast 2', () => {
    expect(Inspector.validateContrast(textColour2, backgroundColour2)).toBe(false);
    expect(Inspector.validateContrast(textColour2, backgroundColour2, true)).toBe(false);
    expect(Inspector.validateContrast(textColour2, backgroundColour2, false, true)).toBe(false);
    expect(Inspector.validateContrast(textColour2, backgroundColour2, true, true)).toBe(false);
});

test('validate contrast 3', () => {
    expect(Inspector.validateContrast(textColour3, backgroundColour3)).toBe(false);
    expect(Inspector.validateContrast(textColour3, backgroundColour3, true)).toBe(true);
    expect(Inspector.validateContrast(textColour3, backgroundColour3, false, true)).toBe(false);
    expect(Inspector.validateContrast(textColour3, backgroundColour3, true, true)).toBe(false);
});

test('fix contrast 1', () => {
    const fixed = Inspector.fixContrast(textColour1, backgroundColour1);
    expect(fixed[0].toHEX()).toBe("#112A46");
    expect(fixed[1].toHEX()).toBe("#ACC8E5");
    expect(Inspector.validateContrast(fixed[0], fixed[1])).toBe(true);
});

test('fix contrast 2', () => {
    const fixed = Inspector.fixContrast(textColour2, backgroundColour2);
    expect(fixed[0].toHEX()).toBe("#656061");
    expect(fixed[1].toHEX()).toBe("#FFD87C");
    expect(Inspector.validateContrast(fixed[0], fixed[1])).toBe(true);
});

test('fix contrast 3', () => {
    const fixed = Inspector.fixContrast(textColour3, backgroundColour3);
    expect(fixed[0].toHEX()).toBe("#430404");
    expect(fixed[1].toHEX()).toBe("#D83CF2");
    expect(Inspector.validateContrast(fixed[0], fixed[1])).toBe(true);
});

test('fix contrast 4', () => {
    const fixed = Inspector.fixContrast(textColour4, backgroundColour4);
    expect(fixed[0].toHEX()).toBe("#F7FF23");
    expect(fixed[1].toHEX()).toBe("#686D74");
    expect(Inspector.validateContrast(fixed[0], fixed[1])).toBe(true);
});