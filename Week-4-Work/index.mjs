// // const { commander } = require("commander");
// import {Command} from 'commander'
// const program = new Command();
//------>>program
//   .name("String-Util")
//   .description("CLI to some Javascript string utilities")
//   .version("0.0.1");
//----->>program
//   .command("count")
//   .description("Count the number of characters in the path")
//   .argument("<string>", "string to count")
//   .action((str) => {
//     const length = str.length;
//     console.log(`You have ${length} characters in this string`);
//   });
// program.parse();

import fs from "fs";
function main(fileName){
    fs.readFile(fileName, "utf-8", function(err, data){
       if (err) {
      console.error("Error reading file:", err.message);
      return;
    }
      let total = 0;
      for(let i = 0; i < data.length; i++){
         if( data[i] === " ") {
          total++;
         }
      }
      console.log( total + 1 );
    }
  )
}
main(process.argv[2]);


