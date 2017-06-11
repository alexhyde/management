var expressImport = require('express');
var invRouter = expressImport.Router();

invRouter.route('/').get(function(req,res){
	res.send('Inventory Page');
});

module.exports=invRouter;