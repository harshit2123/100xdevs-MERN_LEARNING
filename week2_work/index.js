// const fs = require("fs");

const express = require("express");
const app = express();
const port = 3000;

function sumfn(counter) {
  var sum = 0;
  for (var i = 0; i < counter; i++) {
    sum = sum + i;
  }
  return sum;
}

app.get("/handlesum", (req, res) => {
  var calculatedsum = sumfn(100);
  var result = "The sum is " + calculatedsum;
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// function callbackfn(err, data) {
