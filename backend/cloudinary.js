import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const { CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY, CLOUDINARY_CLOUD_NAME } = process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

export const uploads = (file, folder) => {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(
            file,
            (result) => {
                resolve({
                    url: result.url,
                    id: result.public_id,
                });
            },
            {
                resource_type: "auto",
                folder: folder,
            }
        );
    });
};
