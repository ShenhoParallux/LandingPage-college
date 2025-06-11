import "./CardTag.scss";
import * as React from "react";

interface CardTagProps {
  content: string;
}

export const CardTag: React.FC<CardTagProps> = ({ content }) => {
  return (
    <div className="card">
      <span className="card__content">{content}</span>
    </div>
  );
};
