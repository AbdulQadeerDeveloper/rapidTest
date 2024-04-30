const mongoose = require('mongoose');

// Define schema for Upload
const uploadSchema = new mongoose.Schema({
    uploadImage: { type: String, required: true },
});

const uploadTest = mongoose.model('uploadFile', uploadSchema);

module.exports = uploadTest;
