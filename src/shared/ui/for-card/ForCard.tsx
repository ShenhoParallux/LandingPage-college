import "./ForCard.scss";
import * as React from "react";
import { type ReactNode } from "react";

interface ForCardProps {
  title: string;
  children: ReactNode;
}

export const ForCard: React.FC<ForCardProps> = ({ title, children }) => {
  return (
    <div className="forcard">
      <div className="forcard__title">{title}</div>
      <div className="forcard__children">{children}</div>
    </div>
  );
};
