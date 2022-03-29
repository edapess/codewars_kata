function absentVowel(x) {
    let vowelArr = ['a', 'e', 'i', 'o', 'u']
  
    for (let i = 0; i < vowelArr.length; i++) {
      if (x.indexOf(vowelArr[i]) == -1) {
          return i
      }
  
    }
  
  }