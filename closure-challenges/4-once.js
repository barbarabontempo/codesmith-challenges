// Challenge 4
// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

// CHALLENGE 4
function once(callback) {
    let count = 0;
    let result;

    function innerFunc(num){
        if(count === 0){
            result = callback(num); // 6
            count++ // count = 1
            return result // 6
        } else {
            return result //6
        }
        
    }
   return innerFunc
}

// /*** Uncomment these to check your work! ***/
let addByTwo = function(num){
    return num + 2
}
const onceFunc = once(addByTwo);

console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6

