// implement a func "mapArray"taht an array & a callback function as arguments.
// 'mapArray' should apply callback function to each of the array and return a
// new array with modified values

let arr = [1, 2, 3];
function add1(element) {
  return element + 1;
}

function mapArray(arr, callback) {
  return arr.map(callback);
}

newArr = mapArray(arr, add1);
console.log(newArr);
