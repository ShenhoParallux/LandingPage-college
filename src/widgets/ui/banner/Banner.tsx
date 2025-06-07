import "./Banner.scss";
import { CallbackButton } from "@/shared/ui";

export const Banner = () => {
  return (
    <section className="banner">
      <h1 className="banner__title">Мастерство вкуса</h1>
      <div className="banner__main">
        <div className="banner__main-description">
          Эксклюзивная подготовка поваров и кондитеров в сердце Сочи
        </div>
        <CallbackButton isLinkToFooter={true} />
      </div>
    </section>
  );
};
