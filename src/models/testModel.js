const mongoose = require('mongoose');

module.exports = model('testQuery', new Schema({
    test: String
}));