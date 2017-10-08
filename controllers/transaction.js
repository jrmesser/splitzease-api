const Transaction = require("../models/Transaction.js");
const parseOCR = require("../utils/OCRparser.js");

module.exports = app => {
    app.get('/transaction/:id', (req, res) => {
        Transaction.findOne({id: req.params.id},(err, docs)=> {
            if (err) {res.json(err);}
            else {
                res.json(docs);
            }
        });
    });
    app.post('/transaction/:id', (req, res) => {
        let newTransaction = {};
        newTransaction.id = req.params.id;
        newTransaction.userID = req.body.userID;
        newTransaction.items = parseOCR(req.body.OCRText).map((c,i,l) => {
                let a = {};
                a.name = c[0];
                a.price = c[1];
                return a;
        });
        newTransaction.party = [];
        Transaction.create(newTransaction, (err, newTrans) => {
            if (err) {res.json(err);}
            else {
                res.json(newTrans);
            }
        });
    });

    app.put('/transaction/:id', (req, res) => {
        res.json(true);
    });

    app.delete('/transaction/:id', (req, res) => {
        res.json("Nope!");
    });
    return app;
};

