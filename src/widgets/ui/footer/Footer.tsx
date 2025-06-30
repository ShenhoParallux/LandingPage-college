import { CallbackButton, Input, LocateIcon, PhoneIcon } from "@/shared";
import "./Footer.scss";
import { UseSubmitForm } from "@/features";
import { useState } from "react";

export const Footer = () => {
  const { handleSubmit, formData, setFormData, status } = UseSubmitForm();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <footer id="footer" className={"footer"}>
      <div className="footer__main container">
        <div className="footer__main__description">
          <div className="footer__main__description-title">
            Получите консультацию
          </div>
          <div className="footer__main__description-subtitle">
            Оставьте заявку и мы свяжемся с вами
          </div>
        </div>
        <form className="footer__main__form" onSubmit={handleSubmit}>
          <div className="footer__main__form-body">
            <Input
              id={"name"}
              placeholder={"Имя"}
              type={"text"}
              label={"Имя"}
              value={formData.name}
              change={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              id={"tel"}
              placeholder={"+7(___)___-__-__"}
              type={"tel"}
              label={"Номер телефона"}
              value={formData.tel}
              change={(e) => setFormData({ ...formData, tel: e.target.value })}
              mask={true}
            />
            <Input
              id={"email"}
              placeholder={"Электронная почта"}
              type={"email"}
              label={"Электронная почта"}
              value={formData.email}
              change={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="footer__main__form-description">
            <div className="footer__main__form-description-checkbox">
              <label htmlFor="footer-checkbox" className={"visually-hidden"}>
                Кнопка
              </label>
              <input
                type="checkbox"
                id="footer-checkbox"
                required={true}
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <span className="footer__main__form-description-text">
              Нажимая на кнопку, я соглашаюсь на обработку персональных данных
            </span>
          </div>
          <CallbackButton isLinkToFooter={false} />
          {status === "sending" ? (
            <div className={"green"}>Идёт отправка...</div>
          ) : status === "success" ? (
            <div className={"green"}>Ваша заявка успешно отправлена!</div>
          ) : status === "error" ? (
            <div className={"red"}>
              Произошла ошибка при отправке, попробуйте ещё раз
            </div>
          ) : status === "notValidName" ? (
            <div className={"red"}>Имя введено неккоректно</div>
          ) : status === "notValidNumber" ? (
            <div className={"red"}>Номер телефона неккоректен</div>
          ) : (
            status === "notValidEmail" && (
              <div className={"red"}>Почта введена неккоректно</div>
            )
          )}
        </form>
      </div>
      <hr />
      <div className="footer__info container">
        <ul className="footer__info-list">
          <li className="footer__info-item footer__info-item__contacts">
            <a
              href="tel:+78622544743"
              title="Позвонить по номеру телефона"
              className="footer__info-item__link"
            >
              <img
                className="footer__info-item__link-image"
                src={PhoneIcon}
                alt=""
                width="40"
                height="40"
                loading="lazy"
              />
              +7 (862) 254-47-43
            </a>
          </li>
          <li className="footer__info-item footer__info-item__address">
            <a
              href="https://yandex.eu/maps/-/CHSW6ZZ8"
              target="_blank"
              className="footer__info-item__link"
            >
              <img
                className="footer__info-item__link-image"
                src={LocateIcon}
                alt=""
                width="40"
                height="40"
                loading="lazy"
              />
              Университетский экономико-технологический колледж <br />
              г. Сочи, ул. Чайковского, 45
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
