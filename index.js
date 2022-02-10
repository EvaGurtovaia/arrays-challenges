// reverse the string

function reverse(str) {
    if (!str || str.length < 2 || !typeof str == "string") {
        return "hmm... That's not good";
    }

    const backWards = [];
    const len = str.length - 1;
    for (let i = len; i >= 0; i--) {
        backWards.push(str[i]);
    }
    return backWards.join(" ");
}

console.log(reverse("Hi, My name is Eva"));

const reverseTwo = (str) => [...str].reverse().join(" ");
console.log(reverseTwo("Hi, My name is Eva"));

//merge and sort two arrays

const mergeTwo = (arr1, arr2) => {
    const arr3 = arr1.concat(arr2);
    return arr3.sort();
};

console.log(merge([1, 2, 4], [3, 6, 5]));

const merge = (arr1, arr2) => {
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }

    const mergedArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArray.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        } else {
            mergedArray.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }
    return mergedArray;
};

console.log(mergeTwo([1, 2, 4], [3, 5, 6]));

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

//Example 1:

//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

var twoSum2 = function (nums, target) {
    let collection = [];
    for (let i = 0; i < nums.length; i++) {
        if (collection.includes(target - nums[i])) {
            return [nums.indexOf(target - nums[i]), i];
        }
        collection.push(nums[i]);
    }
    return "there is no match";
};

console.log(twoSum2([3, 2, 4], 6));

//Best Time to Buy and Sell Stock
//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

const maxProfit = (prices) => {
    //7
    let minPrice = prices[0];
    let maxProft = 0;

    for (const price of prices) {
        /// [7, 6, 4, 3, 1]
        minPrice = Math.min(minPrice, price);
        //(7, 7) - 7
        //(7, 6) - 6
        //(6, 4) - 4
        //(4, 3) - 3
        //(3, 1) - 1

        maxProft = Math.max(maxProft, price - minPrice);
        //(0, 7-7) - 0
        //(0, 6 - 6) - 0
        //(0, 4 - 4) - 0
        //(0, 3 - 3) - 0
        //(0, 1-1) - 5
    }

    return maxProft;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 3, 4, 6, 7]));
console.log(maxProfit([2, 4, 1]));

//Contains Duplicate
//Given an integer array nums, return true if any value appears at least twice in the array,
//and return false if every element is distinct.

const containsDuplicate = (nums) => {
    let collection = [];
    for (const num of nums) {
        if (collection.includes(num)) {
            return true;
        }
        collection.push(num);
    }
    return false;
};

const containsDuplicate2 = (nums) => {
    let collection = [...new Set(nums)];
    if (collection.length !== nums.length) {
        return true;
    } else return false;
};
console.log(containsDuplicate2([1, 3, 4, 2]));

//Maximum Number of Words Found in Sentences

//A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
//You are given an array of strings sentences, where each sentences[i] represents a single sentence.
//Return the maximum number of words that appear in a single sentence.

const mostWordsFound = (sentences) => {
    let maxWords = 0;
    for (const sentence of sentences) {
        maxWords = Math.max(maxWords, sentence.split(" ").length);
    }
    return maxWords;
};

// Move zeroes
//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//Note that you must do this in-place without making a copy of the array.

const moveZeroes = (nums) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        // console.log(nums[i])
        if (nums[i] === 0) {
            //console.log(nums[i])
            nums.push(nums[i]);
            //console.log(nums)
            nums.splice(i, 1);
            //console.log(nums)
        }
    }
    return nums;
};

console.log(moveZeroes([0, 0, 3, 12]));

//You are given a large integer represented as an integer array digits,
//where each digits[i] is the ith digit of the integer.
//The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

//Increment the large integer by one and return the resulting array of digits.
//Input: digits = [1,2,3]
//Output: [1,2,4]

const plusOne = (digits) => {
    const l = digits.length - 1;
    if (digits[l] < 9) {
        digits[l] = digits[l] + 1;
        return digits;
    } else return (BigInt(digits.join("")) + 1n).toString().split("");
};

// First Unique Character in a String

//Given a string s, find the first non-repeating character in it and return its index.
//If it does not exist, return -1.

//Input: s = "leetcode"
//Output: 0

const firstUniqChar = (s) => {
    let collection = new Map();

    for (let i = 0; i < s.length; i++) {
        collection.set(s[i], (collection.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (collection.get(s[i]) === 1) return i;
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));

// Valid Anagram
//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//An Anagram is a word or phrase formed by rearranging the letters of a different word
//or phrase, typically using all the original letters exactly once.

//Input: s = "anagram", t = "nagaram"
//Output: true

//Input: s = "rat", t = "car"
//Output: false

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    let collection = {};
    let collection2 = {};

    for (let val of s) {
        collection[val] = (collection[val] || 0) + 1;
    }

    for (let val of t) {
        collection2[val] = (collection2[val] || 0) + 1;
    }
    console.log(collection);
    console.log(collection2);
    for (let key in collection) {
        if (!(key in collection2)) {
            return false;
        }
        if (collection2[key] !== collection[key]) {
            return false;
        }
    }
    return true;
};

//Implement a function calle countUniqueValues, which accepts a sorted array
//and count the unique values in the array. There can be negative numbers in the array,
//but it will always be sorted.

const countUniqueValues = (arr) => {
    let result = new Set(arr);
    return result.size;
};

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7

//You are given an integer array nums consisting of n elements, and an integer k.
//Find a contiguous subarray whose length is equal to k
//that has the maximum average value and return this value.
//Any answer with a calculation error less than 10-5 will be accepted.

//Input: nums = [1,12,-5,-6,50,3], k = 4
//Output: 12.75000
//Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

const findMaxAverage = (nums, k) => {
    let maxSum = 0;
    let tempSum = 0;
    if (nums.length < k) return null;
    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
    }

    tempSum = maxSum;

    for (let j = k; j < nums.length; j++) {
        tempSum = tempSum - nums[j - k] + nums[j];
        maxSum = Math.max(maxSum, tempSum);
    }

    let maxAvr = maxSum / k;
    return maxAvr;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
