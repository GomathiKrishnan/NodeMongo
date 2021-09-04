const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const models = require("./models");
const router = require("./routing");
const db = require('./DB/connection')
// const errorHandler = require("./utils/errorHandler");
// const logger = require("./utils/logger");

const app = express();
const port = process.env.PORT || 4000;
// parsing the POST data to req.body
app.use(express.json()); // parse the content-type application/JSON
app.use(express.urlencoded({ extended: true })); // parse the content-type application/x-www-form-urlencoded
// extended true will use qs and allow nested object data. false will use query-string and not supports nested object.

app.use(cors())

// logging
// app.use(logger);
app.use("/api/", router); // this will call for all the requests

// app.use(errorHandler); // global error handler for all requests

db.connection.once('open', function () {
  console.log('Connection Successful')
  console.log('port',port);
  app.listen(port, () => console.log(`Example app listening on port port!`));
});
