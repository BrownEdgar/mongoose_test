class ProductsController {

	async getAll(req, res) {
		try {
			const allProducts = await req.app.services.products.getAll()
			res.json({ allProducts })
		} catch (error) {
			res.json({ error })
		}
	}
	async addProduct(req, res) {
		try {
			const newProduct = await req.app.services.products.addProduct(req.body)
			res.json({
				message: "Product added!",
				status: "success",
				Product: newProduct
			})
		} catch (e) {
			res.status(500).json(e)
		}
	}
}

module.exports = ProductsController