module.exports = {
    getLinkExternal:function(){
        var url = 'http://wishlist.neemu.com/onsite/impulse-core/ranking/mostpopular.json';
        var http = require('http');
        http.get(url, function(res){
            var body = '';

            res.on('data', function(chunk){
                body += chunk;
            });

            res.on('end', function(){
                var response = JSON.parse(body);
                return response;
            });
        }).on('error', function(e){
            console.log("Got an error: ", e);
        });
    }
};