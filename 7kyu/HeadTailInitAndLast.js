let head = (arr) => arr[0]
let tail = (arr) => {

    return arr.slice(1)
}
let init = (arr) => {
    arr.splice(-arr.length - 1)
    return arr
}
let last = (arr) => arr[arr.length - 1]

console.log('head([1,2,3,4,5]):', head([1, 2, 3, 4, 5]))
console.log('last([1,2,3,4,5]):', last([1, 2, 3, 4, 5]))
console.log('tail([1,2,3,4,5]):', tail([1, 2, 3, 4, 5]))
console.log('init([1,2,3,4,5]):', init([1, 2, 3, 4, 5]))

console.log('head([38, 2, 18]):', head([38, 2, 18]))
console.log('last([38, 2, 18]):', last([38, 2, 18]))
console.log('tail([38, 2, 18]):', tail([38, 2, 18]))
console.log('init([38, 2, 18]):', init([38, 2, 18]))