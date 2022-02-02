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

const merge = (arr1, arr2) => {
    const arr3 = arr1.concat(arr2);
    return arr3.sort();
};

console.log(merge([1, 2, 4], [3, 6, 5]));
