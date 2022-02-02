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

const merge = (arr1, arr2) =>{
    if (arr1.length === 0){
  return arr2;
    }
    if (arr2.length === 0){
      return arr1;
    }
    
   const mergedArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;
    
    while (arr1Item || arr2Item){
      if (! arr2Item || arr1Item < arr2Item){
          mergedArray.push(arr1Item);
     arr1Item = arr1[i];
      i++;
      }
    else {
      mergedArray.push(arr2Item);
     arr2Item = arr2[j];
      j++;
    }
    }
   return mergedArray; 
  }
  
  
  console.log(mergeTwo([1,2,4],[3,5,6]));
