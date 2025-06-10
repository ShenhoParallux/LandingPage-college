import "./BurgerButton.scss";
import { LocateIcon, PhoneIcon } from "@/shared/assets/images";

export const BurgerButton = () => {
  const handleMenuLinkClick = () => {
    const checkbox = document.getElementById(
      "burger-toggle",
    ) as HTMLInputElement;

    if (checkbox) {
      checkbox.checked = false;
    }
  };

  return (
    <div className="burger visible-mobile">
      <input
        id="burger-toggle"
        className="burger__button-toggle"
        type="checkbox"
      />
      <label htmlFor="burger-toggle" className="burger__button">
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
                onClick={handleMenuLinkClick}
              >
                Образовательные программы
              </a>
            </li>
            <li className="burger__menu-navigation__item">
              <a
                href="#teachers"
                className="burger__menu-navigation__link"
                onClick={handleMenuLinkClick}
              >
                Наши преподаватели
              </a>
            </li>
            <li className="burger__menu-navigation__item">
              <a
                href="#for"
                className="burger__menu-navigation__link"
                onClick={handleMenuLinkClick}
              >
                Для кого обучение
              </a>
            </li>
            <li className="burger__menu-navigation__item">
              <a
                href="#graduates"
                className="burger__menu-navigation__link"
                onClick={handleMenuLinkClick}
              >
                Наши выпускники
              </a>
            </li>
          </ul>
        </nav>

        <div className="burger__menu-access">
          <a href="tel:8(862)254-47-43" className="burger__menu-access__number">
            <img
              className="burger__menu-access__number-icon"
              src={PhoneIcon}
              alt=""
              width="40"
              height="40"
              loading="lazy"
            />
            <span className="burger__menu-access__number-main">
              8 (862) 254-47-43
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
