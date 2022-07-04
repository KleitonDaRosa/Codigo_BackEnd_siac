
require('dotenv').config()
const express = require('express');
const pool = require('./config/database')
const port = process.env.PORT || 3003
const app = express();

app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*")
   res.header(
       "Access-Control-Allow-Headers",
       "*"
   )
   if (req.method === "OPTIONS") {
      res.header(
          "Access-Control-Allow-Methods",
          "POST, PUT, PATCH, GET, DELETE"
      )
      return res.status(200).json({})
   }
   next()
})
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));
const testRoutes = require('./routes/testdata');

app.use("/",testRoutes);
// prevent cors error on frontend
const server = app.listen(port, function () {
   console.log("Server running at port", port )
})




