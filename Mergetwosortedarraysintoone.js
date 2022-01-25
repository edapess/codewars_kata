function mergeArrays(arr1, arr2) {
 let newArr = arr1
 arr2.map(el =>newArr.push(el))
 return Array.from(new Set(newArr.sort(function(a, b) {
    return a - b;
  }))) 
}


console.log(mergeArrays([1,2,3,4], [5,6,7,8]));
