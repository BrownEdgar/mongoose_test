class PostController {
	constructor(models) {
		this.models = models;
	}
	async getAll(req, res) {
		try {
			const allPosts = await req.app.services.posts.getAll()
			res.json({
				message: "You get all Posts",
				allPosts
			})
		} catch (error) {
			res.json({
				message: "xz",
				error,
			})
		}
	}
}

module.exports = PostController