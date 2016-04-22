var express = require('express');
var app = express();

// Serve static shit
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/components/'));
app.get("/", function(req, res) {
   res.sendfile('app/app.html')
});

// Run it
app.listen(8080, function () {
  console.log('Emojiart server is listening at http://localhost:8080');
});
