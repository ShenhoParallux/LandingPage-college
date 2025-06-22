import * as React from "react";

interface ImageCardProps {
  src: string;
  alt: string | undefined;
  width: string;
  height: string;
  description: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  description,
  width,
  height,
}) => {
  return (
    <div className="imagecard">
      <img
        className="imagecard__image"
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
      />
      <span className="imagecard__description">{description}</span>
    </div>
  );
};
