var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var index_file = "index.html";

app.use( express.static( __dirname + '/assets' ) );

app.get( '/', function( request, response ) {
    var index_buf = fs.readFileSync( index_file );
    var index_str = index_buf.toString();
    response.send( index_str );
} );

var port = process.env.PORT || 5000;
app.listen( port, function() {
    console.log( "Listening on " + port );
} );
