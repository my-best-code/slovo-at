import Img from './Img';
import type { Picture } from '../lib/images';

interface Props {
  name: string;
  role: string;
  picture: Picture;
  bio: string[];
  quote: string[];
}

/** Преподаватель: фото, имя, роль, биография и цитата. */
export default function TeamMember({ name, role, picture, bio, quote }: Props) {
  return (
    <article className="member">
      <Img className="member__photo" picture={picture} />
      <div className="member__body">
        <h2 className="member__name">{name}</h2>
        <p className="member__role">{role}</p>
        {bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <blockquote className="member__quote">
          {quote.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </blockquote>
      </div>
    </article>
  );
}
