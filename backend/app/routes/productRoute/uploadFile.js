const express = require('express');
const router = express.Router();
const UploadController = require('../../controllers/productController/uploadController');

router.post('/api/upload/file', UploadController.addUpload);
router.get('/api/upload/file', UploadController.getUpload);
router.put('/api/upload/file/:id', UploadController.updateUpload);
router.delete('/api/upload/file/:id', UploadController.deleteUpload);


module.exports = router;
