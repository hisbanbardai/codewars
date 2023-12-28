// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

//Understand the problem
//A number as an input which will be integer meaning no decimals
//Each digit should be absoulte meaning positive
//Sum each digit of the number
//Return sum

//Break into sub problems
//Split each digit of the number
//Make sure it is absolute
//Sum the digits

function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((acc, ele) => acc + Number(ele), 0);
}
