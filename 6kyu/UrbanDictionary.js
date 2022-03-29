var WordDictionary = function () {
    this.arr = []
  };
  
  WordDictionary.prototype.addWord = function (word) {
     this.arr.push(word)
  };
  
  WordDictionary.prototype.search = function (word) {
     var regularExp = new RegExp('^'+word+'$')
     return this.arr.find(v=>regularExp.test(v))!==undefined
  };