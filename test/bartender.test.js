import Colour, { mix, tint, shade, tone, normal, multiply, screen, overlay, darken, lighten, colourDodge, colourBurn, hardLight, softLight, difference, exclusion } from "../index.js";

var colour1;
var colour2;
var colour3;
var black;
var white;

beforeEach(() => {
    colour1 = Colour.RGB(250, 200, 0, 0.6);
    colour2 = Colour.RGB(50, 150, 75, 0.4);
    colour3 = new Colour("#1D5D85");
    black = new Colour("#000000");
    white = new Colour("#FFFFFF");
});

test('normal blend', () => {
    let actual = normal(colour1, colour2);
    let expected = Colour.RGB(145, 174, 39, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('multiply blend', () => {
    let actual = multiply(colour1, colour2);
    let expected = Colour.RGB(144, 164, 16, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('screen blend', () => {
    let actual = screen(colour1, colour2);
    let expected = Colour.RGB(208, 199, 39, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('overlay blend', () => {
    let actual = overlay(colour1, colour2);
    let expected = Colour.RGB(207, 193, 16, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('darken blend', () => {
    let actual = darken(colour1, colour2);
    let expected = Colour.RGB(145, 174, 16, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('lighten blend', () => {
    let actual = lighten(colour1, colour2);
    let expected = Colour.RGB(208, 189, 39, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('colourDodge blend', () => {
    let actual = colourDodge(colour1, colour2);
    let expected = Colour.RGB(209, 207, 16, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('colourBurn blend', () => {
    let actual = colourBurn(colour1, colour2);
    let expected = Colour.RGB(201, 177, 16, 0.76);

    expect(actual.red).toBeCloseTo(expected.red, 2);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('hardLight blend', () => {
    let actual = hardLight(colour1, colour2);
    let expected = Colour.RGB(160, 193, 16, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('softLight blend', () => {
    let actual = softLight(colour1, colour2);
    let expected = Colour.RGB(207, 191, 16, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('difference blend', () => {
    let actual = difference(colour1, colour2);
    let expected = Colour.RGB(192, 142, 39, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('exclusion blend', () => {
    let actual = exclusion(colour1, colour2);
    let expected = Colour.RGB(193, 163, 39, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('mix', () => {
  let actual = mix(new Colour("cyan"), new Colour("yellow"), 0.3);
  let expected = Colour.RGB(77, 255, 179);

  expect(actual.red).toBe(expected.red);
  expect(actual.green).toBe(expected.green);
  expect(actual.blue).toBe(expected.blue);
});

test('tint', () => {
  let actual = tint(colour3, 1);
  let expected = new Colour("#FFFFFF");

  expect(actual.red).toBe(expected.red);
  expect(actual.green).toBe(expected.green);
  expect(actual.blue).toBe(expected.blue);
});

test('shade', () => {
  let actual = shade(colour3, 1);
  let expected = new Colour("#000000");

  expect(actual.red).toBe(expected.red);
  expect(actual.green).toBe(expected.green);
  expect(actual.blue).toBe(expected.blue);
});

test('tone', () => {
  let actual = tone(colour3, 1);
  let expected = new Colour("#808080");

  expect(actual.red).toBe(expected.red);
  expect(actual.green).toBe(expected.green);
  expect(actual.blue).toBe(expected.blue);
});

test('colourDodge white', () => {
    let actual = colourDodge(colour2, white);
    let expected = white;

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('colourBurn white', () => {
    let actual = colourBurn(white, colour2);
    let expected = white;

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('colourBurn black', () => {
    let actual = colourBurn(colour2, black);
    let expected = black;

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('softLight blargh', () => {
    let actual = softLight(black, white);
    let expected = black;

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});