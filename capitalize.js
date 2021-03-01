// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(string) {

//     // create array for access to iterator methods
//     // make each word an element in the array
//     // separate first letter of each word and capitalize
//     // concat first letter with remaining letter of word
//     // return all words to one string

//     const words = [];
//     for ( let word of string.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return words.join(' ');
// }

function capitalize(string) {
    // create empty string
    // capitalize first charactar of the string
    // look at each character and see if it is preceded by a space
    // capitalize any letter preceded by an empty space

    let result = string[0].toUpperCase();

    for (let i = 1; i < string.length; i++) {

        if (string[i -1] === ' ') {
            result += string[i].toUpperCase();
        } else {
            result += string[i]
        }
    } 
    return result;
}