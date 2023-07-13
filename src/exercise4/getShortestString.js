// 4. Write an ES6 function that takes an array of strings and returns the shortest string in the array.
export const getShortestString = (arr) => {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = arr[0].length;
    if (arr[i].length < min) min = arr[i].length;
  }
  // console.log(min);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length === min) return arr[j];
  }
};

console.log(
  getShortestString(["primaryuuu", "secondary", "education", "exams", "jayes"])
); // exams
