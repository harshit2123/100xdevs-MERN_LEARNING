import fs from 'fs';
import {Command} from 'commander'
const program = new Command();

program
  .name("String-Util")
  .description("CLI to some Javascript string utilities")
  .version("0.0.1");

program
  .command("count")
  .description("Count the number of characters in the path")
  .argument("<string>", "string to count")
  .action((file) => {
     fs.readFile(file,'utf-8',(err,data)=>{
      if(err){
        console.log(err);
      }else{
        const words = data.split(' ').length;
        console.log(`There are ${words} words in the ${file}`);
      }
     })
  });

program.parse();
