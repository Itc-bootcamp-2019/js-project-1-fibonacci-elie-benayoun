const fs = require("fs");
const path = require('path');

fs.readdir(process.argv[2], (error, filecontent) => {
  if (error) {
    console.log(error);
  }
  for (let i = 0; i < filecontent.length; i++) {
    if (path.extname(filecontent[i]) == "."+process.argv[3]) {
      console.log(filecontent[i]);
    }
  }
});
