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
recordRoutes.route("/record1/").get(function (req, res) {
  let db_connect = dbo.getDb("oru");
  var query = {
    $expr: {
      $and: [
        { $lt: [{ $convert: { input: { $substr: ["$income", 1, -1] }, to: "double" } }, 5] },
        { $in: ["$car", ["BMW", "Mercedes"]] }
      ]
    }
  };
  var obj = db_connect.collection("users").find(query); 
  console.log("before to array"); 
    obj.toArray().then(function(result) {
     console.log("to array, if required print the result");
     res.json(result);
     console.log("result setup");
   });
  });

// This section will help you get a list of all the records.
recordRoutes.route("/record2/").get(function (req, res) {
  let db_connect = dbo.getDb("oru");
  var query = {
    $and: [
      { gender: "Male" },
      {
        $expr: {
          $gt: [
            { $convert: { input: "$phone_price", to: "double" } },
            10000
          ]
        }
      }
    ]
  };
  
  var obj = db_connect.collection("users").find(query); 
  console.log("before to array"); 
    obj.toArray().then(function(result) {
     console.log("to array, if required print the result");
     res.json(result);
     console.log("result setup");
   });
  });

recordRoutes.route("/record3/").get(function (req, res) {
  let db_connect = dbo.getDb("oru");
  var query = {
    $and: [
      { last_name: /^M/i },
      { $expr: { $gt: [ { $strLenCP: "$quote" }, 15 ] } },
      {
        $expr: {
          $regexMatch: {
            input: "$email",
            regex: "$last_name",
            options: "i"
          }
        }
      }
    ]
  };

  var obj = db_connect.collection("users").find(query); 
  console.log("before to array"); 
    obj.toArray().then(function(result) {
     console.log("to array, if required print the result");
     res.json(result);
     console.log("result setup");
   });
  });


  recordRoutes.route("/record4/").get(function (req, res) {
    let db_connect = dbo.getDb("oru");
    var query = {
      $and: [
        { car: { $in: ["BMW", "Mercedes", "Audi"] } },
        { email: { $not: /\d/ } }
      ]
    };
    
  
    var obj = db_connect.collection("users").find(query); 
    console.log("before to array"); 
      obj.toArray().then(function(result) {
       console.log("to array, if required print the result");
       res.json(result);
       console.log("result setup");
     });
    });


    // This section will help you get a list of all the records.
recordRoutes.route("/record5/").get(function (req, res) {
  let db_connect = dbo.getDb("oru");
  var pipeline = [
    {
      $group: {
        _id: "$city",
        count: { $sum: 1 },
        avgIncome: {
          $avg: {
            $convert: {
              input: { $substr: ["$income", 1, -1] },
              to: "double"
            }
          }
        }
      }
    },
    { $sort: { count: -1 } },
    { $limit: 10 }
  ];
  printTopCities(); 
  
  async function printTopCities() {
    let db_connect = dbo.getDb("oru");
    let result = await db_connect.collection("users").aggregate(pipeline).toArray().then(function(result) {
      //console.log("to array, if required print the result");
      res.json(result);
      //console.log("result setup");
    });
    }
  });

module.exports = recordRoutes;