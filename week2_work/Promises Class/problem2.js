var today = new Date();
var n = String(today.getDate()).padStart(2, "0");

function higherOrderAsync(callback) {
  console.log(n);
  console.log("Hii from the higheroredr async");
}
setTimeout(higherOrderAsync, n * 1000);
