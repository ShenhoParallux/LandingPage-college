import "./Teachers.scss";
import {
  ImageCard,
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
          <ImageCard
            src={Teachers1Image}
            description={"Светлана Нитченко"}
            width={"264"}
            height={"461"}
          />
          <ImageCard
            src={Teachers2Image}
            description={"Надежда `Гончарова"}
            width={"264"}
            height={"461"}
          />
          <ImageCard
            src={Teachers3Image}
            description={"Ксения Воздвиженская"}
            width={"264"}
            height={"461"}
          />
          <ImageCard
            src={Teachers4Image}
            description={"Артем Чикишев"}
            width={"264"}
            height={"461"}
          />
          <ImageCard
            src={Teachers5Image}
            description={"Ирина Колесникова"}
            width={"264"}
            height={"461"}
          />
        </ul>
      </div>
    </section>
  );
};
