var express = require('express');
var PartnerSchema = require('../models/partnerSchema');
var customerRouter = express.Router();

customerRouter.route('/:id/:regid')
.post(function (req, res, next) {
	console.log('Partner registration request for user id - ' + req.params.id + ' and regid - ' + req.params.regid);
	req.body.gcmToken = req.params.regid;
	
	PartnerSchema.findOne({'gcmToken' : req.params.regid}, function(err, partner){
		if (err) throw err;
		console.log('partner - ' + partner);
		if(partner == null){
			PartnerSchema.create(req.body, function (err, partner) {
            			 if (err) throw err;
                		console.log('partner created successfully - ' + req.body);
                		res.json(partner);
		        });
		}else{
			console.log('partner already exists. Ignoring the registration request.');
			res.json(partner);
		}
	});

//	PartnerSchema.create(req.body, function (err, partner) {
  //           if (err) throw err;
//		console.log('partner created successfully - ' + req.body);
//		res.json(partner);
//	});
});

module.exports = customerRouter;

