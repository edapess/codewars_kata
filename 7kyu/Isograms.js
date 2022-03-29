function isIsogram(str){
    return str.toLowerCase().split('').filter((el,index, array)=> array.indexOf(el)==index).length ==str.length
  }