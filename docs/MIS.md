## Classes

<dl>
<dt><a href="#Colour">Colour</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#negate">negate(colour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Determine the inverse colour or the colour on the opposite side of the colour wheel.</p>
</dd>
<dt><a href="#rotate">rotate(colour, degrees)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Rotate a given colour a certain number of degrees in 3-dimensional space.</p>
</dd>
<dt><a href="#grayscale">grayscale(colour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Determine the equivalent <a href="https://www.tutorialspoint.com/dip/grayscale_to_rgb_conversion.htm">grayscale colour of a given colour</a>.</p>
</dd>
<dt><a href="#contrast">contrast(colour1, colour2)</a> ⇒ <code>number</code></dt>
<dd><p>Calculate the <a href="http://www.w3.org/TR/WCAG20/#contrast-ratiodef">WCAG contrast ratio</a>
between two colours. (Note: The order of the colours does not matter!)</p>
</dd>
<dt><a href="#colourfulness">colourfulness(colour)</a> ⇒ <code>number</code></dt>
<dd><p>Calculate the <a href="https://infoscience.epfl.ch/record/33994/files/HaslerS03.pdf">colourfulness index</a> of a given colour as defined by Hasler and Süsstrunk (2003).</p>
</dd>
<dt><a href="#temperature">temperature(colour)</a> ⇒ <code>number</code></dt>
<dd><p>Calculate the <a href="https://ams.com/documents/20143/80162/TCS34xx_AN000517_1-00.pdf">temperature</a> of a given colour.</p>
</dd>
<dt><a href="#luminosity">luminosity(colour)</a> ⇒ <code>number</code></dt>
<dd><p>Calculate the <a href="https://www.w3.org/WAI/GL/wiki/Relative_luminance">relative luminance</a> of a given colour as defined by the WCAG.</p>
</dd>
<dt><a href="#mix">mix(colour1, colour2, percent)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Evenly interpolate two colours and produce the resulting midpoint colour.</p>
</dd>
<dt><a href="#tint">tint(colour, percent)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Interpolate a given colour with white to create a tint.</p>
</dd>
<dt><a href="#shade">shade(colour, percent)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Interpolate a given colour with black to create a shade.</p>
</dd>
<dt><a href="#tone">tone(colour, percent)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Interpolate a given colour with gray to create a tone.</p>
</dd>
<dt><a href="#normal">normal(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>This is the blend mode which specifies no blending. The blending formula simply selects the blend color.</p>
</dd>
<dt><a href="#multiply">multiply(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Looks at the colour information in each channel and multiplies the base colour by the blend colour. The result colour is always a darker colour. Multiplying any colour with black produces black. Multiplying any colour with white leaves the colour unchanged.</p>
</dd>
<dt><a href="#screen">screen(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Looks at each channel’s colour information and multiplies the inverse of the blend and base colours. The result colour is always a lighter colour. Screening with black leaves the colour unchanged. Screening with white produces white. The effect is similar to projecting multiple photographic slides on top of each other.</p>
</dd>
<dt><a href="#overlay">overlay(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Multiplies or screens the colors, depending on the base color. The base color is not replaced, but mixed with the blend color to reflect the lightness or darkness of the original color.</p>
</dd>
<dt><a href="#darken">darken(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Looks at the colour information in each channel and selects the base or blend colour—whichever is darker—as the result colour.</p>
</dd>
<dt><a href="#lighten">lighten(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Looks at the colour information in each channel and selects the base or blend colour—whichever is lighter—as the result colour.</p>
</dd>
<dt><a href="#colourDodge">colourDodge(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Looks at the color information in each channel and brightens the base color to reflect the blend color by decreasing contrast between the two. Blending with black produces no change.</p>
</dd>
<dt><a href="#colourBurn">colourBurn(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Looks at the colour information in each channel and darkens the base colour to reflect the blend colour by increasing the contrast between the two. Blending with white produces no change.</p>
</dd>
<dt><a href="#hardLight">hardLight(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Multiplies or screens the colours, depending on the blend colour. The effect is similar to shining a harsh spotlight on the colour. If the blend colour (light source) is lighter than 50% gray, the colour is lightened, as if it were screened. This is useful for adding highlights to an colour. If the blend colour is darker than 50% gray, the colour is darkened, as if it were multiplied. This is useful for adding shadows to an colour. Painting with pure black or white results in pure black or white.</p>
</dd>
<dt><a href="#softLight">softLight(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Darkens or lightens the colours, depending on the blend colour. The effect is similar to shining a diffused spotlight on the colour. If the blend colour (light source) is lighter than 50% gray, the colour is lightened as if it were dodged. If the blend colour is darker than 50% gray, the colour is darkened as if it were burned in. Painting with pure black or white produces a distinctly darker or lighter area, but does not result in pure black or white.</p>
</dd>
<dt><a href="#difference">difference(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Looks at the colour information in each channel and subtracts either the blend colour from the base colour or the base colour from the blend colour, depending on which has the greater brightness value. Blending with white inverts the base colour values; blending with black produces no change.</p>
</dd>
<dt><a href="#exclusion">exclusion(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Creates an effect similar to but lower in contrast than the Difference mode. Blending with white inverts the base colour values. Blending with black produces no change.</p>
</dd>
<dt><a href="#_blend">_blend(baseColour, blendColour, abstractModeCallback, concreteModeCallback)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Apply a separable or non-separable blend mode to a given base colour and blend colour.</p>
</dd>
<dt><a href="#_separableBlend">_separableBlend(baseColour, blendColour, callback)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Apply a separable blend mode callback function to a given base colour and blend colour.</p>
</dd>
<dt><a href="#_alphaComposition">_alphaComposition(baseAlpha, blendAlpha, compositeAlpha, baseChannel, blendChannel, compositeChannel)</a> ⇒ <code>number</code></dt>
<dd><p>Applies the appropriate alpha blending to a blend process using <a href="https://www.w3.org/TR/compositing-1/#blending">alpha compositing</a>.</p>
</dd>
<dt><a href="#_constrain">_constrain(num, min, max)</a> ⇒ <code>number</code></dt>
<dd><p>Force a number to fit between a desired minimum or maximim value.</p>
</dd>
<dt><a href="#shades">shades(colour, num)</a> ⇒ <code><a href="#Colour">Array.&lt;Colour&gt;</a></code></dt>
<dd><p>Generate a colour palette containing all shades of the provided colour.</p>
</dd>
<dt><a href="#tints">tints(colour, num)</a> ⇒ <code><a href="#Colour">Array.&lt;Colour&gt;</a></code></dt>
<dd><p>Generate a colour palette containing all tints of the provided colour.</p>
</dd>
<dt><a href="#tones">tones(colour, num)</a> ⇒ <code><a href="#Colour">Array.&lt;Colour&gt;</a></code></dt>
<dd><p>Generate a colour palette containing all tones of the provided colour.</p>
</dd>
<dt><a href="#analogous">analogous(colour)</a> ⇒ <code><a href="#Colour">Array.&lt;Colour&gt;</a></code></dt>
<dd><p>Generate a colour palette containing the analogous colours of the provided colour. Analogous colours are next to each other on the colour wheel.</p>
</dd>
<dt><a href="#complementary">complementary(colour)</a> ⇒ <code><a href="#Colour">Array.&lt;Colour&gt;</a></code></dt>
<dd><p>Generate a colour palette containing the complementary colours of the provided colour. Complementary colours are opposite on the colour wheel.</p>
</dd>
<dt><a href="#splitComplementary">splitComplementary(colour)</a> ⇒ <code><a href="#Colour">Array.&lt;Colour&gt;</a></code></dt>
<dd><p>Generate a colour palette containing the split complementary colours of the provided colour. Split complementary colours contain the two adjacent colours of the complement.</p>
</dd>
<dt><a href="#triadic">triadic(colour)</a> ⇒ <code><a href="#Colour">Array.&lt;Colour&gt;</a></code></dt>
<dd><p>Generate a colour palette containing the triadic colours of the provided colour. Triadic colours a three equally spaced colours on the colour wheel.</p>
</dd>
<dt><a href="#tetradic">tetradic(colour)</a> ⇒ <code><a href="#Colour">Array.&lt;Colour&gt;</a></code></dt>
<dd><p>Generate a colour palette containing the tetradic colours of the provided colour.</p>
</dd>
<dt><a href="#square">square(colour)</a> ⇒ <code><a href="#Colour">Array.&lt;Colour&gt;</a></code></dt>
<dd><p>Generate a colour palette containing the square colours of the provided colour.</p>
</dd>
<dt><a href="#randoms">randoms(num)</a> ⇒ <code><a href="#Colour">Array.&lt;Colour&gt;</a></code></dt>
<dd><p>Generate a palette containing random colours.</p>
</dd>
<dt><a href="#_monochromatic">_monochromatic(colour, num, callback)</a> ⇒ <code><a href="#Colour">Array.&lt;Colour&gt;</a></code></dt>
<dd><p>Generate a monochromatic palette from a given base colour</p>
</dd>
<dt><a href="#validateContrast">validateContrast(textColour, backgroundColour, [largeText], [enhanced])</a> ⇒ <code>boolean</code></dt>
<dd><p>Validate that the contrast between the provided text colour and background colour meets the standard for the <a href="http://www.w3.org/TR/WCAG20/#contrast-ratiodef">WCAG contrast ratio</a>.</p>
</dd>
<dt><a href="#fixContrast">fixContrast(textColour, backgroundColour, [largeText], [enhanced])</a> ⇒ <code><a href="#Colour">Array.&lt;Colour&gt;</a></code></dt>
<dd><p>Check if the provided text colour and background colour meet the <a href="http://www.w3.org/TR/WCAG20/#contrast-ratiodef">WCAG contrast ratio</a> standards and if not, produce an equivalent text colour and background colour with sufficient contrast. The given text colour will be darkened and the given background colour will be lightened (and vice versa for dark mode).</p>
</dd>
</dl>

<a name="Colour"></a>

## Colour
**Kind**: global class  

* [Colour](#Colour)
    * [new Colour()](#new_Colour_new)
    * _instance_
        * [.Colour](#Colour+Colour)
            * [new exports.Colour(colourString)](#new_Colour+Colour_new)
        * [.red](#Colour+red) : <code>number</code>
        * [.green](#Colour+green) : <code>number</code>
        * [.blue](#Colour+blue) : <code>number</code>
        * [.hue](#Colour+hue) : <code>number</code>
        * [.saturationv](#Colour+saturationv) : <code>number</code>
        * [.value](#Colour+value) : <code>number</code>
        * [.cyan](#Colour+cyan) : <code>number</code>
        * [.magenta](#Colour+magenta) : <code>number</code>
        * [.yellow](#Colour+yellow) : <code>number</code>
        * [.saturationl](#Colour+saturationl) : <code>number</code>
        * [.light](#Colour+light) : <code>number</code>
        * [.white](#Colour+white) : <code>number</code>
        * [.black](#Colour+black) : <code>number</code>
        * [.alpha](#Colour+alpha) : <code>number</code>
        * [.copy()](#Colour+copy) ⇒ [<code>Colour</code>](#Colour)
        * [.toHEX()](#Colour+toHEX) ⇒ [<code>Colour</code>](#Colour)
    * _static_
        * [.redMax](#Colour.redMax) : <code>number</code>
        * [.redMin](#Colour.redMin) : <code>number</code>
        * [.greenMax](#Colour.greenMax) : <code>number</code>
        * [.greenMin](#Colour.greenMin) : <code>number</code>
        * [.blueMax](#Colour.blueMax) : <code>number</code>
        * [.blueMin](#Colour.blueMin) : <code>number</code>
        * [.hueMax](#Colour.hueMax) : <code>number</code>
        * [.hueMin](#Colour.hueMin) : <code>number</code>
        * [.saturationvMax](#Colour.saturationvMax) : <code>number</code>
        * [.saturationvMin](#Colour.saturationvMin) : <code>number</code>
        * [.valueMax](#Colour.valueMax) : <code>number</code>
        * [.valueMin](#Colour.valueMin) : <code>number</code>
        * [.cyanMax](#Colour.cyanMax) : <code>number</code>
        * [.cyanMin](#Colour.cyanMin) : <code>number</code>
        * [.magentaMax](#Colour.magentaMax) : <code>number</code>
        * [.magentaMin](#Colour.magentaMin) : <code>number</code>
        * [.yellowMax](#Colour.yellowMax) : <code>number</code>
        * [.yellowMin](#Colour.yellowMin) : <code>number</code>
        * [.saturationlMax](#Colour.saturationlMax) : <code>number</code>
        * [.saturationlMin](#Colour.saturationlMin) : <code>number</code>
        * [.lightMax](#Colour.lightMax) : <code>number</code>
        * [.lightMin](#Colour.lightMin) : <code>number</code>
        * [.whiteMax](#Colour.whiteMax) : <code>number</code>
        * [.whiteMin](#Colour.whiteMin) : <code>number</code>
        * [.blackMax](#Colour.blackMax) : <code>number</code>
        * [.blackMin](#Colour.blackMin) : <code>number</code>
        * [.alphaMax](#Colour.alphaMax) : <code>number</code>
        * [.alphaMin](#Colour.alphaMin) : <code>number</code>
        * [.RGB(red, green, blue, [alpha])](#Colour.RGB) ⇒ [<code>Colour</code>](#Colour)
        * [.HSV(hue, saturationv, value, [alpha])](#Colour.HSV) ⇒ [<code>Colour</code>](#Colour)
        * [.CMYK(cyan, magenta, yellow, black, [alpha])](#Colour.CMYK) ⇒ [<code>Colour</code>](#Colour)
        * [.HSL(hue, saturationl, light, [alpha])](#Colour.HSL) ⇒ [<code>Colour</code>](#Colour)
        * [.HWB(hue, white, black, [alpha])](#Colour.HWB) ⇒ [<code>Colour</code>](#Colour)

<a name="new_Colour_new"></a>

### new Colour()
An abstract data type representating mutable colour entities for RGB, HSV, HSL, CMYK, and HWB colour models.

<a name="Colour+Colour"></a>

### colour.Colour
**Kind**: instance class of [<code>Colour</code>](#Colour)  
**See**: [color-string](https://github.com/Qix-/color-string) handles all parsing of CSS colour strings.  
<a name="new_Colour+Colour_new"></a>

#### new exports.Colour(colourString)
Initialize a new Colour instance given a valid CSS colour string or HEX code

**Returns**: [<code>Colour</code>](#Colour) - A new Colour instance generated from the CSS colour string.  

| Param | Type | Description |
| --- | --- | --- |
| colourString | <code>string</code> | A valid CSS colour string or HEX code to parse. |

<a name="Colour+red"></a>

### colour.red : <code>number</code>
**Kind**: instance property of [<code>Colour</code>](#Colour)  
<a name="Colour+green"></a>

### colour.green : <code>number</code>
**Kind**: instance property of [<code>Colour</code>](#Colour)  
<a name="Colour+blue"></a>

### colour.blue : <code>number</code>
**Kind**: instance property of [<code>Colour</code>](#Colour)  
<a name="Colour+hue"></a>

### colour.hue : <code>number</code>
**Kind**: instance property of [<code>Colour</code>](#Colour)  
<a name="Colour+saturationv"></a>

### colour.saturationv : <code>number</code>
**Kind**: instance property of [<code>Colour</code>](#Colour)  
<a name="Colour+value"></a>

### colour.value : <code>number</code>
**Kind**: instance property of [<code>Colour</code>](#Colour)  
<a name="Colour+cyan"></a>

### colour.cyan : <code>number</code>
**Kind**: instance property of [<code>Colour</code>](#Colour)  
<a name="Colour+magenta"></a>

### colour.magenta : <code>number</code>
**Kind**: instance property of [<code>Colour</code>](#Colour)  
<a name="Colour+yellow"></a>

### colour.yellow : <code>number</code>
**Kind**: instance property of [<code>Colour</code>](#Colour)  
<a name="Colour+saturationl"></a>

### colour.saturationl : <code>number</code>
**Kind**: instance property of [<code>Colour</code>](#Colour)  
<a name="Colour+light"></a>

### colour.light : <code>number</code>
**Kind**: instance property of [<code>Colour</code>](#Colour)  
<a name="Colour+white"></a>

### colour.white : <code>number</code>
**Kind**: instance property of [<code>Colour</code>](#Colour)  
<a name="Colour+black"></a>

### colour.black : <code>number</code>
**Kind**: instance property of [<code>Colour</code>](#Colour)  
<a name="Colour+alpha"></a>

### colour.alpha : <code>number</code>
**Kind**: instance property of [<code>Colour</code>](#Colour)  
<a name="Colour+copy"></a>

### colour.copy() ⇒ [<code>Colour</code>](#Colour)
Returns a copy of the Colour instance.

**Kind**: instance method of [<code>Colour</code>](#Colour)  
**Returns**: [<code>Colour</code>](#Colour) - An identical Colour object  
<a name="Colour+toHEX"></a>

### colour.toHEX() ⇒ [<code>Colour</code>](#Colour)
Return a valid hexadecimal colour code that represents the colour.

**Kind**: instance method of [<code>Colour</code>](#Colour)  
**Returns**: [<code>Colour</code>](#Colour) - A HEX code representing the colour.  
<a name="Colour.redMax"></a>

### Colour.redMax : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>255</code>  
<a name="Colour.redMin"></a>

### Colour.redMin : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>0</code>  
<a name="Colour.greenMax"></a>

### Colour.greenMax : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>255</code>  
<a name="Colour.greenMin"></a>

### Colour.greenMin : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>0</code>  
<a name="Colour.blueMax"></a>

### Colour.blueMax : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>255</code>  
<a name="Colour.blueMin"></a>

### Colour.blueMin : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>0</code>  
<a name="Colour.hueMax"></a>

### Colour.hueMax : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>360</code>  
<a name="Colour.hueMin"></a>

### Colour.hueMin : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>0</code>  
<a name="Colour.saturationvMax"></a>

### Colour.saturationvMax : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>1.00</code>  
<a name="Colour.saturationvMin"></a>

### Colour.saturationvMin : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>0.00</code>  
<a name="Colour.valueMax"></a>

### Colour.valueMax : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>1.00</code>  
<a name="Colour.valueMin"></a>

### Colour.valueMin : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>0.00</code>  
<a name="Colour.cyanMax"></a>

### Colour.cyanMax : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>1.00</code>  
<a name="Colour.cyanMin"></a>

### Colour.cyanMin : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>0.00</code>  
<a name="Colour.magentaMax"></a>

### Colour.magentaMax : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>1.00</code>  
<a name="Colour.magentaMin"></a>

### Colour.magentaMin : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>0.00</code>  
<a name="Colour.yellowMax"></a>

### Colour.yellowMax : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>1.00</code>  
<a name="Colour.yellowMin"></a>

### Colour.yellowMin : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>0.00</code>  
<a name="Colour.saturationlMax"></a>

### Colour.saturationlMax : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>1.00</code>  
<a name="Colour.saturationlMin"></a>

### Colour.saturationlMin : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>0.00</code>  
<a name="Colour.lightMax"></a>

### Colour.lightMax : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>1.00</code>  
<a name="Colour.lightMin"></a>

### Colour.lightMin : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>0.00</code>  
<a name="Colour.whiteMax"></a>

### Colour.whiteMax : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>1.00</code>  
<a name="Colour.whiteMin"></a>

### Colour.whiteMin : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>0.00</code>  
<a name="Colour.blackMax"></a>

### Colour.blackMax : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>1.00</code>  
<a name="Colour.blackMin"></a>

### Colour.blackMin : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>0.00</code>  
<a name="Colour.alphaMax"></a>

### Colour.alphaMax : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>1.00</code>  
<a name="Colour.alphaMin"></a>

### Colour.alphaMin : <code>number</code>
**Kind**: static constant of [<code>Colour</code>](#Colour)  
**Default**: <code>0.00</code>  
<a name="Colour.RGB"></a>

### Colour.RGB(red, green, blue, [alpha]) ⇒ [<code>Colour</code>](#Colour)
Initialize a new Colour instance from RGB colour attributes

**Kind**: static method of [<code>Colour</code>](#Colour)  
**Returns**: [<code>Colour</code>](#Colour) - A new Colour instance generated from the RGB colour attributes.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| red | <code>number</code> |  | The value of the R channel [0, 255] |
| green | <code>number</code> |  | The value of the G channel [0, 255] |
| blue | <code>number</code> |  | The value of the B channel [0, 255] |
| [alpha] | <code>number</code> | <code>1.00</code> | The percentage of transparency or opacity channel [0, 1] |

<a name="Colour.HSV"></a>

### Colour.HSV(hue, saturationv, value, [alpha]) ⇒ [<code>Colour</code>](#Colour)
Initialize a new Colour instance from HSV colour attributes

**Kind**: static method of [<code>Colour</code>](#Colour)  
**Returns**: [<code>Colour</code>](#Colour) - A new Colour instance generated from the HSV colour attributes.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| hue | <code>number</code> |  | The value of the H channel [0, 360] |
| saturationv | <code>number</code> |  | The percentage of the S channel [0, 1] |
| value | <code>number</code> |  | The percentage of the V channel [0, 1] |
| [alpha] | <code>number</code> | <code>1.00</code> | The percentage of transparency or opacity channel [0, 1] |

<a name="Colour.CMYK"></a>

### Colour.CMYK(cyan, magenta, yellow, black, [alpha]) ⇒ [<code>Colour</code>](#Colour)
Initialize a new Colour instance from CMYK colour attributes

**Kind**: static method of [<code>Colour</code>](#Colour)  
**Returns**: [<code>Colour</code>](#Colour) - A new Colour instance generated from the CMYK colour attributes.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| cyan | <code>number</code> |  | The value of the C channel [0, 1] |
| magenta | <code>number</code> |  | The value of the M channel [0, 1] |
| yellow | <code>number</code> |  | The value of the Y channel [0, 1] |
| black | <code>number</code> |  | The value of the K channel [0, 1] |
| [alpha] | <code>number</code> | <code>1.00</code> | The percentage of transparency or opacity channel [0, 1] |

<a name="Colour.HSL"></a>

### Colour.HSL(hue, saturationl, light, [alpha]) ⇒ [<code>Colour</code>](#Colour)
Initialize a new Colour instance from HSL colour attributes

**Kind**: static method of [<code>Colour</code>](#Colour)  
**Returns**: [<code>Colour</code>](#Colour) - A new Colour instance generated from the HSL colour attributes.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| hue | <code>number</code> |  | The value of the H channel [0, 360] |
| saturationl | <code>number</code> |  | The value of the S channel [0, 1] |
| light | <code>number</code> |  | The value of the L channel [0, 1] |
| [alpha] | <code>number</code> | <code>1.00</code> | The percentage of transparency or opacity channel [0, 1] |

<a name="Colour.HWB"></a>

### Colour.HWB(hue, white, black, [alpha]) ⇒ [<code>Colour</code>](#Colour)
**Kind**: static method of [<code>Colour</code>](#Colour)  
**Returns**: [<code>Colour</code>](#Colour) - A new Colour instance generated from the HWB colour attributes.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| hue | <code>number</code> |  | The value of the H channel [0, 360] |
| white | <code>number</code> |  | The value of the W channel [0, 1] |
| black | <code>number</code> |  | The value of the B channel [0, 360] |
| [alpha] | <code>number</code> | <code>1.00</code> | The percentage of transparency or opacity channel [0, 1] |

<a name="negate"></a>

## negate(colour) ⇒ [<code>Colour</code>](#Colour)
Determine the inverse colour or the colour on the opposite side of the colour wheel.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the negation  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to invert |

<a name="rotate"></a>

## rotate(colour, degrees) ⇒ [<code>Colour</code>](#Colour)
Rotate a given colour a certain number of degrees in 3-dimensional space.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - - The colour resulting from the rotation  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to rotate |
| degrees | <code>number</code> | The number of degrees to rotate the colour |

<a name="grayscale"></a>

## grayscale(colour) ⇒ [<code>Colour</code>](#Colour)
Determine the equivalent [grayscale colour of a given colour](https://www.tutorialspoint.com/dip/grayscale_to_rgb_conversion.htm).

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The resulting colour from the grayscale transformation  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to grayscale |

<a name="contrast"></a>

## contrast(colour1, colour2) ⇒ <code>number</code>
Calculate the [WCAG contrast ratio](http://www.w3.org/TR/WCAG20/#contrast-ratiodef)
between two colours. (Note: The order of the colours does not matter!)

**Kind**: global function  
**Returns**: <code>number</code> - The WCAG contrast ratio of the two colours (values ranging between 1 and 21)  

| Param | Type | Description |
| --- | --- | --- |
| colour1 | [<code>Colour</code>](#Colour) | The first colour to be compared |
| colour2 | [<code>Colour</code>](#Colour) | The second colour to be compared |

<a name="colourfulness"></a>

## colourfulness(colour) ⇒ <code>number</code>
Calculate the [colourfulness index](https://infoscience.epfl.ch/record/33994/files/HaslerS03.pdf) of a given colour as defined by Hasler and Süsstrunk (2003).

**Kind**: global function  
**Returns**: <code>number</code> - The resulting colourfulness grading  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to calculate colourfulness of. |

<a name="temperature"></a>

## temperature(colour) ⇒ <code>number</code>
Calculate the [temperature](https://ams.com/documents/20143/80162/TCS34xx_AN000517_1-00.pdf) of a given colour.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting temperature grading  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to calculate temperature of. |

<a name="luminosity"></a>

## luminosity(colour) ⇒ <code>number</code>
Calculate the [relative luminance](https://www.w3.org/WAI/GL/wiki/Relative_luminance) of a given colour as defined by the WCAG.

**Kind**: global function  
**Returns**: <code>number</code> - The resulting luminence grading  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to calculate luminence of. |

<a name="mix"></a>

## mix(colour1, colour2, percent) ⇒ [<code>Colour</code>](#Colour)
Evenly interpolate two colours and produce the resulting midpoint colour.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the mix  

| Param | Type | Description |
| --- | --- | --- |
| colour1 | [<code>Colour</code>](#Colour) | The first colour to include in the mix |
| colour2 | [<code>Colour</code>](#Colour) | The second colour to include in the mix |
| percent | <code>number</code> | The percentage of the blend colour to mix |

<a name="tint"></a>

## tint(colour, percent) ⇒ [<code>Colour</code>](#Colour)
Interpolate a given colour with white to create a tint.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from tinting the original colour  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | A colour to tint |
| percent | <code>number</code> | The percentage of white to mix; setting 100% results in #FFFFFF |

<a name="shade"></a>

## shade(colour, percent) ⇒ [<code>Colour</code>](#Colour)
Interpolate a given colour with black to create a shade.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from shading the original colour  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | A colour to shade |
| percent | <code>number</code> | The percentage of black to mix; setting 100% results in #000000 |

<a name="tone"></a>

## tone(colour, percent) ⇒ [<code>Colour</code>](#Colour)
Interpolate a given colour with gray to create a tone.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from toning the original colour  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | A colour to tone |
| percent | <code>number</code> | The percentage of gray to mix; setting 100% results in #808080 |

<a name="normal"></a>

## normal(baseColour, blendColour) ⇒ [<code>Colour</code>](#Colour)
This is the blend mode which specifies no blending. The blending formula simply selects the blend color.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the blend  

| Param | Type | Description |
| --- | --- | --- |
| baseColour | [<code>Colour</code>](#Colour) | The base colour being blended |
| blendColour | [<code>Colour</code>](#Colour) | The colour being applied with the designated blend mode |

<a name="multiply"></a>

## multiply(baseColour, blendColour) ⇒ [<code>Colour</code>](#Colour)
Looks at the colour information in each channel and multiplies the base colour by the blend colour. The result colour is always a darker colour. Multiplying any colour with black produces black. Multiplying any colour with white leaves the colour unchanged.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the blend  

| Param | Type | Description |
| --- | --- | --- |
| baseColour | [<code>Colour</code>](#Colour) | The base colour being blended |
| blendColour | [<code>Colour</code>](#Colour) | The colour being applied with the designated blend mode |

<a name="screen"></a>

## screen(baseColour, blendColour) ⇒ [<code>Colour</code>](#Colour)
Looks at each channel’s colour information and multiplies the inverse of the blend and base colours. The result colour is always a lighter colour. Screening with black leaves the colour unchanged. Screening with white produces white. The effect is similar to projecting multiple photographic slides on top of each other.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the blend  

| Param | Type | Description |
| --- | --- | --- |
| baseColour | [<code>Colour</code>](#Colour) | The base colour being blended |
| blendColour | [<code>Colour</code>](#Colour) | The colour being applied with the designated blend mode |

<a name="overlay"></a>

## overlay(baseColour, blendColour) ⇒ [<code>Colour</code>](#Colour)
Multiplies or screens the colors, depending on the base color. The base color is not replaced, but mixed with the blend color to reflect the lightness or darkness of the original color.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the blend  

| Param | Type | Description |
| --- | --- | --- |
| baseColour | [<code>Colour</code>](#Colour) | The base colour being blended |
| blendColour | [<code>Colour</code>](#Colour) | The colour being applied with the designated blend mode |

<a name="darken"></a>

## darken(baseColour, blendColour) ⇒ [<code>Colour</code>](#Colour)
Looks at the colour information in each channel and selects the base or blend colour—whichever is darker—as the result colour.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the blend  

| Param | Type | Description |
| --- | --- | --- |
| baseColour | [<code>Colour</code>](#Colour) | The base colour being blended |
| blendColour | [<code>Colour</code>](#Colour) | The colour being applied with the designated blend mode |

<a name="lighten"></a>

## lighten(baseColour, blendColour) ⇒ [<code>Colour</code>](#Colour)
Looks at the colour information in each channel and selects the base or blend colour—whichever is lighter—as the result colour.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the blend  

| Param | Type | Description |
| --- | --- | --- |
| baseColour | [<code>Colour</code>](#Colour) | The base colour being blended |
| blendColour | [<code>Colour</code>](#Colour) | The colour being applied with the designated blend mode |

<a name="colourDodge"></a>

## colourDodge(baseColour, blendColour) ⇒ [<code>Colour</code>](#Colour)
Looks at the color information in each channel and brightens the base color to reflect the blend color by decreasing contrast between the two. Blending with black produces no change.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the blend  

| Param | Type | Description |
| --- | --- | --- |
| baseColour | [<code>Colour</code>](#Colour) | The base colour being blended |
| blendColour | [<code>Colour</code>](#Colour) | The colour being applied with the designated blend mode |

<a name="colourBurn"></a>

## colourBurn(baseColour, blendColour) ⇒ [<code>Colour</code>](#Colour)
Looks at the colour information in each channel and darkens the base colour to reflect the blend colour by increasing the contrast between the two. Blending with white produces no change.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the blend  

| Param | Type | Description |
| --- | --- | --- |
| baseColour | [<code>Colour</code>](#Colour) | The base colour being blended |
| blendColour | [<code>Colour</code>](#Colour) | The colour being applied with the designated blend mode |

<a name="hardLight"></a>

## hardLight(baseColour, blendColour) ⇒ [<code>Colour</code>](#Colour)
Multiplies or screens the colours, depending on the blend colour. The effect is similar to shining a harsh spotlight on the colour. If the blend colour (light source) is lighter than 50% gray, the colour is lightened, as if it were screened. This is useful for adding highlights to an colour. If the blend colour is darker than 50% gray, the colour is darkened, as if it were multiplied. This is useful for adding shadows to an colour. Painting with pure black or white results in pure black or white.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the blend  

| Param | Type | Description |
| --- | --- | --- |
| baseColour | [<code>Colour</code>](#Colour) | The base colour being blended |
| blendColour | [<code>Colour</code>](#Colour) | The colour being applied with the designated blend mode |

<a name="softLight"></a>

## softLight(baseColour, blendColour) ⇒ [<code>Colour</code>](#Colour)
Darkens or lightens the colours, depending on the blend colour. The effect is similar to shining a diffused spotlight on the colour. If the blend colour (light source) is lighter than 50% gray, the colour is lightened as if it were dodged. If the blend colour is darker than 50% gray, the colour is darkened as if it were burned in. Painting with pure black or white produces a distinctly darker or lighter area, but does not result in pure black or white.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the blend  

| Param | Type | Description |
| --- | --- | --- |
| baseColour | [<code>Colour</code>](#Colour) | The base colour being blended |
| blendColour | [<code>Colour</code>](#Colour) | The colour being applied with the designated blend mode |

<a name="difference"></a>

## difference(baseColour, blendColour) ⇒ [<code>Colour</code>](#Colour)
Looks at the colour information in each channel and subtracts either the blend colour from the base colour or the base colour from the blend colour, depending on which has the greater brightness value. Blending with white inverts the base colour values; blending with black produces no change.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the blend  

| Param | Type | Description |
| --- | --- | --- |
| baseColour | [<code>Colour</code>](#Colour) | The base colour being blended |
| blendColour | [<code>Colour</code>](#Colour) | The colour being applied with the designated blend mode |

<a name="exclusion"></a>

## exclusion(baseColour, blendColour) ⇒ [<code>Colour</code>](#Colour)
Creates an effect similar to but lower in contrast than the Difference mode. Blending with white inverts the base colour values. Blending with black produces no change.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the blend  

| Param | Type | Description |
| --- | --- | --- |
| baseColour | [<code>Colour</code>](#Colour) | The base colour being blended |
| blendColour | [<code>Colour</code>](#Colour) | The colour being applied with the designated blend mode |

<a name="_blend"></a>

## \_blend(baseColour, blendColour, abstractModeCallback, concreteModeCallback) ⇒ [<code>Colour</code>](#Colour)
Apply a separable or non-separable blend mode to a given base colour and blend colour.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the blend  

| Param | Type |
| --- | --- |
| baseColour | [<code>Colour</code>](#Colour) | 
| blendColour | [<code>Colour</code>](#Colour) | 
| abstractModeCallback | <code>function</code> | 
| concreteModeCallback | <code>function</code> | 

<a name="_separableBlend"></a>

## \_separableBlend(baseColour, blendColour, callback) ⇒ [<code>Colour</code>](#Colour)
Apply a separable blend mode callback function to a given base colour and blend colour.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - The colour resulting from the separable blend  

| Param | Type |
| --- | --- |
| baseColour | [<code>Colour</code>](#Colour) | 
| blendColour | [<code>Colour</code>](#Colour) | 
| callback | <code>function</code> | 

<a name="_alphaComposition"></a>

## \_alphaComposition(baseAlpha, blendAlpha, compositeAlpha, baseChannel, blendChannel, compositeChannel) ⇒ <code>number</code>
Applies the appropriate alpha blending to a blend process using [alpha compositing](https://www.w3.org/TR/compositing-1/#blending).

**Kind**: global function  

| Param | Type |
| --- | --- |
| baseAlpha | <code>number</code> | 
| blendAlpha | <code>number</code> | 
| compositeAlpha | <code>number</code> | 
| baseChannel | <code>number</code> | 
| blendChannel | <code>number</code> | 
| compositeChannel | <code>number</code> | 

<a name="_constrain"></a>

## \_constrain(num, min, max) ⇒ <code>number</code>
Force a number to fit between a desired minimum or maximim value.

**Kind**: global function  
**Returns**: <code>number</code> - Returns min if num is less than min. Returns max if num is greater than max. Otherwise, it returns back num.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | The value to be constrained |
| min | <code>number</code> | The minimum value it should be constrained to |
| max | <code>number</code> | The maximum value it should be constrained to |

<a name="shades"></a>

## shades(colour, num) ⇒ [<code>Array.&lt;Colour&gt;</code>](#Colour)
Generate a colour palette containing all shades of the provided colour.

**Kind**: global function  
**Returns**: [<code>Array.&lt;Colour&gt;</code>](#Colour) - The resulting colour palette  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to generate shades for. |
| num | <code>number</code> | The number of steps or intervals to produce colours for across the range of possible shades. |

<a name="tints"></a>

## tints(colour, num) ⇒ [<code>Array.&lt;Colour&gt;</code>](#Colour)
Generate a colour palette containing all tints of the provided colour.

**Kind**: global function  
**Returns**: [<code>Array.&lt;Colour&gt;</code>](#Colour) - The resulting colour palette  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to generate tints for. |
| num | <code>number</code> | The number of steps or intervals to produce colours for across the range of possible tints. |

<a name="tones"></a>

## tones(colour, num) ⇒ [<code>Array.&lt;Colour&gt;</code>](#Colour)
Generate a colour palette containing all tones of the provided colour.

**Kind**: global function  
**Returns**: [<code>Array.&lt;Colour&gt;</code>](#Colour) - The resulting colour palette  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to generate tones for. |
| num | <code>number</code> | The number of steps or intervals to produce colours for across the range of possible tones. |

<a name="analogous"></a>

## analogous(colour) ⇒ [<code>Array.&lt;Colour&gt;</code>](#Colour)
Generate a colour palette containing the analogous colours of the provided colour. Analogous colours are next to each other on the colour wheel.

**Kind**: global function  
**Returns**: [<code>Array.&lt;Colour&gt;</code>](#Colour) - The resulting colour palette  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to generate a palette for |

<a name="complementary"></a>

## complementary(colour) ⇒ [<code>Array.&lt;Colour&gt;</code>](#Colour)
Generate a colour palette containing the complementary colours of the provided colour. Complementary colours are opposite on the colour wheel.

**Kind**: global function  
**Returns**: [<code>Array.&lt;Colour&gt;</code>](#Colour) - The resulting colour palette  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to generate a palette for |

<a name="splitComplementary"></a>

## splitComplementary(colour) ⇒ [<code>Array.&lt;Colour&gt;</code>](#Colour)
Generate a colour palette containing the split complementary colours of the provided colour. Split complementary colours contain the two adjacent colours of the complement.

**Kind**: global function  
**Returns**: [<code>Array.&lt;Colour&gt;</code>](#Colour) - The resulting colour palette  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to generate a palette for |

<a name="triadic"></a>

## triadic(colour) ⇒ [<code>Array.&lt;Colour&gt;</code>](#Colour)
Generate a colour palette containing the triadic colours of the provided colour. Triadic colours a three equally spaced colours on the colour wheel.

**Kind**: global function  
**Returns**: [<code>Array.&lt;Colour&gt;</code>](#Colour) - The resulting colour palette  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to generate a palette for |

<a name="tetradic"></a>

## tetradic(colour) ⇒ [<code>Array.&lt;Colour&gt;</code>](#Colour)
Generate a colour palette containing the tetradic colours of the provided colour.

**Kind**: global function  
**Returns**: [<code>Array.&lt;Colour&gt;</code>](#Colour) - The resulting colour palette  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to generate a palette for |

<a name="square"></a>

## square(colour) ⇒ [<code>Array.&lt;Colour&gt;</code>](#Colour)
Generate a colour palette containing the square colours of the provided colour.

**Kind**: global function  
**Returns**: [<code>Array.&lt;Colour&gt;</code>](#Colour) - The resulting colour palette  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | The colour to generate a palette for |

<a name="randoms"></a>

## randoms(num) ⇒ [<code>Array.&lt;Colour&gt;</code>](#Colour)
Generate a palette containing random colours.

**Kind**: global function  
**Returns**: [<code>Array.&lt;Colour&gt;</code>](#Colour) - The resulting colour palette  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | The length of the palette |

<a name="_monochromatic"></a>

## \_monochromatic(colour, num, callback) ⇒ [<code>Array.&lt;Colour&gt;</code>](#Colour)
Generate a monochromatic palette from a given base colour

**Kind**: global function  

| Param | Type |
| --- | --- |
| colour | [<code>Colour</code>](#Colour) | 
| num | <code>number</code> | 
| callback | <code>function</code> | 

<a name="validateContrast"></a>

## validateContrast(textColour, backgroundColour, [largeText], [enhanced]) ⇒ <code>boolean</code>
Validate that the contrast between the provided text colour and background colour meets the standard for the [WCAG contrast ratio](http://www.w3.org/TR/WCAG20/#contrast-ratiodef).

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the provided text colour and background colour have sufficient contrast.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| textColour | [<code>Colour</code>](#Colour) |  | The colour of the text |
| backgroundColour | [<code>Colour</code>](#Colour) |  | The colour of the background |
| [largeText] | <code>boolean</code> | <code>false</code> | True if text size is large. By default, text is assumed to be regular size. |
| [enhanced] | <code>boolean</code> | <code>false</code> | True if the enhanced contrast ratio is to be used. By default, the minimum contrast ratio is used. |

<a name="fixContrast"></a>

## fixContrast(textColour, backgroundColour, [largeText], [enhanced]) ⇒ [<code>Array.&lt;Colour&gt;</code>](#Colour)
Check if the provided text colour and background colour meet the [WCAG contrast ratio](http://www.w3.org/TR/WCAG20/#contrast-ratiodef) standards and if not, produce an equivalent text colour and background colour with sufficient contrast. The given text colour will be darkened and the given background colour will be lightened (and vice versa for dark mode).

**Kind**: global function  
**Returns**: [<code>Array.&lt;Colour&gt;</code>](#Colour) - An array of colours with the first item being the new text colour and the second item being the new background colour.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| textColour | [<code>Colour</code>](#Colour) |  | The colour of the text |
| backgroundColour | [<code>Colour</code>](#Colour) |  | The colour of the background |
| [largeText] | <code>boolean</code> | <code>false</code> | True if text size is large. By default, text is assumed to be regular size. |
| [enhanced] | <code>boolean</code> | <code>false</code> | True if the enhanced contrast ratio is to be used. By default, the minimum contrast ratio is used. |

