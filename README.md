Sanitize module
---------------

<a name="module_sanitize"></a>
# sanitize
Useful functions to clean strings and numbers.


* [sanitize](#module_sanitize)
  * [.cleanString(str)](#module_sanitize.cleanString) ⇒ <code>String</code>
  * [.formatNumberNat(number)](#module_sanitize.formatNumberNat) ⇒ <code>Integer</code>
  * [.formatNumberInt(number)](#module_sanitize.formatNumberInt) ⇒ <code>Float</code>
  * [.formatNumberInt2(number)](#module_sanitize.formatNumberInt2) ⇒ <code>Float</code>
  * [.capitalize(str)](#module_sanitize.capitalize) ⇒ <code>String</code>
  * [.phraseCapitalize(phrase)](#module_sanitize.phraseCapitalize) ⇒ <code>String</code>

<a name="module_sanitize.cleanString"></a>
## Sanitize.cleanString(str) ⇒ <code>String</code>
Delete extra space from text

**Returns**: <code>String</code> - cleaned string  

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>str</td><td><code>String</code></td><td>Weird string</td>
    </tr>
  </tbody>
</table>

<a name="module_sanitize.formatNumberNat"></a>
## Sanitize.formatNumberNat(number) ⇒ <code>Integer</code>
Format String of number and transform it into Integer

**Returns**: <code>Integer</code> - String only with number returned as Integer  

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>number</td><td><code>String</code></td><td>String of a number with random characters</td>
    </tr>
  </tbody>
</table>

**Example**  
```js
> var number = '10.000'
> formatNumberNat(number)
10000
```
<a name="module_sanitize.formatNumberInt"></a>
## Sanitize.formatNumberInt(number) ⇒ <code>Float</code>
Format String of number and transform it into Float

**Returns**: <code>Float</code> - String only with number returned as Float  

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>number</td><td><code>String</code></td><td>String of a number with random characters</td>
    </tr>
  </tbody>
</table>

**Example**  
```js
> var number = '10.000,10'
> formatNumberInt(number)
10000.1
```
<a name="module_sanitize.formatNumberInt2"></a>
## Sanitize.formatNumberInt2(number) ⇒ <code>Float</code>
Format String of number and transform it into Float

**Returns**: <code>Float</code> - String only with number returned as Float  

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>number</td><td><code>String</code></td><td>String of a number with random characters</td>
    </tr>
  </tbody>
</table>

**Example**  
```js
> var number = '10,000.10'
> formatNumberInt(number)
10000.1
```
<a name="module_sanitize.capitalize"></a>
## Sanitize.capitalize(str) ⇒ <code>String</code>
Capitalize a word

**Returns**: <code>String</code> - Capitalized string  

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>str</td><td><code>String</code></td><td>Random string</td>
    </tr>
  </tbody>
</table>

<a name="module_sanitize.phraseCapitalize"></a>
## Sanitize.phraseCapitalize(phrase) ⇒ <code>String</code>
Capitalize a whole text

**Returns**: <code>String</code> - Capitalized text  

<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>phrase</td><td><code>String</code></td><td>Random text</td>
    </tr>
  </tbody>
</table>




--

*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.

&copy; 2015 Rodrigo Fuenzalida <rf@finciero.com>