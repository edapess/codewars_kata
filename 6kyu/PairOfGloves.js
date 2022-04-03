function numberOfPairs(gloves) {
    let sum =0
    let glovesObject = gloves.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = (accumulator[currentValue] ? accumulator[currentValue] : 0) + 1
        return accumulator
    }, {})
    for (const key in glovesObject) { 
        sum+= Math.floor(glovesObject[key] / 2)
    }
    return sum
}

console.log('====================================');
console.log(numberOfPairs(['red', 'red'])); //1
console.log('====================================');
console.log(numberOfPairs(['red', 'green', 'blue'])); //0
console.log('====================================');
console.log(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black'])); //3
console.log('====================================');
console.log(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black', 'gray', 'gray', 'gray'])); //4