// write a function 'filterArray' that takes an array and a callback
// as arguments.

//"FilterArray" should filter the elements of the array based on the condition specified
// by the callback function and return a new array with the filtered Element

let arr = [1, 2, 3, 4, 5];

function condition(element) {
  if (element != 1) {
    return element * 2;
  } else {
    return -1;
  }
}
function filterArray(arr, callback) {
  return arr.map(callback);
}

let newArr = filterArray(arr, condition);
console.log(newArr);
