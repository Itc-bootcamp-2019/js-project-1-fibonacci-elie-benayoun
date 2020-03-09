const fs = require("fs");

fs.readFile(process.argv[2],(error,text)=>{
text = text.toString();
let newtext = text.split("\n");
console.log(newtext.length-1);

})