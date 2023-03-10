const { Schema, model } = require('mongoose');

const productSchema = new Schema({

	owner: {
		type: Schema.Types.ObjectId,
		ref: 'Client',
		required: true
	},
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
		min: 10
	}
})

module.exports = model('Product', productSchema)