// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  //Understand the problem
  //Two inputs: an array of numbers and a limit number
  //Check if all numbers in array are below or equal to limit number
  //Return true if all are below or equal otherwise return false

  //Break into sub problems
  //Loop over the array
  //Compare each number with limit number
  //As soon as find condition for any number false return false altogether

  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) return false;
  }
  return true;
}
