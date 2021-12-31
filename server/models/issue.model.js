const mongoose = require('mongoose');

const Issue = new mongoose.createSchema({
    name: { type: String, require: true },
    address: { type: String, require: true },
    telephone: { type: String, require: true },
    topic: { type: String, require: true },
    content: { type: String, require: true }
}, { collection: 'issue-data' });

const model = mongoose.model('UserIssue', Issue);

module.export = model;