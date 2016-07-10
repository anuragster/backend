var express = require('express');
var gcmRouter = express.Router();
var gcmUtil = require('../utils/gcm');

gcmRouter.route('/')
.post(function (req, res, next) {
	//console.log('Sending gcm request - Address - ' + req.params.address + ', lat - ' + req.params.lat + ' and lng - ' + req.params.lng);
	console.log('Sending gcm request - Address - ' + req.body.address + ', lat - ' + req.body.lat + ' and lng - ' + req.body.lng);
	var messageToCustomer = "Your parking request is taken. You'll be notified once the valet is assigned.";
	var customerAuthKey = "AIzaSyBgBwQ2HMQOMfmFLZiTbRm-xNAhSXG7ihI";
	var partnerAuthKey = "AIzaSyBY_iotgztTTQIokkjoznjFHDxtQugTBng";
	gcmUtil.gcm(customerAuthKey, messageToCustomer);
	gcmUtil.gcm(partnerAuthKey, "Are you available");
});

module.exports = gcmRouter;
