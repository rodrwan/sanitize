'use strict';

/**
 * Delete extra space from text
 * @param  {String} str Weird string
 * @return {String}     cleaned string
 */
var cleanString =  function (str) {
  if (typeof str !== 'string') throw new Error('cleanString() input must be a string');
  return str.replace(/[\s\r\t\n]/g, ' ').replace(/\s{2,}/g, ' ').trim();
};
/**
 * Format String of number and transform it into Integer
 * @param  {String} number String of a number with random characters
 * @return {Integer}       String only with number returned as Integer
 * @example
> var number = '10.000'
> formatNumberNat(number)
10000
 * @alias module:sanitize.formatNumberNat
 */
var formatNumberNat = function (number) {
  if (typeof number !== 'string') throw new Error('formatNumberNat() input must be a string');
  return parseInt(number.replace(/\D/g, ''), 10);
};
/**
 * Format String of number and transform it into Float
 * @param  {String} number String of a number with random characters
 * @return {Float}         String only with number returned as Float
 * @example
> var number = '10.000,10'
> formatNumberInt(number)
10000.1
 */
var formatNumberInt = function (number) {
  if (typeof number !== 'string') throw new Error('formatNumberInt() input must be a string');
  return parseFloat(number.replace(/\./g, '').replace(',', '.').replace(/[^\.^\d]/g, ''));
};
/**
 * Format String of number and transform it into Float
 * @param  {String} number String of a number with random characters
 * @return {Float}         String only with number returned as Float
 * @example
> var number = '10,000.10'
> formatNumberInt(number)
10000.1
 */
var formatNumberInt2 = function (number) {
  if (typeof number !== 'string') throw new Error('formatNumberInt2() input must be a string');
  return parseFloat(number.replace(/,/g, '').replace(/[^\.^\d]/g, ''));
};
/**
 * Capitalize a word
 * @param  {String} str Random string
 * @return {String}     Capitalized string
 */
var capitalize = function (str) {
  if (typeof str !== 'string') throw new Error('capitalize() input must be a string');
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
};

/**
 * Capitalize a whole text
 * @param  {String} phrase Random text
 * @return {String}        Capitalized text
 */
var phraseCapitalize = function (phrase) {
  if (typeof phrase !== 'string') throw new Error('phraseCapitalize() input must be a string');
  return phrase.split(' ').map(function (word) {
    return capitalize(word);
  }).join(' ');
};

module.exports = {
  'cleanString': cleanString,
  'formatNumberNat': formatNumberNat,
  'formatNumberInt': formatNumberInt,
  'formatNumberInt2': formatNumberInt2,
  'capitalize': capitalize,
  'phraseCapitalize': phraseCapitalize
};