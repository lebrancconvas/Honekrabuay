const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: { type: string, required: true },
    email: { type: string, required: true },
    password: { type: string, required: true }
}, { collection: 'user-data' });

const model = mongoose.model('UserAuth', User);

module.exports = model;