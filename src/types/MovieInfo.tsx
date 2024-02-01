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
  logoUrl: string;
  backgroundImage: string;
  countries: string[];
  age: string;
  rating: number;
  genres: string[];
  audio: string[];
  quality: string;
};
