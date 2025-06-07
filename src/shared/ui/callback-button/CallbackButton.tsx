import * as React from "react";

interface ICallbackButton {
  isLinkToFooter: boolean;
}

export const CallbackButton: React.FC<ICallbackButton> = ({
  isLinkToFooter,
}) => {
  return !isLinkToFooter ? (
    <button type="button" className="callback__button">
      Оставить заявку
    </button>
  ) : (
    <a href="#footer" className="callback__button-link">
      Оставить заявку
    </a>
  );
};
