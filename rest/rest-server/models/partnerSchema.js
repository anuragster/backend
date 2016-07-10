var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partnerSchema = new Schema({
    	name: {
        type: String,
        required: true
    	},
	lat: {
		type: String,
        required: false,
		default: ''
	},
	lng: {
		type: String,
        required: false,
		default: ''
	},
	accuracy: {
		type: String,
        required: false,
		default: ''
    	},
        gcmToken: {
                type: String,
                required: false
        }
}, {
    timestamps: true
});


var Partners = mongoose.model('partner', partnerSchema);

module.exports = Partners;
