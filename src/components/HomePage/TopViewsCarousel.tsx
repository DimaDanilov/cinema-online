"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "styles/components/common/Carousels/TopViewsCarousel.module.scss";

import topViewMoviesData from "data/topViewMovies.json";
import { MovieInfoModel } from "types/MovieInfo";
import Link from "next/link";
import { TextCyberStyle } from "ui/TextCyberStyle";
const topViewMovies: MovieInfoModel[] = topViewMoviesData.data;

export const TopViewsCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <h2>
        <TextCyberStyle fontSize="middle">ТОП-10</TextCyberStyle> просмотров за
        неделю
      </h2>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={150}
        slidesOffsetBefore={90}
        className={styles.swiper}
      >
        {topViewMovies.map((movie, index) => (
          <SwiperSlide key={movie.id} className={styles.swiperSlide}>
            <div className="relative">
              <TextCyberStyle
                fontSize="big"
                className={["absolute", styles.topViewersNumber].join(" ")}
              >{`${++index}`}</TextCyberStyle>
              <Link
                href={`/series/${movie.id}`}
                className={styles.topViewersLink}
              >
                <img src={movie.posterUrl} alt="" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
