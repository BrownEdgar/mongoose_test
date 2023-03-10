class PostService {
	constructor(models) {
		this.models = models;
	}

	async getAll() {
		return ["A"];
	}
}

module.exports = PostService