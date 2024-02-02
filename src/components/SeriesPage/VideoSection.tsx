"use client";

import { MovieInfoModel } from "@/types/MovieInfo";
import { useEffect, useState } from "react";
import styles from "@/styles/components/VideoSection.module.scss";
import { VideoCarousel } from "./VideoCarousel";

type VideoSection = Pick<MovieInfoModel, "videos">;

export const VideoSection = ({ videos }: VideoSection) => {
  const [seriesType, setSeriesType] = useState<"movie" | "series" | null>(null);
  const [currentSeason, setCurrentSeason] = useState<number>(1);

  function onSeasonChange(id: number) {
    setCurrentSeason(id);
  }

  useEffect(() => {
    if (videos?.movie) {
      setSeriesType("movie");
    } else if (videos?.seasons) {
      setSeriesType("series");
    }
  }, []);

  return (
    <div className={styles.videoSectionContainer}>
      <div className={styles.titleContainer}>
        <h2>
          {seriesType === "movie"
            ? "Фильм"
            : seriesType === "series" && "Сезоны"}
        </h2>
        <div className={styles.seasonsContainer}>
          {seriesType === "series" &&
            videos?.seasons?.map((season) => (
              <span
                onClick={() => onSeasonChange(season.id)}
                className={[
                  styles.season,
                  currentSeason === season.id ? styles.active : "",
                ].join(" ")}
              >
                {season.id}
              </span>
            ))}
        </div>
      </div>
      {seriesType && (
        <VideoCarousel
          episodes={
            seriesType === "movie"
              ? videos?.movie || []
              : (videos?.seasons &&
                  videos?.seasons[currentSeason - 1]?.episodes) ||
                []
          }
        />
      )}
    </div>
  );
};
