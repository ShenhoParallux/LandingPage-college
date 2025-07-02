import "./header.scss";
import { LogoImage } from "@/shared/assets/images";
import { BurgerButton } from "@/shared/ui";

export const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header__information container">
        <a href="#header" className="header__information-logo">
          <img
            className="header__information-logo__image"
            src={LogoImage}
            alt=""
            width="37"
            height="44"
            loading="lazy"
          />
          <div className="header__information-logo__description">
            Университетский <br /> экономико-технологический <br /> колледж
          </div>
        </a>
        <div className="header__information-access hidden-mobile">
          <a
            href="https://yandex.eu/maps/-/CHSW6ZZ8"
            target="_blank"
            className="header__information-access__address"
          >
            г. Сочи, ул. Чайковского, 45
          </a>
          <div className="header__information-access__contacts">
            <a
              href="tel:+78622544743"
              title="Позвонить по номеру телефона"
              className="header__information-access__contacts-link"
            >
              +7 (862) 254-47-43
            </a>
          </div>
        </div>
        <BurgerButton />
      </div>

      <hr />

      <div className="header__navigation container">
        <nav className="header__navigation-menu hidden-mobile">
          <ul className="header__navigation-menu__list">
            <li className="header__navigation-menu__item">
              <a href="#programs" className="header__navigation-menu__link">
                Образовательные программы
              </a>
            </li>
            <li className="header__navigation-menu__item">
              <a href="#teachers" className="header__navigation-menu__link">
                Наши преподаватели
              </a>
            </li>
            <li className="header__navigation-menu__item">
              <a href="#for" className="header__navigation-menu__link">
                Для кого обучение
              </a>
            </li>
            <li className="header__navigation-menu__item">
              <a href="#graduates" className="header__navigation-menu__link">
                Наши выпускники
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
