const UserModel = require('../schema')
// const getUsers = require('')
exports.getUsers = (req, res) => {
  try {
    console.log('getUsers', req.query)
    // UserModel.find({...req.query}, (err, docs) => {
      UserModel.find({}, (err, docs) => {
      if (err) throw err;
      res.send(docs);
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.postUsers = (req, res) => {
  const body = req.body;
  console.log('postUsers', body)
  try {
    console.log('getUsers', req.body)
    UserModel.create({...req.body}, (err, docs) => {
      if (err) throw res.send(err._message),err;
      res.send(docs);
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

exports.removeUsers = (req, res) => {
  console.log('req---',req.params)
  try {
    UserModel.deleteOne({_id:req.params.id}, (err, result) => {
      if (err) throw err;
      res.send(result);
    })
  } catch (error) {
    res.status(500).send(error)
  }
}