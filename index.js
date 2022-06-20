
require('dotenv').config()
const express = require('express');
const pool = require('./config/database')
const cors = require("cors")

const app = express();
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
const testRoutes = require('./routes/testdata');

app.use(testRoutes );
// prevent cors error on frontend
const server = app.listen(80, function () {
   console.log("Server running at port 80")
})




