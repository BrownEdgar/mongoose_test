class UserController {

	async getAll(req, res) {
		try {
			const allClients = await req.app.services.clients.getAll()
			res.json({ allClients })
		} catch (error) {
			res.json({ error })
		}
	}
	async addClient(req, res) {
		try {
			const newClient = await req.app.services.clients.addClient(req.body)
			res.json({
				message: "Client added!",
				status: "success",
				client: newClient
			})
		} catch (e) {
			if (e.code === 11000) {
				res.status(500).json({ error: "Email alredy exist", status: "fail", })
			}else{
				res.status(500).json(e)
			}
		
		}
	}
}

module.exports = UserController