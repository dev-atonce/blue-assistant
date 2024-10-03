const { ensureDirectoryExistence } = require("./checkdir.helper");
const config = require("../configs/app");
const multer = require("multer");

const method = {
    createUploader(destination) {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                const uploadDir = destination;
                ensureDirectoryExistence(uploadDir);
                cb(null, uploadDir);
            },
            filename: (req, file, cb) => {
                cb(null, Date.now() + "-" + file.originalname);
            },
        });

        const upload = multer({
            storage: storage,
            limits: { fileSize: config.limitFileSize },
        });

        return upload;
    },
};

module.exports = { ...method };
