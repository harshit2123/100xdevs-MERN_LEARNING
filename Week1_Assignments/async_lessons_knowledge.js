// Callback Approach
function medicine() {
  console.log("meds 1 rec");
}
setTimeout(medicine, 1000);


// Promise approach - better and powerful approach
function medicine() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 10000);
  });
}

medicine().then(function () {
  console.log("med 1 delivered");
});

// Below are the 2 main syntax for the promises

// new Promise(function (resolve) {...})
// .then(function () {...})

// call stack ->Web Apis
//    ^         
//    |
// callback Queue
// whenever i am busy with my synchronous task, the async task 
// will get completed automatically & gets into callback queue

//     /\s+/g , / : It starts and ends the regex pattern.
//     \s stands for "whitespace character".
//      g  ensures that the pattern gets applied to the whole code 
//     +: Indicates one or more of the preceding character 
//    .trim() , used to remove extra spcae form start and end