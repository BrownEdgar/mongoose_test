const { Schema, model } = require('mongoose');

const postSchema = new Schema({
	_id: {
		type: Number
	},
	userId: {
		type: Number,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	}
})

module.exports = model('Post', postSchema)