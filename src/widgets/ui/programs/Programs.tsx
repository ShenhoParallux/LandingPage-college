import "./Programs.scss";
import {
  CallbackButton,
  CardTag,
  Programs1Image,
  Programs2Image,
  Programs3Image,
  Programs4Image,
} from "@/shared";

export const Programs = () => {
  return (
    <section id="programs" className="programs container">
      <h2 className="programs__title">Образовательные программы</h2>
      <div className="programs__card">
        <ul className="programs__card-list">
          <li className="programs__card-item">
            <div className="programs__card-item__main">
              <h3 className="programs__card-item__main-title">
                Среднее профессиональное образование
              </h3>
              <div className="programs__card-item__main-tags">
                <CardTag content={"Очное обучение"} />
                <CardTag content={"На базе 9 классов"} />
                <CardTag content={"3 года 10 месяцев"} />
              </div>
              <div className="programs__card-item__main-description">
                <div className="programs__card-item__main-description__title">
                  Что входит?
                </div>
                <div className="programs__card-item__main-description__main">
                  <ul className="programs__card-item__main-description__main-list">
                    <li className="programs__card-item__main-description__main-item">
                      Фундаментальные знания и навыки
                    </li>
                    <li className="programs__card-item__main-description__main-item">
                      Кулинарные техники и технологии
                    </li>
                    <li className="programs__card-item__main-description__main-item">
                      Специализированные направления
                    </li>
                    <li className="programs__card-item__main-description__main-item">
                      Управления и организация производства
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="programs__card-item__description">
              <img
                className="programs__card-item__description-image"
                src={Programs1Image}
                alt=""
                width="240"
                height="410"
                loading="lazy"
              />
              <span className="programs__card-item__description-text">
                Для выпускников школ, которые хотят получить востребованную
                профессию и сразу начать карьеру
              </span>
            </div>
          </li>
          <li className="programs__card-item">
            <div className="programs__card-item__main">
              <h3 className="programs__card-item__main-title">
                Профессиональная переподготовка
              </h3>
              <div className="programs__card-item__main-tags">
                <CardTag content={"Очная / Вечерняя / Интенсивные курсы"} />
                <CardTag content={"От 3 до 6 месяцев"} />
              </div>
              <div className="programs__card-item__main-description">
                <div className="programs__card-item__main-description__title">
                  Что входит?
                </div>
                <div className="programs__card-item__main-description__main">
                  <ul className="programs__card-item__main-description__main-list">
                    <li className="programs__card-item__main-description__main-item">
                      Быстрый вход в профессию для смены карьеры
                    </li>
                    <li className="programs__card-item__main-description__main-item">
                      Углубленное изучение кулинарии или кондитерского дела
                    </li>
                    <li className="programs__card-item__main-description__main-item">
                      Диплом о профессиональной переподготовке
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="programs__card-item__description">
              <img
                className="programs__card-item__description-image"
                src={Programs2Image}
                alt=""
                width="240"
                height="410"
                loading="lazy"
              />
              <span className="programs__card-item__description-text">
                Для тех, кто хочет сменить профессию и начать работать в
                ресторанном бизнесе
              </span>
            </div>
          </li>
          <li className="programs__card-item">
            <div className="programs__card-item__main">
              <h3 className="programs__card-item__main-title">
                Повышение квалификации
              </h3>
              <div className="programs__card-item__main-tags">
                <CardTag content={"Краткосрочные курсы (от 2 недель)"} />
              </div>
              <div className="programs__card-item__main-description">
                <div className="programs__card-item__main-description__title">
                  Направления
                </div>
                <div className="programs__card-item__main-description__main">
                  <ul className="programs__card-item__main-description__main-list">
                    <li className="programs__card-item__main-description__main-item">
                      Органическая гастрокультура: для тех, кто заботится о
                      здоровье
                    </li>
                    <li className="programs__card-item__main-description__main-item">
                      Растительная кухня (Plant-Based): вегетарианские блюда,
                      альтернативные белки (тофу, темпе, сейтан, грибы, бобовые)
                    </li>
                    <li className="programs__card-item__main-description__main-item">
                      Концепции "Farm-to-Table" (От фермы до стола), "Zero
                      Waste" (Безотходное производство)
                    </li>
                    <li className="programs__card-item__main-description__main-item">
                      Научные принципы в создании новых текстур и форм
                    </li>
                    <li className="programs__card-item__main-description__main-item">
                      Оптимизация процессов и улучшение качества
                    </li>
                    <li className="programs__card-item__main-description__main-item">
                      HACCP и пищевая безопасность: Актуализация знаний по
                      санитарным нормам и контролю качества.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="programs__card-item__description">
              <img
                className="programs__card-item__description-image"
                src={Programs3Image}
                alt=""
                width="240"
                height="410"
                loading="lazy"
              />
              <span className="programs__card-item__description-text">
                Для действующих поваров, кондитеров, официантов, которые хотят
                расти в профессии
              </span>
            </div>
          </li>
          <li className="programs__card-item">
            <div className="programs__card-item__main">
              <h3 className="programs__card-item__main-title">
                Программы дополнительного образования для детей и взрослых
              </h3>
              <div className="programs__card-item__main-tags">
                <CardTag content={"Мастер-классы, кулинарные тимбилдинги"} />
              </div>
              <div className="programs__card-item__main-description">
                <div className="programs__card-item__main-description__title">
                  Формат
                </div>
                <div className="programs__card-item__main-description__main">
                  <ul className="programs__card-item__main-description__main-list">
                    <li className="programs__card-item__main-description__main-item">
                      Разовые мастер-классы (паста, суши, авторские десерты)
                    </li>
                    <li className="programs__card-item__main-description__main-item">
                      Корпоративные кулинарные баттлы
                    </li>
                    <li className="programs__card-item__main-description__main-item">
                      Детские кулинарные курсы
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="programs__card-item__description">
              <img
                className="programs__card-item__description-image"
                src={Programs4Image}
                alt=""
                width="240"
                height="410"
                loading="lazy"
              />
              <span className="programs__card-item__description-text">
                Для любителей кулинарии, компании для нестандартного
                тимбилдинга, детей от 10 лет
              </span>
            </div>
          </li>
        </ul>
      </div>
      <CallbackButton isLinkToFooter={true} />
    </section>
  );
};
