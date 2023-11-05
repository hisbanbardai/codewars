// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


// function accum(s) {
//   let finalStr = "";
//   for (let i = 0; i < s.length; i++){
//     finalStr += `${s[i].toUpperCase()}`;
//     for (let j = 0; j < i; j++){
//       finalStr += s[i].toLowerCase();
//     }
//     if (i !== s.length - 1)
//     finalStr += '-';
//   }
//   return finalStr;
// }

//Solution I liked
function accum(s) {  //let s = 'abcd'
  return s.split('') //array [a, b, c, d]
    .map((element, index) => element.toUpperCase + element.toLowerCase().repeat(index)) //[A,Bb,Ccc,Dddd]
    .join('-');
}