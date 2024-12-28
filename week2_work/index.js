// const fs = require("fs");

const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(middleware1);
app.use(bodyParser.json());

function middleware1(req, res, next) {
  //console.log("from inside middleware, counter:  " + req.body.counter);
  next();
}

function sumfn(counter) {
  var sum = 0;
  for (var i = 0; i <= counter; i++) {
    sum = sum + i;
  }
  return sum;
}

function handleFirstRequest(req, res) {
  //   console.log(req.headers);
  //   var counter = req.headers.counter;
  //   var counter = req.query.counter;
  var counter = req.query.counter;

  //   if (counter < 100000) {
  var calculatedsum = sumfn(counter);
  // var calculatedmul = mulfn(counter);
  //     var result = "The sum is " + calculatedsum;
  //     res.send(result);
  //   } else {
  //     res.status(411).send("You have sent a very big number");
  //   }

  var answerobject = {
    sum: calculatedsum,
    // mul: calculatedmul,
  };

  res.status(200).send(answerobject);
}
// function givepage(req, res) {
//   res.send(`<head>
//   <title>Hello from html pages</title>
// </head>
// <body>
//   <h1>hii there</h1>
// </body>
// `);
// }
//app.get("/handlesum", handleFirstRequest);
app.get("/handlesum", handleFirstRequest);
//app.get("/", givepage);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// function callbackfn(err, data) {

// function mulfn(counter) {
//     if (counter === 0) return 1;
//     var mul = 1;
//     for (var i = 1; i <= counter; i++) {
//       mul *= i;
//     }
//     return mul;
//   }
