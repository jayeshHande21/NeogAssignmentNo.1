// 5. Write an ES6 function that takes two array of numbers of equal length and returns a new array with the sum of each corresponding element in the two arrays. Avoid using in-built methods.

export const sumArrays = (arr1, arr2) => {
  // Your ES6 code here
  let newArrSum = [];
  for (let i = 0; i < arr1.length; i++) {
    newArrSum.push(arr1[i] + arr2[i]);
  }
  return newArrSum;
};

console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5])); // [2, 4, 6, 9]
