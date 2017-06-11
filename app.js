var expressImport = require('express');
var express = expressImport();

var port = 5000;

var eventRouter = require('./src/routes/eventRoutes');
var pmRouter = require('./src/routes/pmRoutes');
var qaRouter = require('./src/routes/qaRoutes');
var invRouter = require('./src/routes/invRoutes');
var dbRouter = require('./src/routes/dbRoutes');

express.use(expressImport.static('public'));
express.use(expressImport.static('bower_components'));

express.set('views','./src/views');
express.set('view engine', 'ejs');

express.use('/env',eventRouter);
express.use('/inv',invRouter);
express.use('/qa',qaRouter);
express.use('/pm',pmRouter);
express.use('/db',dbRouter);


express.get('/',function(req,res){
	//res.send('Main Page');
	res.render('index',{
		list:['first val','second val','third val'],
		nav: [{link: 'pm', text:'Project Management'},
			  {link: 'qa', text:'Quality Assurance'},
			  {link: 'inv', text:'Inventory'},
			  {link: 'env', text:'Events'}]
	})
});


express.listen(port,function(err){
	console.log("Server is running on port: " + port);
});