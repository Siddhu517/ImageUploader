import express from "express";
import { uploadImageFile} from "../controllers/index";
import formidable from "express-formidable";

const router = express.Router();

router.post(
  "/uploadfile",
  formidable({ maxFileSize: 5 * 1024 * 1024 }),
  uploadImageFile
);

export default router;
