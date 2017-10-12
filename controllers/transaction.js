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
    app.post('/transaction/', (req, res) => {
        if (!(req.body && req.body.ocrResult && req.body.userID && req.body.total && req.body.myNumber)) {
            res.json("Request body did not have one of: ocrResult, userID, total, or myNumber").status(400);
        }
        let newTransaction = {};
        newTransaction.ocrResult = req.body.ocrResult;
        newTransaction.userID = req.body.userID;
        newTransaction.items = req.body.ocrResult.map((c,i,l) => {
            let a = {};
            a.name = c[0] === '' ? "Item not found" : c[0];
            a.price = c[1] === '' ? "0.00" : c[1];
            return a;
        });
        newTransaction.party = req.body.myNumber.map((c, i, a) => {
            return {
                personId: parseInt(c),
                phone: parseInt(c),
                total: req.body.perPerson ? parseFloat(req.body.perPerson) : 0.00
            };
        });
        newTransaction.tax = parseFloat(req.body.tax);
        newTransaction.total = parseFloat(req.body.total);
        newTransaction.tipPer = parseFloat(req.body.tipPer);
        newTransaction.tip = parseFloat(req.body.tip);
        newTransaction.perPerson = parseFloat(req.body.perPerson);
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
        res.json("Nope!").status(401);
    });
    return app;
};

