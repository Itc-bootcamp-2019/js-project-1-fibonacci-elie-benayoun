const fs = require("fs");

let text = fs.readFileSync(process.argv[2]);
text = text.toString();
let newtext = text.split("\n");
console.log(newtext.length-1)
