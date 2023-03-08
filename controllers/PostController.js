class PostController {
	constructor(models) {
		this.models = models;
	}
	async getAll(req, res) {
		try {
			const allPosts = this.models.servicies.getAll()
			res.json({
				message: "You get all Posts",
				allPosts
			})
		} catch (error) {
			res.json({
				error,
			})
		}
	}
}

module.exports = PostController