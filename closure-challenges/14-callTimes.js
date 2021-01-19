// Challenge 14
// Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.

function callTimes() {
let count = 1;

    function innerFunc(){
        let times = count
        count++ 
        return times 
    }

    return innerFunc;
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();

console.log(myNewFunc1()); // => 1
console.log(myNewFunc1()); // => 2
console.log(myNewFunc2()); // => 1
console.log(myNewFunc2()); // => 2