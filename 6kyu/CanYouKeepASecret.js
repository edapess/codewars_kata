function createSecretHolder(secret) {
    return {
    getSecret:function(){
      return secret
      },
    setSecret:function(e){
      secret=e}
    }
  }