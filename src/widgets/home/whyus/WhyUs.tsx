import "./WhyUs.scss";
import { WhyUs1Image, WhyUs2Image, WhyUs3Image, WhyUs4Image } from "@/shared";

export const WhyUs = () => {
  return (
    <section className={"whyus container"}>
      <h2 className="whyus__title">Почему выбирают нас?</h2>
      <ul className="whyus__list">
        <li className="whyus__list-item">
          <img
            className="whyus__list-image"
            src={WhyUs1Image}
            alt=""
            width="56"
            height="56"
            loading="lazy"
          />
          <div className="whyus__list-description">
            Практика в топовых ресторанах – учим на реальных кейсах
          </div>
        </li>
        <li className="whyus__list-item">
          <img
            className="whyus__list-image"
            src={WhyUs2Image}
            alt=""
            width="56"
            height="56"
            loading="lazy"
          />
          <div className="whyus__list-description">
            Преподаватели-практики – опытные шеф-повара
          </div>
        </li>
        <li className="whyus__list-item">
          <img
            className="whyus__list-image"
            src={WhyUs3Image}
            alt=""
            width="56"
            height="56"
            loading="lazy"
          />
          <div className="whyus__list-description">
            Трудоустройство - гарантируем стажировку и трудоустройство
          </div>
        </li>
        <li className="whyus__list-item">
          <img
            className="whyus__list-image"
            src={WhyUs4Image}
            alt=""
            width="56"
            height="56"
            loading="lazy"
          />
          <div className="whyus__list-description">
            Современное оборудование – работаем как в лучших кухнях мира
          </div>
        </li>
      </ul>
    </section>
  );
};
