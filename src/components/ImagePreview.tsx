// src/components/ImagePreview.tsx

import React from 'react';

interface ImagePreviewProps {
  src: string;
  alt: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ src, alt }) => {
  return (
    <img
      id="image-preview"
      className="preview-image"
      src={src}
      alt={alt}
      style={{ display: 'block' }}
    />
  );
};

export default ImagePreview;