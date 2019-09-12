// Take in args from command line in the form node [filename] val1 val2 val3 val4 chunkSize
// remove the first two default args
var myArgs = process.argv.slice(2);
const arraySize = parseInt(myArgs.length - 1);
const chunkSize = parseInt(myArgs.pop());

// the amount to divide by, round number up or down to nearest whole number
const divideAmount = Math.round(arraySize / chunkSize);

// assign output to returned value
const output = chunk(myArgs, divideAmount);

// function which cretes array of elements split equally where possible
function chunk(arr, divideAmount) {
    var ret = [];
    if (arr.length === 0) {
        console.log('No elements in array!');
    } else {
        // loop through array incrementing i by division amount
        for (var i = 0; i < arraySize; i += divideAmount) {
            // push each subarray to ret array
            ret.push(arr.slice(i, i + divideAmount));
        }
    }
    return ret;
}

console.log(output);
