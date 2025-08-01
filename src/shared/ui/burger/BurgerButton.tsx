import "./BurgerButton.scss";
import { LocateIcon, PhoneIcon } from "@/shared/assets/images";
import { useState } from "react";

export const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuLinkClick = () => {
    const checkbox = document.getElementById(
      "burger-toggle",
    ) as HTMLInputElement;

    if (checkbox) {
      checkbox.checked = false;
    }
  };

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100svh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  };

  return (
    <div className="burger visible-mobile">
      <input
        id="burger-toggle"
        className="burger__button-toggle"
        type="checkbox"
      />
      <label
        htmlFor="burger-toggle"
        className="burger__button"
        onClick={handleOpenMenu}
      >
        <span className="burger__button-line--top"></span>
        <span className="burger__button-line--middle"></span>
        <span className="burger__button-line--bottom"></span>
      </label>

      <div className="burger__menu">
        <nav className="burger__menu-navigation">
          <ul className="burger__menu-navigation__list">
            <li className="burger__menu-navigation__item">
              <a
                href="#programs"
                className="burger__menu-navigation__link"
                onClick={() => {
                  handleMenuLinkClick();
                  handleOpenMenu();
                }}
              >
                Образовательные программы
              </a>
            </li>
            <li className="burger__menu-navigation__item">
              <a
                href="#teachers"
                className="burger__menu-navigation__link"
                onClick={() => {
                  handleMenuLinkClick();
                  handleOpenMenu();
                }}
              >
                Наши преподаватели
              </a>
            </li>
            <li className="burger__menu-navigation__item">
              <a
                href="#for"
                className="burger__menu-navigation__link"
                onClick={() => {
                  handleMenuLinkClick();
                  handleOpenMenu();
                }}
              >
                Для кого обучение
              </a>
            </li>
            <li className="burger__menu-navigation__item">
              <a
                href="#graduates"
                className="burger__menu-navigation__link"
                onClick={() => {
                  handleMenuLinkClick();
                  handleOpenMenu();
                }}
              >
                Наши выпускники
              </a>
            </li>
          </ul>
        </nav>

        <div className="burger__menu-access">
          <a href="tel:+78622544743" className="burger__menu-access__number">
            <img
              className="burger__menu-access__number-icon"
              src={PhoneIcon}
              alt=""
              width="40"
              height="40"
              loading="lazy"
            />
            <span className="burger__menu-access__number-main">
              +7 (862) 254-47-43
            </span>
          </a>
          <a
            href="https://yandex.eu/maps/-/CHSW6ZZ8"
            className="burger__menu-access__address"
            target={"_blank"}
          >
            <img
              className="burger__menu-access__address-icon"
              src={LocateIcon}
              alt=""
              width="40"
              height="40"
              loading="lazy"
            />
            <span className="burger__menu-access__address-main">
              г. Сочи, ул. Чайковского, 45
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
