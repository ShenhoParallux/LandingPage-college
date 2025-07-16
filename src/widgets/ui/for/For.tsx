import "./For.scss";
import {
  CallbackButton,
  ForCard,
  ForCooksImage,
  ForGraduatesImage,
} from "@/shared";

export const For = () => {
  return (
    <section id="for" className="for container">
      <h2 className="for__title">Для кого обучение?</h2>
      <div className="for__main">
        <div className="for__main-graduates">
          <div className="for__main-graduates__title">Выпускники школ</div>
          <div className="for__main-graduates__content">
            <div className="for__main-graduates__content-cards">
              <ForCard title={"Быстрый старт и ранний заработок"}>
                <span>
                  Осваиваете профессию раньше своих сверстников, выбирающих 10 и
                  11 класс
                </span>
              </ForCard>
              <ForCard title={"Карьерный рост"}>
                <span>
                  От помощника повара до су-шефа, шеф-повара, бренд-шефа
                </span>
              </ForCard>
              <ForCard title={"Разнообразие мест работы"}>
                <span>
                  Рестораны, отели, кейтеринг, круизные лайнеры, частные повара,
                  пищевые производства
                </span>
              </ForCard>
              <ForCard title={"Развитие личностных качеств"}>
                <span>
                  Дисциплина и ответственность; стрессоустойчивость и
                  тайм-менеджмент; командная работа и креативность
                </span>
              </ForCard>
            </div>
            <img
              className="for__main-graduates__content-image"
              src={ForGraduatesImage}
              alt="Повара смотрят в волшебную кастрюлю"
              width="698"
              height="531"
              loading="lazy"
              style={{ borderRadius: "8px" }}
            />
          </div>
        </div>
        <div className="for__main-cooks">
          <img
            className="for__main-cooks__image"
            src={ForCooksImage}
            alt="Повара и кондитеры колледжа"
            width="698"
            height="416"
            loading="lazy"
          />
          <div className="for__main-cooks__content">
            <div className="for__main-cooks__content-title">
              Для тех, кто хочет изменить свою профессию
            </div>
            <ForCard title={"Получите новые кулинарные навыки"}>
              <span>Освойте продвинутые кулинарные техники</span>
              <span>Овладейте искусством меню-инжиниринга</span>
              <span>Обновите знания НАССР и СанПин</span>
            </ForCard>
            <CallbackButton isLinkToFooter={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
