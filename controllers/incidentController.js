require("../models/database");

const User = require('../models/User');
const transactionController = {
    async create(req, res) {
      const transaction = new Transaction(req.body);
      await transaction.save();
      res.status(201).json(transaction);
    },
  
    async read(req, res) {
      const transactions = await Transaction.find();
      res.status(200).json(transactions);
    },
  
    async update(req, res) {
      const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json(transaction);
    },
  
    async delete(req, res) {
      await Transaction.findByIdAndDelete(req.params.id);
      res.status(204).send();
    },
  };
  