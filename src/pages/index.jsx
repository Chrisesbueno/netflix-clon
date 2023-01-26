import styles from "../styles/Home.module.css";

import { Hero, Slider } from "@/components";
import { slider } from "@/constants";

export default function () {
  return (
    <>
      <Hero />
      <div className={styles.sliders}>
        {slider.map((item) => (
          <Slider data={item.data} title={item.title} card={item.key} key={item.id} space={item.space} />
        ))}
      </div>
    </>
  );
}
