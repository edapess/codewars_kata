function revrot(str, sz) {
    if (sz <= 0 || str == '' || sz > str.length) {
      return '';
    }
    const array = [];
    const s = str.split('');
    while (s.length >= sz) {
      array.push(s.splice(0, sz));
    }
    const res = array.map((x) => {
      const sum = x.reduce((a, c) => a + Math.pow(c, 3), 0);
      if (sum % 2) {
        x.push(x[0]);
        x.shift();
        return x.join('');
      } else {
          
        return x.reverse().join('');
      }
    });
    return res.join('');
  }
  
  revrot("1234", 5)