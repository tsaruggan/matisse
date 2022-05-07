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
console.log(colour.hue);
colour.hue = 69;
colour.hue = Colour.hueMax + 1; // throws an error!
```

### Measurements & Manipulations
matisse contains several static methods for colour measurements, calculations, and operations.
```javascript
const x = new Colour("#59396E");
const y = new Colour("#A5B828");

const x_inverse = Scientist.negate(x); // #A6C691
const y_temp = Scientist.temperature(y); // 2812.14
const contrast = Scientist.contrast(x, y); // 4.24
```
