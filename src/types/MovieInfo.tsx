export type EpisodeModel = {
  id: number;
  duration: string;
  previewImg: string;
  date: string;
};

type SeasonModel = {
  id: number;
  episodes: EpisodeModel[];
};

export type MovieInfoModel = {
  id: number;
  name: {
    rus: string;
    original: string;
  };
  posterUrl: string;
  description: {
    short: string;
    full: string;
  };
  warnings?: {
    scenesAlcoSmoking?: boolean;
  };
  videos?: {
    movie?: EpisodeModel[];
    seasons?: SeasonModel[];
  };
  logoUrl: string;
  backgroundImage: string;
  countries: string[];
  age: string;
  rating: number;
  genres: string[];
  audio: string[];
  quality: string;
};
