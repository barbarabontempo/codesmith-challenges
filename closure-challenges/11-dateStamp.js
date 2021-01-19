// Challenge 11
// Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an output key that contains the result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects.


// CHALLENGE 11
function dateStamp(callback) {
  let date = new Date().toLocaleDateString()
  let obj = {}
  function innerFunc(num){
    let result = callback(num)
    obj["date"] = date
    obj["output"] = result
    return obj
  }
  return innerFunc
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

