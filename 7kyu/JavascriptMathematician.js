function calculate() {
    let arguments1 = []
    for (let i = 0; i < arguments.length; i++) {
        arguments1[i] = arguments[i]
    }
    return function () {
        let arguments2 = []
        for (let i = 0; i < arguments.length; i++) {
            arguments2[i] = arguments[i]
        }
        let arguments3 = arguments2.concat(arguments1)
        let sum = arguments3.reduce((acc, el) => {
            return acc + el
        })
        return sum
    }
}
console.log(
    calculate(2,4)(3,7,1)

);