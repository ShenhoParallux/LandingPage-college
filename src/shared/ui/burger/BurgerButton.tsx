import { BurgerImage } from "@/shared/assets/images";
import "./BurgerButton.scss";

export const BurgerButton = () => {
  return (
    <button
      type="button"
      className={`header__navigation-burger visible-mobile`}
    >
      <img
        className="header__navigation-burger__image"
        src={BurgerImage}
        alt="Burger menu image"
        width="24"
        height="24"
        loading="lazy"
      />
    </button>
  );
};
