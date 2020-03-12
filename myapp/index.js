const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
let myarray = [];
const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

app.use(cors());

// milestone 2
// app.get("/fibonacci/:number", (req, res) => {
//   number = req.params.number;
//   function reccursion(number) {
//     if (number <= 1) {
//       return number;
//     } else {
//       return reccursion(number - 1) + reccursion(number - 2);
//     }
//   }
//   result = reccursion(number);
//   console.log(result);
//   myarray.push(result);
// });

// app.get("/:getFibonacciResults", (req, res) => {
//   res.send(myarray);
// });
// app.listen(port, () => console.log(`my server listening on port ${port}!`));

//milestone 3
function reccursion(number) {
  if (number <= 1) {
    return number;
  } else {
    return reccursion(number - 1) + reccursion(number - 2);
  }
}

app.get("/fibonacci/:number", (req, res) => {
  number = req.params.number;
  result = reccursion(number);
  console.log(result);
  let obj = {
    number: number,
    result: result,
    createdDate: new Date()
  };
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").insertOne(obj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
  res.send(result.toString());
});

app.get("/:getFibonacciResults", (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var query = { result };
    dbo.collection("customers").find().toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });

});
app.listen(port, () => console.log(`my server listening on port ${port}!`));
