const { Schema, model } = require('mongoose');

const postSchema = new Schema({

	userId: {
		type: Schema.Types.ObjectId,
		ref: 'Client',
		required: true
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