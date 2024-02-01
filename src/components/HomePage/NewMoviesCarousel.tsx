"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "@/styles/components/Sliders.scss";

import newMoviesData from "@/data/newMovies.json";
import { MovieInfoModel } from "@/types/MovieInfo";
import Link from "next/link";
const newMovies: MovieInfoModel[] = newMoviesData.data;

export const NewMoviesCarousel = () => {
  return (
    <div className="carousel-container">
      <h2>Новинки</h2>
      <Swiper slidesPerView={"auto"} spaceBetween={30} loop={true}>
        {newMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link
              href={`/series/${movie.id}`}
              className="newMovies-carousel-element"
            >
              <img src={movie.posterUrl} alt="" />
              <h3 className="newMovies-carousel-element-title">
                {movie.name.rus}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
