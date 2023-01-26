import styles from "../styles/Hero.module.css";
import Image from "next/image";
import Link from "next/link";

const ContentHero = ({ content, buttons }) => {
  const title = content.title;
  const limit = Number(title.search(" "));
  const handleTitle = (start, finish) => title.substring(start, finish);

  const data = {
    main: handleTitle(0, limit),
    secondary: handleTitle(limit + 1),
  };
  return (
    <div className={styles.contentHero}>
      <div className={styles.title}>
        <h1>{data.main !== undefined && data.main}</h1>
        <p>{data.secondary !== undefined && data.secondary}</p>
      </div>
      <div className={styles.top}>
        <Image src={content.top.icon} alt="2"/>
        <p>{content.top.title}</p>
      </div>
      <p className={styles.description}>{content.description}</p>
      <div className={styles.buttons}>
        <Link href={`/movies/${title}`} className={styles.play}>
          <i className={buttons.play.icon}></i>
          {buttons.play.title}
        </Link>
        <Link href={`/movies/${title}`} className={styles.info}>
          <i className={buttons.info.icon}></i>
          {buttons.info.title}
        </Link>
      </div>
    </div>
  );
};

export default ContentHero;
