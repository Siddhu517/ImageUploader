import Image from "../model/image";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

// Configuration
cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

export const uploadImageFile = async (req, res) => {
  // console.log("req files => ", req.files);
  try {
    const result = await cloudinary.uploader.upload(req.files.image.path);

    // console.log("uploaded image url => ", result);

    const imageUrl = await Image.findOne({});

    let newImage;

    if (!imageUrl) {
      const image = new Image({
        imgUrl: result.secure_url,
        publicId: result.public_id,
      });

      newImage = await image.save();
    } else {
      await cloudinary.uploader.destroy(imageUrl.publicId);

      newImage = await Image.findByIdAndUpdate(
        imageUrl._id,
        {
          $set: {
            imgUrl: result.secure_url,
            publicId: result.public_id,
          },
        },
        { new: true }
      );
    }

    // console.log(imageUrl);

    res.json({
      id: newImage._id,
      url: newImage.imgUrl,
      publicId: newImage.publicId,
    });
  } catch (err) {
    console.log(err);
    res.json({
      error: "network error",
    });
  }
};
