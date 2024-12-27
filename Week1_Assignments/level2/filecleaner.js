//use the fs library to as a black box

const fs = require("fs");

//read the file
fs.readFile("filecleaner.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("error while reading");
    return;
  }
  console.log("orignal content: ", data);
  const cleaned_data = data.replace(/\s+/g, " ").trim();

  console.log("cleaned File ", cleaned_data);

  // write the file
  fs.writeFile("filecleaner.txt", cleaned_data, (err) => {
    if (err) {
      console.error("error while reading");
      return;
    }
    console.log("file changed successfully");
  });
});
