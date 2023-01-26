import styles from "../styles/Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import RecommendCard from "./RecommendCard";
import TrendingCard from "./TrendingCard";
import OriginalCard from "./OriginalCard";

const Slider = ({ data, title, card, space=80 }) => {
  return (
    <div className={styles.slider}>
      <div className="container">
        <h1>{title}</h1>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={space}
          slidesPerView={5}
          simulateTouch={true}
          grabCursor={true}
          navigation={true}
          className={styles.swiper}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className={styles.slide}>
              {card === 'iadawdAHAWEDANKLAl_31' ? (
                <RecommendCard content={item} />
              ) : card === 'ij12ada_kladoaJHIFAW' ? (
                <OriginalCard content={item} />
              ) : (
                <TrendingCard content={item} />
              )}
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
