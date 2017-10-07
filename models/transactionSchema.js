const mongoose = require("mongoose");

module.exports = mongoose.Schema({
        transactionID: String,
        id: String,
        date: Date,
        userID: String, //matches firebase ID used for authentication
        party: [{ //defines the party the split is among
	          personId: Number,
	          phone: Number,
	          total: Number
        }],
        items: [{ //defines the items on the receipt
	          name: String,
	          price: Number,
	          person:[{
	                  name: String,
	                  price: Number,
	                  person: [Number]
            }]
        }]
});
