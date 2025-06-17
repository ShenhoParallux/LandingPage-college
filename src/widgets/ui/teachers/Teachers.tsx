import "./Teachers.scss";
import {
  Teachers1Image,
  Teachers2Image,
  Teachers3Image,
  Teachers4Image,
  Teachers5Image,
} from "@/shared";

export const Teachers = () => {
  return (
    <section id="teachers" className="teachers container">
      <h2 className="teachers__title">Наши преподаватели</h2>
      <div className="teachers__images">
        <ul className="teachers__images-list">
          <li className="teachers__images-item">
            <img
              className="teachers__images-image"
              src={Teachers1Image}
              alt="Светлана Нитченко"
              width="284"
              height="461"
              loading="lazy"
            />
            <span className="teachers__images-description">
              Светлана Нитченко
            </span>
          </li>
          <li className="teachers__images-item">
            <img
              className="teachers__images-image"
              src={Teachers2Image}
              alt="Надежда Гончарова"
              width="284"
              height="461"
              loading="lazy"
            />
            <span className="teachers__images-description">
              Надежда Гончарова
            </span>
          </li>
          <li className="teachers__images-item">
            <img
              className="teachers__images-image"
              src={Teachers3Image}
              alt="Ксения Воздвиженская"
              width="284"
              height="461"
              loading="lazy"
            />
            <span className="teachers__images-description">
              Ксения Воздвиженская
            </span>
          </li>
          <li className="teachers__images-item">
            <img
              className="teachers__images-image"
              src={Teachers4Image}
              alt="Артем Чикишев"
              width="284"
              height="461"
              loading="lazy"
            />
            <span className="teachers__images-description">Артём Чикишев</span>
          </li>
          <li className="teachers__images-item">
            <img
              className="teachers__images-image"
              src={Teachers5Image}
              alt="Ирина Колесникова"
              width="284"
              height="461"
              loading="lazy"
            />
            <span className="teachers__images-description">
              Ирина Колесникова
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
