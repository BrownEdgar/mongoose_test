const Post = require("../models/PostSchema")
const mongoose = require("mongoose")


class ClientService {
	constructor(models) {
		this.models = models;
	}

	async getAll() {
		const users = await this.models.clients.find({})
		return users
	}
	async addClient(body) {
		 console.log(body);
		
		const client = await new this.models.clients({
			...body,
		});
		await client.save()
		return client
		

	}
}

module.exports = ClientService