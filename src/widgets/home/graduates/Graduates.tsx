import './Graduates.scss';
import {
  Graduates1Image,
  Graduates2Image,
  Graduates3Image,
  Graduates4Image,
  Graduates5Image,
  Graduates6Image,
  GraduatesCard,
} from '@/shared';

export const Graduates = () => {
  return (
    <section id={'graduates'} className={'graduates container'}>
      <h2 className="graduates__title">Наши студенты и выпускники</h2>
      <div className="graduates__cards">
        <ul className="graduates__cards-list">
          <li className="graduates__cards-item">
            <GraduatesCard
              title={'Никита Чернюк'}
              tag={'Су-шеф'}
              place={'Ресторан “Горыныч” (проект Альянса White Rabbit Family)'}
              year={'Выпускник 2020 года'}
              description={
                'Преподаватели колледжа – настоящие мастера своего дела. Они вдохновляли, мотивировали и прививали любовь к профессии, ответственность, умение работать в команде и быстро принимать решения'
              }
              source={Graduates1Image}
            />
          </li>
          <li className="graduates__cards-item">
            <GraduatesCard
              title={'Анастасия Петрова'}
              tag={'Су-шеф'}
              place={'Ресторан “Клево”'}
              year={'Выпускник 2020 года'}
              description={
                'Колледж дал мне понимание кулинарии. Мы оттачивали навыки, осваивали классические и современные техники приготовления, учились работать с различными продуктами'
              }
              source={Graduates2Image}
            />
          </li>
          <li className="graduates__cards-item">
            <GraduatesCard
              title={'Леван Лакия'}
              tag={'Су-шеф кондитер'}
              place={'Ресторан "D.O.M."'}
              year={'Выпускник 2024 года'}
              description={
                'В колледже царит атмосфера здоровой конкуренции и поддержки. Мы участвовали в конкурсах, проходили стажировки в лучших заведениях Сочи. Это дало возможность понять внутреннюю кухню ресторанного бизнеса'
              }
              source={Graduates3Image}
            />
          </li>
          <li className="graduates__cards-item">
            <GraduatesCard
              title={'Анна Васютина'}
              tag={'Повар'}
              place={'Ресторан "Chiko"'}
              year={'Выпускница 2024 года'}
              description={
                'Если вы мечтаете о карьере в кулинарии и ищете учебное заведение, которое даст вам реальные знания, навыки и мощный импульс для развития – Университетский колледж Сочинского государственного университета – это ваш выбор'
              }
              source={Graduates4Image}
            />
          </li>
          <li className="graduates__cards-item">
            <GraduatesCard
              title={'Никита Кубрак'}
              tag={'Шеф-кондитер'}
              place={'Ресторан "Дружба"'}
              year={'Выпускник 2017 года'}
              description={
                'Благодаря колледжу СочиГУ я смог получить необходимые навыки, сформировать правильное отношение к профессии, понять ее философию и ценности. Именно здесь я осознал, что кулинария – искусство, наука и постоянное самосовершенствование'
              }
              source={Graduates5Image}
            />
          </li>
          <li className="graduates__cards-item">
            <GraduatesCard
              title={'Сергей Ефимов'}
              tag={'Су-шеф'}
              place={'Ресторан "Мидийное место"'}
              year={'Выпускник 2025 года'}
              description={
                'Колледж обеспечил нас доступом к современному оборудованию и технологиям. Мы тренировались в условиях, максимально приближенных к реальной ресторанной кухне, чтобы быть готовыми к вызовам индустрии.'
              }
              source={Graduates6Image}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
