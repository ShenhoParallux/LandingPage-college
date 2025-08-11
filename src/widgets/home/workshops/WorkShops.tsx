import "./WorkShops.scss";
import {
  ImageCard,
  WorkShops1Image,
  WorkShops2Image,
  WorkShops3Image,
  WorkShops4Image,
} from "@/shared";

export const WorkShops = () => {
  return (
    <section className="workshops container">
      <h2 className="workshops__title">Учебные аудитории и мастерские</h2>
      <ul className="workshops__images">
        <ImageCard
          src={WorkShops1Image}
          description={"Учебный кондитерский цех"}
          width={"355"}
          height={"435"}
          wrap={true}
        />
        <ImageCard
          src={WorkShops2Image}
          description={"Учебная мастерская поварского дела"}
          width={"355"}
          height={"435"}
          wrap={true}
        />
        <ImageCard
          src={WorkShops3Image}
          description={"Кухня учебного ресторана"}
          width={"355"}
          height={"435"}
          wrap={true}
        />
        <ImageCard
          src={WorkShops4Image}
          description={"Кулинарная студия"}
          width={"355"}
          height={"435"}
          wrap={true}
        />
      </ul>
    </section>
  );
};
