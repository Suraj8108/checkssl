
var express = require('express');
var app = express();
app.get('/.well-known/pki-validation/A96F7BD2590C506AFE33979046C346CD.txt', function (req, res) {
  res.send('8B65F5773F961FE8AC00D986D1B9D6173E1BEDE41E39DB2CE872222209B089ED.7bf0e83074a62a1.comodoca.com');
});
app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
