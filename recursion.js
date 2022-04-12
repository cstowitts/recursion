"use strict";
//paired with Brian

/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0){
    return 1;
  }
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length === 0){
    return 0;
  }

  let currWerdLen = words[0].length;
  let nextWerdLen = longest(words.slice(1)).length;

  if(currWerdLen > nextWerdLen){
    return currWerdLen;
  } else {
    return nextWerdLen;
  }
}
//["pie", "pizza", "neurosis", "poop"]

/**
 * round 1:
 * currWerd = "pie"
 * nextWerd = longest(["pizza", "neurosis", "poop"]) / 8 ("neurosis")
 *
 * round 2:
 * 
 * currWerd = "pizza"
 * nextWerd = longest(["neurosis", "poop"]) / 8 ("neurosis)
 * 
 * round 3:
 * 
 * currWerd = "neurosis"
 * nextWerd = longest(["poop"]) / 4 ("poop")
 * 
 * round 4:
 * 
 * currWerd = "poop"
 * nextWerd = longest([]) / 0 ("")
 * 
 * 
 * round 5:
 * 
 * currWerd = undefined
 * returns 0 ("")
 */

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length === 0){
    return "";
  }

  return str[0] + everyOther(str.substring(2));

}
//"sommelier" - "smeir"
//"even" - "ee"
//"odd" - "od"
//"neurosis" = "nuoi"


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
