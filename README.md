Sanitize module
---------------

# Globals
<dl>
<dt><a href="#cleanString">cleanString(str)</a> ⇒ <code>String</code></dt>
<dd><p>Delete extra space from text</p>
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
# cleanString(str) ⇒ <code>String</code>
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

<a name="formatNumberInt"></a>
# formatNumberInt(number) ⇒ <code>Float</code>
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
<a name="formatNumberInt2"></a>
# formatNumberInt2(number) ⇒ <code>Float</code>
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
<a name="capitalize"></a>
# capitalize(str) ⇒ <code>String</code>
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

<a name="phraseCapitalize"></a>
# phraseCapitalize(phrase) ⇒ <code>String</code>
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