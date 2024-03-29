import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "styles/components/common/Carousels/EpisodesCarousel.module.scss";
import { EpisodeModel } from "types/MovieInfo";

type VideoCarouselProps = {
  episodes: EpisodeModel[];
};

export const VideoCarousel = ({ episodes }: VideoCarouselProps) => {
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={50} className={styles.swiper}>
      {episodes.map((episode) => (
        <SwiperSlide key={episode.id} className={styles.swiperSlide}>
          <div className={styles.episodesCarouselElement}>
            <img src={episode.previewImg} alt="" />
            <div className={styles.episodeInfoContainer}>
              <h4>{episode.id} серия</h4>
              <h4 className="duration">{episode.duration}</h4>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
