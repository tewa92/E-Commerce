import path from "path"
import express from "express"
import multer from "multer"

const router = express.Router()

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

function checkFileType(file, cb) {
    const filetypes = /jpe?g|png|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if (extname && mimetype) {
        return cb(null, true)
    } else {
        cb("image only")
    }
}

const upload = multer({
    storage
})

router.post("/", upload.single('image'), (req, res) => {
    res.send({
        message: "image uploaded",
        image: `/${req.file.path}`
    })
})

export default router

/* 
import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Initialize the Express router
const router = express.Router();

// Configure Cloudinary with your credentials
cloudinary.config({
    // import from .env
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,      // Replace with your Cloudinary cloud name
    api_key: process.env.CLOUDINARY_API_KEY,  // Replace with your Cloudinary API key
    api_secret: process.env.CLOUDINARY_API_SECRET, // Replace with your Cloudinary API secret
});

// Set up Multer to use Cloudinary's storage engine
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',  // Folder name in Cloudinary
        allowed_formats: ['jpeg', 'png', 'webp'],  // Allow only these file formats
        public_id: (req, file) => `${file.fieldname}-${Date.now()}`,  // Generate a unique file name
    },
});

const upload = multer({ storage });

// Route to handle file upload
router.post('/', upload.single('image'), (req, res) => {
    try {
        // Cloudinary URL for the uploaded image
        const imageUrl = req.file.path;

        // Send back the Cloudinary image URL as response
        res.status(200).send({
            message: "Image uploaded successfully",
            imageUrl: imageUrl,  // Return the Cloudinary image URL
        });
    } catch (error) {
        res.status(500).send({
            message: "Image upload failed",
            error: error.message,
        });
    }
});

export default router;
 */