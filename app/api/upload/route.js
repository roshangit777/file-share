import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import multer from "multer";
import { promisify } from "util";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer for file handling
const upload = multer({ storage: multer.memoryStorage() });
const uploadMiddleware = promisify(upload.single("file")); // Promisify multer

export async function POST(req) {
  try {
    // Convert Next.js Request to Express-like Request
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.v2.uploader.upload_stream(
        { folder: "nextjs_uploads" }, // Optional folder name
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(buffer);
    });

    return NextResponse.json({ url: result.secure_url }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false, // Required for file uploads
  },
};
