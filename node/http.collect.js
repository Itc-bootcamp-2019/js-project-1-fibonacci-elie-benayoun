const http=require('http');
const bl=require('bl');

let newlist=[];
http.get(process.argv[2],function callback(response){
    response.pipe(bl (function(err,data){
        if(err){
            console.log(err);
        }
        console.log(data.toString().length);
        console.log(data.toString());
    }))
});