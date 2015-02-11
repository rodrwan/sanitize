## Globals
<dl>
<dt><a href="#cleanString">cleanString(str)</a> ⇒ <code>String</code></dt>
<dd><p>Delete extra space from text</p>
</dd>
<dt><a href="#formatNumberNat">formatNumberNat(number)</a> ⇒ <code>Integer</code></dt>
<dd><p>Format String of number and transform it into Integer</p>
</dd>
<dt><a href="#formatNumberInt">formatNumberInt(number)</a> ⇒ <code>Float</code></dt>
<dd><p>Format String of number and transform it into Float</p>
</dd>
<dt><a href="#formatNumberInt2">formatNumberInt2(number)</a> ⇒ <code>Float</code></dt>
<dd><p>Format String of number and transform it into Float</p>
</dd>
<dt><a href="#capitalize">capitalize(str)</a> ⇒ <code>String</code></dt>
<dd><p>Capitalize a word</p>
</dd>
<dt><a href="#phraseCapitalize">phraseCapitalize(phrase)</a> ⇒ <code>String</code></dt>
<dd><p>Capitalize a whole text</p>
</dd>
</dl>
<a name="cleanString"></a>
## cleanString(str) ⇒ <code>String</code>
Delete extra space from text

**Returns**: <code>String</code> - cleaned string  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | Weird string |

<a name="formatNumberNat"></a>
## formatNumberNat(number) ⇒ <code>Integer</code>
Format String of number and transform it into Integer

**Returns**: <code>Integer</code> - String only with number returned as Integer  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>String</code> | String of a number with random characters |

**Example**  
> var number = '10.000'
 > formatNumberNat(number)
 10000

<a name="formatNumberInt"></a>
## formatNumberInt(number) ⇒ <code>Float</code>
Format String of number and transform it into Float

**Returns**: <code>Float</code> - String only with number returned as Float  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>String</code> | String of a number with random characters |

**Example**  
> var number = '10.000,10'
 > formatNumberInt(number)
 10000.1

<a name="formatNumberInt2"></a>
## formatNumberInt2(number) ⇒ <code>Float</code>
Format String of number and transform it into Float

**Returns**: <code>Float</code> - String only with number returned as Float  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>String</code> | String of a number with random characters |

**Example**  
> var number = '10,000.10'
 > formatNumberInt(number)
 10000.1

<a name="capitalize"></a>
## capitalize(str) ⇒ <code>String</code>
Capitalize a word

**Returns**: <code>String</code> - Capitalized string  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | Random string |

<a name="phraseCapitalize"></a>
## phraseCapitalize(phrase) ⇒ <code>String</code>
Capitalize a whole text

**Returns**: <code>String</code> - Capitalized text  

| Param | Type | Description |
| --- | --- | --- |
| phrase | <code>String</code> | Random text |

