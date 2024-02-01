import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "@/styles/components/Sliders.scss";
import { EpisodeModel } from "@/types/MovieInfo";

type VideoCarouselProps = {
  episodes: EpisodeModel[];
};

export const VideoCarousel = ({ episodes }: VideoCarouselProps) => {
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={50}>
      {episodes.map((episode) => (
        <SwiperSlide key={episode.id}>
          <div className="episodes-carousel-element">
            <img src={episode.previewImg} alt="" />
            <div className="episode-info-container">
              <h4>{episode.id} серия</h4>
              <h4 className="duration">{episode.duration}</h4>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
