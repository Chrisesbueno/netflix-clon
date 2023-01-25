import Image from "next/image";
import styles from "../styles/Slider.module.css";

const OriginalCard = ({ content }) => {
  return (
    <div className={styles.original}>
      <Image src={content.img} alt="image" />
    </div>
  );
};

export default OriginalCard;
