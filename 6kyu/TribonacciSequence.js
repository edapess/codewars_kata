function tribonacci(signature, n) {
    let startPack = [...signature]
    if(n === 0) {
      startPack = []
    }
    else if (n === 1) {
       startPack = [startPack[0]]
    }
    else{
      for (let i = 0; i < n - signature.length; i++) {
        startPack.push(startPack[startPack.length-1]+startPack[startPack.length-2]+startPack[startPack.length-3])
      }
    }
     
      console.log(startPack);
      return startPack
    }