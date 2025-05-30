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

describe("Alpha Composition Edge Cases", () => {
  it("should handle blending when base and blend alphas are 0", () => {
    const base = Colour.RGB(100, 100, 100, 0); // base alpha = 0
    const blend = Colour.RGB(200, 200, 200, 0); // blend alpha = 0

    // Using 'normal' blend mode, but any blend mode that uses _alphaComposition would work
    const result = normal(base, blend);

    // Expectations:
    // compositeAlpha will be 0.
    // _alphaComposition will internally calculate with 0/0 (NaN) for the division part.
    // The final channel values might be NaN before _constrain,
    // but _constrain will likely clamp them.
    // The most important part is that compositeAlpha is 0.
    // The RGB values might effectively be from the blend colour if base is fully transparent,
    // or a mix depending on how NaN propagates and is clamped.
    // Let's verify the resulting alpha and ensure RGB values are numbers (not NaN).

    expect(result.alpha).toBe(0);
    // Initial thought was they would not be NaN due to _constrain, but
    // _constrain(NaN, min, max) results in NaN.
    // And Colour.RGB calls roundInt, and roundInt(NaN) is NaN.
    //
    // Re-verified _alphaComposition logic:
    // resultChannel = roundInt((1 - baseAlpha) * blendChannel + baseAlpha * compositeChannel);
    // If baseAlpha = 0, resultChannel = roundInt(blendChannel);
    // final = (1 - blendAlpha/compositeAlpha)*baseChannel + (blendAlpha/compositeAlpha)*resultChannel
    // If baseAlpha = 0, blendAlpha = 0, compositeAlpha = 0:
    // final = (1 - 0/0)*baseChannel + (0/0)*roundInt(blendChannel)
    // final = NaN * baseChannel + NaN * roundInt(blendChannel) = NaN.
    // So, red, green, blue should be NaN.
    expect(isNaN(result.red)).toBe(true); // Expecting NaN
    expect(isNaN(result.green)).toBe(true); // Expecting NaN
    expect(isNaN(result.blue)).toBe(true); // Expecting NaN
  });

  it("should handle blending when blendAlpha is 0 and compositeAlpha is > 0 (base opaque, blend transparent)", () => {
    // Case A: blendAlpha = 0, compositeAlpha > 0. Expect _alphaComposition to return baseChannel.
    // Base is opaque, Blend is fully transparent.
    const base = Colour.RGB(100, 110, 120, 1); // baseAlpha = 1
    const blendCol = Colour.RGB(200, 210, 220, 0); // blendAlpha = 0

    // compositeAlpha = blendCol.alpha + base.alpha - blendCol.alpha * base.alpha
    // compositeAlpha = 0 + 1 - 0 * 1 = 1.
    // resultChannel (for red) in _alphaComposition will be:
    // C_blend_prime = normal_blend_result_for_red_channel (which is blendCol.red = 200 for normal blend)
    // C_result_intermediate = roundInt((1 - base.alpha) * blendCol.red + base.alpha * C_blend_prime)
    // C_result_intermediate = roundInt((1-1)*200 + 1*200) = roundInt(200) = 200.
    // _alphaComposition for red:
    // Co = (1 - blendCol.alpha/compositeAlpha)*base.red + (blendCol.alpha/compositeAlpha)*C_result_intermediate
    // Co = (1 - 0/1)*100 + (0/1)*200 = 1 * 100 + 0 * 200 = 100. This is base.red.

    const result = normal(base, blendCol);

    expect(result.alpha).toBe(1); // compositeAlpha
    expect(result.red).toBe(base.red); // Should be baseChannel
    expect(result.green).toBe(base.green); // Should be baseChannel
    expect(result.blue).toBe(base.blue); // Should be baseChannel
  });

  it("should handle blending when blendAlpha equals compositeAlpha and compositeAlpha is > 0 (base transparent, blend opaque)", () => {
    // Case B: blendAlpha = compositeAlpha, compositeAlpha > 0. Expect _alphaComposition to return resultChannel.
    // Base is fully transparent, Blend is opaque.
    const base = Colour.RGB(100, 110, 120, 0); // baseAlpha = 0
    const blendCol = Colour.RGB(200, 210, 220, 1); // blendAlpha = 1

    // compositeAlpha = blendCol.alpha + base.alpha - blendCol.alpha * base.alpha
    // compositeAlpha = 1 + 0 - 1 * 0 = 1.
    // Here, blendCol.alpha (1) is equal to compositeAlpha (1).
    // C_blend_prime (for red) = normal_blend_result_for_red_channel (which is blendCol.red = 200 for normal blend)
    // C_result_intermediate = roundInt((1 - base.alpha) * blendCol.red + base.alpha * C_blend_prime)
    // C_result_intermediate = roundInt((1-0)*200 + 0*200) = roundInt(200) = 200. (This is blendCol.red)
    // _alphaComposition for red:
    // Co = (1 - blendCol.alpha/compositeAlpha)*base.red + (blendCol.alpha/compositeAlpha)*C_result_intermediate
    // Co = (1 - 1/1)*100 + (1/1)*200 = 0 * 100 + 1 * 200 = 200. This is C_result_intermediate (blendCol.red).

    const result = normal(base, blendCol);

    expect(result.alpha).toBe(1); // compositeAlpha
    // The C_result_intermediate for normal blend when base is transparent is effectively the blend channel.
    expect(result.red).toBe(blendCol.red);
    expect(result.green).toBe(blendCol.green);
    expect(result.blue).toBe(blendCol.blue);
  });

  it("should handle blending with fractional alpha values", () => {
    // Case C: blendAlpha and compositeAlpha are non-zero, blendAlpha !== compositeAlpha.
    // This should hit the fractional calculation in _alphaComposition.
    const base = Colour.RGB(10, 20, 30, 0.5);    // baseAlpha = 0.5
    const blendCol = Colour.RGB(200, 210, 220, 0.5); // blendAlpha = 0.5

    // compositeAlpha = blendCol.alpha + base.alpha - blendCol.alpha * base.alpha
    // compositeAlpha = 0.5 + 0.5 - (0.5 * 0.5) = 1 - 0.25 = 0.75.

    // For normal blend mode:
    // C_blend_prime_red = blendCol.red = 200
    // C_result_intermediate_red = roundInt((1 - base.alpha) * blendCol.red + base.alpha * C_blend_prime_red)
    // C_result_intermediate_red = roundInt((1 - 0.5) * 200 + 0.5 * 200) = roundInt(0.5 * 200 + 0.5 * 200) = roundInt(200) = 200.

    // _alphaComposition for red:
    // Co_red = (1 - blendCol.alpha/compositeAlpha)*base.red + (blendCol.alpha/compositeAlpha)*C_result_intermediate_red
    // Co_red = (1 - 0.5/0.75)*10 + (0.5/0.75)*200
    // Co_red = (1 - 2/3)*10 + (2/3)*200
    // Co_red = (1/3)*10 + (2/3)*200 = 3.333... + 133.333... = 136.666...
    // After Colour.RGB calls roundInt, this should be 137.

    // Let's trace for green (base: 20, blend: 210)
    // C_result_intermediate_green = roundInt((1-0.5)*210 + 0.5*210) = 210
    // Co_green = (1/3)*20 + (2/3)*210 = 6.666... + 140 = 146.666... -> roundInt -> 147

    // Let's trace for blue (base: 30, blend: 220)
    // C_result_intermediate_blue = roundInt((1-0.5)*220 + 0.5*220) = 220
    // Co_blue = (1/3)*30 + (2/3)*220 = 10 + 146.666... = 156.666... -> roundInt -> 157

    const result = normal(base, blendCol);

    expect(result.alpha).toBe(0.75);
    expect(result.red).toBe(137);
    expect(result.green).toBe(147);
    expect(result.blue).toBe(157);
  });
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