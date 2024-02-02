"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import styles from "styles/components/common/Carousels/NewMoviesCarousel.module.scss";

import newMoviesData from "data/newMovies.json";
import { MovieInfoModel } from "types/MovieInfo";
import Link from "next/link";
const newMovies: MovieInfoModel[] = newMoviesData.data;

type SimilarCarouselProps = Pick<MovieInfoModel, "id">;

export const SimilarCarousel = ({ id }: SimilarCarouselProps) => {
  return (
    <div className={styles.carouselContainer}>
      <h2>Похожее</h2>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        className={styles.swiper}
      >
        {newMovies
          .filter((movie) => movie.id !== id)
          .map((movie) => (
            <SwiperSlide key={movie.id} className={styles.swiperSlide}>
              <Link href={`/series/${movie.id}`}>
                <img src={movie.posterUrl} alt="" />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
