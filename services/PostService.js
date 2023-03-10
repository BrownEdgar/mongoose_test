const Post = require("../models/PostSchema")
const mongoose = require("mongoose")


class PostService {
	constructor(models) {
		this.models = models;
	}

	async getAll() {
		const posts = await this.models.posts
		.find({})
		.populate("userId")
		return posts
	}
	async addPost(body) {
		console.log(body)
		const post = new this.models.posts({
			...body,
		});
		await post.save().then(post =>  console.log(post))
		return post

	}
}

module.exports = PostService