import { Colour, shades, tints, tones, analogous, complementary, splitComplementary, triadic, tetradic, square, randoms } from "../index.js";

var colour1;

beforeEach(() => {
    colour1 = new Colour("#5D851D");
});

test('analogous 1', () => {
    let palette = analogous(colour1);
    expect(palette[0].object()).toStrictEqual((new Colour("#86681D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#1D8623")).object());
});

test('complementary 1', () => {
    let palette = complementary(colour1);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#451D86")).object());
});

test('splitComplementary 1', () => {
    let palette = splitComplementary(colour1);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#231D86")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#681D86")).object());
});

test('triadic 1', () => {
    let palette = triadic(colour1);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#1D5E86")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#861D5E")).object());
});

test('tetradic 1', () => {
    let palette = tetradic(colour1);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#1D8645")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#451D86")).object());
    expect(palette[3].object()).toStrictEqual((new Colour("#861D5E")).object());
});

test('square 1', () => {
    let palette = square(colour1);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#1D867A")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#451D86")).object());
    expect(palette[3].object()).toStrictEqual((new Colour("#861D2A")).object());
});

test('shades 1', () => {
    let palette = shades(colour1, 3);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#2F430F")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#000000")).object());
});

test('tints 1', () => {
    let palette = tints(colour1, 3);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#aec28e")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#FFFFFF")).object());
});

test('tones 1', () => {
    let palette = tones(colour1, 3);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#6f834f")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#808080")).object());
});

test('randoms length', () => {
    let palette = randoms(10);
    expect(palette.length).toBe(10);
});