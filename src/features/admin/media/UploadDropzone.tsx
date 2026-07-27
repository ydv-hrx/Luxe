'use client';

import React from 'react';

export interface UploadDropzoneProps {
  onUpload?: (fileUrl: string) => void;
  isUploading?: boolean;
}

export const UploadDropzone: React.FC<UploadDropzoneProps> = ({ onUpload, isUploading }) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpload) {
      // Create local object URL for preview/uploading
      const objectUrl = URL.createObjectURL(file);
      onUpload(objectUrl);
    }
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      className="relative border-2 border-dashed border-[#c4c7c7]/40 rounded-3xl p-10 sm:p-16 flex flex-col items-center justify-center bg-white hover:border-black/20 transition-all cursor-pointer group shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] font-sans select-none"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="bg-black/5 p-5 sm:p-6 rounded-full mb-6 group-hover:scale-110 transition-transform duration-500">
        <span className="material-symbols-outlined text-black text-[36px] sm:text-[40px]">
          {isUploading ? 'sync' : 'cloud_upload'}
        </span>
      </div>
      <h3 className="font-serif text-xl sm:text-2xl text-black font-semibold mb-2">
        {isUploading ? 'Uploading to Shopify DAM...' : 'Upload your masterpieces'}
      </h3>
      <p className="font-sans text-xs sm:text-sm text-[#444748] text-center max-w-sm mb-6">
        Drag and drop high-resolution assets here or{' '}
        <span className="text-black font-semibold underline decoration-black/30 underline-offset-4">
          browse files
        </span>
      </p>
      <div className="flex flex-wrap justify-center gap-3 text-[10px] font-semibold text-[#747878] uppercase tracking-widest">
        <span>JPG</span> • <span>PNG</span> • <span>MP4</span> • <span>SVG</span> •{' '}
        <span className="text-black font-bold">MAX 100MB</span>
      </div>
    </div>
  );
};
