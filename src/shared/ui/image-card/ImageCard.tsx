import * as React from "react";
import "./ImageCard.scss";

interface ImageCardProps {
  src: string;
  description: string;
  width: string;
  height: string;
  wrap?: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  description,
  width,
  height,
  wrap,
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
      <span
        className={`imagecard__description${wrap ? " imagecard__description--wrap" : ""}`}
      >
        {description}
      </span>
    </div>
  );
};
