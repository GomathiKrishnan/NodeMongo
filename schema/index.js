const { Schema, model } = require('mongoose');

//Define a schema
const userSchema = new Schema({
  Name: String,
  Age: Number,
  Gender: String
});

module.exports = model('userModel', userSchema);