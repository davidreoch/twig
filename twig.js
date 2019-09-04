var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

const arraySize = myArgs.length-1;
const splitSize = myArgs[myArgs.length-1];

var output = [];

let x = arraySize % splitSize;
console.log('remainder = ' + x);


