import * as React from "react";
import "./ImageCard.scss";

interface ImageCardProps {
  src: string;
  description: string;
  width: string;
  height: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  description,
  width,
  height,
}) => {
  return (
    <div className="imagecard">
      <img
        className="imagecard__image"
        src={src}
        alt={description}
        width={width}
        height={height}
        loading="lazy"
      />
      <span className="imagecard__description">{description}</span>
    </div>
  );
};
