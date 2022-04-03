// function getLengthOfMissingArray(arrayOfArrays) {
//     if (arrayOfArrays.length === 0) {
//         return 0
//     } else {
//         arrayOfArrays.sort((a, b) => a.length - b.length)
//         for (let i = 0; i < arrayOfArrays.length - 1; i++) {
//             if (arrayOfArrays[i] === null || arrayOfArrays[i].length === 0)
//                 return 0
//             else if (arrayOfArrays[i].length + 1 !== arrayOfArrays[i + 1].length) {
//                 return arrayOfArrays[i].length + 1
//             }
//         }
//     }
// }

// ----------------------------------------------
function getLengthOfMissingArray(arrayOfArrays) {
    if (!Array.isArray(arrayOfArrays) || arrayOfArrays.length ===0 ) return 0
    if (arrayOfArrays.some(array => !Array.isArray(array))) return 0
    arrayOfArrays.sort((a, b) => a.length - b.length)
    for (let i = 0; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i] === null || arrayOfArrays[i].length === 0) {
            return 0
        } else if (arrayOfArrays[i].length + 1 !== arrayOfArrays[i + 1].length) {
            return arrayOfArrays[i].length + 1
        }
    }
}
console.log('====================================');
console.log(getLengthOfMissingArray([
    [1, 2],
    [4, 5, 1, 1],
    [1],
    [5, 6, 7, 8, 9]
])); //3
console.log('====================================');
console.log(getLengthOfMissingArray([
    [5, 2, 9],
    [4, 5, 1, 1],
    [1],
    [5, 6, 7, 8, 9]
])); //2
console.log('====================================');
console.log(getLengthOfMissingArray([
    [null],
    [null, null, null]
])); //2
console.log('====================================');
console.log(getLengthOfMissingArray([
    ['a', 'a', 'a'],
    ['a', 'a'],
    ['a', 'a', 'a', 'a'],
    ['a'],
    ['a', 'a', 'a', 'a', 'a', 'a']
])); //5
console.log('====================================');
console.log(getLengthOfMissingArray([

])); //0