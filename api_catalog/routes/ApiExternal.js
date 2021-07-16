const mongoUtil = require('../config/mongoUitl');
const MongoClient = mongoUtil.MongoClient;
const url = mongoUtil.url;
const catalog = require('../catalog/catalog.json');
module.exports = {
    // getRecomendations: function (callback) {
    //     var request = require('request');
    //     request('http//exmaple.com/sample_data.json', function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         var importedJSON = JSON.parse(body);
    //         console.log(importedJSON);
    //     }
    //     })
    // },
}