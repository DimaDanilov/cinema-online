"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "@/styles/components/Sliders.scss";

import topViewMoviesData from "@/data/topViewMovies.json";
import { MovieInfoModel } from "@/types/MovieInfo";
import Link from "next/link";
import { TextCyberStyle } from "@/ui/TextCyberStyle";
const topViewMovies: MovieInfoModel[] = topViewMoviesData.data;

export const TopViewsCarousel = () => {
  return (
    <div className="carouselContainer">
      <h2>
        <TextCyberStyle fontSize="middle">ТОП-10</TextCyberStyle> просмотров за
        неделю
      </h2>
      <Swiper slidesPerView={"auto"} spaceBetween={150} slidesOffsetBefore={90}>
        {topViewMovies.map((movie, index) => (
          <SwiperSlide key={movie.id}>
            <div className="relative">
              <TextCyberStyle
                fontSize="big"
                className="absolute topViewersNumber"
              >{`${++index}`}</TextCyberStyle>
              <Link href={`/series/${movie.id}`} className="topViewersLink">
                <img src={movie.posterUrl} alt="" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
