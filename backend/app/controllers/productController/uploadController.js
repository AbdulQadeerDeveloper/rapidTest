// controllers/commentController.js
const asyncHandler = require('express-async-handler');
const uploadTest = require('../../models/productModel/uploadTest');
const multer = require('multer');


// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });


// Create Upload:
exports.addUpload = upload.single('file'), asyncHandler(async (req, res) => {
    const uploadImage = req.file.path;

    const newUpload = new uploadTest({
        uploadImage,
    });

    try {
        const savedUpload = await newUpload.save();
        res.status(201).json(savedUpload);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Get Upload:
exports.getUpload = asyncHandler(async (req, res) => {
    try {
        const upload = await uploadTest.find();
        res.send(upload);
    } catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
});




// Update Upload:
exports.updateUpload = upload.single('file'), asyncHandler(async (req, res) => {

    const { id } = req.params;
    let updateData = {
        uploadImage: req.file ? req.file.path : undefined
    };

    try {
        const updatedTattoo = await uploadTest.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedUpload) {
            return res.status(404).json({ message: 'Upload file not found' });
        }

        res.status(200).json(updatedUpload);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
});


// Delete Upload:
exports.deleteUpload = asyncHandler(async (req, res) => {
    try {
        const upload = await uploadTest.findByIdAndDelete(req.params.id);
        if (!upload) res.status(404).send("No upload file found with that ID.");
        res.status(200).send("Upload file deleted.");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

