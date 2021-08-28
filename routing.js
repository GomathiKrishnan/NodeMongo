const express = require("express");
const { getUsers, postUsers } = require('./controllers/user')

const router = express.Router();

router.get('/users', getUsers)
router.post('/users', postUsers)
router.delete('/user/:id', postUsers)

module.exports = router;