const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Connection =require('./connection/connection');
const Database = require("./routes/Database")

const app = express();
app.use(bodyParser.json());
app.use(cors());

Connection();
app.use(Database);


app.listen(5000, () => {
    console.log("Server is Running")
})
