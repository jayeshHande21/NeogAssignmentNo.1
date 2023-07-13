// 1. Write an ES6 function that takes an array of numbers and returns a new array with only the odd numbers.

export const getOddNumbers = (arr) => {
  // Your ES6 code here
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(getOddNumbers([2, 6, 7, 3, 8, 9, 13]));
