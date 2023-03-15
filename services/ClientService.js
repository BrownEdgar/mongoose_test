const mongoose = require("mongoose")

class ClientService {
  constructor(models) {
    this.models = models;
  }

  async getAll() {
    const users = await this.models.clients.find({})
    return users
  }
	async deleteClientById(id) {
		const users = await this.models.clients.deleteOne({ _id: id })
    return users
  }
  async addClient(req) {

    const client = await new this.models.clients({
      ...req.body,
      avatar: req.file.path
    });
    await client.save();
    return client


  }
}

module.exports = ClientService