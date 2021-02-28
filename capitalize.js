// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(string) {
    
    // create array for access to iterator methods
    // make each word an element in the array
    // separate first letter of each word and capitalize
    // concat first letter with remaining letter of word
    // return all words to one string

    const words = [];
    for ( let word of string.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}