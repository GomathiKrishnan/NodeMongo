const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test');
module.exports = mongoose;

// new UserModel({
//   Name: 'krishnan',
//   Age: 60,
//   Gender: 'Male'
// }).save().then((res) => console.log('User created', res));


// userModel.create({
//   Name: 'Ramesh',
//   Age: 60,
//   Gender: 'Male'
// });
// var util= require('util');
// var encoder = new util.TextEncoder('utf-8');
// (async function () {
// })()


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });