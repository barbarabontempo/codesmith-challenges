// Challenge 17
// Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return false.

function makeFuncTester(arrOfTests) {

    function innerFunc(callback){
        for(let i = 0; i < arrOfTests.length; i++){
            if(callback(arrOfTests[i][0]) ===  arrOfTests[i][1]){
                return true; 
            } else {
                console.log("1:", callback(arrOfTests[i][0]))
                console.log("2:", arrOfTests[i][1])
                return false; 
            }
        }
    }
    return innerFunc;
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
console.log(capLastTestCases)


const shouldCapitalizeLast = makeFuncTester(capLastTestCases); //invoking makeFuncTester

const capLastAttempt1 = str => str.toUpperCase();

const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();

console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false

console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
