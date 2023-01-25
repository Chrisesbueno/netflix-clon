import Image from "next/image";
import styles from "../styles/Slider.module.css";

const TrendingCard = ({ content }) => {
  return (
    <div className={styles.trending}>
      <Image src={content.top} alt="image" className={styles.top} />
      <Image src={content.img} alt="image" className={styles.poster} />
    </div>
  );
};

export default TrendingCard;