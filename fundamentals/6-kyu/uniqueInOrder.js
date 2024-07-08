// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  // const regex = /(.)\1+/g;
  // return Array.isArray(iterable)
  //   ? iterable.join("").replace(regex, "$1").split("")
  //   : iterable.replace(regex, "$1").split("");

  const results = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      results.push(iterable[i]);
    }
  }

  return results;
};

console.log(uniqueInOrder([1, 2, 2, 3, 3]));

//solution i liked
var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
