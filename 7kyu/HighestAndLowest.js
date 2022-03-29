function highAndLow(numbers){
    let numArr =  numbers.split(' ').map(Number)
    
    const low = Math.min(...numArr)
    const high = Math.max(...numArr)
    return `${high} ${low}`
    
    }