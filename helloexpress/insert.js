var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myobj = { "id": 11,
    first_name: "Mango",
    last_name: "DB",
    expired: false,
    role: ["user","admin"] };
    db.collection("users").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

