import Colour, { mix, tint, shade, tone, normal, multiply, screen, overlay, darken, lighten, colourDodge, colourBurn, hardLight, softLight, difference, exclusion } from "../index";

var colour1: Colour;
var colour2: Colour;
var colour3: Colour;
var black: Colour;
var white: Colour;

beforeEach(() => {
    colour1 = Colour.RGB(250, 200, 0, 0.6);
    colour2 = Colour.RGB(50, 150, 75, 0.4);
    colour3 = new Colour("#1D5D85");
    black = new Colour("#000000");
    white = new Colour("#FFFFFF");
});

test('normal blend', () => {
    let actual: Colour = normal(colour1, colour2);
    let expected: Colour = Colour.RGB(145, 174, 39, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('multiply blend', () => {
    let actual: Colour = multiply(colour1, colour2);
    let expected: Colour = Colour.RGB(144, 164, 16, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('screen blend', () => {
    let actual: Colour = screen(colour1, colour2);
    let expected: Colour = Colour.RGB(208, 199, 39, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('overlay blend', () => {
    let actual: Colour = overlay(colour1, colour2);
    let expected: Colour = Colour.RGB(207, 193, 16, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('darken blend', () => {
    let actual: Colour = darken(colour1, colour2);
    let expected: Colour = Colour.RGB(145, 174, 16, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('lighten blend', () => {
    let actual: Colour = lighten(colour1, colour2);
    let expected: Colour = Colour.RGB(208, 189, 39, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('colourDodge blend', () => {
    let actual: Colour = colourDodge(colour1, colour2);
    let expected: Colour = Colour.RGB(209, 207, 16, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('colourBurn blend', () => {
    let actual: Colour = colourBurn(colour1, colour2);
    let expected: Colour = Colour.RGB(201, 177, 16, 0.76);

    expect(actual.red).toBeCloseTo(expected.red, 2);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('hardLight blend', () => {
    let actual: Colour = hardLight(colour1, colour2);
    let expected: Colour = Colour.RGB(160, 193, 16, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('softLight blend', () => {
    let actual: Colour = softLight(colour1, colour2);
    let expected: Colour = Colour.RGB(207, 191, 16, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('difference blend', () => {
    let actual: Colour = difference(colour1, colour2);
    let expected: Colour = Colour.RGB(192, 142, 39, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('exclusion blend', () => {
    let actual: Colour = exclusion(colour1, colour2);
    let expected: Colour = Colour.RGB(193, 163, 39, 0.76);

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('mix', () => {
  let actual: Colour = mix(new Colour("cyan"), new Colour("yellow"), 0.3);
  let expected: Colour = Colour.RGB(77, 255, 179);

  expect(actual.red).toBe(expected.red);
  expect(actual.green).toBe(expected.green);
  expect(actual.blue).toBe(expected.blue);
});

test('tint', () => {
  let actual: Colour = tint(colour3, 1);
  let expected: Colour = new Colour("#FFFFFF");

  expect(actual.red).toBe(expected.red);
  expect(actual.green).toBe(expected.green);
  expect(actual.blue).toBe(expected.blue);
});

test('shade', () => {
  let actual: Colour = shade(colour3, 1);
  let expected: Colour = new Colour("#000000");

  expect(actual.red).toBe(expected.red);
  expect(actual.green).toBe(expected.green);
  expect(actual.blue).toBe(expected.blue);
});

test('tone', () => {
  let actual: Colour = tone(colour3, 1);
  let expected: Colour = new Colour("#808080");

  expect(actual.red).toBe(expected.red);
  expect(actual.green).toBe(expected.green);
  expect(actual.blue).toBe(expected.blue);
});

test('colourDodge white', () => {
    let actual: Colour = colourDodge(colour2, white);
    let expected: Colour = white;

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('colourBurn white', () => {
    let actual: Colour = colourBurn(white, colour2);
    let expected: Colour = white;

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('colourBurn black', () => {
    let actual: Colour = colourBurn(colour2, black);
    let expected: Colour = black;

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});

test('softLight blargh', () => {
    let actual: Colour = softLight(black, white);
    let expected: Colour = black;

    expect(actual.red).toBe(expected.red);
    expect(actual.green).toBe(expected.green);
    expect(actual.blue).toBe(expected.blue);
});