var express = require('express');
var app = express();
const axios = require('axios');

// console.log(linxApiExternal.getLinkExternal());
app.get('/', function (req, res) {
    (async () => {
        try {
          const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
          console.log(response.data.url);
          console.log(response.data.explanation);
        } catch (error) {
          console.log(error.response.body);
        }
      })();
});

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});
module.exports = app;