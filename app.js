var express = require('express');
var app = express();

const catalog = require('./routes/FunctionsCatalog');

app.get('/importacao-catalogo', function (req, res) {
    res.send(catalog.importCatalog());
});
app.get('/complete/:id', function (req, res) {
    res.send(catalog.getCatalogComplete(req.params.id));
});
app.get('/compact/:id', function (req, res) {
    res.send(catalog.getCatalogCompact(req.params.id));
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
module.exports = app;