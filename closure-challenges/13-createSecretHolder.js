// Challenge 13
// There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret

function createSecretHolder(secret) {
  let secret2 = secret
  return obj = {
    getSecret: function(){
      return secret2
    },
    setSecret: function(arg){
      return secret2 = arg
    }
  }
}

// /*** Uncomment these to check your work! ***/
obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
obj.setSecret(2)
console.log(obj.getSecret()) // => returns 2

