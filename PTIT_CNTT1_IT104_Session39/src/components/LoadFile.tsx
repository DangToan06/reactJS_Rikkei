import axios from "axios";
import React, { useState } from "react";

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

const URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

export default function LoadFile() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [imageURLs, setImageURLs] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(event.target.files);

      // tạo mảng preview
      const previews = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviewImages(previews);
    }
  };

  const handleUpload = async () => {
    if (!files || files.length === 0) {
      alert("file không được để trống");
      return;
    }

    setLoading(true);
    try {
      // upload song song nhiều ảnh
      const uploadPromises = Array.from(files).map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        return axios.post(URL, formData);
      });

      const responses = await Promise.all(uploadPromises);
      const urls = responses.map((res) => res.data.secure_url);

      setImageURLs(urls);
      console.log("✅ Upload thành công:", urls);
    } catch (error: any) {
      console.error("❌ Error upload:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Hình ảnh xem trước</h2>
      {previewImages.length > 0 &&
        previewImages.map((src, i) => (
          <img key={i} height={150} width={200} src={src} alt="preview" />
        ))}

      {loading && <h3>Đang tải...</h3>}

      <h2>Hình ảnh đã tải lên</h2>
      {imageURLs.length > 0 &&
        imageURLs.map((src, i) => (
          <img key={i} height={150} width={200} src={src} alt="uploaded" />
        ))}

      <input type="file" multiple onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
