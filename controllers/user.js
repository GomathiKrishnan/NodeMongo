const UserModel = require('../schema')

exports.getUsers = (req, res) => {
  try {
    console.log('getUsers', req.query)
    UserModel.find({...req.query}, (err, docs) => {
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
  res.send(`Data received`)
}