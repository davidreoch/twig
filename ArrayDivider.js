/**
 * Returns an array with arrays of the given size.
 *
 * @param arr {Array} Array to split
 * @param divideAmount {Integer} Size of every group
 */
const groupArrayElements = ((arr, divideAmount) => {

  if (typeof divideAmount === 'number') {
    var ret = [];
    var arraySize = arr.length;

    if (arr.length === 0) {
      console.log('No elements in array!');
    } else if (divideAmount < 0) {
      console.log('Please specify a positive number for dividing array!');
    } else {
        var increment = Math.ceil(arraySize / divideAmount);
        for (var i = 0; i < arraySize; i += increment) {
          ret.push(arr.slice(i, i + increment));
      }
    }
    return ret;
  } else {
    console.log('Second arg must be an integer!');
  }
  return null;
});

const ret = groupArrayElements([], 5)
console.log(ret);
