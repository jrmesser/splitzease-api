const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    transactionID: String,
    id: {type: String, required: true},
    date: {
        type: Date,
        default: Date.now
    },
    userID: {type: String, required: true},//matches firebase ID used for authentication
    party: [{ //defines the party the split is among
        personId: {type: Number, required: true},
        phone: {type: Number, required: true},
        total: Number
    }],
    items: [{ //defines the items on the receipt
        name: {type: String, required: true},
        price: {type: Number, required: true},
        person: {type:[Number], required: true}
    }]
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
