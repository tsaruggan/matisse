import { Colour, Artist } from "../index.js";

var colour1;

beforeEach(() => {
    colour1 = new Colour("#5D851D");
});

test('analogous 1', () => {
    let palette = Artist.analogous(colour1);
    expect(palette[0].object()).toStrictEqual((new Colour("#86681D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#1D8623")).object());
});

test('complementary 1', () => {
    let palette = Artist.complementary(colour1);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#451D86")).object());
});

test('splitComplementary 1', () => {
    let palette = Artist.splitComplementary(colour1);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#231D86")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#681D86")).object());
});

test('triadic 1', () => {
    let palette = Artist.triadic(colour1);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#1D5E86")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#861D5E")).object());
});

test('tetradic 1', () => {
    let palette = Artist.tetradic(colour1);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#1D8645")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#451D86")).object());
    expect(palette[3].object()).toStrictEqual((new Colour("#861D5E")).object());
});

test('square 1', () => {
    let palette = Artist.square(colour1);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#1D867A")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#451D86")).object());
    expect(palette[3].object()).toStrictEqual((new Colour("#861D2A")).object());
});

test('shades 1', () => {
    let palette = Artist.shades(colour1, 3);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#2F430F")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#000000")).object());
});

test('tints 1', () => {
    let palette = Artist.tints(colour1, 3);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#aec28e")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#FFFFFF")).object());
});

test('tones 1', () => {
    let palette = Artist.tones(colour1, 3);
    expect(palette[0].object()).toStrictEqual((new Colour("#5D851D")).object());
    expect(palette[1].object()).toStrictEqual((new Colour("#6f834f")).object());
    expect(palette[2].object()).toStrictEqual((new Colour("#808080")).object());
});

test('randoms length', () => {
    let palette = Artist.randoms(10);
    expect(palette.length).toBe(10);
});