const { Schema, model } = require('mongoose');

//Define a schema
const userSchema = new Schema({
  Name: {type: String,required:true},
  Age: {type: Number,required:true},
  Gender: {type:String,required:true}
});

module.exports = model('userModel', userSchema);