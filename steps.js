// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     // create a series of rows (strings) equal to the argument
//     // add one hash to the first string and increment upwards through all the strings
//     // any spaces not filled with hashes should be empty spaces
//     // console log each row

//     for (let i = 0; i < n; i++) {
//         let stair = '';

//     for (let j = 0; j < n; j++) {
//         if (j <= i) {
//             stair += '#';
//         }else {
//             stair += ' ';
//         }
//     }
//     console.log(stair)

//     }
// }

function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    } 

    if (n === stair.length ) {
        console.log(stair);
        steps(n, row + 1);
        return;
    }

    if ( stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair)
}