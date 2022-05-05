import { Colour, shades, tints, tones, analogous, complementary, splitComplementary, triadic, tetradic, square, randoms } from "../index.js";

var colour1;

beforeEach(() => {
    colour1 = new Colour("#5D851D");
});

test('analogous 1', () => {
    let palette = analogous(colour1);
    expect(palette[0].attributes).toStrictEqual((new Colour("#86681D")).attributes);
    expect(palette[1].attributes).toStrictEqual((new Colour("#5D851D")).attributes);
    expect(palette[2].attributes).toStrictEqual((new Colour("#1D8623")).attributes);
});

test('complementary 1', () => {
    let palette = complementary(colour1);
    expect(palette[0].attributes).toStrictEqual((new Colour("#5D851D")).attributes);
    expect(palette[1].attributes).toStrictEqual((new Colour("#451D86")).attributes);
});

test('splitComplementary 1', () => {
    let palette = splitComplementary(colour1);
    expect(palette[0].attributes).toStrictEqual((new Colour("#5D851D")).attributes);
    expect(palette[1].attributes).toStrictEqual((new Colour("#231D86")).attributes);
    expect(palette[2].attributes).toStrictEqual((new Colour("#681D86")).attributes);
});

test('triadic 1', () => {
    let palette = triadic(colour1);
    expect(palette[0].attributes).toStrictEqual((new Colour("#5D851D")).attributes);
    expect(palette[1].attributes).toStrictEqual((new Colour("#1D5E86")).attributes);
    expect(palette[2].attributes).toStrictEqual((new Colour("#861D5E")).attributes);
});

test('tetradic 1', () => {
    let palette = tetradic(colour1);
    expect(palette[0].attributes).toStrictEqual((new Colour("#5D851D")).attributes);
    expect(palette[1].attributes).toStrictEqual((new Colour("#1D8645")).attributes);
    expect(palette[2].attributes).toStrictEqual((new Colour("#451D86")).attributes);
    expect(palette[3].attributes).toStrictEqual((new Colour("#861D5E")).attributes);
});

test('square 1', () => {
    let palette = square(colour1);
    expect(palette[0].attributes).toStrictEqual((new Colour("#5D851D")).attributes);
    expect(palette[1].attributes).toStrictEqual((new Colour("#1D867A")).attributes);
    expect(palette[2].attributes).toStrictEqual((new Colour("#451D86")).attributes);
    expect(palette[3].attributes).toStrictEqual((new Colour("#861D2A")).attributes);
});

test('shades 1', () => {
    let palette = shades(colour1, 3);
    expect(palette[0].attributes).toStrictEqual((new Colour("#5D851D")).attributes);
    expect(palette[1].attributes).toStrictEqual((new Colour("#2F430F")).attributes);
    expect(palette[2].attributes).toStrictEqual((new Colour("#000000")).attributes);
});

test('tints 1', () => {
    let palette = tints(colour1, 3);
    expect(palette[0].attributes).toStrictEqual((new Colour("#5D851D")).attributes);
    expect(palette[1].attributes).toStrictEqual((new Colour("#aec28e")).attributes);
    expect(palette[2].attributes).toStrictEqual((new Colour("#FFFFFF")).attributes);
});

test('tones 1', () => {
    let palette = tones(colour1, 3);
    expect(palette[0].attributes).toStrictEqual((new Colour("#5D851D")).attributes);
    expect(palette[1].attributes).toStrictEqual((new Colour("#6f834f")).attributes);
    expect(palette[2].attributes).toStrictEqual((new Colour("#808080")).attributes);
});

test('randoms length', () => {
    let palette = randoms(10);
    expect(palette.length).toBe(10);
});