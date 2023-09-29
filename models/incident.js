const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  bankName: String,
  accountNumber: String,
  transactionType: String,
  transactionReference: String,
  transactionDate: Date,
  notes: String,
});

const Transaction = mongoose.model('Transaction', transactionSchema);