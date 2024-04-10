import {
  v2 as cloudinary,
  UploadApiResponse,
  UploadApiErrorResponse,
} from "cloudinary";
import streamifier from "streamifier";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(
  buffer: Buffer,
  fileName: string,
): Promise<UploadApiResponse> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "images",
        public_id: fileName,
      },
      (
        err: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined,
      ) => {
        if (result) resolve(result);
        else reject(err);
      },
    );
    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
}
