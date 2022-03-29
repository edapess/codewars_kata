function deepCount(a){
    let count = 0;
    const recurs = array => {
      count += array.length;
      for ( let i of array ) {
        if ( Array.isArray(i) ) {
          recurs(i);
        }
      }
    }
    recurs(a);
    return count;
  }