import "./GraduatesCard.scss";
import * as React from "react";
import { CardTag } from "@/shared";

interface GraduatesCardProps {
  title: string;
  tag: string;
  place: string;
  year: string;
  description: string;
  source: string;
}

export const GraduatesCard: React.FC<GraduatesCardProps> = ({
  title,
  tag,
  place,
  year,
  description,
  source,
}) => {
  return (
    <div className={"graduatescard"}>
      <div className="graduatescard__main">
        <div className="graduatescard__main__info">
          <div className="graduatescard__main__info-title">{title}</div>
          <CardTag content={tag} />
          <div className="graduatescard__main__info-place">{place}</div>
          <div className="graduatescard__main__info-year">{year}</div>
        </div>
        <div className="graduatescard__main-description">{description}</div>
      </div>
      <img
        className="graduatescard__image"
        src={source}
        alt=""
        width="auto"
        height="360"
        loading="lazy"
      />
    </div>
  );
};
