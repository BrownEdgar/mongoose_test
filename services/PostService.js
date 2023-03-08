class PostService {
	constructor(models) {
		this.models = models;
	}

	async getAll(req, res) {
		return [];
	}
}

module.exports = PostService