var express = require('express');
var app = express();
var fs = require("fs");
var permission = require('./example3.js');

app.get('/permission', function (req, res) {
   fs.readFile( __dirname + "/" + "example3_input.json", 'utf8', function (err, data) {
       console.log( data );
	   
       data = JSON.parse( data );
	   permission.mapPermissionName(data);	   
	   console.log( data );
       res.end(JSON.stringify(data,null,4));
   });
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})