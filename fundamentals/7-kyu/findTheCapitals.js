// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

var capitals = function (word) {
  // Understand the problem
  //we will get a string as an input
  //we want to find indexes of all capital letters in the string
  //we want to return an array

  //Break the problem
  //Find capital letters in the string
  //Get their indexes and put them in an array

  let results = [];

  word.split("").forEach((element, index) => {
    element === element.toUpperCase() && results.push(index);
  });

  return results;
};
