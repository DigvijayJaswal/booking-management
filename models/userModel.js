'use strict';
/************* Modules ***********/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**************************************************
 ************* User Model or collection ***********
 **************************************************/
const userSchema = new Schema({
	name: { type: { first: String, last: String } },
	email: { type: String },
	password: { type: String },
	country: { type: String },
	blocked: { type: Boolean, default: false },
	terminated: { type: Boolean, default: false },
	city: { type: String },
	role: { type: Number, enum: [0, 1], default: 0 }, //Role 0 for user and 1 for fuelstation owner
	fuelPumpLocation: {
		type: { type: String, enum: ['Point'] },
		coordinates: [{ type: Number, index: '2dsphere' }]
	},
	availableGases: [{ type: Number }],
});

userSchema.set('timestamps', true);

module.exports = mongoose.model('user', userSchema);
