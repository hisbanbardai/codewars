// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  const result =
    (classPoints.reduce((acc, ele) => acc + ele, 0) + yourPoints) /
    classPoints.length;
  return yourPoints >= Math.floor(result);
}

console.log(
  betterThanAverage([
    43,91,21,90,11,50,83,71,45,64,27,67,14,90,60,40,37,57,40,90,29,33,59,6,68,93,15,49,19,20,86,94,28,94,87,18,41,11,81,42,63,19,14,9,0,25,29,42,5,4],46)
);
