class UserController {

  async getAll(req, res) {
    try {
      const allClients = await req.app.services.clients.getAll()
      res.json({ allClients })
    } catch (error) {
      res.json({ error })
    }
  }

	async deleteClientById(req, res) {
		const {id} = req.params
		try {
			const allClients = await req.app.services.clients.deleteClientById(id)
			res.send("Clients deleted!")
		} catch (error) {
			res.json({ error })
		}
	}
  async addClient(req, res) {
    console.log("req.file:", req.file);
    try {
      const newClient = await req.app.services.clients.addClient(req)
      res.json({
        message: "Client added!",
        status: "success",
        client: newClient
      })
    } catch (e) {
      if (e.code === 11000) {
        res.status(500).json({ error: "Email alredy exist", status: "fail", })
      } else {
        res.status(500).json(e)
      }

    }
  }
}

module.exports = UserController