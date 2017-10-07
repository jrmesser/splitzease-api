let mongoose = require('mongoose');

//create a connection
mongoose.connect('mongodb://localhost/splitzease');

//open the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('successfully connected to mongodb!');
});

