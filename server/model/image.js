import mongoose from "mongoose";

const imgSchema = mongoose.Schema(
  {
    imgUrl: { type: String },
    publicId: { type: String },
  },
  { timestamps: true }
);
const Image = mongoose.model("Image", imgSchema);
export default Image;
