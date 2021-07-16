var express = require('express');
var app = express();

const catalog = require('./routes/FunctionsCatalog');
const catalogFile = require('./catalog/catalog.json');

var request = require('request');

app.get('/importacao-catalogo', function (req, res) {
    res.send(catalog.importCatalog());
});
app.get('/folder', function (req, res) {
    request('https://wishlist.neemu.com/onsite/impulse-core/ranking/' + catalogFile, function (error, response, body) {
    console.log(catalogFile);
    if (!error && response.statusCode == 200) {
        var importedJSON = JSON.parse(body);
        console.log(importedJSON);
    }
    })
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