function sortByBit(arr) {
    const count=(bit)=>bit.toString(2).replace(/[0]/g,'').length
    return arr.sort((a,b)=>count(a)===count(b)?a-b:count(a)-count(b))
  }