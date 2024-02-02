"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "styles/components/common/Carousels/NewMoviesCarousel.module.scss";

import newMoviesData from "data/newMovies.json";
import { MovieInfoModel } from "types/MovieInfo";
import Link from "next/link";
const newMovies: MovieInfoModel[] = newMoviesData.data;

export const NewMoviesCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <h2>Новинки</h2>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        className={styles.swiper}
      >
        {newMovies.map((movie) => (
          <SwiperSlide key={movie.id} className={styles.swiperSlide}>
            <Link
              href={`/series/${movie.id}`}
              className={styles.newMoviesCarouselElement}
            >
              <div
                className={["relative", styles.ratingImageContainer].join(" ")}
              >
                <img src={movie.posterUrl} alt="" />
                <span className={["absolute", styles.ratingBlock].join(" ")}>
                  {movie.rating}
                </span>
              </div>
              <h3 className={styles.newMoviesCarouselElementTitle}>
                {movie.name.rus}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
