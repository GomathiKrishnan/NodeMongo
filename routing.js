const express = require("express");
const { getUsers, postUsers, removeUsers } = require('./controllers/user')

const router = express.Router();

router.get('/users', getUsers)
router.post('/users', postUsers)
router.delete('/removeUser/:id', removeUsers)

module.exports = router;