const map = require("through2-map");
const http = require("http");


const server = http.createServer(function(req, res) {
  var body="";
  if (req.method === "POST") {
    req.on("data", function (chunk) {
        body += chunk;
    });

    req.on("end", function(){

        res.end(body.toUpperCase());
    });
  }
  // body.pipe(map(function(chunk) {
  //       return chunk.toString().split("").reverse()
  //         .join("");
  //     })
  //   )
  //   .pipe(res);
});
server.listen(process.argv[2]);
