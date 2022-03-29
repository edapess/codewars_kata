String.prototype.toJadenCase = function () {
   
    let strArray = this.split(' ')
    
    
    return strArray.map((str)=>(
        str.charAt(0).toUpperCase() + str.slice(1)
    )).join(' ');
    
    
    
      };