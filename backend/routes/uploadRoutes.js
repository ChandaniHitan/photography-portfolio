const path = require('path');

const express = require('express');

const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination(req, file, cb) {
        console.log(file);
        cb(null, 'uploads');
    },
    filename(req, file, cb) {
        cb(
            null,
            `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
        )
    }
})

function checkFileType(file, cb) {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLocaleLowerCase());
    const mimeType = fileTypes.test(file.mimeType);

    if (extname && mimeType) {
        return cb(null, true);
    } else {
        return cb("images only");
    }
}

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
});

router.post('', upload.single('image'), async (req, res) => {
    const correctPath = req.file.path.replace(/\\/g, '/');
    console.log(correctPath);
    res.send(`/${correctPath}`);
});

module.exports = router;