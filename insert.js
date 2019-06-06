var MongoClient = require("mongodb").MongoClient;
var firstName = process.argv[2];
var lastName = process.argv[3];
var documents = {
  firstName: firstName,
  lastName: lastName
};
var url = "mongodb://localhost:27017/learnyoumongo";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection("docs");
  collection.insert(documents, function(err, data) {
    if (err) throw err;
    console.log(JSON.stringify(documents));
    db.close();
  });
});
