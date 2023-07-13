// 3. Write an ES6 function to reverse a string in JavaScript without using in-built methods.

export const reverseString = (str) => {
  let newStr = [];
  for (let i = str.length; i >= 0; i--) {
    newStr.push(str[i]);
  }
  return newStr.join("");
};

console.log(reverseString("neoG Camp")); // pmaC Goen
