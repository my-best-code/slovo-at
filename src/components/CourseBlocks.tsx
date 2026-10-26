import Img from './Img';
import type { Picture } from '../lib/images';

interface Props {
  id?: string;
  items: { title: string; picture: Picture; paragraphs: string[]; list?: string[] }[];
}

/** Курсы на страницах «Группы» и «Индивидуально»: фото и описание, стороны чередуются. Строки — готовый HTML. */
export default function CourseBlocks({ id, items }: Props) {
  return (
    <div id={id} className="course-blocks">
      {items.map((item) => (
        <article key={item.title} className="course-block">
          <div className="course-block__body">
            <h2>{item.title}</h2>
            {item.paragraphs.map((html) => (
              <p key={html} dangerouslySetInnerHTML={{ __html: html }} />
            ))}
            {item.list && (
              <ul>
                {item.list.map((html) => (
                  <li key={html} dangerouslySetInnerHTML={{ __html: html }} />
                ))}
              </ul>
            )}
          </div>
          <Img className="course-block__image" picture={item.picture} />
        </article>
      ))}
    </div>
  );
}
