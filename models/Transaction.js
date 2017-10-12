const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    userID: {type: String, required: true},//matches firebase ID used for authentication
    party: [{ //defines the party the split is among
        personId: {type: Number},
        phone: {type: Number},
        total: Number
    }],
    items: [{ //defines the items on the receipt
        name: {type: String, required: true},
        price: {type: Number, required: true},
        person: {type:[Number]}
    }],
    ocrResult: [
        [ String, Number ]
    ],
    tax: Number,
    total: Number,
    tipPer: Number,
    tip: Number,
    perPerson: Number,
    splitEven: {type: Boolean, required: true, default: false}
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
