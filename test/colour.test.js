import { Colour } from "../index.js";

var white;
var black;
var colour1;
var colour2;
var colour3;
var colour4;
var colourA;
var colourB;

beforeEach(() => {
    white = new Colour("#FFFFFF");
    black = new Colour("#000000");
    colour1 = Colour.RGB(247, 185, 12); // #f7b90c
    colour2 = Colour.RGB(82, 50, 92, 0.5); // #52325c
    colour3 = Colour.HSV(200, 0.5, 0.7); // #5995b3
    colour4 = Colour.HSV(125, 1, 0.33, 0.1); // #005407
    colourA = Colour.RGB(6, 16, 125, 0.25); // #06107d
    colourB = Colour.CMYK(0.00, 1.00, 0.25, 0.50);// #800060
});

test("red white", () => {
    expect(white.red).toBe(255);
});

test("red black", () => {
    expect(black.red).toBe(0);
});

test("red 1", () => {
    expect(colour1.red).toBe(247);
});

test("red 2", () => {
    expect(colour2.red).toBe(82);
});

test("red 3", () => {
    expect(colour3.red).toBe(89);
});

test("red 4", () => {
    expect(colour4.red).toBe(0);
});

test("green white", () => {
    expect(white.green).toBe(255);
});

test("green black", () => {
    expect(black.green).toBe(0);
});

test("green 1", () => {
    expect(colour1.green).toBe(185);
});

test("green 2", () => {
    expect(colour2.green).toBe(50);
});

test("green 3", () => {
    expect(colour3.green).toBe(149);
});

test("green 4", () => {
    expect(colour4.green).toBe(84);
});

test("blue white", () => {
    expect(white.blue).toBe(255);
});

test("blue black", () => {
    expect(black.blue).toBe(0);
});

test("blue 1", () => {
    expect(colour1.blue).toBe(12);
});

test("blue 2", () => {
    expect(colour2.blue).toBe(92);
});

test("blue 3", () => {
    expect(colour3.blue).toBe(179);
});

test("blue 4", () => {
    expect(colour4.blue).toBe(7);
});

test("hue white", () => {
    expect(white.hue).toBe(0);
});

test("hue black", () => {
    expect(black.hue).toBe(0);
});

test("hue 1", () => {
    expect(colour1.hue).toBe(44);
});

test("hue 2", () => {
    expect(colour2.hue).toBe(286);
});

test("hue 3", () => {
    expect(colour3.hue).toBe(200);
});

test("hue 4", () => {
    expect(colour4.hue).toBe(125);
});

test("saturationv white", () => {
    expect(white.saturationv).toBe(0);
});

test("saturationv black", () => {
    expect(black.saturationv).toBe(0);
});

test("saturationv 1", () => {
    expect(colour1.saturationv).toBe(0.95);
});

test("saturationv 2", () => {
    expect(colour2.saturationv).toBe(0.46);
});

test("saturationv 3", () => {
    expect(colour3.saturationv).toBe(0.50);
});

test("saturationv 4", () => {
    expect(colour4.saturationv).toBe(1);
});

test("value white", () => {
    expect(white.value).toBe(1);
});

test("value black", () => {
    expect(black.value).toBe(0);
});

test("value 1", () => {
    expect(colour1.value).toBe(0.97);
});

test("value 2", () => {
    expect(colour2.value).toBe(0.36);
});

test("value 3", () => {
    expect(colour3.value).toBe(0.70);
});

test("value 4", () => {
    expect(colour4.value).toBe(0.33);
});

test("alpha white", () => {
    expect(white.alpha).toBe(1);
});

test("alpha black", () => {
    expect(black.alpha).toBe(1);
});

test("alpha 1", () => {
    expect(colour1.alpha).toBe(1);
});

test("alpha 2", () => {
    expect(colour2.alpha).toBe(0.5);
});

test("alpha 3", () => {
    expect(colour3.alpha).toBe(1);
});

test("alpha 4", () => {
    expect(colour4.alpha).toBe(0.1);
});

test("css constructor rgb 1", () => {
    const colour = new Colour('rgba(200, 60, 100, 0.3)');
    expect(colour.red).toBe(200);
    expect(colour.green).toBe(60);
    expect(colour.blue).toBe(100);
    expect(colour.hue).toBe(343);
    expect(colour.saturationv).toBe(0.70);
    expect(colour.value).toBe(0.78);
    expect(colour.alpha).toBe(0.30);
});


test("css constructor rgb 2", () => {
    const colour = new Colour('rgb(176 176 176)');
    expect(colour.red).toBe(176);
    expect(colour.green).toBe(176);
    expect(colour.blue).toBe(176);
    expect(colour.value).toBe(0.69);
    expect(colour.alpha).toBe(1);
});

test("css constructor hsl 1", () => {
    const colour = new Colour('hsla(360, 60%, 50%, 0.4)');
    expect(colour.red).toBe(204);
    expect(colour.green).toBe(51);
    expect(colour.blue).toBe(51);
    expect(colour.hue).toBe(0);
    expect(colour.saturationl).toBe(0.60);
    expect(colour.light).toBe(0.50);
    expect(colour.alpha).toBe(0.40);
});

test("css constructor hwb 1", () => {
    const colour = new Colour('hwb(60, 3%, 60%, 0.6)');
    expect(colour.red).toBe(102);
    expect(colour.green).toBe(102);
    expect(colour.blue).toBe(7);
    expect(colour.hue).toBe(60);
    expect(colour.white).toBe(0.03);
    expect(colour.black).toBe(0.60);
    expect(colour.alpha).toBe(0.60);
});

test("css constructor hex 1", () => {
    const colour = new Colour("#3B2B0B");
    expect(colour.red).toBe(59);
    expect(colour.green).toBe(43);
    expect(colour.blue).toBe(11);
    expect(colour.hue).toBe(40);
    expect(colour.saturationv).toBe(0.81);
    expect(colour.value).toBe(0.23);
    expect(colour.alpha).toBe(1);
});

test("css constructor hex 2", () => {
    const colour = new Colour('#FFFA');
    expect(colour.red).toBe(255);
    expect(colour.green).toBe(255);
    expect(colour.blue).toBe(255);
    expect(colour.value).toBe(1);
    expect(colour.alpha).toBe(0.67);
});

test("css constructor colour names 1", () => {
    const colour = new Colour("crimson");
    expect(colour.red).toBe(220);
    expect(colour.green).toBe(20);
    expect(colour.blue).toBe(60);
    expect(colour.hue).toBe(348);
    expect(colour.saturationv).toBe(0.91);
    expect(colour.value).toBe(0.86);
    expect(colour.alpha).toBe(1);
});

test("css constructor colour names 2", () => {
    const colour = new Colour('black');
    expect(colour.red).toBe(0);
    expect(colour.green).toBe(0);
    expect(colour.blue).toBe(0);
    expect(colour.value).toBe(0);
    expect(colour.alpha).toBe(1);
});

test("css constructor invalid", () => {
    expect(() => new Colour('hello world')).toThrow();
});

test("RGB constructor 1", () => {
    const colour = Colour.RGB(31, 33, 36, 0.39);
    expect(colour.red).toBe(31);
    expect(colour.green).toBe(33);
    expect(colour.blue).toBe(36);
    expect(colour.hue).toBe(216);
    expect(colour.saturationv).toBe(0.14);
    expect(colour.value).toBe(0.14);
    expect(colour.alpha).toBe(0.39);
});

test("RGB constructor 2", () => {
    const colour = Colour.RGB(194, 255, 153);
    expect(colour.red).toBe(194);
    expect(colour.green).toBe(255);
    expect(colour.blue).toBe(153);
    expect(colour.hue).toBe(96);
    expect(colour.saturationv).toBe(0.40);
    expect(colour.value).toBe(1);
    expect(colour.alpha).toBe(1);
});

test("RGB constructor 3", () => {
    const colour = Colour.RGB(255, 5, 0, 0.1);
    expect(colour.red).toBe(255);
    expect(colour.green).toBe(5);
    expect(colour.blue).toBe(0);
    expect(colour.hue).toBe(1);
    expect(colour.saturationv).toBe(1);
    expect(colour.value).toBe(1);
    expect(colour.alpha).toBe(0.1);
});

test("RGB constructor 4", () => {
    const colour = Colour.RGB(129, 65, 133);
    expect(colour.red).toBe(129);
    expect(colour.green).toBe(65);
    expect(colour.blue).toBe(133);
    expect(colour.hue).toBe(296);
    expect(colour.saturationv).toBe(0.51);
    expect(colour.value).toBe(0.52);
    expect(colour.alpha).toBe(1);
});

test("RGB constructor 5", () => {
    const colour = Colour.RGB(0, 0, 0, 0);
    expect(colour.red).toBe(0);
    expect(colour.green).toBe(0);
    expect(colour.blue).toBe(0);
    expect(colour.value).toBe(0);
    expect(colour.alpha).toBe(0);
});

test("HSV constructor 1", () => {
    const colour = Colour.HSV(243, 1, 1, 0.5)
    expect(colour.red).toBe(13);
    expect(colour.green).toBe(0);
    expect(colour.blue).toBe(255);
    expect(colour.hue).toBe(243);
    expect(colour.saturationv).toBe(1);
    expect(colour.value).toBe(1);
    expect(colour.alpha).toBe(0.5);
});

test("HSV constructor 2", () => {
    const colour = Colour.HSV(52, 0.96, 0.07)
    expect(colour.red).toBe(18);
    expect(colour.green).toBe(16);
    expect(colour.blue).toBe(1);
    expect(colour.hue).toBe(52);
    expect(colour.saturationv).toBe(0.96);
    expect(colour.value).toBe(0.07);
    expect(colour.alpha).toBe(1);
});

test("HSV constructor 3", () => {
    const colour = Colour.HSV(100, 0.03, 0.05, 0.08)
    expect(colour.red).toBe(12);
    expect(colour.green).toBe(13);
    expect(colour.blue).toBe(12);
    expect(colour.hue).toBe(100);
    expect(colour.saturationv).toBe(0.03);
    expect(colour.value).toBe(0.05);
    expect(colour.alpha).toBe(0.08);
});

test("HSV constructor 4", () => {
    const colour = Colour.HSV(237, 0, 1, 0)
    expect(colour.red).toBe(255);
    expect(colour.green).toBe(255);
    expect(colour.blue).toBe(255);
    expect(colour.hue).toBe(237);
    expect(colour.saturationv).toBe(0);
    expect(colour.value).toBe(1);
    expect(colour.alpha).toBe(0);
});

test("HSV constructor 5", () => {
    const colour = Colour.HSV(0, 1, 0, 0)
    expect(colour.red).toBe(0);
    expect(colour.green).toBe(0);
    expect(colour.blue).toBe(0);
    expect(colour.hue).toBe(0);
    expect(colour.saturationv).toBe(1);
    expect(colour.value).toBe(0);
    expect(colour.alpha).toBe(0);
});

test("red setter A", () => {
    colourA.red = 69;
    expect(colourA.red).toBe(69);
    expect(colourA.green).toBe(16);
    expect(colourA.blue).toBe(125);
    expect(colourA.hue).toBe(269);
    expect(colourA.saturationv).toBe(0.87);
    expect(colourA.value).toBe(0.49);
    expect(colourA.alpha).toBe(0.25);
});

test("green setter A", () => {
    colourA.green = 127;
    expect(colourA.red).toBe(6);
    expect(colourA.green).toBe(127);
    expect(colourA.blue).toBe(125);
    expect(colourA.hue).toBe(179);
    expect(colourA.saturationv).toBe(0.95);
    expect(colourA.value).toBe(0.50);
    expect(colourA.alpha).toBe(0.25);
});

test("blue setter A", () => {
    colourA.blue = 255;
    expect(colourA.red).toBe(6);
    expect(colourA.green).toBe(16);
    expect(colourA.blue).toBe(255);
    expect(colourA.hue).toBe(238);
    expect(colourA.saturationv).toBe(0.98);
    expect(colourA.value).toBe(1);
    expect(colourA.alpha).toBe(0.25);
});

test("hue setter A", () => {
    colourA.hue = 100;
    expect(colourA.red).toBe(46);
    expect(colourA.green).toBe(125);
    expect(colourA.blue).toBe(6);
    expect(colourA.hue).toBe(100);
    expect(colourA.saturationv).toBe(0.95);
    expect(colourA.value).toBe(0.49);
    expect(colourA.alpha).toBe(0.25);
});

test("saturationv setter A", () => {
    colourA.saturationv = 0.25;
    expect(colourA.red).toBe(94);
    expect(colourA.green).toBe(96);
    expect(colourA.blue).toBe(125);
    expect(colourA.hue).toBe(235);
    expect(colourA.saturationv).toBe(0.25);
    expect(colourA.value).toBe(0.49);
    expect(colourA.alpha).toBe(0.25);
});

test("value setter A", () => {
    colourA.value = 0.88;
    expect(colourA.red).toBe(11);
    expect(colourA.green).toBe(29);
    expect(colourA.blue).toBe(224);
    expect(colourA.hue).toBe(235);
    expect(colourA.saturationv).toBe(0.95);
    expect(colourA.value).toBe(0.88);
    expect(colourA.alpha).toBe(0.25);
});

test("alpha setter A", () => {
    colourA.alpha = 0;
    expect(colourA.red).toBe(6);
    expect(colourA.green).toBe(16);
    expect(colourA.blue).toBe(125);
    expect(colourA.hue).toBe(235);
    expect(colourA.saturationv).toBe(0.95);
    expect(colourA.value).toBe(0.49);
    expect(colourA.alpha).toBe(0);
});

test("red setter black", () => {
    black.red = 189;
    expect(black.red).toBe(189);
    expect(black.green).toBe(0);
    expect(black.blue).toBe(0);
    expect(black.hue).toBe(0);
    expect(black.saturationv).toBe(1);
    expect(black.value).toBe(0.74);
});

test("green setter black", () => {
    black.green = 16;
    expect(black.red).toBe(0);
    expect(black.green).toBe(16);
    expect(black.blue).toBe(0);
    expect(black.hue).toBe(120);
    expect(black.saturationv).toBe(1);
    expect(black.value).toBe(0.06);
});

test("blue setter black", () => {
    black.blue = 222;
    expect(black.red).toBe(0);
    expect(black.green).toBe(0);
    expect(black.blue).toBe(222);
    expect(black.hue).toBe(240);
    expect(black.saturationv).toBe(1);
    expect(black.value).toBe(0.87);
});

test("hue setter black", () => {
    black.hue = 333;
    expect(black.red).toBe(0);
    expect(black.green).toBe(0);
    expect(black.blue).toBe(0);
    expect(black.hue).toBe(333);
    expect(black.saturationv).toBe(0);
    expect(black.value).toBe(0);
});

test("saturationv setter black", () => {
    black.saturationv = 0.69;
    expect(black.red).toBe(0);
    expect(black.green).toBe(0);
    expect(black.blue).toBe(0);
    expect(black.hue).toBe(0);
    expect(black.saturationv).toBe(0.69);
    expect(black.value).toBe(0);
});

test("value setter black", () => {
    black.value = 0.98;
    expect(black.red).toBe(250);
    expect(black.green).toBe(250);
    expect(black.blue).toBe(250);
    expect(black.hue).toBe(0);
    expect(black.saturationv).toBe(0);
    expect(black.value).toBe(0.98);
});

test("RGB constructor invalid", () => {
    expect(() => Colour.RGB(256, 0, 0)).toThrow();
    expect(() => Colour.RGB(0, 256, 0)).toThrow();
    expect(() => Colour.RGB(0, 0, 256)).toThrow();
    expect(() => Colour.RGB(-1, 0, 0)).toThrow();
    expect(() => Colour.RGB(0, -1, 0)).toThrow();
    expect(() => Colour.RGB(0, 0, -1)).toThrow();
    expect(() => Colour.RGB(0, 100, 200, 2)).toThrow();
    expect(() => Colour.RGB(0, 100, 200, -1)).toThrow();
});

test("HSV constructor invalid", () => {
    expect(() => Colour.HSV(361, 0, 0)).toThrow();
    expect(() => Colour.HSV(-1, 0, 0)).toThrow();
    expect(() => Colour.HSV(0, 2, 0)).toThrow();
    expect(() => Colour.HSV(0, -1, 0)).toThrow();
    expect(() => Colour.HSV(0, 0, 2)).toThrow();
    expect(() => Colour.HSV(0, 0, -1)).toThrow();
    expect(() => Colour.HSV(0, 0, 0, 2)).toThrow();
    expect(() => Colour.HSV(0, 0, 0, -1)).toThrow();
});

test("CMYK constructor invalid", () => {
    expect(() => Colour.CMYK(1.1, 0, 0, 0, 0)).toThrow();
    expect(() => Colour.CMYK(0, -1.1, 0, 0, 0)).toThrow();
    expect(() => Colour.CMYK(0, 0, 1.1, 0, 0)).toThrow();
    expect(() => Colour.CMYK(0, 0, 0, -1.1, 0)).toThrow();
    expect(() => Colour.CMYK(0, 0, 0, 0, -1.1)).toThrow();
});

test("HSL constructor invalid", () => {
    expect(() => Colour.HSL(361, 0.5, 1)).toThrow();
    expect(() => Colour.HSL(0, -1, 0)).toThrow();
    expect(() => Colour.HSL(0, 0, 1.2)).toThrow();
    expect(() => Colour.HSL(0, 0, 0, -1)).toThrow();
});

test("HWB constructor invalid", () => {
    expect(() => Colour.HWB(361, 0, 1)).toThrow();
    expect(() => Colour.HWB(0, -1, 0)).toThrow();
    expect(() => Colour.HWB(0, 0, 1.2)).toThrow();
    expect(() => Colour.HWB(0, 0, 0, -1)).toThrow();
});

test("red setter invalid", () => {
    expect(() => colourA.red = 256).toThrow();
    expect(() => colourA.red = -1).toThrow();
});

test("green setter invalid", () => {
    expect(() => colourA.green = 256).toThrow();
    expect(() => colourA.green = -1).toThrow();
});

test("blue setter invalid", () => {
    expect(() => colourA.blue = 256).toThrow();
    expect(() => colourA.blue = -1).toThrow();
});

test("hue setter invalid", () => {
    expect(() => colourA.hue = 361).toThrow();
    expect(() => colourA.hue = -1).toThrow();
});

test("saturationv setter invalid", () => {
    expect(() => colourA.saturationv = 2).toThrow();
    expect(() => colourA.saturationv = -1).toThrow();
});

test("value setter invalid", () => {
    expect(() => colourA.value = 2).toThrow();
    expect(() => colourA.value = -1).toThrow();
});

test("alpha setter invalid", () => {
    expect(() => colourA.alpha = 2).toThrow();
    expect(() => colourA.alpha = -1).toThrow();
});

test("cyan setter invalid", () => {
    expect(() => colourA.cyan = 256).toThrow();
    expect(() => colourA.cyan = -1).toThrow();
});

test("magenta setter invalid", () => {
    expect(() => colourA.magenta = 256).toThrow();
    expect(() => colourA.magenta = -1).toThrow();
});

test("yellow setter invalid", () => {
    expect(() => colourA.yellow = 256).toThrow();
    expect(() => colourA.yellow = -1).toThrow();
});

test("black setter invalid", () => {
    expect(() => colourA.black = 256).toThrow();
    expect(() => colourA.black = -1).toThrow();
});

test("white setter invalid", () => {
    expect(() => colourA.white = 256).toThrow();
    expect(() => colourA.white = -1).toThrow();
});

test("saturationl setter invalid", () => {
    expect(() => colourA.saturationl = 256).toThrow();
    expect(() => colourA.saturationl = -1).toThrow();
});

test("light setter invalid", () => {
    expect(() => colourA.light = 256).toThrow();
    expect(() => colourA.light = -1).toThrow();
});

test("cyan 1", () => {
    expect(colour1.cyan).toBe(0.00);
});

test("cyan 2", () => {
    expect(colour2.cyan).toBe(0.11);
});

test("magenta 1", () => {
    expect(colour1.magenta).toBe(0.25);
});

test("magenta 2", () => {
    expect(colour2.magenta).toBe(0.46);
});

test("yellow 1", () => {
    expect(colour1.yellow).toBe(0.95);
});

test("yellow 2", () => {
    expect(colour2.yellow).toBe(0.00);
});

test("saturationl 1", () => {
    expect(colour1.saturationl).toBe(0.94);
});

test("saturationl 2", () => {
    expect(colour2.saturationl).toBe(0.30);
});

test("light 1", () => {
    expect(colour1.light).toBe(0.51);
});

test("light 2", () => {
    expect(colour2.light).toBe(0.28);
});

test("white 1", () => {
    expect(colour1.white).toBe(0.05);
});

test("white 2", () => {
    expect(colour2.white).toBe(0.20);
});

test("black 1", () => {
    expect(colour1.black).toBe(0.03);
});

test("black 2", () => {
    expect(colour2.black).toBe(0.64);
});

test("CMYK constructor 1", () => {
    const colour = Colour.CMYK(0.50, 0.00, 0.42, 0.74, 0.50);
    expect(colour.red).toBe(33);
    expect(colour.green).toBe(66);
    expect(colour.blue).toBe(38);
    expect(colour.hue).toBe(129);
    expect(colour.saturationv).toBe(0.50);
    expect(colour.value).toBe(0.26);
    expect(colour.cyan).toBe(0.50);
    expect(colour.magenta).toBe(0.00);
    expect(colour.yellow).toBe(0.42);
    expect(colour.saturationl).toBe(0.33);
    expect(colour.light).toBe(0.19);
    expect(colour.white).toBe(0.13);
    expect(colour.black).toBe(0.74);
    expect(colour.alpha).toBe(0.50);
});

test("CMYK constructor 2", () => {
    const colour = Colour.CMYK(0.00, 0.30, 0.20, 0.50);
    expect(colour.red).toBe(128);
    expect(colour.green).toBe(89);
    expect(colour.blue).toBe(102);
    expect(colour.hue).toBe(340);
    expect(colour.saturationv).toBe(0.30);
    expect(colour.value).toBe(0.50);
    expect(colour.cyan).toBe(0.00);
    expect(colour.magenta).toBe(0.30);
    expect(colour.yellow).toBe(0.20);
    expect(colour.saturationl).toBe(0.18);
    expect(colour.light).toBe(0.43);
    expect(colour.white).toBe(0.35);
    expect(colour.black).toBe(0.50);
    expect(colour.alpha).toBe(1.00);
});

test("HSL constructor 1", () => {
    const colour = Colour.HSL(11, 0.94, 0.48, 0.01);
    expect(colour.red).toBe(237);
    expect(colour.green).toBe(50);
    expect(colour.blue).toBe(7);
    expect(colour.hue).toBe(11);
    expect(colour.saturationv).toBe(0.97);
    expect(colour.value).toBe(0.93);
    expect(colour.cyan).toBe(0.0);
    expect(colour.magenta).toBe(0.79);
    expect(colour.yellow).toBe(0.97);
    expect(colour.saturationl).toBe(0.94);
    expect(colour.light).toBe(0.48);
    expect(colour.white).toBe(0.03);
    expect(colour.black).toBe(0.07);
    expect(colour.alpha).toBe(0.01);
});

test("HSL constructor 2", () => {
    const colour = Colour.HSL(38, 0.03, 0.77);
    expect(colour.red).toBe(198);
    expect(colour.green).toBe(197);
    expect(colour.blue).toBe(195);
    expect(colour.hue).toBe(40);
    expect(colour.saturationv).toBe(0.02);
    expect(colour.value).toBe(0.78);
    expect(colour.cyan).toBe(0.00);
    expect(colour.magenta).toBe(0.01);
    expect(colour.yellow).toBe(0.02);
    expect(colour.saturationl).toBe(0.03);
    expect(colour.light).toBe(0.77);
    expect(colour.white).toBe(0.76);
    expect(colour.black).toBe(0.22);
    expect(colour.alpha).toBe(1.00);
});

test("HSL constructor 3", () => {
    const colour = Colour.HSL(81, 0.36, 0.26);
    expect(colour.red).toBe(73);
    expect(colour.green).toBe(90);
    expect(colour.blue).toBe(42);
    expect(colour.hue).toBe(81);
    expect(colour.saturationl).toBe(0.36);
    expect(colour.light).toBe(0.26);
});

test("HWB constructor 1", () => {
    const colour = Colour.HWB(181, 0.01, 0.82, 0.99);
    expect(colour.red).toBe(3);
    expect(colour.green).toBe(45);
    expect(colour.blue).toBe(46);
    expect(colour.hue).toBe(181);
    expect(colour.saturationv).toBe(0.94);
    expect(colour.value).toBe(0.18);
    expect(colour.cyan).toBe(0.93);
    expect(colour.magenta).toBe(0.02);
    expect(colour.yellow).toBe(0.00);
    expect(colour.saturationl).toBe(0.88);
    expect(colour.light).toBe(0.10);
    expect(colour.white).toBe(0.01);
    expect(colour.black).toBe(0.82);
    expect(colour.alpha).toBe(0.99);
});

test("HWB constructor 2", () => {
    const colour = Colour.HWB(270, 0.84, 0.14);
    expect(colour.red).toBe(217);
    expect(colour.green).toBe(215);
    expect(colour.blue).toBe(219);
    expect(colour.hue).toBe(270);
    expect(colour.saturationv).toBe(0.02);
    expect(colour.value).toBe(0.86);
    expect(colour.cyan).toBe(0.01);
    expect(colour.magenta).toBe(0.02);
    expect(colour.yellow).toBe(0.00);
    expect(colour.saturationl).toBe(0.05);
    expect(colour.light).toBe(0.85);
    expect(colour.white).toBe(0.84);
    expect(colour.black).toBe(0.14);
    expect(colour.alpha).toBe(1.00);
});

test("red setter B", () => {
    colourB.red = 69;
    expect(colourB.red).toBe(69);
    expect(colourB.green).toBe(0);
    expect(colourB.blue).toBe(96);
    expect(colourB.hue).toBe(283);
    expect(colourB.saturationv).toBe(1.00);
    expect(colourB.value).toBe(0.38);
    expect(colourB.cyan).toBe(0.28);
    expect(colourB.magenta).toBe(1.00);
    expect(colourB.yellow).toBe(0.00);
    expect(colourB.saturationl).toBe(1.00);
    expect(colourB.light).toBe(0.19);
    expect(colourB.white).toBe(0.00);
    expect(colourB.black).toBe(0.62);
    expect(colourB.alpha).toBe(1.00);
});

test("green setter B", () => {
    colourB.green = 69;
    expect(colourB.red).toBe(128);
    expect(colourB.green).toBe(69);
    expect(colourB.blue).toBe(96);
    expect(colourB.hue).toBe(333);
    expect(colourB.saturationv).toBe(0.46);
    expect(colourB.value).toBe(0.50);
    expect(colourB.cyan).toBe(0.00);
    expect(colourB.magenta).toBe(0.46);
    expect(colourB.yellow).toBe(0.25);
    expect(colourB.saturationl).toBe(0.30);
    expect(colourB.light).toBe(0.39);
    expect(colourB.white).toBe(0.27);
    expect(colourB.black).toBe(0.50);
    expect(colourB.alpha).toBe(1.00);
});

test("blue setter B", () => {
    colourB.blue = 69;
    expect(colourB.red).toBe(128);
    expect(colourB.green).toBe(0);
    expect(colourB.blue).toBe(69);
    expect(colourB.hue).toBe(328);
    expect(colourB.saturationv).toBe(1.00);
    expect(colourB.value).toBe(0.50);
    expect(colourB.cyan).toBe(0.00);
    expect(colourB.magenta).toBe(1.00);
    expect(colourB.yellow).toBe(0.46);
    expect(colourB.saturationl).toBe(1.00);
    expect(colourB.light).toBe(0.25);
    expect(colourB.white).toBe(0.00);
    expect(colourB.black).toBe(0.50);
    expect(colourB.alpha).toBe(1.00);
});

test("hue setter B", () => {
    colourB.hue = 69;
    expect(colourB.red).toBe(108);
    expect(colourB.green).toBe(128);
    expect(colourB.blue).toBe(0);
    expect(colourB.hue).toBe(69);
    expect(colourB.saturationv).toBe(1.00);
    expect(colourB.value).toBe(0.50);
    expect(colourB.cyan).toBe(0.16);
    expect(colourB.magenta).toBe(0.00);
    expect(colourB.yellow).toBe(1.00);
    expect(colourB.saturationl).toBe(1.00);
    expect(colourB.light).toBe(0.25);
    expect(colourB.white).toBe(0.00);
    expect(colourB.black).toBe(0.50);
    expect(colourB.alpha).toBe(1.00);
});

test("saturationv setter B", () => {
    colourB.saturationv = 0.69;
    expect(colourB.red).toBe(128);
    expect(colourB.green).toBe(40);
    expect(colourB.blue).toBe(106);
    expect(colourB.hue).toBe(315);
    expect(colourB.saturationv).toBe(0.69);
    expect(colourB.value).toBe(0.50);
    expect(colourB.cyan).toBe(0.00);
    expect(colourB.magenta).toBe(0.69);
    expect(colourB.yellow).toBe(0.17);
    expect(colourB.saturationl).toBe(0.52);
    expect(colourB.light).toBe(0.33);
    expect(colourB.white).toBe(0.16);
    expect(colourB.black).toBe(0.50);
    expect(colourB.alpha).toBe(1.00);
});

test("value setter B", () => {
    colourB.value = 0.69;
    expect(colourB.red).toBe(176);
    expect(colourB.green).toBe(0);
    expect(colourB.blue).toBe(132);
    expect(colourB.hue).toBe(315);
    expect(colourB.saturationv).toBe(1.00);
    expect(colourB.value).toBe(0.69);
    expect(colourB.cyan).toBe(0.00);
    expect(colourB.magenta).toBe(1.00);
    expect(colourB.yellow).toBe(0.25);
    expect(colourB.saturationl).toBe(1.00);
    expect(colourB.light).toBe(0.35);
    expect(colourB.white).toBe(0.00);
    expect(colourB.black).toBe(0.31);
    expect(colourB.alpha).toBe(1.00);
});

test("cyan setter B", () => {
    colourB.cyan = 0.69;
    expect(colourB.red).toBe(40);
    expect(colourB.green).toBe(0);
    expect(colourB.blue).toBe(96);
    expect(colourB.hue).toBe(265);
    expect(colourB.saturationv).toBe(1.00);
    expect(colourB.value).toBe(0.38);
    expect(colourB.cyan).toBe(0.69);
    expect(colourB.magenta).toBe(1.00);
    expect(colourB.yellow).toBe(0.25);
    expect(colourB.saturationl).toBe(1.00);
    expect(colourB.light).toBe(0.19);
    expect(colourB.white).toBe(0.00);
    expect(colourB.black).toBe(0.62);
    expect(colourB.alpha).toBe(1.00);
});

test("magenta setter B", () => {
    colourB.magenta = 0.69;
    expect(colourB.red).toBe(128);
    expect(colourB.green).toBe(40);
    expect(colourB.blue).toBe(96);
    expect(colourB.hue).toBe(322);
    expect(colourB.saturationv).toBe(0.69);
    expect(colourB.value).toBe(0.50);
    expect(colourB.cyan).toBe(0.00);
    expect(colourB.magenta).toBe(0.69);
    expect(colourB.yellow).toBe(0.25);
    expect(colourB.saturationl).toBe(0.52);
    expect(colourB.light).toBe(0.33);
    expect(colourB.white).toBe(0.16);
    expect(colourB.black).toBe(0.50);
    expect(colourB.alpha).toBe(1.00);
});

test("yellow setter B", () => {
    colourB.yellow = 0.69;
    expect(colourB.red).toBe(128);
    expect(colourB.green).toBe(0);
    expect(colourB.blue).toBe(40);
    expect(colourB.hue).toBe(341);
    expect(colourB.saturationv).toBe(1.00);
    expect(colourB.value).toBe(0.50);
    expect(colourB.cyan).toBe(0.00);
    expect(colourB.magenta).toBe(1.00);
    expect(colourB.yellow).toBe(0.69);
    expect(colourB.saturationl).toBe(1.00);
    expect(colourB.light).toBe(0.25);
    expect(colourB.white).toBe(0.00);
    expect(colourB.black).toBe(0.50);
    expect(colourB.alpha).toBe(1.00);
});

test("saturationl setter B", () => {
    colourB.saturationl = 0.69;
    expect(colourB.red).toBe(108);
    expect(colourB.green).toBe(20);
    expect(colourB.blue).toBe(86);
    expect(colourB.hue).toBe(315);
    expect(colourB.saturationv).toBe(0.81);
    expect(colourB.value).toBe(0.42);
    expect(colourB.cyan).toBe(0.00);
    expect(colourB.magenta).toBe(0.81);
    expect(colourB.yellow).toBe(0.20);
    expect(colourB.saturationl).toBe(0.69);
    expect(colourB.light).toBe(0.25);
    expect(colourB.white).toBe(0.08);
    expect(colourB.black).toBe(0.58);
    expect(colourB.alpha).toBe(1.00);
});

test("light setter B", () => {
    colourB.light = 0.69;
    expect(colourB.red).toBe(255);
    expect(colourB.green).toBe(97);
    expect(colourB.blue).toBe(215);
    expect(colourB.hue).toBe(315);
    expect(colourB.saturationv).toBe(0.62);
    expect(colourB.value).toBe(1.00);
    expect(colourB.cyan).toBe(0.00);
    expect(colourB.magenta).toBe(0.62);
    expect(colourB.yellow).toBe(0.16);
    expect(colourB.saturationl).toBe(1.00);
    expect(colourB.light).toBe(0.69);
    expect(colourB.white).toBe(0.38);
    expect(colourB.black).toBe(0.00);
    expect(colourB.alpha).toBe(1.00);
});

test("white setter B", () => {
    colourB.white = 0.01;
    expect(colourB.red).toBe(128);
    expect(colourB.green).toBe(3);
    expect(colourB.blue).toBe(96);
    expect(colourB.hue).toBe(315);
    expect(colourB.saturationv).toBe(0.98);
    expect(colourB.value).toBe(0.50);
    expect(colourB.cyan).toBe(0.00);
    expect(colourB.magenta).toBe(0.98);
    expect(colourB.yellow).toBe(0.25);
    expect(colourB.saturationl).toBe(0.95);
    expect(colourB.light).toBe(0.26);
    expect(colourB.white).toBe(0.01);
    expect(colourB.black).toBe(0.50);
    expect(colourB.alpha).toBe(1.00);
});

test("black setter B", () => {
    colourB.black = 0.01;
    expect(colourB.red).toBe(252);
    expect(colourB.green).toBe(0);
    expect(colourB.blue).toBe(189);
    expect(colourB.hue).toBe(315);
    expect(colourB.saturationv).toBe(1.00);
    expect(colourB.value).toBe(0.99);
    expect(colourB.cyan).toBe(0.00);
    expect(colourB.magenta).toBe(1.00);
    expect(colourB.yellow).toBe(0.25);
    expect(colourB.saturationl).toBe(1.00);
    expect(colourB.light).toBe(0.49);
    expect(colourB.white).toBe(0.00);
    expect(colourB.black).toBe(0.01);
    expect(colourB.alpha).toBe(1.00);
});

test("alpha setter B", () => {
    colourB.alpha = 0.69;
    expect(colourB.red).toBe(128);
    expect(colourB.green).toBe(0);
    expect(colourB.blue).toBe(96);
    expect(colourB.hue).toBe(315);
    expect(colourB.saturationv).toBe(1.00);
    expect(colourB.value).toBe(0.50);
    expect(colourB.cyan).toBe(0.00);
    expect(colourB.magenta).toBe(1.00);
    expect(colourB.yellow).toBe(0.25);
    expect(colourB.saturationl).toBe(1.00);
    expect(colourB.light).toBe(0.25);
    expect(colourB.white).toBe(0.00);
    expect(colourB.black).toBe(0.50);
    expect(colourB.alpha).toBe(0.69);
});