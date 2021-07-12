const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

module.exports.MongoClient = MongoClient;
module.exports.url = url;