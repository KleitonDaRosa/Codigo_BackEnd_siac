
require('dotenv').config()
const express = require('express');
const pool = require('./config/database')

const app = express();
console.log("ola")
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
const testRoutes = require('./routes/testdata');

pool.connect((err, client, release) => {
    if (err) {
        return console.error(
            'Error acquiring client', err.stack)
    }
    client.query('Select * from curso', (err, result) => {
        release()
        if (err) {
            return console.error(
                'Error executing query', err.stack)
        }
        console.log("Connected to Database !")
        console.log(result.rows)
    })
})

app.use('/testdata',testRoutes );

const server = app.listen(3003, function () {
    let host = server.address().address
    let port = server.address().port
    // Starting the Server at the port 3000
})








/*
const { Client } = require('pg');

const client = new Client({
    host:"ec2-34-225-159-178.compute-1.amazonaws.com",
    user:"oiqkuxnclquqfh",
    port:5432,
    password:"d2b8e118cc006679937aae3fc1716ed2bd9dc7c7d4c2e6cdf5c0080534f5f0c1",
    database:"d8l1m2ihd40t19",
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();
client.query("Select * from administrador", (err,res)=>{
    if(err){
        console.log(err.message);

    }else{
        console.log("Conectado a base de dados")
        console.log(res.rows);
    }
    client.end;
})

client.close;

*/