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
