// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     let result = 0;
//     const target = ['a', 'e', 'i', 'o', 'u'];
//     for (let char of str.toLowerCase()) {
//         if (target.includes(char)) {
//             result++;
//         }
//     }
//     return result;
// }

function vowels(str) {
 const matches = str.match(/[aeiou]/gi);
 return matches ? matches.length : 0;
}
