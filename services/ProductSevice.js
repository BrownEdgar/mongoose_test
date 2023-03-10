const mongoose = require("mongoose")

class ProductService {
	constructor(models) {
		this.models = models;
	}

	async getAll() {
		const products = await this.models.products.find({})
		.populate("owner").limit(1)
		return products;
	}
	async addProduct(body) {
		console.log(body);

		const product = await new this.models.products({
			...body,
		});
		await product.save()
		return product


	}
}

module.exports = ProductService;



