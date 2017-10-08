const Transaction = require("../models/Transaction.js");
const parseOCR = require("../utils/OCRparser.js");

module.exports = app => {
    app.get('/transaction/:id', (req, res) => {
        Transaction.findOne({id: req.params.id},(err, docs)=> {
            if (err) {res.json(err).status(500);}
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
            a.name = c[0] === '' ? "Item not found" : c[0];
            a.price = c[1] === '' ? "0.00" : c[1];
            return a;
        });
        newTransaction.party = [];
        Transaction.create(newTransaction, (err, newTrans) => {
            if (err) {res.json(err).status(500);}
            else {
                res.json(newTrans);
            }
        });
    });

    app.put('/transaction/:id', (req, res) => {
        if (req.body.party === undefined || res.body.items === undefined) {res.json(false).status(500);}
        else {
            Transaction.update({id: req.params.id}, {party: req.body.party, items: req.body.items}, (err, docs) => {
                if (err) {res.json(err).status(500);}
                else {
                    res.json(true);
                }
            });
        }
    });

    app.delete('/transaction/:id', (req, res) => {
        res.json("Nope!").status(500);
    });
    return app;
};

