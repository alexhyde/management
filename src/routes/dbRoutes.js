var expressImport = require('express');
var dbRouter = expressImport.Router();
var mongo = require('mongodb').MongoClient;

var eventsData = [{
	name:'Event 1',
	date:'August 1',
	capacity:'100'},
	{
	name:'Event 2',
	date:'September 2',
	capacity:'200'},
	{
	name:'Event 3',
	date:'October 3',
	capacity:'300'},
	{
	name:'Event 4',
	date:'November 5',
	capacity:'400'}
];

dbRouter.route('/AddEventData').get(function(req,res){
	var url = 'mongodb://localhost:27017/eventsApp';
	mongo.connect(url,function(err,db){
		var collection = db.collection('events');
		collection.insertMany(eventsData,function(err,results){
			res.send(results);
			db.close();
		});
	});
});

module.exports=dbRouter;