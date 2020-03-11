const mymodule=require("./my-module");

mymodule(process.argv[2],process.argv[3],function(error,mylist){
    if(error){
        console.log(error);
    }
    for(let i=0;i<mylist.length;i++){
        console.log(mylist[i]);
    }
});