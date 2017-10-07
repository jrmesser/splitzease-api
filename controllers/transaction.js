module.exports = app => {
    app.get('/transaction/:id', (req, res) => {
        res.json(true);
    });

    app.post('/transaction/:id', (req, res) => {
        res.json(true);
    });

    app.put('/transaction/:id', (req, res) => {
        res.json(true);
    });

    app.delete('/transaction/:id', (req, res) => {
        res.json("Nope!");
    });
    return app;
};

