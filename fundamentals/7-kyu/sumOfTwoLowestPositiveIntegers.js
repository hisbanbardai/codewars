// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  let min1 = numbers[0];
  let min2 = numbers[1];

  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] < min1) {
      if (min1 < min2) {
        min2 = min1;
      }
      min1 = numbers[i];
    } else if (numbers[i] < min2) {
      min2 = numbers[i];
    }

  }
  return min1 + min2;
}