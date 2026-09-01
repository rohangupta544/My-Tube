import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'



    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });


    const uploadOnCloudinary= async (loaclFilePath)=>{
        try {
            if(!loaclFilePath) return null;

            //upload the file on cloudinary
            const respone =await cloudinary.uploader.upload(loaclFilePath,{
                resource_type:"auto",
            })
            // file has been uploaded successfully
            console.log(`file is uploaded in Cloudinary ${respone.url}`)
            return respone

        } catch (error) {
            fs.unlinkSync(loaclFilePath);  // remove the locally store file as the operation got failed
            return null;

        }
    }


    
export {uploadOnCloudinary}