'use strict';

/**
 * delete extra space from text
 * @param  {String} str [weird string]
 * @return {String}     [cleaned string]
 */
var cleanString =  function (str) {
  return str.replace(/[\s\r\t\n]/g, ' ').replace(/\s{2,}/g, ' ').trim();
};
/**
 * Format String of number and transform it into Integer
 * @param  {String} number [String of a number with random characters]
 * @return {Integer}       [String only with number returned as Integer]
 * i.e. 10.000 -> 10000
 */
var formatNumberNat = function (number) {
  return parseInt(number.replace(/\D/g, ''), 10);
};
/**
 * Format String of number and transform it into Float
 * @param  {String} number [String of a number with random characters]
 * @return {Float}         [String only with number returned as Float]
 * i.e. 10.000,10 -> 10000.1
 */
var formatNumberInt = function (number) {
  return parseFloat(number.replace(/\./g, '').replace(',', '.').replace(/[^\.^\d]/g, ''));
};
/**
 * Format String of number and transform it into Float
 * @param  {String} number [String of a number with random characters]
 * @return {Float}         [String only with number returned as Float]
 * i.e. 10,000.10 -> 10000.1
 */
var formatNumberInt2 = function (number) {
  return parseFloat(number.replace(/,/g, '').replace(/[^\.^\d]/g, ''));
};
/**
 * Capitalize a word
 * @param  {String} str [random string]
 * @return {String}     [Capitalized string]
 */
var capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
};

/**
 * Capitalize a whole text
 * @param  {String} phrase [random text]
 * @return {String}        [Capitalized text]
 */
var phraseCapitalize = function (phrase) {
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