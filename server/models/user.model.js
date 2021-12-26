const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: { type: string, required: true, unique: true },
    email: { type: string, required: true, unique: true },
    password: { type: string, required: true }
}, { collection: 'user-data' });

const model = mongoose.model('UserAuth', User);

module.exports = model;