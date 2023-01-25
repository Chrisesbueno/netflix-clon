import Image from "next/image";
import styles from "../styles/Slider.module.css";

const RecommendCard = ({ content }) => {
  return (
    <div className={styles.recommend}>
      <Image src={content.img} alt="image" />
    </div>
  );
};

export default RecommendCard;
