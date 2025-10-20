import React, { useState, useEffect } from "react";
import "./ImageUploadBox.css";

const ImageUploadBox = ({ imageUrl, editMode = false, onImageChange }) => {
  const [preview, setPreview] = useState(imageUrl || "");
  const [isBlurred, setIsBlurred] = useState(editMode);
  const [justUploaded, setJustUploaded] = useState(false); // 업로드 직후 여부 추적

  // ✅ 이미지 URL 변경 시 반영
  useEffect(() => {
    if (imageUrl) setPreview(imageUrl);
  }, [imageUrl]);

  // ✅ 수정모드 진입 시 블러 처리
  useEffect(() => {
    if (editMode && !justUploaded) setIsBlurred(true);
    else setIsBlurred(false);
  }, [editMode, justUploaded]);

  // ✅ 이미지 업로드 시 동작
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setPreview(localUrl);

      // ✅ 업로드 완료 → 순수 이미지 표시
      setIsBlurred(false);
      setJustUploaded(true);

      if (onImageChange) onImageChange(file);
    }
  };

  // ✅ 이미지 깨졌을 때 초기화
  const handleImageError = () => {
    setPreview("");
    setJustUploaded(false);
  };

  return (
    <div className="image-input">
      <label className="image-upload-box">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />

        <div className="detail-image-box">
          {preview ? (
            <>
              <img
                src={preview}
                alt="미리보기"
                onError={handleImageError}
                className={`detail-preview-image ${isBlurred ? "blurred" : ""}`}
              />

              {/* ✅ 업로드 전일 때만 문구 표시 */}
              {editMode && !justUploaded && (
                <div className="image-overlay">이미지를 수정하세요</div>
              )}
            </>
          ) : (
            <div className="image-overlay">이미지를 추가하세요</div>
          )}
        </div>
      </label>
    </div>
  );
};

export default ImageUploadBox;
