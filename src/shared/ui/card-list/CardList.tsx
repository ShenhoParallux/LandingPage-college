import * as React from "react";
import { type ReactNode, useState } from "react";
import "./CardList.scss";
import { ArrowUpForPrograms } from "@/shared";

interface CardListProps {
  title: string;
  children: ReactNode;
}

export const CardList: React.FC<CardListProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handlerDropDown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`cardlist visible-mobile`}>
      <label
        onClick={handlerDropDown}
        htmlFor="cardlist-toggle"
        className={`cardlist__label${isOpen ? " cardlist__label--opened" : ""}`}
      >
        {title}
        <img
          className="cardlist__label-arrow"
          src={ArrowUpForPrograms}
          alt=""
          width="24"
          height="24"
          loading="lazy"
        />
      </label>
      <div className="cardlist__wrap">{children}</div>
    </div>
  );
};
