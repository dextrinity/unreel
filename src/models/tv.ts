import { Series } from "./tvSeries";

export interface TV {
    id: number;
    name: string;
    number_of_seasons: number;
    number_of_episodes: number;
    seasons: Series[];

}

export interface TVModel {
    id: number;
    name: string;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_count: number;
    vote_average: number;
    tagline: string;
    backdrop_path: string;
    genres: Genres[];
}


export interface Genres {
    id: number;
    name: string;
}
