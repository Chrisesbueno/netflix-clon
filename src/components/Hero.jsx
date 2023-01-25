import styles from "../styles/Hero.module.css";
import Image from "next/image";
import { hero } from "@/constants";
import ContentHero from "./ContentHero";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image src={hero.poster} className={styles.image} alt="hero" />
      <div className="container">
        <ContentHero {...hero} />
      </div>
    </div>
  );
};

export default Hero;
