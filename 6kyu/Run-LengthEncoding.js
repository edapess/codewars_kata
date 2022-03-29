var runLengthEncoding = function(str){
    const array=[];
    let val=1;
    for (let i=0;i<str.length;i++){
        if (str[i]!==str[i+1]){
        array.push([val,str[i]]);
        val=1;
        } else {
        val++;
        }
    }
    return array;
  }