const Transaction = require("../models/Transaction.js");

module.exports = app => {
    app.get('/user/:id', (req, res) => {
        Transaction.find({userID: req.params.id},(err, docs)=> {
            if (err) {res.json(err).status(500);}
            else {
                res.json(docs);
            }
        });
    });
    app.post('/user/:id', (req, res) => {
        res.json("Nope!").status(401);
    });

    app.put('/user/:id', (req, res) => {
        res.json("Nope!").status(401);
    });

    app.delete('/user/:id', (req, res) => {
        res.json("Nope!").status(401);
    });
    return app;
};

