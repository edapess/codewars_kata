function nthFibo(n) {
    let fibonacci = []
    fibonacci[0] = 0
    fibonacci[1] = 1
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
    }
    return fibonacci[n-1]
}


console.log(nthFibo(1));
console.log(nthFibo(2));
console.log(nthFibo(3));
console.log(nthFibo(4));