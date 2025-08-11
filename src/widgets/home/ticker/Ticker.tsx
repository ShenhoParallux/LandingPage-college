import "./Ticker.scss";
import Marquee from "react-fast-marquee";

export const Ticker = () => {
  return (
    <section className="ticker">
      <Marquee
        speed={50}
        direction={"left"}
        pauseOnHover={false}
        gradient={true}
        gradientWidth={50}
        loop={0}
        className="ticker__content"
      >
        <p className="ticker__content-text">
          Для тех, кто стремится к успеху и новым вершинам
        </p>
        <p className="ticker__content-text">Для выпускников школ</p>
        <p className="ticker__content-text">
          Для действующих работников индустрии питания
        </p>
        <p className="ticker__content-text">
          Всем, кто хочет изменить свою профессию
        </p>
        <p className="ticker__content-text">
          Для тех, кто стремится к успеху и новым вершинам
        </p>
        <p className="ticker__content-text">Для выпускников школ</p>
        <p className="ticker__content-text">
          Для действующих работников индустрии питания
        </p>
        <p className="ticker__content-text">
          Всем, кто хочет изменить свою профессию
        </p>
        <p className="ticker__content-text">
          Для тех, кто стремится к успеху и новым вершинам
        </p>
        <p className="ticker__content-text">Для выпускников школ</p>
        <p className="ticker__content-text">
          Для действующих работников индустрии питания
        </p>
        <p className="ticker__content-text">
          Всем, кто хочет изменить свою профессию
        </p>
      </Marquee>
    </section>
  );
};
