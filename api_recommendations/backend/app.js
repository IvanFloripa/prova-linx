var express = require('express');
var app = express();
const linxApiExternal = require('./routes/ApiExternal.js');
// console.log(linxApiExternal.getLinkExternal());

app.get('/', function (req, res) {
   res.send('Hello World');
});

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});
module.exports = app;