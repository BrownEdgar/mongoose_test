const Post = require("../models/PostSchema")
const mongoose = require("mongoose")


class PostService {
	constructor(models) {
		this.models = models;
	}

	async getAll() {
		return ["A"];
	}
	async addPost(body) {

		const post = new this.models.posts({
			...body,
		});

		return post.save()

	}
}

module.exports = PostService