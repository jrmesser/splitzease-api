//import node modules
let mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

//import modules from this project
const transactionRoutes = require('./controllers/transaction.js');
const userRoutes = require('./controllers/user.js');

//create a connection to mongoDB
mongoose.connect('mongodb://localhost/splitzease', {useMongoClient: true});

//create an express app
var app = express();

//configure port
const PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

//use transaction routes
transactionRoutes(app);
//use user routes
userRoutes(app);

//open the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('successfully connected to mongodb!');

    app.listen(PORT, () => console.log('server running on port:', PORT));
});

