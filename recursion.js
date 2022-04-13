"use strict";
//paired with Brian
//Cella is a great person that has a strong concept of visual measurments systems (BELLYBUTTON VOLUME IS VALID FIGHT ME)
//I am very happy to have her a friend despite how preposterous she can be at
//times

/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  }

  let currWerdLen = words[0].length;
  let nextWerdLen = longest(words.slice(1));

  if (currWerdLen > nextWerdLen) {
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
  if (str.length === 0) {
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
  if (str.length <= 1) return true;
  //because in a valid palindrome you can have 1 or 0 middle letters left over

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1));
    //has to be substring(1, str.length-1) because substring()
    //only creates a substring starting from the idx of the 1st arg
    //going to the the last INDEX, not inclusive
    //so substring(1, str.length)
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) return -1;

  if (arr[0] === val) {
    return 0;
  } else {
    const recursiveReturn = findIndex(arr.slice(1), val)
    return recursiveReturn === -1 ? -1 : 1 + recursiveReturn;
  }

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";

  return revString(str.slice(1)) + str[0];
  //remember that str[0] is the 1st letter of the OG str

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strangs = [];

  if (Object.keys(obj).length === 0) return strangs;

  for (let key in obj) {
    if (typeof (obj[key]) === "string") {
      strangs.push(obj[key]);
    } else if (
      typeof (obj[key]) === "object" &&
      Array.isArray(obj[key]) === false
    ) {
      let foundStrangs = gatherStrings(obj[key]);
      strangs = strangs.concat(foundStrangs);
      //since concat creates a new array of the combined arrays
      //we need to update the value of strangs to this new array
      //or else strangs will start over as a new empty array 
      //every time we encountered a nested obj
    }
    console.log("straaaaangs: ", strangs, "obj: ", obj, "key: ", key);
  }
  return strangs;
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
