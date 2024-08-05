import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export const UploadImgToCloudinary = async (img: any) => {
    const res = await cloudinary.uploader.upload(
        img, {
            folder: "products",
            // width: 300,
            // crop: "scale"
        }
    ).catch((error) => {
        console.log(error);
    })
    return res
}