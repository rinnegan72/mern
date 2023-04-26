const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/record/").get(function (req, res) {
  let db_connect = dbo.getDb("employees");

 var obj = db_connect.collection("records").find({});
 console.log("before to array"); 
   obj.toArray().then(function(result) {
    console.log("to array",result);
    res.json(result);
    console.log("result setup");
  });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 console.log(db_connect); 
 let myquery = { _id: ObjectId(req.params.id) };
 console.log(myquery); 
 db_connect.collection("records").findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  console.log("hi");
 let db_connect = dbo.getDb();
 let myobj = {
  _id:new ObjectId(),
   name: req.body.name,
   position: req.body.position,
   level: req.body.level,
 };
 db_connect.collection("records").insertOne(myobj);
   console.log("1 document inserted");
});
 
// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     name: req.body.name,
     position: req.body.position,
     level: req.body.level,
   },
 };
 db_connect
   .collection("records")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("records").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = recordRoutes;