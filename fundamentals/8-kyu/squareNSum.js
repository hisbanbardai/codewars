// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1square + 2square + 2square = 9


function squareSum(numbers) {
  return numbers.map(ele => Math.pow(ele, 2)).reduce((acc, ele) => {
    return acc += ele;
  }, 0)
}

//solution I liked
// function squareSum(numbers) {
//   return numbers.reduce(function (sum, n) {
//     return n * n + sum;
//   }, 0);
// }