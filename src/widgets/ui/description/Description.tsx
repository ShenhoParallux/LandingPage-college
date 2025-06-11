import "./Description.scss";
import { DescriptionImage } from "@/shared";

export const Description = () => {
  return (
    <section className="description container">
      <div className="description__main">
        <div className="description__main-title">
          Мы формируем будущих звезд ресторанного бизнеса
        </div>
        <div className="description__main-description">
          <span className="description__main-description__text">
            Современные программы, реальная практика на передовом оборудовании и
            опыт лучших мастеров своего дела – это твой билет в успешную
            карьеру.
          </span>
          <span className="description__main-description__text">
            Готов создавать кулинарные шедевры или управлять лучшими
            ресторанами? Твое будущее начинается здесь, в сердце курортной
            столицы!
          </span>
        </div>
      </div>
      <img
        className="description__image"
        src={DescriptionImage}
        alt="Шефы смеются."
        width="697"
        height="382"
        loading="lazy"
      />
    </section>
  );
};
