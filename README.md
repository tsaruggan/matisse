# matisse
**matisse** is a JavaScript library for performing colour manipulations with support for CSS color strings. Mutable colour entities allow for implicit conversion between RGB, HSV, HSL, CMYK, and HWB colour spaces. Mixing, toning, tinting, shading, and blending operations are also supported including a variety of different blend modes. matisse contains functionality for performing colour measurements as well as functionality for validating and correcting colours to comply with the WCAG standards for contrast. In addition, this library allows for palette generation for different colour harmonies according to colour theory principles.

This project was originally developed as a team project for McMaster University's SFWRENG 3XA3: Software Project Management course in collaboration with [Isra Zahid](https://github.com/israzahid) and [Samia Anwar](https://github.com/SamiaAnwar).  


## Installation
```
$ npm install matisse
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
const baseColour = Colour.HSV(277, 1.00, 0.50); // #4f0080

matisse.tone(baseColour, 0.50); // #684080
matisse.tint(baseColour, 0.50); // #A780C0
matisse.shade(baseColour, 0.50); // #280040
```

