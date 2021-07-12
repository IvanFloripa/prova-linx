const mongoUtil = require('../config/mongoUitl');
const MongoClient = mongoUtil.MongoClient;
const url = mongoUtil.url;
const ReadCatalog = require('../file/ReadCatalog');
module.exports = {
    importCatalog: function (callback) {
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("linx_database");
            dbo.collection("catalog_produtos").insertMany(ReadCatalog, function(err, res) {
            if (err) throw err;
                db.close();
            });
        });
    },
    getCatalogComplete: function (idParam) {
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("linx_database");
            var id = new require('mongodb').ObjectID(idParam);//req.params.id
            dbo.collection('catalog_produtos').findOne({'_id':id})
            .then(function(doc) {
                if(!doc)
                throw new Error('No record found.');
                // const response = {}
                console.log(doc);//else case
            });
        });
    },
    getCatalogCompact: function (idParam) {
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("linx_database");
            var id = new require('mongodb').ObjectID(idParam);//req.params.id
            dbo.collection('catalog_produtos').findOne({'_id':id}, {_id: 1})
            .then(function(doc) {
                if(!doc)
                throw new Error('No record found.');
                // const response = {}
                const response = {
                    name: doc.name,
                    price: doc.price,
                    status: doc.status,
                    categories: doc.categories
                }
                console.log(response);//else case
            });
        });
    }
}