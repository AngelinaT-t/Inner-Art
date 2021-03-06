const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	activated: {
		type: Boolean,
		default: false
	},
	certified: {
		type: Boolean,
		default: false
	}
});
module.exports = mongoose.model('user', UserSchema);
