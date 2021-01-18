// Challenge 2
// Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.

// CHALLENGE 2
function createFunctionPrinter(input) {

    function innerFunc(){
        return console.log(input)

    return innerFunc
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');

const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


/*
Line 5: declare function createFunctionPrinter in global memory-- taking input as a parameter 
Line 14: declaring constant printSample
printSample is equal to the result of calling createFunctionPrinter('sample');
printSample is initially undefined, but createFunctionPrinter returns the function definition of innerFunc
line 15: we are invoking printSample(); -- we know printSample is a label for innerFunc 
we get the string "sample" returned

*/