
require('dotenv').config()
const express = require('express');
const pool = require('./config/database')
const cors = require("cors")
const port = process.env.PORT || 3003
const app = express();
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));
const testRoutes = require('./routes/testdata');

app.use(testRoutes );
// prevent cors error on frontend
const server = app.listen(port , function () {
   console.log("Server running at port 80")
})




