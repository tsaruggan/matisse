# matisse
**matisse** is a JavaScript library for performing colour manipulations with support for CSS color strings. Mutable colour entities allow for implicit conversion between RGB, HSV, HSL, CMYK, and HWB colour spaces. Mixing, toning, tinting, shading, and blending operations are also supported including a variety of different blend modes. matisse contains functionality for performing colour measurements as well as functionality for validating and correcting colours to comply with the WCAG standards for contrast. In addition, this library allows for palette generation for different colour harmonies according to colour theory principles.

This project was originally developed as a team project for McMaster University's SFWRENG 3XA3: Software Project Management course in collaboration with [Isra Zahid](https://github.com/israzahid) and [Samia Anwar](https://github.com/SamiaAnwar).  

> Check out [matisse-palette](https://github.com/tsaruggan/matisse-palette) which extends matisse to allow for colour palettes to be generated from images using K-means clustering.
> 
> <img src="https://github.com/user-attachments/assets/d3553964-25cf-4900-a143-b5aa739f921f" width="300">



## Installation
```
npm install matisse
```

## Usage
```javascript
import Colour, * as matisse from "matisse";
```

### Constructors
Traditional constructors are available for CSS colour strings and HEX codes as well as static factory contructors for RGB, HSV, HSL, CMYK, and HWB colour models. When the `Colour` object is initialized using a constructor, all other colour attributes from the other colour spaces are implicitly calculated and stored.
```javascript
const colour = new Colour("rgba(32, 122, 166, 0.5)");
const colour = new Colour("#207AA680");
const colour = Colour.RGB(32, 122, 166, 0.5);
const colour = Colour.HSV(200, 0.81, 0.65, 0.5);
const colour = Colour.HSL(200, 0.69, 0.39, 0.5);
const colour = Colour.CMYK(0.81, 0.27, 0, 0.35, 0.5);
const colour = Colour.HWB(200, 0.12, 0.35, 0.5);
```

### Getters & Setters
Getters and setters for the `Colour` class are defined using ES6 `get` and `set` properties. The following properties of `Colour` instances can be accessed and mutated: `red`, `green`, `blue`, `hue`, `saturationv`, `value`, `saturationl`, `light`, `cyan`, `magenta`, `yellow`, `white`, `black`, `alpha`. Error handling and useful range constants are also built in to support usability.
```javascript
const colour = Colour.RGB(18, 64, 188);
console.log(colour.hue);
colour.hue = 69;
colour.hue = Colour.hueMax + 1; // throws an error!
```

### Measurements & Manipulations
matisse contains several static methods for colour measurements, calculations, and operations.
```javascript
const x = new Colour("#59396E");
const y = new Colour("#A5B828");

const x_inverse = matisse.negate(x); // #A6C691
const y_complement = matisse.rotate(y, 180); // #3C28B8
const x_grayscale = matisse.grayscale(x); // #484848
const y_colourfulness = matisse.colourfulness(y); // 40.75
const x_luminosity = matisse.luminosity(x); // 0.06
const y_temp = matisse.temperature(y); // 2812.14
const contrast = matisse.contrast(x, y); // 4.24
```

### Mixing & Blending
Mixing and blending operations with different blend modes can be perfomed with a given base colour and a blend colour.
```javascript
const baseColour = Colour.CMYK(0.00, 0.95, 0.86, 0.38); // #9E0816
const blendColour = Colour.HWB(285, 0.32, 0.65); // #58525A

matisse.mix(baseColour, blendColour, 0.69); // #6D3A44
matisse.normal(baseColour, blendColour); // #575159
matisse.multiply(baseColour, blendColour); // #360308
matisse.screen(baseColour, blendColour); // #BF5667
matisse.overlay(baseColour, blendColour); // #7F050F
matisse.darken(baseColour, blendColour); // #570816
matisse.lighten(baseColour, blendColour); // #9E5159
matisse.colourDodge(baseColour, blendColour); // #F00C22
matisse.colourBurn(baseColour, blendColour); // #000000
matisse.hardLight(baseColour, blendColour); // #6C050F
matisse.softLight(baseColour, blendColour); // #8B0510
matisse.difference(baseColour, blendColour); // #474943
matisse.exclusion(baseColour, blendColour); // #895460
```

Similarly, tones, tints, and shades can be produced from a given base colour.
```javascript
const baseColour = Colour.HSV(277, 1.00, 0.50); // #4F0080

matisse.tone(baseColour, 0.50); // #684080
matisse.tint(baseColour, 0.50); // #A780C0
matisse.shade(baseColour, 0.50); // #280040
```

### Colour Palettes
Colour palettes can be generated according to various colour harmonies.
```javascript
const colour = Colour.RGB(235, 64, 52); // #EB4034

matisse.analogous(colour); // [#EB33A1, #EB4034, #EBBA33]
matisse.complementary(colour); // [#EB4034, #33DFEB]
matisse.splitComplementary(colour); // [#EB4034, #33EBBA, #33A1EB]
matisse.triadic(colour); // [#EB4034, #33EB3F, ##3F33EB]
matisse.tetradic(colour); // [#EB4034, #33EB3F, #33DFEB, #3F33EB]
matisse.square(colour); // [#EB4034, #83EB33, #33DFEB, #9B33EB]
```

Monochromatic colour palettes can also be generated for a given length.
```javascript
const baseColour = Colour.HSV(277, 1.00, 0.50); // #4F0080

matisse.tones(baseColour, 5); // [#4F0080, #5B2080, #684080, #746080, #808080]
matisse.tints(baseColour, 5); // [#4F0080, #7B40A0, #A780C0, #D3BFDF, #FFFFFF]
matisse.shades(baseColour, 5); // [#4F0080, #3B0060, #280040, #140020, #000000]
```

You can also generate a palette of random colours.
```javascript
matisse.randoms(10);
```

To generate colour palettes from an image, use the [matisse-palette](https://github.com/tsaruggan/matisse-palette) library. This extension uses K-means clustering to intelligently extract a colour palette given the image's pixel data. 

### Accessibility
matisse has the ability to check if a pair of colours have sufficient contrast according to the [WCAG](http://www.w3.org/TR/WCAG20/#contrast-ratiodef) standards. It can also be configured to compare enhanced and large text colours.
```javascript
const textColour = new Colour("#520404");
const backgroundColour = new Colour("#D010EE");

matisse.validateContrast(textColour, backgroundColour); // false
matisse.validateContrast(textColour, backgroundColour, true); // true
matisse.validateContrast(textColour, backgroundColour, false, true); // false
matisse.validateContrast(textColour, backgroundColour, true, true); // false
```

A colour combination with insufficient contrast can be fixed as well. This works by whitening the lighter colour and blackening the darker colour!
```javascript
const textColour = new Colour("#FFDD00"); // #FFDD00
const backgroundColour = new Colour("#1F8BFF"); // #1F8BFF

matisse.fixContrast(textColour, backgroundColour); // [#FFE644, #1866BC]
```

For detailed documentation, refer to the project's [Module Interface Specification (MIS)](https://github.com/tsaruggan/matisse/blob/master/docs/MIS.md).

## Sources
matisse was inspired by and makes use of the following:
- [Qix-/color](https://github.com/Qix-/color)
- [Qix-/color-string](https://github.com/Qix-/color-string)
- [coolors](https://coolors.co)
