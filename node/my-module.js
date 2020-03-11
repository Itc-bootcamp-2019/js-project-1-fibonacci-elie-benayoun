const fs = require("fs");
const path = require('path');
let newlist=[]
module.exports = function  (directory,extension,callback){
  fs.readdir(directory,(error,filecontent)=>{
    if (error) {
      callback(error,null);
    }
    else{
    for (let i = 0; i < filecontent.length; i++) {
      if (path.extname(filecontent[i]) == "."+extension) {
        newlist.push(filecontent[i]);
      }
    }
    callback(null,newlist);
  }
  });

}