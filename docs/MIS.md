# matisse: Module Interface Specification
May 22, 2022

## Classes

<dl>
<dt><a href="#Colour">Colour</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#red">red</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#green">green</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#blue">blue</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#hue">hue</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#saturationv">saturationv</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#value">value</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#cyan">cyan</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#magenta">magenta</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#yellow">yellow</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#saturationl">saturationl</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#light">light</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#white">white</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#black">black</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#alpha">alpha</a> : <code>number</code></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#redMax">redMax</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#redMin">redMin</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#greenMax">greenMax</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#greenMin">greenMin</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#blueMax">blueMax</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#blueMin">blueMin</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#hueMax">hueMax</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#hueMin">hueMin</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#saturationvMax">saturationvMax</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#saturationvMin">saturationvMin</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#valueMax">valueMax</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#valueMin">valueMin</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#cyanMax">cyanMax</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#cyanMin">cyanMin</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#magentaMax">magentaMax</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#magentaMin">magentaMin</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#yellowMax">yellowMax</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#yellowMin">yellowMin</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#saturationlMax">saturationlMax</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#saturationlMin">saturationlMin</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#lightMax">lightMax</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#lightMin">lightMin</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#whiteMax">whiteMax</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#whiteMin">whiteMin</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#blackMax">blackMax</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#blackMin">blackMin</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#alphaMax">alphaMax</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#alphaMin">alphaMin</a> : <code>number</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#RGB">RGB(red, green, blue, [alpha])</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Initialize a new Colour instance from RGB colour attributes</p>
</dd>
<dt><a href="#HSV">HSV(hue, saturationv, value, [alpha])</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Initialize a new Colour instance from HSV colour attributes</p>
</dd>
<dt><a href="#CMYK">CMYK(cyan, magenta, yellow, black, [alpha])</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Initialize a new Colour instance from CMYK colour attributes</p>
</dd>
<dt><a href="#HSL">HSL(hue, saturationl, light, [alpha])</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Initialize a new Colour instance from HSL colour attributes</p>
</dd>
<dt><a href="#HWB">HWB(hue, white, black, [alpha])</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd></dd>
<dt><a href="#equals">equals(colour)</a> ⇒</dt>
<dd><p>Check if another Colour instance is equivalent</p>
</dd>
<dt><a href="#copy">copy()</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Returns a copy of the Colour instance.</p>
</dd>
<dt><a href="#toHEX">toHEX()</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Return a valid hexadecimal colour code that represents the colour.</p>
</dd>
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
<dd><p>This is the blend mode which specifies no blending. The blending formula simply selects the blend colour.</p>
</dd>
<dt><a href="#multiply">multiply(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Looks at the colour information in each channel and multiplies the base colour by the blend colour. The result colour is always a darker colour. Multiplying any colour with black produces black. Multiplying any colour with white leaves the colour unchanged.</p>
</dd>
<dt><a href="#screen">screen(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Looks at each channel’s colour information and multiplies the inverse of the blend and base colours. The result colour is always a lighter colour. Screening with black leaves the colour unchanged. Screening with white produces white. The effect is similar to projecting multiple photographic slides on top of each other.</p>
</dd>
<dt><a href="#overlay">overlay(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Multiplies or screens the colours, depending on the base colour. The base colour is not replaced, but mixed with the blend colour to reflect the lightness or darkness of the original colour.</p>
</dd>
<dt><a href="#darken">darken(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Looks at the colour information in each channel and selects the base or blend colour—whichever is darker—as the result colour.</p>
</dd>
<dt><a href="#lighten">lighten(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Looks at the colour information in each channel and selects the base or blend colour—whichever is lighter—as the result colour.</p>
</dd>
<dt><a href="#colourDodge">colourDodge(baseColour, blendColour)</a> ⇒ <code><a href="#Colour">Colour</a></code></dt>
<dd><p>Looks at the colour information in each channel and brightens the base colour to reflect the blend colour by decreasing contrast between the two. Blending with black produces no change.</p>
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
<a name="new_Colour_new"></a>

### new Colour()
An abstract data type representating mutable colour entities for RGB, HSV, HSL, CMYK, and HWB colour models.

<a name="red"></a>

## red : <code>number</code>
**Kind**: global variable  
<a name="green"></a>

## green : <code>number</code>
**Kind**: global variable  
<a name="blue"></a>

## blue : <code>number</code>
**Kind**: global variable  
<a name="hue"></a>

## hue : <code>number</code>
**Kind**: global variable  
<a name="saturationv"></a>

## saturationv : <code>number</code>
**Kind**: global variable  
<a name="value"></a>

## value : <code>number</code>
**Kind**: global variable  
<a name="cyan"></a>

## cyan : <code>number</code>
**Kind**: global variable  
<a name="magenta"></a>

## magenta : <code>number</code>
**Kind**: global variable  
<a name="yellow"></a>

## yellow : <code>number</code>
**Kind**: global variable  
<a name="saturationl"></a>

## saturationl : <code>number</code>
**Kind**: global variable  
<a name="light"></a>

## light : <code>number</code>
**Kind**: global variable  
<a name="white"></a>

## white : <code>number</code>
**Kind**: global variable  
<a name="black"></a>

## black : <code>number</code>
**Kind**: global variable  
<a name="alpha"></a>

## alpha : <code>number</code>
**Kind**: global variable  
<a name="redMax"></a>

## redMax : <code>number</code>
**Kind**: global constant  
**Default**: <code>255</code>  
<a name="redMin"></a>

## redMin : <code>number</code>
**Kind**: global constant  
**Default**: <code>0</code>  
<a name="greenMax"></a>

## greenMax : <code>number</code>
**Kind**: global constant  
**Default**: <code>255</code>  
<a name="greenMin"></a>

## greenMin : <code>number</code>
**Kind**: global constant  
**Default**: <code>0</code>  
<a name="blueMax"></a>

## blueMax : <code>number</code>
**Kind**: global constant  
**Default**: <code>255</code>  
<a name="blueMin"></a>

## blueMin : <code>number</code>
**Kind**: global constant  
**Default**: <code>0</code>  
<a name="hueMax"></a>

## hueMax : <code>number</code>
**Kind**: global constant  
**Default**: <code>360</code>  
<a name="hueMin"></a>

## hueMin : <code>number</code>
**Kind**: global constant  
**Default**: <code>0</code>  
<a name="saturationvMax"></a>

## saturationvMax : <code>number</code>
**Kind**: global constant  
**Default**: <code>1.00</code>  
<a name="saturationvMin"></a>

## saturationvMin : <code>number</code>
**Kind**: global constant  
**Default**: <code>0.00</code>  
<a name="valueMax"></a>

## valueMax : <code>number</code>
**Kind**: global constant  
**Default**: <code>1.00</code>  
<a name="valueMin"></a>

## valueMin : <code>number</code>
**Kind**: global constant  
**Default**: <code>0.00</code>  
<a name="cyanMax"></a>

## cyanMax : <code>number</code>
**Kind**: global constant  
**Default**: <code>1.00</code>  
<a name="cyanMin"></a>

## cyanMin : <code>number</code>
**Kind**: global constant  
**Default**: <code>0.00</code>  
<a name="magentaMax"></a>

## magentaMax : <code>number</code>
**Kind**: global constant  
**Default**: <code>1.00</code>  
<a name="magentaMin"></a>

## magentaMin : <code>number</code>
**Kind**: global constant  
**Default**: <code>0.00</code>  
<a name="yellowMax"></a>

## yellowMax : <code>number</code>
**Kind**: global constant  
**Default**: <code>1.00</code>  
<a name="yellowMin"></a>

## yellowMin : <code>number</code>
**Kind**: global constant  
**Default**: <code>0.00</code>  
<a name="saturationlMax"></a>

## saturationlMax : <code>number</code>
**Kind**: global constant  
**Default**: <code>1.00</code>  
<a name="saturationlMin"></a>

## saturationlMin : <code>number</code>
**Kind**: global constant  
**Default**: <code>0.00</code>  
<a name="lightMax"></a>

## lightMax : <code>number</code>
**Kind**: global constant  
**Default**: <code>1.00</code>  
<a name="lightMin"></a>

## lightMin : <code>number</code>
**Kind**: global constant  
**Default**: <code>0.00</code>  
<a name="whiteMax"></a>

## whiteMax : <code>number</code>
**Kind**: global constant  
**Default**: <code>1.00</code>  
<a name="whiteMin"></a>

## whiteMin : <code>number</code>
**Kind**: global constant  
**Default**: <code>0.00</code>  
<a name="blackMax"></a>

## blackMax : <code>number</code>
**Kind**: global constant  
**Default**: <code>1.00</code>  
<a name="blackMin"></a>

## blackMin : <code>number</code>
**Kind**: global constant  
**Default**: <code>0.00</code>  
<a name="alphaMax"></a>

## alphaMax : <code>number</code>
**Kind**: global constant  
**Default**: <code>1.00</code>  
<a name="alphaMin"></a>

## alphaMin : <code>number</code>
**Kind**: global constant  
**Default**: <code>0.00</code>  
<a name="RGB"></a>

## RGB(red, green, blue, [alpha]) ⇒ [<code>Colour</code>](#Colour)
Initialize a new Colour instance from RGB colour attributes

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - A new Colour instance generated from the RGB colour attributes.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| red | <code>number</code> |  | The value of the R channel [0, 255] |
| green | <code>number</code> |  | The value of the G channel [0, 255] |
| blue | <code>number</code> |  | The value of the B channel [0, 255] |
| [alpha] | <code>number</code> | <code>1.00</code> | The percentage of transparency or opacity channel [0, 1] |

<a name="HSV"></a>

## HSV(hue, saturationv, value, [alpha]) ⇒ [<code>Colour</code>](#Colour)
Initialize a new Colour instance from HSV colour attributes

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - A new Colour instance generated from the HSV colour attributes.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| hue | <code>number</code> |  | The value of the H channel [0, 360] |
| saturationv | <code>number</code> |  | The percentage of the S channel [0, 1] |
| value | <code>number</code> |  | The percentage of the V channel [0, 1] |
| [alpha] | <code>number</code> | <code>1.00</code> | The percentage of transparency or opacity channel [0, 1] |

<a name="CMYK"></a>

## CMYK(cyan, magenta, yellow, black, [alpha]) ⇒ [<code>Colour</code>](#Colour)
Initialize a new Colour instance from CMYK colour attributes

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - A new Colour instance generated from the CMYK colour attributes.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| cyan | <code>number</code> |  | The value of the C channel [0, 1] |
| magenta | <code>number</code> |  | The value of the M channel [0, 1] |
| yellow | <code>number</code> |  | The value of the Y channel [0, 1] |
| black | <code>number</code> |  | The value of the K channel [0, 1] |
| [alpha] | <code>number</code> | <code>1.00</code> | The percentage of transparency or opacity channel [0, 1] |

<a name="HSL"></a>

## HSL(hue, saturationl, light, [alpha]) ⇒ [<code>Colour</code>](#Colour)
Initialize a new Colour instance from HSL colour attributes

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - A new Colour instance generated from the HSL colour attributes.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| hue | <code>number</code> |  | The value of the H channel [0, 360] |
| saturationl | <code>number</code> |  | The value of the S channel [0, 1] |
| light | <code>number</code> |  | The value of the L channel [0, 1] |
| [alpha] | <code>number</code> | <code>1.00</code> | The percentage of transparency or opacity channel [0, 1] |

<a name="HWB"></a>

## HWB(hue, white, black, [alpha]) ⇒ [<code>Colour</code>](#Colour)
**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - A new Colour instance generated from the HWB colour attributes.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| hue | <code>number</code> |  | The value of the H channel [0, 360] |
| white | <code>number</code> |  | The value of the W channel [0, 1] |
| black | <code>number</code> |  | The value of the B channel [0, 360] |
| [alpha] | <code>number</code> | <code>1.00</code> | The percentage of transparency or opacity channel [0, 1] |

<a name="equals"></a>

## equals(colour) ⇒ <code>boolean</code>
Check if another Colour instance is equivalent

**Kind**: global function  
**Returns**: <code>boolean</code> - True if both colours have the same red, green, blue, and alpha values.  

| Param | Type | Description |
| --- | --- | --- |
| colour | [<code>Colour</code>](#Colour) | Another Colour instance to compare equality with. |

<a name="copy"></a>

## copy() ⇒ [<code>Colour</code>](#Colour)
Returns a copy of the Colour instance.

**Kind**: global function  
**Returns**: [<code>Colour</code>](#Colour) - An identical Colour object  
<a name="toHEX"></a>

## toHEX() ⇒ <code>string</code>
Return a valid hexadecimal colour code that represents the colour.

**Kind**: global function  
**Returns**: <code>string</code> - A HEX code representing the colour.  
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
**Returns**: <code>number</code> - The resulting temperature grading in degrees Kelvin (K)  

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
This is the blend mode which specifies no blending. The blending formula simply selects the blend colour.

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
Multiplies or screens the colours, depending on the base colour. The base colour is not replaced, but mixed with the blend colour to reflect the lightness or darkness of the original colour.

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
Looks at the colour information in each channel and brightens the base colour to reflect the blend colour by decreasing contrast between the two. Blending with black produces no change.

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

