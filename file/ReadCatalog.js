//Instância do Arquivo
const fs = require("fs");
var catalogo = JSON.parse(fs.readFileSync('./catalog/catalog.json', 'utf8'));
module.exports = catalogo;