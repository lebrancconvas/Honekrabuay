const mongoose = require('mongoose');

const Issue = new mongoose.createSchema({
    name,
    address,
    topic,
    content
});