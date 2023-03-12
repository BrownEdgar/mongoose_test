const mongoose = require("mongoose")

class ClientService {
  constructor(models) {
    this.models = models;
  }

  async getAll() {
    const users = await this.models.clients.find({})
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