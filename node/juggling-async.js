const http=require('http');
const bl=require('bl');

http.get(process.argv[2],function callback(response){
    response.pipe(bl (function(err,data){
        if(err){
            console.log(err);
        }
        console.log(data.toString());
    }))
});

http.get(process.argv[3],function callback(response){
    response.pipe(bl (function(err,data){
        if(err){
            console.log(err);
        }
        console.log(data.toString());
    }))
});

http.get(process.argv[4],function callback(response){
    response.pipe(bl (function(err,data){
        if(err){
            console.log(err);
        }
        console.log(data.toString());
    }))
});