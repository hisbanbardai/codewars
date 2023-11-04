// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


// function reverseWords(str) {
//   let finalStr = "";
//   str.split(' ').forEach(element => {
//     for (let index = element.length - 1; index >= 0; index--) {
//       finalStr += element[index];
//     }
//     finalStr += ' ';
//   });
//   return finalStr.slice(0, finalStr.length - 1);
// }

//solution I liked
function reverseWords(str) {
    return str.split("").reverse().join('').split(' ').reverse().join(' ');
}