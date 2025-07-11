import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'
import dotenv from 'dotenv';
dotenv.config(); 

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath){
            return null; 
        }
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath , {
            resource_type : "auto"
        })
        // console.log(response)
        //file upload successfull
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        console.error("Cloudinary upload error:", error.message);
        fs.unlinkSync(localFilePath) // remove the locally saved temp file as upload operation got failed
    }
}

export {uploadOnCloudinary}


