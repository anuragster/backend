var express = require('express');
var PartnerSchema = require('../models/partnerSchema');
var locationRouter = express.Router();

locationRouter.route('/:id')
.post(function (req, res, next) {
        var dateStr = new Date().toISOString().
  replace(/T/, ' ').
  replace(/\..+/, '');
        console.log(dateStr + ' - partnerid - '+ req.params.id +'. Sending location update request - lat - ' + req.body.lat + ' and lng - ' + req.body.lng + ' and accuracy - ' + req.body.accuracy);
        PartnerSchema.findById(req.params.id)
        .exec(function (err, partner) {
                if (err) throw err;
                console.log('partner is ' + partner);
                if(partner == null){
                        req.body.id = req.params.id;
                        console.log('Creating partner for body ' + JSON.stringify(req.body));
                        PartnerSchema.create(req.body, function (err, partner) {
                                if (err) throw err;
                                console.log('Partner created!');
                                var id = partner._id;
                                //res.writeHead(200, {
                                //      'Content-Type': 'text/plain'
                                //});
                                //res.end('Added the partner with id: ' + id);
                                res.json(partner);
                        });
                } else{
                        console.log('partner exists for partnerId - ' + req.params.id);

                        PartnerSchema.findByIdAndUpdate(req.params.id, {
                                $set: req.body
                            }, {
                                new: true
                            }, function (err, partner) {
                                if (err) throw err;
                          res.json(partner);
                        });
                }
                //res.json(partner);
        });
        //res.end('received lat - ' + req.body.lat + ' and lng - ' + req.body.lng);
})
.get(function (req, res, next){
        console.log('get request');
}
)
;

module.exports = locationRouter;

