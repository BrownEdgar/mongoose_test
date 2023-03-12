const { Schema, model } = require('mongoose');

const postSchema = new Schema({

  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: [true, "Field is required"]
  },
  title: {
    type: String,
    required: [true, "Field is required"],
  },
  body: {
    type: String,
    required: [true, "Field is required"],
  },
  postimage1: {
    data: Buffer,
    contentType: String,
  },
  postimage2: {
    data: Buffer,
    contentType: String,
  }
})

module.exports = model('Post', postSchema)