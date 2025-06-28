import { CallbackButton, Input, LocateIcon, PhoneIcon } from "@/shared";
import "./Footer.scss";
import { UseSubmitForm } from "@/features";

export const Footer = () => {
  const { handleSubmit, formData, setFormData, status } = UseSubmitForm();

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
              placeholder={"+7"}
              type={"tel"}
              label={"Номер телефона"}
              value={formData.tel}
              change={(e) => setFormData({ ...formData, tel: e.target.value })}
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
            Нажимая на кнопку, я соглашаюсь на обработку персональных данных
          </div>
          <CallbackButton isLinkToFooter={false} />
          {status === "sending" ? (
            <div style={{ color: "green" }}>Идет отправка...</div>
          ) : status === "success" ? (
            <div style={{ color: "green" }}>
              Ваша заявка успешно отправлена!
            </div>
          ) : (
            status === "error" && (
              <div style={{ color: "red" }}>
                Произошла ошибка, попробуйте ещё раз
              </div>
            )
          )}
        </form>
      </div>
      <hr />
      <div className="footer__info container">
        <ul className="footer__info-list">
          <li className="footer__info-item footer__info-item__contacts">
            <a
              href="tel:8(862)254-47-43"
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
              8 (862) 254-47-43
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
