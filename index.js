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
