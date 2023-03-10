const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		trim: true,
		unique: [true, "Email alredy exist"],
		required: 'Email address is required',
	}
});


module.exports = mongoose.model("Client", clientSchema);