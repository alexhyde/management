var expressImport = require('express');
var express = expressImport();

var port = 5000;

express.use(expressImport.static('public'));
express.use(expressImport.static('src/views'));
express.use(expressImport.static('bower_components'));

express.get('/',function(req,res){
	res.send('Main Page');
});

express.get('/pm',function(req,res){
	res.send('Project Management Page');
});

express.get('/qa',function(req,res){
	res.send('Quality Assurance Page');
});

express.get('/inv',function(req,res){
	res.send('Inventory Page');
});

express.listen(port,function(err){
	console.log("Server is running on port: " + port);
});