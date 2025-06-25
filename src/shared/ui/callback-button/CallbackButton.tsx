import * as React from "react";
import "./CallbackButton.scss";
import { ButtonIcon } from "@/shared/assets/images";

interface ICallbackButton {
  isLinkToFooter: boolean;
}

export const CallbackButton: React.FC<ICallbackButton> = ({
  isLinkToFooter,
}) => {
  return !isLinkToFooter ? (
    <button type="submit" className="button button__callback">
      Оставить заявку
    </button>
  ) : (
    <a href="#footer" className="button button__link">
      <img
        className="button__link-icon"
        src={ButtonIcon}
        alt=""
        width="24"
        height="24"
        loading="lazy"
      />
      <span className="button__link-description">Оставить заявку</span>
    </a>
  );
};
