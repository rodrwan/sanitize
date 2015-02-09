'use strict';

/**
 * [cleanString delete extra space from text]
 * @param  {[String]} str [weird string]
 * @return {[String]}     [cleaned string]
 */
var cleanString =  function (str) {
  return str.replace(/[\s\r\t\n]/g, ' ').replace(/\s{2,}/g, ' ').trim();
};
/**
 * [formatNumberNat Format String of number and transform it into Integer]
 * @param  {[String]} number [String of a number with random characters]
 * @return {[Integer]}       [String only with number returned as Integer]
 */
var formatNumberNat = function (number) {
  return parseInt(number.replace(/\D/g, ''), 10);
};
/**
 * [formatNumberInt Format String of number and transform it into Float]
 * @param  {[type]} number [String of a number with random characters]
 * @return {[type]}        [String only with number returned as Float]
 */
var formatNumberInt = function (number) {
  return parseFloat(number.replace(/\./g, '').replace(',', '.').replace(/[^\.^\d]/g, ''));
};
var formatNumberInt2 = function (number) {
  return parseFloat(number.replace(/,/g, '').replace(/[^\.^\d]/g, ''));
};
/**
 * [capitalize Capitalize a word]
 * @param  {[String]} str [random string]
 * @return {[String]}     [Capitalized string]
 */
var capitalize =  function (str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
};

module.exports = {
  'cleanString': cleanString,
  'formatNumberNat': formatNumberNat,
  'formatNumberInt': formatNumberInt,
  'formatNumberInt2': formatNumberInt2,
  'capitalize': capitalize
};