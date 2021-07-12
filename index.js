var express = require('express');
var app = express();
const mongoUtil = require('./config/mongoUitl');
const MongoClient = mongoUtil.MongoClient;
const url = mongoUtil.url;
//Instância do Arquivo
const fs = require("fs");
var catalogo = JSON.parse(fs.readFileSync('./repository/catalog.json', 'utf8'));

//Endpoint importação de Catálogo
app.post('/importacao-catalogo', function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("linx_database");
    dbo.collection("catalog_produtos").insertMany(catalogo, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
});
