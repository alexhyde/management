var expressImport = require('express');
var eventRouter = expressImport.Router();
var mongo = require('mongodb');


eventRouter.route('/').get(function(req,res){
	var url = 'mongodb://localhost:27017/eventsApp';
	mongo.connect(url,function(err,db){
		var collection = db.collection('events');
		collection.find({}).toArray(function(err, results){
			res.render('events',{
			list:['first event','second event','third event'],
			nav: [{link: 'pm', text:'Project Management'},
				  {link: 'qa', text:'Quality Assurance'},
				  {link: 'inv', text:'Inventory'},
				  {link: 'env', text:'Events'}],
			events:results
			});
			db.close();
		});
	});
});
eventRouter.route('/:id').get(function(req,res){
	var id = req.params.id;
	var url = 'mongodb://localhost:27017/eventsApp';
	mongo.connect(url,function(err,db){
		var collection = db.collection('events');
		collection.findOne({"_id":new mongo.ObjectID(id)},function(err, results){			
			res.render('event',{
			list:['first event','second event','third event'],
			nav: [{link: 'pm', text:'Project Management'},
				  {link: 'qa', text:'Quality Assurance'},
				  {link: 'inv', text:'Inventory'},
				  {link: 'env', text:'Events'}],
			events:results
			});
			db.close();
		});
	});
});

module.exports=eventRouter;