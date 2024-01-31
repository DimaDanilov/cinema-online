"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "@/styles/components/Sliders.scss";

import topViewMoviesData from "@/data/topViewMovies.json";
import { MovieInfo } from "@/types/MovieInfo";
import Link from "next/link";
import { TextCyberStyle } from "@/ui/TextCyberStyle";
const topViewMovies: MovieInfo[] = topViewMoviesData.data;

export const TopViewsSlider = () => {
  return (
    <div className="slider-container">
      <h2>
        <TextCyberStyle fontSize="middle">ТОП-10</TextCyberStyle> просмотров за
        неделю
      </h2>
      <Swiper slidesPerView={"auto"} spaceBetween={80}>
        {topViewMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link
              href={`/series/${movie.id}`}
              className="newMovies-slider-element"
            >
              <img src={movie.imgUrl} alt="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
