//import node modules
let mongoose = require('mongoose');
const express = require('express');

//import modules from this project
const transactionRoutes = require('./controllers/transaction.js');

//create a connection to mongoDB
mongoose.connect('mongodb://localhost/splitzease', {useMongoClient: true});

//create an express app
var app = express();
//use transaction routes
transactionRoutes(app);
//configure port
const PORT = process.env.PORT || 3000;

//open the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('successfully connected to mongodb!');

    app.listen(PORT, () => console.log("server running on port:", PORT));
});

