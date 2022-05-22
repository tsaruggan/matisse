import colorString from 'color-string';
import { mean, std, sqrt } from 'mathjs';

/**
 * An abstract data type representating mutable colour entities for RGB, HSV, HSL, CMYK, and HWB colour models.
 * @class Colour
 */
export default class Colour {
    attributes = {
        red: 0,
        green: 0,
        blue: 0,
        hue: 0,
        saturationv: 0,
        value: 0,
        cyan: 0,
        magenta: 0,
        yellow: 0,
        saturationl: 0,
        light: 0,
        white: 0,
        black: 0,
        alpha: 0
    }

    /**
     * @constant {number}
     * @default 255
     */
    static get redMax() { return 255; }

    /**
     * @constant {number}
     * @default 0
     */
    static get redMin() { return 0; }

    /**
     * @constant {number}
     * @default 255
     */
    static get greenMax() { return 255; }

    /**
     * @constant {number}
     * @default 0
     */
    static get greenMin() { return 0; }

    /**
     * @constant {number}
     * @default 255
     */
    static get blueMax() { return 255; }

    /**
     * @constant {number}
     * @default 0
     */
    static get blueMin() { return 0; }

    /**
     * @constant {number}
     * @default 360
     */
    static get hueMax() { return 360; }

    /**
     * @constant {number}
     * @default 0
     */
    static get hueMin() { return 0; }

    /**
     * @constant {number}
     * @default 1.00
     */
    static get saturationvMax() { return 1.00; }

    /**
     * @constant {number}
     * @default 0.00
     */
    static get saturationvMin() { return 0.00; }

    /**
     * @constant {number}
     * @default 1.00
     */
    static get valueMax() { return 1.00; }

    /**
     * @constant {number}
     * @default 0.00
     */
    static get valueMin() { return 0.00; }

    /**
     * @constant {number}
     * @default 1.00
     */
    static get cyanMax() { return 1.00; }

    /**
     * @constant {number}
     * @default 0.00
     */
    static get cyanMin() { return 0.00; }

    /**
     * @constant {number}
     * @default 1.00
     */
    static get magentaMax() { return 1.00; }

    /**
     * @constant {number}
     * @default 0.00
     */
    static get magentaMin() { return 0.00; }

    /**
     * @constant {number}
     * @default 1.00
     */
    static get yellowMax() { return 1.00; }

    /**
     * @constant {number}
     * @default 0.00
     */
    static get yellowMin() { return 0.00; }

    /**
     * @constant {number}
     * @default 1.00
     */
    static get saturationlMax() { return 1.00; }

    /**
     * @constant {number}
     * @default 0.00
     */
    static get saturationlMin() { return 0.00; }

    /**
     * @constant {number}
     * @default 1.00
     */
    static get lightMax() { return 1.00; }

    /**
     * @constant {number}
     * @default 0.00
     */
    static get lightMin() { return 0.00; }

    /**
     * @constant {number}
     * @default 1.00
     */
    static get whiteMax() { return 1.00; }

    /**
     * @constant {number}
     * @default 0.00
     */
    static get whiteMin() { return 0.00; }

    /**
     * @constant {number}
     * @default 1.00
     */
    static get blackMax() { return 1.00; }

    /**
     * @constant {number}
     * @default 0.00
     */
    static get blackMin() { return 0.00; }

    /**
     * @constant {number}
     * @default 1.00
     */
    static get alphaMax() { return 1.00; }

    /**
     * @constant {number}
     * @default 0.00
     */
    static get alphaMin() { return 0.00; }

    /**
     * Initialize a new Colour instance given a valid CSS colour string or HEX code
     * @param {string} colourString - A valid CSS colour string or HEX code to parse.
     * @returns {Colour} A new Colour instance generated from the CSS colour string. 
     * @see [color-string](https://github.com/Qix-/color-string) handles all parsing of CSS colour strings.
     */
    constructor(colourString) {
        if (colourString != undefined) {
            try {
                const { model, value } = colorString.get(colourString);
                switch (model) {
                    case "rgb":
                        return Colour.RGB(value[0], value[1], value[2], value[3]);
                    case "hsl":
                        return Colour.HSL(value[0], value[1] / 100, value[2] / 100, value[3]);
                    case "hwb":
                        return Colour.HWB(value[0], value[1] / 100, value[2] / 100, value[3]);
                }
            } catch (error) {
                throw new SyntaxError("The given colourString value was not recognized as a valid CSS colour string or HEX code.");
            }
        }
    }

    /**
    * Initialize a new Colour instance from RGB colour attributes
    * @param {number} red - The value of the R channel [0, 255]
    * @param {number} green - The value of the G channel [0, 255]
    * @param {number} blue - The value of the B channel [0, 255]
    * @param {number} [alpha=1.00] - The percentage of transparency or opacity channel [0, 1]
    * @returns {Colour} A new Colour instance generated from the RGB colour attributes.
    */
    static RGB(red, green, blue, alpha = Colour.alphaMax) {
        if (red > Colour.redMax || green > Colour.greenMax || blue > Colour.blueMax || alpha > Colour.alphaMax) {
            throw new RangeError("RGB attributes must be in the following acceptable ranges...red:[0, 255], green:[0, 255], blue:[0, 255], alpha:[0, 1].");
        } else if (red < Colour.redMin || green < Colour.greenMin || blue < Colour.blueMin || alpha < Colour.alphaMin) {
            throw new RangeError("RGB attributes must be in the following acceptable ranges...red:[0, 255], green:[0, 255], blue:[0, 255], alpha:[0, 1].");
        }
        let colour = new Colour();
        colour.attributes.red = roundInt(red);
        colour.attributes.green = roundInt(green);
        colour.attributes.blue = roundInt(blue);
        colour.attributes.alpha = roundFloat(alpha);
        colour.#updateHSV();
        colour.#updateHSL();
        colour.#updateCMYK();
        colour.#updateHWB();
        return colour;
    }

    /**
     * Initialize a new Colour instance from HSV colour attributes
     * @param {number} hue - The value of the H channel [0, 360]
     * @param {number} saturationv - The percentage of the S channel [0, 1]
     * @param {number} value - The percentage of the V channel [0, 1]
     * @param {number} [alpha=1.00] - The percentage of transparency or opacity channel [0, 1] 
     * @returns {Colour} A new Colour instance generated from the HSV colour attributes.
     */
    static HSV(hue, saturationv, value, alpha = Colour.alphaMax) {
        if (hue > Colour.hueMax || saturationv > Colour.saturationvMax || value > Colour.valueMax || alpha > Colour.alphaMax) {
            throw new RangeError("HSV attributes must be in the following acceptable ranges...hue:[0, 360], saturationv:[0, 1], value:[0, 1], alpha:[0, 1].");
        } else if (hue < Colour.hueMin || saturationv < Colour.saturationvMin || value < Colour.valueMin || alpha < Colour.alphaMin) {
            throw new RangeError("HSV attributes must be in the following acceptable ranges...hue:[0, 360], saturationv:[0, 1], value:[0, 1], alpha:[0, 1].");
        }
        let colour = new Colour();
        colour.attributes.hue = roundInt(hue);
        colour.attributes.saturationv = roundFloat(saturationv);
        colour.attributes.value = roundFloat(value);
        colour.attributes.alpha = roundFloat(alpha);
        colour.#updateRGB_HSV();
        colour.#updateCMYK();
        colour.#updateHSL();
        colour.#updateHWB();
        return colour;
    }

    /**
     * Initialize a new Colour instance from CMYK colour attributes
     * @param {number} cyan - The value of the C channel [0, 1]
     * @param {number} magenta - The value of the M channel [0, 1]
     * @param {number} yellow - The value of the Y channel [0, 1]
     * @param {number} black - The value of the K channel [0, 1]
     * @param {number} [alpha=1.00] - The percentage of transparency or opacity channel [0, 1]  
     * @returns {Colour} A new Colour instance generated from the CMYK colour attributes.
     */
    static CMYK(cyan, magenta, yellow, black, alpha = Colour.alphaMax) {
        if (cyan > Colour.cyanMax || magenta > Colour.magentaMax || yellow > Colour.yellowMax || black > Colour.blackMax || alpha > Colour.alphaMax) {
            throw new RangeError("CMYK attributes must be in the following acceptable range...cyan:[0, 1], magenta:[0, 1], yellow:[0, 1], black:[0, 1], alpha:[0, 1].");
        }
        else if (cyan < Colour.cyanMin || magenta < Colour.magentaMin || yellow < Colour.yellowMin || black < Colour.blackMin || alpha < Colour.alphaMin) {
            throw new RangeError("CMYK attributes must be in the following acceptable range...cyan:[0, 1], magenta:[0, 1], yellow:[0, 1], black:[0, 1], alpha:[0, 1].");
        }
        let colour = new Colour();
        colour.attributes.cyan = roundFloat(cyan);
        colour.attributes.magenta = roundFloat(magenta);
        colour.attributes.yellow = roundFloat(yellow);
        colour.attributes.black = roundFloat(black);
        colour.attributes.alpha = roundFloat(alpha);
        colour.#updateRGB_CMYK();
        colour.#updateHSV();
        colour.#updateHSL();
        colour.#updateHWB();
        return colour;
    }

    /**
     * Initialize a new Colour instance from HSL colour attributes
     * @param {number} hue - The value of the H channel [0, 360]
     * @param {number} saturationl - The value of the S channel [0, 1]
     * @param {number} light - The value of the L channel [0, 1]
     * @param {number} [alpha=1.00] - The percentage of transparency or opacity channel [0, 1]  
     * @returns {Colour} A new Colour instance generated from the HSL colour attributes.
     */
    static HSL(hue, saturationl, light, alpha = Colour.alphaMax) {
        if (hue > Colour.hueMax || saturationl > Colour.saturationlMax || light > Colour.lightMax || alpha > Colour.alphaMax) {
            throw new RangeError("HSL attributes must be in the following acceptable ranges...hue:[0, 360], saturationl:[0, 1], light:[0, 1], alpha:[0, 1].");
        }
        else if (hue < Colour.hueMin || saturationl < Colour.saturationlMin || light < Colour.lightMin || alpha < Colour.alphaMin) {
            throw new RangeError("HSL attributes must be in the following acceptable ranges...hue:[0, 360], saturationl:[0, 1], light:[0, 1], alpha:[0, 1].");
        }
        let colour = new Colour();
        colour.attributes.hue = roundInt(hue);
        colour.attributes.saturationl = roundFloat(saturationl);
        colour.attributes.light = roundFloat(light);
        colour.attributes.alpha = roundFloat(alpha);
        colour.#updateRGB_HSL();
        colour.#updateCMYK();
        colour.#updateHSV();
        colour.#updateHWB();
        return colour;
    }

    /**
     * 
     * @param {number} hue - The value of the H channel [0, 360]
     * @param {number} white - The value of the W channel [0, 1]
     * @param {number} black - The value of the B channel [0, 360]
     * @param {number} [alpha=1.00] - The percentage of transparency or opacity channel [0, 1]  
     * @returns {Colour} A new Colour instance generated from the HWB colour attributes.
     */
    static HWB(hue, white, black, alpha = Colour.alphaMax) {
        if (hue > Colour.hueMax || white > Colour.whiteMax || black > Colour.blackMax || alpha > Colour.alphaMax) {
            throw new RangeError("HWB attributes must be in the following acceptable ranges...hue:[0, 360], white:[0, 1], black:[0, 1], alpha:[0, 1].");
        }
        else if (hue < Colour.hueMin || white < Colour.whiteMin || black < Colour.blackMin || alpha < Colour.alphaMin) {
            throw new RangeError("HWB attributes must be in the following acceptable ranges...hue:[0, 360], white:[0, 1], black:[0, 1], alpha:[0, 1].");
        }
        let colour = new Colour();
        colour.attributes.hue = roundInt(hue);
        colour.attributes.white = roundFloat(white);
        colour.attributes.black = roundFloat(black);
        colour.attributes.alpha = roundFloat(alpha);
        colour.#updateHSV_HWB();
        colour.#updateRGB_HSV();
        colour.#updateCMYK();
        colour.#updateHSL();
        return colour;
    }

    /**
     * @type {number}
     */
    get red() { return this.attributes.red; }

    set red(newRed) {
        if (newRed < Colour.redMin || newRed > Colour.redMax) {
            throw new RangeError("The red attribute must be in the following acceptable range: [0, 255].");
        }
        this.attributes.red = roundInt(newRed);
        this.#updateHSV();
        this.#updateHSL();
        this.#updateCMYK();
        this.#updateHWB();

    }

    /**
     * @type {number}
     */
    get green() { return this.attributes.green; }

    set green(newGreen) {
        if (newGreen < Colour.greenMin || newGreen > Colour.greenMax) {
            throw new RangeError("The green attribute must be in the following acceptable range: [0, 255].");
        }
        this.attributes.green = roundInt(newGreen);
        this.#updateHSV();
        this.#updateHSL();
        this.#updateCMYK();
        this.#updateHWB();
    }

    /**
     * @type {number}
     */
    get blue() { return this.attributes.blue; }

    set blue(newBlue) {
        if (newBlue < Colour.blueMin || newBlue > Colour.blueMax) {
            throw new RangeError("The blue attribute must be in the following acceptable range: [0, 255].");
        }
        this.attributes.blue = roundInt(newBlue);
        this.#updateHSV();
        this.#updateHSL();
        this.#updateCMYK();
        this.#updateHWB();
    }

    /**
     * @type {number}
     */
    get hue() { return this.attributes.hue; }

    set hue(newHue) {
        if (newHue < Colour.hueMin || newHue >= Colour.hueMax) {
            throw new RangeError("The hue attribute must be in the following acceptable range: [0, 360].");
        }
        this.attributes.hue = roundInt(newHue);
        this.#updateRGB_HSV();
        this.#updateCMYK();
        this.#updateHSL();
        this.#updateHWB();
    }

    /**
     * @type {number}
     */
    get saturationv() { return this.attributes.saturationv; }

    set saturationv(newSaturationv) {
        if (newSaturationv < Colour.saturationvMin || newSaturationv > Colour.saturationvMax) {
            throw new RangeError("The saturationv attribute must be in the following acceptable range: [0, 1].");
        }
        this.attributes.saturationv = roundFloat(newSaturationv);
        this.#updateRGB_HSV();
        this.#updateCMYK();
        this.#updateHSL();
        this.#updateHWB();
    }

    /**
     * @type {number}
     */
    get value() { return this.attributes.value; }

    set value(newValue) {
        if (newValue < Colour.valueMin || newValue > Colour.valueMax) {
            throw new RangeError("The value attribute must be in the following acceptable range: [0, 1].");
        }
        this.attributes.value = roundFloat(newValue);
        this.#updateRGB_HSV();
        this.#updateCMYK();
        this.#updateHSL();
        this.#updateHWB();
    }

    /**
     * @type {number}
     */
    get cyan() { return this.attributes.cyan; }

    set cyan(newCyan) {
        if (newCyan < Colour.cyanMin || newCyan > Colour.cyanMax) {
            throw new RangeError("The cyan attribute must be in the following acceptable range: [0, 1].");
        }
        this.attributes.cyan = roundFloat(newCyan);
        this.#updateRGB_CMYK();
        this.#updateHSL();
        this.#updateHSV();
        this.#updateHWB();
    }

    /**
     * @type {number}
     */
    get magenta() { return this.attributes.magenta; }

    set magenta(newMagenta) {
        if (newMagenta < Colour.magentaMin || newMagenta > Colour.magentaMax) {
            throw new RangeError("The magenta attribute must be in the following acceptable range: [0, 1].");
        }
        this.attributes.magenta = roundFloat(newMagenta);
        this.#updateRGB_CMYK();
        this.#updateHSL();
        this.#updateHSV();
        this.#updateHWB();
    }

    /**
     * @type {number}
     */
    get yellow() { return this.attributes.yellow; }

    set yellow(newYellow) {
        if (newYellow < Colour.yellowMin || newYellow > Colour.yellowMax) {
            throw new RangeError("The yellow attribute must be in the following acceptable range: [0, 1].");
        }
        this.attributes.yellow = roundFloat(newYellow);
        this.#updateRGB_CMYK();
        this.#updateHSL();
        this.#updateHSV();
        this.#updateHWB();
    }

    /**
     * @type {number}
     */
    get saturationl() { return this.attributes.saturationl; }

    set saturationl(newSaturationl) {
        if (newSaturationl < Colour.saturationlMin || newSaturationl > Colour.saturationlMax) {
            throw new RangeError("The saturationl attribute must be in the following acceptable range: [0, 1].");
        }
        this.attributes.saturationl = roundFloat(newSaturationl);
        this.#updateRGB_HSL();
        this.#updateHSV();
        this.#updateCMYK();
        this.#updateHWB();
    }

    /**
     * @type {number}
     */
    get light() { return this.attributes.light; }

    set light(newLight) {
        if (newLight < Colour.lightMin || newLight > Colour.lightMax) {
            throw new RangeError("The light attribute must be in the following acceptable range: [0, 1].");
        }
        this.attributes.light = roundFloat(newLight);
        this.#updateRGB_HSL();
        this.#updateHSV();
        this.#updateCMYK();
        this.#updateHWB();
    }

    /**
     * @type {number}
     */
    get white() { return this.attributes.white; }

    set white(newWhite) {
        if (newWhite < Colour.whiteMin || newWhite > Colour.whiteMax) {
            throw new RangeError("The white attribute must be in the following acceptable range: [0, 1].");
        }
        this.attributes.white = roundFloat(newWhite);
        this.#updateHSV_HWB();
        this.#updateRGB_HSV();
        this.#updateCMYK();
        this.#updateHSL();
    }

    /**
     * @type {number}
     */
    get black() { return this.attributes.black; }

    set black(newBlack) {
        if (newBlack < Colour.blackMin || newBlack > Colour.blackMax) {
            throw new RangeError("The black attribute must be in the following acceptable range: [0, 1].");
        }
        this.attributes.black = roundFloat(newBlack);
        this.#updateHSV_HWB();
        this.#updateRGB_HSV();
        this.#updateCMYK();
        this.#updateHSL();
    }

    /**
     * @type {number}
     */
    get alpha() { return this.attributes.alpha; }

    set alpha(newAlpha) {
        if (newAlpha < Colour.alphaMin || newAlpha > Colour.alphaMax) {
            throw new RangeError("The alpha attribute must be in the following acceptable range: [0, 1].");
        }
        this.attributes.alpha = roundFloat(newAlpha);
    }

    /**
     * Check if another Colour instance is equivalent
     * @param {Colour} colour - Another Colour instance to compare equality with.
     * @returns True if both colours have the same red, green, blue, and alpha values.
     */
    equals(colour) {
        return (
            this.red == colour.red && 
            this.green == colour.green &&
            this.blue == colour.blue &&
            this.alpha == colour.alpha
        );
    }

    /**
     * Returns a copy of the Colour instance.
     * @returns {Colour} An identical Colour object
     */
    copy() {
        return Colour.RGB(this.red, this.green, this.blue, this.alpha);
    }

    /**
     * Return a valid hexadecimal colour code that represents the colour.
     * @returns {Colour} A HEX code representing the colour.
     */
    toHEX() {
        return colorString.to.hex(this.red, this.green, this.blue, this.alpha);
    }

    #updateHSV() {
        //https://www.rapidtables.com/convert/color/rgb-to-hsv.html
        let cMax = Math.max(this.attributes.red, this.attributes.green, this.attributes.blue) / 255;
        let cMin = Math.min(this.attributes.red, this.attributes.green, this.attributes.blue) / 255;
        let delta = cMax - cMin;
        //Updating hue 
        if (delta == 0) {
            this.attributes.hue = 0;
        } else if (cMax == this.attributes.red / 255) {
            this.attributes.hue = roundInt(60 * (((this.attributes.green / 255 - this.attributes.blue / 255) / delta) % 6));
        } else if (cMax == this.attributes.green / 255) {
            this.attributes.hue = roundInt(60 * (((this.attributes.blue / 255 - this.attributes.red / 255) / delta) + 2));
        } else if (cMax == this.attributes.blue / 255) {
            this.attributes.hue = roundInt(60 * (((this.attributes.red / 255 - this.attributes.green / 255) / delta) + 4));
        }

        // hue loop bug fix
        if (this.attributes.hue < 0) { this.attributes.hue += 360; }

        //Updating saturation 
        if (cMax == 0) {
            this.attributes.saturationv = 0;
        } else {
            this.attributes.saturationv = roundFloat(delta / cMax);
        }
        //Updating Value 
        this.attributes.value = roundFloat(cMax);
    }

    #updateRGB_HSV() {
        //https://www.rapidtables.com/convert/color/hsv-to-rgb.html
        let c = this.attributes.value * this.attributes.saturationv;
        let x = c * (1 - Math.abs((this.attributes.hue / 60) % 2 - 1));
        let m = this.attributes.value - c;
        if (this.attributes.hue >= 0 && this.attributes.hue < 60) {
            this.attributes.red = roundInt((c + m) * 255);
            this.attributes.green = roundInt((x + m) * 255);
            this.attributes.blue = roundInt((0 + m) * 255);
        } else if (this.attributes.hue >= 60 && this.attributes.hue < 120) {
            this.attributes.red = roundInt((x + m) * 255);
            this.attributes.green = roundInt((c + m) * 255);
            this.attributes.blue = roundInt((0 + m) * 255);
        } else if (this.attributes.hue >= 120 && this.attributes.hue < 180) {
            this.attributes.red = roundInt((0 + m) * 255);
            this.attributes.green = roundInt((c + m) * 255);
            this.attributes.blue = roundInt((x + m) * 255);
        } else if (this.attributes.hue >= 180 && this.attributes.hue < 240) {
            this.attributes.red = roundInt((0 + m) * 255);
            this.attributes.green = roundInt((x + m) * 255);
            this.attributes.blue = roundInt((c + m) * 255);
        } else if (this.attributes.hue >= 240 && this.attributes.hue < 300) {
            this.attributes.red = roundInt((x + m) * 255);
            this.attributes.green = roundInt((0 + m) * 255);
            this.attributes.blue = roundInt((c + m) * 255);
        } else if (this.attributes.hue >= 300 && this.attributes.hue < 360) {
            this.attributes.red = roundInt((c + m) * 255);
            this.attributes.green = roundInt((0 + m) * 255);
            this.attributes.blue = roundInt((x + m) * 255);
        }
    }
    #updateRGB_CMYK() {
        this.attributes.red = roundInt(255 * (1 - this.attributes.cyan) * (1 - this.attributes.black));
        this.attributes.green = roundInt(255 * (1 - this.attributes.magenta) * (1 - this.attributes.black));
        this.attributes.blue = roundInt(255 * (1 - this.attributes.yellow) * (1 - this.attributes.black));

    }
    #updateRGB_HSL() {
        //https://www.rapidtables.com/convert/color/hsl-to-rgb.html
        let c = (1 - Math.abs(2 * this.attributes.light - 1)) * this.attributes.saturationl;
        let x = c * (1 - Math.abs((this.attributes.hue / 60) % 2 - 1));
        let m = this.attributes.light - c / 2;
        if (this.attributes.hue >= 0 && this.attributes.hue < 60) {
            this.attributes.red = roundInt((c + m) * 255);
            this.attributes.green = roundInt((x + m) * 255);
            this.attributes.blue = roundInt((0 + m) * 255);
        } else if (this.attributes.hue >= 60 && this.attributes.hue < 120) {
            this.attributes.red = roundInt((x + m) * 255);
            this.attributes.green = roundInt((c + m) * 255);
            this.attributes.blue = roundInt((0 + m) * 255);
        } else if (this.attributes.hue >= 120 && this.attributes.hue < 180) {
            this.attributes.red = roundInt((0 + m) * 255);
            this.attributes.green = roundInt((c + m) * 255);
            this.attributes.blue = roundInt((x + m) * 255);
        } else if (this.attributes.hue >= 180 && this.attributes.hue < 240) {
            this.attributes.red = roundInt((0 + m) * 255);
            this.attributes.green = roundInt((x + m) * 255);
            this.attributes.blue = roundInt((c + m) * 255);
        } else if (this.attributes.hue >= 240 && this.attributes.hue < 300) {
            this.attributes.red = roundInt((x + m) * 255);
            this.attributes.green = roundInt((0 + m) * 255);
            this.attributes.blue = roundInt((c + m) * 255);
        } else if (this.attributes.hue >= 300 && this.attributes.hue < 360) {
            this.attributes.red = roundInt((c + m) * 255);
            this.attributes.green = roundInt((0 + m) * 255);
            this.attributes.blue = roundInt((x + m) * 255);
        }
    }
    #updateHSV_HWB() {
        this.attributes.saturationv = roundFloat(1 - this.attributes.white / (1 - this.attributes.black));
        this.attributes.value = roundFloat(1 - this.attributes.black);
    }

    #updateHWB() {
        this.attributes.white = roundFloat(Math.min(this.attributes.red, this.attributes.green, this.attributes.blue) / 255);
        this.attributes.black = roundFloat(1 - Math.max(this.attributes.red, this.attributes.green, this.attributes.blue) / 255);
    }
    #updateCMYK() {
        let black = 1 - Math.max(this.attributes.red, this.attributes.green, this.attributes.blue) / 255;
        this.attributes.black = roundFloat(black);
        this.attributes.cyan = roundFloat((1 - this.attributes.red / 255 - black) / (1 - black));
        this.attributes.magenta = roundFloat((1 - this.attributes.green / 255 - black) / (1 - black));
        this.attributes.yellow = roundFloat((1 - this.attributes.blue / 255 - black) / (1 - black));
    }
    #updateHSL() {
        let r = this.attributes.red / 255;
        let g = this.attributes.green / 255;
        let b = this.attributes.blue / 255;
        let cMax = Math.max(r, g, b);
        let cMin = Math.min(r, g, b);
        let delta = cMax - cMin;
        this.attributes.light = roundFloat((cMax + cMin) / 2);
        if (delta == 0) {
            this.attributes.saturationl = 0.00;
        }
        else {
            this.attributes.saturationl = roundFloat(delta / (1 - Math.abs(cMax + cMin - 1)));
        }
    }
}

function roundInt(num) {
    return Math.round(num);
}

function roundFloat(num) {
    return Number(num.toFixed(2).replace('-0', '0'));
}

/**
 * Determine the inverse colour or the colour on the opposite side of the colour wheel.
 * @param {Colour} colour - The colour to invert
 * @returns {Colour} The colour resulting from the negation
 */
export function negate(colour) {
    let red = 255 - colour.red;
    let green = 255 - colour.green;
    let blue = 255 - colour.blue;
    let alpha = colour.alpha;
    return Colour.RGB(red, green, blue, alpha);
}

/**
 * Rotate a given colour a certain number of degrees in 3-dimensional space.
 * @param {Colour} colour - The colour to rotate
 * @param {number} degrees - The number of degrees to rotate the colour
 * @returns {Colour} - The colour resulting from the rotation
 */
export function rotate(colour, degrees) {
    let hue = colour.hue;
    hue = (hue + degrees) % 360;
    hue = hue < 0 ? 360 + hue : hue;
    return Colour.HSL(hue, colour.saturationl, colour.light, colour.alpha);
}

/**
 * Determine the equivalent [grayscale colour of a given colour](https://www.tutorialspoint.com/dip/grayscale_to_rgb_conversion.htm).
 * @param {Colour} colour - The colour to grayscale
 * @returns {Colour} The resulting colour from the grayscale transformation
 */
export function grayscale(colour) {
    let weightedTotal = roundInt(0.3 * colour.red + 0.59 * colour.green + 0.11 * colour.blue);
    return Colour.RGB(weightedTotal, weightedTotal, weightedTotal, colour.alpha);
}

/**
 * Calculate the [WCAG contrast ratio](http://www.w3.org/TR/WCAG20/#contrast-ratiodef)
 * between two colours. (Note: The order of the colours does not matter!)
 * @param {Colour} colour1 - The first colour to be compared
 * @param {Colour} colour2 - The second colour to be compared
 * @returns {number} The WCAG contrast ratio of the two colours (values ranging between 1 and 21)
 */
export function contrast(colour1, colour2) {
    const lum1 = luminosity(colour1);
    const lum2 = luminosity(colour2);
    if (lum1 > lum2) {
        return roundInt(((lum1 + 0.05) / (lum2 + 0.05)) * 100) / 100;
    }
    return roundInt(((lum2 + 0.05) / (lum1 + 0.05)) * 100) / 100;
}

/**
 * Calculate the [colourfulness index](https://infoscience.epfl.ch/record/33994/files/HaslerS03.pdf) of a given colour as defined by Hasler and Süsstrunk (2003).
 * @param {Colour} colour - The colour to calculate colourfulness of.
 * @returns {number} The resulting colourfulness grading
 */
export function colourfulness(colour) {
    let rg = Math.abs(colour.red - colour.green);
    let yb = Math.abs(0.5 * (colour.red + colour.green) - colour.blue);

    // compute the mean and standard deviation of both `rg` and `yb`.
    let rg_mean = mean(rg);
    let rg_std = std(rg);
    let yb_mean = mean(yb);
    let yb_std = std(yb);

    // combine the mean and standard deviations.
    let std_root = sqrt((rg_std ** 2) + (yb_std ** 2));
    let mean_root = sqrt((rg_mean ** 2) + (yb_mean ** 2));
    return std_root + (0.3 * mean_root);
}

/**
 * Calculate the [temperature](https://ams.com/documents/20143/80162/TCS34xx_AN000517_1-00.pdf) of a given colour.
 * @param {Colour} colour - The colour to calculate temperature of.
 * @returns {number} The resulting temperature grading in degrees Kelvin (K)
 */
export function temperature(colour) {
    // get XYZ values (CIE tristimulus values)
    let X = -0.14282 * colour.red + 1.54924 * colour.green + -0.95641 * colour.blue;
    let Y = -0.32466 * colour.red + 1.57837 * colour.green + -0.73191 * colour.blue;
    let Z = -0.68202 * colour.red + 0.77073 * colour.green + 0.56332 * colour.blue;

    // normalize values
    let x = X / (X + Y + Z);
    let y = Y / (X + Y + Z);

    // calculate correlated colour temperature
    let n = (x - 0.3320) / (0.1858 - y);
    let CCT = 449 * (n ** 3) + 3525 * (n ** 2) + 6823.3 * n + 5520.33;
    return CCT;
}

/**
 * Calculate the [relative luminance](https://www.w3.org/WAI/GL/wiki/Relative_luminance) of a given colour as defined by the WCAG.
 * @param {Colour} colour - The colour to calculate luminence of.
 * @returns {number} The resulting luminence grading
 */
export function luminosity(colour) {
    const lum = [];
    const rgb = [colour.red, colour.green, colour.blue];

    for (let i = 0; i < rgb.length; i++) {
        const chan = rgb[i] / 255;
        lum[i] = (chan <= 0.03928) ? (chan / 12.92) : ((chan + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
}

/**
 * Evenly interpolate two colours and produce the resulting midpoint colour.
 * @param {Colour} colour1 - The first colour to include in the mix
 * @param {Colour} colour2 - The second colour to include in the mix
 * @param {number} percent - The percentage of the blend colour to mix
 * @returns {Colour} The colour resulting from the mix
 */
export function mix(colour1, colour2, percent) {
    const weight = 2 * percent - 1;
    const alpha = colour2.alpha - colour1.alpha;

    const weight1 = (((weight * alpha === -1) ? weight : (weight + alpha) / (1 + weight * alpha)) + 1) / 2;
    const weight2 = 1 - weight1;

    return Colour.RGB(
        weight1 * colour2.red + weight2 * colour1.red,
        weight1 * colour2.green + weight2 * colour1.green,
        weight1 * colour2.blue + weight2 * colour1.blue,
        colour2.alpha * percent + colour1.alpha * (1 - percent)
    );
}

/**
 * Interpolate a given colour with white to create a tint.
 * @param {Colour} colour - A colour to tint
 * @param {number} percent - The percentage of white to mix; setting 100% results in #FFFFFF
 * @returns {Colour} The colour resulting from tinting the original colour
 */
export function tint(colour, percent) {
    return mix(
        colour,
        new Colour("#FFFFFF"),
        percent
    );
}

/**
 * Interpolate a given colour with black to create a shade.
 * @param {Colour} colour - A colour to shade
 * @param {number} percent - The percentage of black to mix; setting 100% results in #000000
 * @returns {Colour} The colour resulting from shading the original colour
 */
export function shade(colour, percent) {
    return mix(
        colour,
        new Colour("#000000"),
        percent
    );
}

/**
 * Interpolate a given colour with gray to create a tone.
 * @param {Colour} colour - A colour to tone
 * @param {number} percent - The percentage of gray to mix; setting 100% results in #808080
 * @returns {Colour} The colour resulting from toning the original colour
 */
export function tone(colour, percent) {
    return mix(
        colour,
        new Colour("#808080"),
        percent
    );
}

/**
 * This is the blend mode which specifies no blending. The blending formula simply selects the blend color.
 * @param {Colour} baseColour - The base colour being blended
 * @param {Colour} blendColour - The colour being applied with the designated blend mode
 * @returns {Colour} The colour resulting from the blend
 */
export function normal(baseColour, blendColour) {
    return _blend(
        baseColour,
        blendColour,
        _separableBlend,
        _normal
    );
}

/**
 * Looks at the colour information in each channel and multiplies the base colour by the blend colour. The result colour is always a darker colour. Multiplying any colour with black produces black. Multiplying any colour with white leaves the colour unchanged.
 * @param {Colour} baseColour - The base colour being blended
 * @param {Colour} blendColour - The colour being applied with the designated blend mode
 * @returns {Colour} The colour resulting from the blend
 */
export function multiply(baseColour, blendColour) {
    return _blend(
        baseColour,
        blendColour,
        _separableBlend,
        _multiply
    );
}

/**
 * Looks at each channel’s colour information and multiplies the inverse of the blend and base colours. The result colour is always a lighter colour. Screening with black leaves the colour unchanged. Screening with white produces white. The effect is similar to projecting multiple photographic slides on top of each other.
 * @param {Colour} baseColour - The base colour being blended
 * @param {Colour} blendColour - The colour being applied with the designated blend mode
 * @returns {Colour} The colour resulting from the blend
 */
export function screen(baseColour, blendColour) {
    return _blend(
        baseColour,
        blendColour,
        _separableBlend,
        _screen
    );
}

/**
 * Multiplies or screens the colors, depending on the base color. The base color is not replaced, but mixed with the blend color to reflect the lightness or darkness of the original color.
 * @param {Colour} baseColour - The base colour being blended
 * @param {Colour} blendColour - The colour being applied with the designated blend mode
 * @returns {Colour} The colour resulting from the blend
 */
export function overlay(baseColour, blendColour) {
    return _blend(
        baseColour,
        blendColour,
        _separableBlend,
        _overlay
    );
}

/**
 * Looks at the colour information in each channel and selects the base or blend colour—whichever is darker—as the result colour.
 * @param {Colour} baseColour - The base colour being blended
 * @param {Colour} blendColour - The colour being applied with the designated blend mode
 * @returns {Colour} The colour resulting from the blend
 */
export function darken(baseColour, blendColour) {
    return _blend(
        baseColour,
        blendColour,
        _separableBlend,
        _darken
    );
}

/**
 * Looks at the colour information in each channel and selects the base or blend colour—whichever is lighter—as the result colour.
 * @param {Colour} baseColour - The base colour being blended
 * @param {Colour} blendColour - The colour being applied with the designated blend mode
 * @returns {Colour} The colour resulting from the blend
 */
export function lighten(baseColour, blendColour) {
    return _blend(
        baseColour,
        blendColour,
        _separableBlend,
        _lighten
    );
}

/**
 * Looks at the color information in each channel and brightens the base color to reflect the blend color by decreasing contrast between the two. Blending with black produces no change.
 * @param {Colour} baseColour - The base colour being blended
 * @param {Colour} blendColour - The colour being applied with the designated blend mode
 * @returns {Colour} The colour resulting from the blend
 */
export function colourDodge(baseColour, blendColour) {
    return _blend(
        baseColour,
        blendColour,
        _separableBlend,
        _colourDodge
    );
}

/**
 * Looks at the colour information in each channel and darkens the base colour to reflect the blend colour by increasing the contrast between the two. Blending with white produces no change.
 * @param {Colour} baseColour - The base colour being blended
 * @param {Colour} blendColour - The colour being applied with the designated blend mode
 * @returns {Colour} The colour resulting from the blend
 */
export function colourBurn(baseColour, blendColour) {
    return _blend(
        baseColour,
        blendColour,
        _separableBlend,
        _colourBurn
    );
}

/**
 * Multiplies or screens the colours, depending on the blend colour. The effect is similar to shining a harsh spotlight on the colour. If the blend colour (light source) is lighter than 50% gray, the colour is lightened, as if it were screened. This is useful for adding highlights to an colour. If the blend colour is darker than 50% gray, the colour is darkened, as if it were multiplied. This is useful for adding shadows to an colour. Painting with pure black or white results in pure black or white.
 * @param {Colour} baseColour - The base colour being blended
 * @param {Colour} blendColour - The colour being applied with the designated blend mode
 * @returns {Colour} The colour resulting from the blend
 */
export function hardLight(baseColour, blendColour) {
    return _blend(
        baseColour,
        blendColour,
        _separableBlend,
        _hardLight
    );
}

/**
 * Darkens or lightens the colours, depending on the blend colour. The effect is similar to shining a diffused spotlight on the colour. If the blend colour (light source) is lighter than 50% gray, the colour is lightened as if it were dodged. If the blend colour is darker than 50% gray, the colour is darkened as if it were burned in. Painting with pure black or white produces a distinctly darker or lighter area, but does not result in pure black or white.
 * @param {Colour} baseColour - The base colour being blended
 * @param {Colour} blendColour - The colour being applied with the designated blend mode
 * @returns {Colour} The colour resulting from the blend
 */
export function softLight(baseColour, blendColour) {
    return _blend(
        baseColour,
        blendColour,
        _separableBlend,
        _softLight
    );
}

/**
 * Looks at the colour information in each channel and subtracts either the blend colour from the base colour or the base colour from the blend colour, depending on which has the greater brightness value. Blending with white inverts the base colour values; blending with black produces no change.
 * @param {Colour} baseColour - The base colour being blended
 * @param {Colour} blendColour - The colour being applied with the designated blend mode
 * @returns {Colour} The colour resulting from the blend
 */
export function difference(baseColour, blendColour) {
    return _blend(
        baseColour,
        blendColour,
        _separableBlend,
        _difference
    );
}

/**
 * Creates an effect similar to but lower in contrast than the Difference mode. Blending with white inverts the base colour values. Blending with black produces no change.
 * @param {Colour} baseColour - The base colour being blended
 * @param {Colour} blendColour - The colour being applied with the designated blend mode
 * @returns {Colour} The colour resulting from the blend
 */
export function exclusion(baseColour, blendColour) {
    return _blend(
        baseColour,
        blendColour,
        _separableBlend,
        _exclusion
    );
}

/**
 * Apply a separable or non-separable blend mode to a given base colour and blend colour.
 * @param {Colour} baseColour 
 * @param {Colour} blendColour 
 * @param {function(Colour, Colour, function(number, number):number):Colour} abstractModeCallback 
 * @param {function(number, number):number} concreteModeCallback 
 * @returns {Colour} The colour resulting from the blend
 * @ignore
 */
function _blend(baseColour, blendColour, abstractModeCallback, concreteModeCallback) {
    let compositeColour = abstractModeCallback(
        baseColour,
        blendColour,
        concreteModeCallback
    );

    let compositeAlpha = _constrain(
        blendColour.alpha + baseColour.alpha - blendColour.alpha * baseColour.alpha,
        Colour.alphaMin,
        Colour.alphaMax
    );

    let red = _constrain(
        _alphaComposition(
            baseColour.alpha,
            blendColour.alpha,
            compositeAlpha,
            baseColour.red,
            blendColour.red,
            compositeColour.red
        ),
        Colour.redMin,
        Colour.redMax
    );

    let green = _constrain(
        _alphaComposition(
            baseColour.alpha,
            blendColour.alpha,
            compositeAlpha,
            baseColour.green,
            blendColour.green,
            compositeColour.green
        ),
        Colour.greenMin,
        Colour.greenMax
    );

    let blue = _constrain(
        _alphaComposition(
            baseColour.alpha,
            blendColour.alpha,
            compositeAlpha,
            baseColour.blue,
            blendColour.blue,
            compositeColour.blue
        ),
        Colour.blueMin,
        Colour.blueMax
    );

    return Colour.RGB(red, green, blue, compositeAlpha);
}

/**
 * Apply a separable blend mode callback function to a given base colour and blend colour.
 * @param {Colour} baseColour 
 * @param {Colour} blendColour 
 * @param {function(number, number):number} callback 
 * @returns {Colour} The colour resulting from the separable blend
 * @ignore
 */
function _separableBlend(baseColour, blendColour, callback) {
    const red = callback(baseColour.red / 255, blendColour.red / 255) * 255;
    const green = callback(baseColour.green / 255, blendColour.green / 255) * 255;
    const blue = callback(baseColour.blue / 255, blendColour.blue / 255) * 255;
    return Colour.RGB(red, green, blue);
}

/**
 * Applies the appropriate alpha blending to a blend process using [alpha compositing](https://www.w3.org/TR/compositing-1/#blending).
 * @param {number} baseAlpha 
 * @param {number} blendAlpha 
 * @param {number} compositeAlpha 
 * @param {number} baseChannel 
 * @param {number} blendChannel 
 * @param {number} compositeChannel 
 * @returns {number}
 * @ignore
 */
function _alphaComposition(baseAlpha, blendAlpha, compositeAlpha, baseChannel, blendChannel, compositeChannel) {
    const resultChannel = roundInt((1 - baseAlpha) * blendChannel + baseAlpha * compositeChannel);
    return (1 - blendAlpha / compositeAlpha) * baseChannel + (blendAlpha / compositeAlpha) * resultChannel;
}

/**
 * Force a number to fit between a desired minimum or maximim value.
 * @param {number} num - The value to be constrained
 * @param {number} min - The minimum value it should be constrained to
 * @param {number} max - The maximum value it should be constrained to
 * @returns {number} Returns min if num is less than min. Returns max if num is greater than max. Otherwise, it returns back num.
 * @ignore
 */
function _constrain(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

function _normal(baseChannel, blendChannel) {
    return blendChannel;
}

function _multiply(baseChannel, blendChannel) {
    return baseChannel * blendChannel;
}

function _screen(baseChannel, blendChannel) {
    return baseChannel + blendChannel - baseChannel * blendChannel;
}

function _overlay(baseChannel, blendChannel) {
    if (baseChannel <= 0.5) {
        return _multiply(blendChannel, 2 * baseChannel);
    } else {
        return _screen(blendChannel, 2 * baseChannel - 1);
    }
}

function _darken(baseChannel, blendChannel) {
    return Math.min(baseChannel, blendChannel);
}

function _lighten(baseChannel, blendChannel) {
    return Math.max(baseChannel, blendChannel);
}

function _colourDodge(baseChannel, blendChannel) {
    if (baseChannel == 0) {
        return 0;
    }
    if (blendChannel == 1) {
        return 1;
    }
    return Math.min(1, baseChannel / (1 - blendChannel));
}

function _colourBurn(baseChannel, blendChannel) {
    if (baseChannel == 1) {
        return 1;
    } else if (blendChannel == 0) {
        return 0;
    } else {
        return 1 - Math.min(1, (1 - baseChannel) / blendChannel);
    }
}

function _hardLight(baseChannel, blendChannel) {
    if (blendChannel <= 0.5) {
        return _multiply(baseChannel, 2 * blendChannel);
    } else {
        return _screen(baseChannel, 2 * blendChannel - 1);
    }
}

function _softLight(baseChannel, blendChannel) {
    if (blendChannel <= 0.5) {
        return baseChannel - (1 - 2 * blendChannel) * baseChannel * (1 - baseChannel);
    } else {
        let D_baseChannel = 0;
        if (baseChannel <= 0.25) {
            D_baseChannel = ((16 * baseChannel - 12) * baseChannel + 4) * baseChannel;
        } else {
            D_baseChannel = Math.sqrt(baseChannel);
        }
        return baseChannel + (2 * blendChannel - 1) * (D_baseChannel - baseChannel);
    }
}

function _difference(baseChannel, blendChannel) {
    return Math.abs(baseChannel - blendChannel);
}

function _exclusion(baseChannel, blendChannel) {
    return baseChannel + blendChannel - 2 * baseChannel * blendChannel;
}

/**
 * Generate a colour palette containing all shades of the provided colour.
 * @param {Colour} colour - The colour to generate shades for.
 * @param {number} num - The number of steps or intervals to produce colours for across the range of possible shades.
 * @returns {Colour[]} The resulting colour palette
 */
export function shades(colour, num) {
    return _monochromatic(colour, num, shade);
}

/**
 * Generate a colour palette containing all tints of the provided colour.
 * @param {Colour} colour - The colour to generate tints for.
 * @param {number} num - The number of steps or intervals to produce colours for across the range of possible tints.
 * @returns {Colour[]} The resulting colour palette
 */
export function tints(colour, num) {
    return _monochromatic(colour, num, tint);
}

/**
 * Generate a colour palette containing all tones of the provided colour.
 * @param {Colour} colour - The colour to generate tones for.
 * @param {number} num - The number of steps or intervals to produce colours for across the range of possible tones.
 * @returns {Colour[]} The resulting colour palette
 */
export function tones(colour, num) {
    return _monochromatic(colour, num, tone);
}

/**
 * Generate a colour palette containing the analogous colours of the provided colour. Analogous colours are next to each other on the colour wheel.
 * @param {Colour} colour - The colour to generate a palette for
 * @returns {Colour[]} The resulting colour palette
 */
export function analogous(colour) {
    const degSeparation = 40;
    const leftAnalogous = rotate(colour, -degSeparation);
    const rightAnalogous = rotate(colour, degSeparation);
    return [leftAnalogous, colour, rightAnalogous];
}

/**
 * Generate a colour palette containing the complementary colours of the provided colour. Complementary colours are opposite on the colour wheel.
 * @param {Colour} colour - The colour to generate a palette for
 * @returns {Colour[]} The resulting colour palette
 */
export function complementary(colour) {
    const complement = rotate(colour, 180);
    return [colour, complement];
}

/**
 * Generate a colour palette containing the split complementary colours of the provided colour. Split complementary colours contain the two adjacent colours of the complement.
 * @param {Colour} colour - The colour to generate a palette for
 * @returns {Colour[]} The resulting colour palette
 */
export function splitComplementary(colour) {
    const complement = rotate(colour, 180);
    const degSeparation = 20;
    const leftAnalogous = rotate(complement, -degSeparation);
    const rightAnalogous = rotate(complement, degSeparation);
    return [colour, leftAnalogous, rightAnalogous];
}

/**
 * Generate a colour palette containing the triadic colours of the provided colour. Triadic colours a three equally spaced colours on the colour wheel.
 * @param {Colour} colour - The colour to generate a palette for
 * @returns {Colour[]} The resulting colour palette
 */
export function triadic(colour) {
    const secondColour = rotate(colour, 360 / 3);
    const thirdColour = rotate(secondColour, 360 / 3);
    return [colour, secondColour, thirdColour];
}

/**
 * Generate a colour palette containing the tetradic colours of the provided colour.
 * @param {Colour} colour - The colour to generate a palette for
 * @returns {Colour[]} The resulting colour palette
 */
export function tetradic(colour) {
    const degSeparation = 60;
    const secondColour = rotate(colour, degSeparation);
    const thirdColour = rotate(colour, 180);
    const fourthColour = rotate(secondColour, 180);
    return [colour, secondColour, thirdColour, fourthColour];
}

/**
 * Generate a colour palette containing the square colours of the provided colour.
 * @param {Colour} colour - The colour to generate a palette for
 * @returns {Colour[]} The resulting colour palette
 */
export function square(colour) {
    const secondColour = rotate(colour, 360 / 4);
    const thirdColour = rotate(secondColour, 360 / 4);
    const fourthColour = rotate(thirdColour, 360 / 4);
    return [colour, secondColour, thirdColour, fourthColour];
}

/**
 * Generate a palette containing random colours.
 * @param {number} num - The length of the palette
 * @returns {Colour[]} The resulting colour palette
 */
export function randoms(num) {
    let colours = [];
    for (let i = 0; i < num; i++) {
        let red = Math.floor(Math.random() * Colour.redMax);
        let green = Math.floor(Math.random() * Colour.blueMax);
        let blue = Math.floor(Math.random() * Colour.greenMax);
        let colour = Colour.RGB(red, green, blue);
        colours.push(colour);
    }
    return colours;
}

/**
 * Generate a monochromatic palette from a given base colour
 * @param {Colour} colour
 * @param {number} num
 * @param {function(Colour, number):Colour} callback
 * @returns {Colour[]}
 * @ignore
 */
function _monochromatic(colour, num, callback) {
    let palette = [];
    for (let i = 0; i < num; i++) {
        let percent = (1 / (num - 1)) * i;
        let mixture = callback(colour, percent);
        palette.push(mixture);
    }
    return palette;
}

/**
 * Validate that the contrast between the provided text colour and background colour meets the standard for the [WCAG contrast ratio](http://www.w3.org/TR/WCAG20/#contrast-ratiodef).
 * @param {Colour} textColour - The colour of the text
 * @param {Colour} backgroundColour - The colour of the background
 * @param {boolean} [largeText=false] - True if text size is large. By default, text is assumed to be regular size.
 * @param {boolean} [enhanced=false] - True if the enhanced contrast ratio is to be used. By default, the minimum contrast ratio is used.
 * @returns {boolean} True if the provided text colour and background colour have sufficient contrast.
 */
export function validateContrast(textColour, backgroundColour, largeText = false, enhanced = false) {
    let contrastRatio = contrast(textColour, backgroundColour);
    //enhanced contrast requirements 
    if (enhanced && largeText) {
        return contrastRatio >= 4.5;
    }
    if (enhanced) {
        return contrastRatio >= 7;
    }
    //minimum contrast requirements 
    if (largeText) {
        return contrastRatio >= 3;
    }
    return contrastRatio >= 4.5;
}

/**
 * Check if the provided text colour and background colour meet the [WCAG contrast ratio](http://www.w3.org/TR/WCAG20/#contrast-ratiodef) standards and if not, produce an equivalent text colour and background colour with sufficient contrast. The given text colour will be darkened and the given background colour will be lightened (and vice versa for dark mode).
 * @param {Colour} textColour - The colour of the text
 * @param {Colour} backgroundColour - The colour of the background
 * @param {boolean} [largeText=false] - True if text size is large. By default, text is assumed to be regular size.
 * @param {boolean} [enhanced=false] - True if the enhanced contrast ratio is to be used. By default, the minimum contrast ratio is used.
 * @returns {Colour[]} An array of colours with the first item being the new text colour and the second item being the new background colour.
 */
export function fixContrast(textColour, backgroundColour, largeText = false, enhanced = false) {
    const colours = [textColour.copy(), backgroundColour.copy()];
    if (luminosity(colours[0]) > luminosity(colours[1])) {
        while (!validateContrast(colours[0], colours[1], largeText, enhanced)) {
            colours[0] = tint(colours[0], 0.05);
            colours[1] = shade(colours[1], 0.05);
        }
    } else {
        while (!validateContrast(colours[0], colours[1], largeText, enhanced)) {
            colours[0] = shade(colours[0], 0.05);
            colours[1] = tint(colours[1], 0.05);
        }
    }
    return colours;
}