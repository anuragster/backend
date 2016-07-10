var express = require('express');
//var CustomerSchema = require('../models/customerSchema');
var customerRouter = express.Router();

customerRouter.route('/:id/:regid')
.post(function (req, res, next) {
	console.log('Customer registration request for user id - ' + req.params.id + ' and regid - ' + req.params.regid);
});

module.exports = customerRouter;

