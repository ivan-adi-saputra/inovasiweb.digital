"use client";

import { config } from "@/config";
import { useUploadImageMutation } from "@/services/image";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";

interface UploadImageProps {
  form: any;
  name: string;
  defaultImage?: string;
}

export default function UploadImage({
  form,
  name,
  defaultImage,
}: UploadImageProps) {
  const [previewImg, setPreviewImg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const [mutationImage] = useUploadImageMutation();

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setPreviewImg(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append("images", file);

      try {
        const result = await mutationImage(formData).unwrap();
        form.setValue(name, result?.data?._id);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleUploadFile = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    if (defaultImage) {
      const imageId = form.getValues("image");

      setPreviewImg(`${config.base_url}/${defaultImage}`);
      form.setValue(name, imageId);
    }
  }, [form.formState.errors, name]);

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="mb-6">
          <div className="w-full h-[200px] bg-gray-100 rounded-lg overflow-hidden relative">
            {previewImg !== "" ? (
              <Image
                src={previewImg}
                alt="Preview"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={handleUploadFile}
          className="border-2 border-dashed border-slate-400 rounded-lg p-6 text-center cursor-pointer transition duration-300 ease-in-out hover:bg-blue-50"
        >
          <svg
            className="w-10 h-10 text-slate-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="text-slate-400 font-semibold mb-1">Click to upload</p>
          <p className="text-gray-500 text-sm">PNG, JPG, JPEG</p>
        </div>
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/jpg"
        />
      </div>
    </div>
  );
}
