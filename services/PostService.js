const fs = require("fs")
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
  async addPost(req) {
		console.log(req.files)
    const post = await new this.models.posts({
      ...req.body,
      postimage1: {
        data: fs.readFileSync("./uploads/posts/" + req.files.postimage1[0].filename),
        contentType: req.files.postimage1[0].mimetype,
      },
      postimage2: {
        data: fs.readFileSync("./uploads/posts/" + req.files.postimage2[0].filename),
        contentType: req.files.postimage2[0].mimetype,
      }
    });
    await post.save()
    return post
  }
}

module.exports = PostService