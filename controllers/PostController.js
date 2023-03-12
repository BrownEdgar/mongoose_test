class PostController {

  async getAll(req, res) {
    try {
      const allPosts = await req.app.services.posts.getAll()
      res.json({
        message: "You get all Posts",
        allPosts
      })
    } catch (error) {
      res.json({ error })
    }
  }
  async addPost(req, res) {

    try {
      const newPost = await req.app.services.posts.addPost(req)
      console.log(newPost);
      res.json({
        message: "post added!",
        status: "success",
        post: newPost
      })
    } catch (error) {
      console.log("error000======", error);
      res.json(error)
    }
  }
}

module.exports = PostController