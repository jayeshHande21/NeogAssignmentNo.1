// 9. Write an ES6 function that takes two strings as input and determines if they are the same or not.

export const areStringsEqual = (str1, str2) => {
  // Your ES6 code here
  if (str1 === str2) return true;
  return false;
};

console.log(areStringsEqual("Apple", "Apple")); // true
console.log(areStringsEqual("Apple", "apple")); // false
console.log(areStringsEqual("Papaya", "Watermelon")); // false
