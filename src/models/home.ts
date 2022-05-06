export interface Trending {
    page: number;
    results: results[];
}

export interface results {
    id: number;
    title: string;
    release_date: string;
    popularity: number;
    poster_path: string;
    media_type: string;
    name: string
    overview: string
    vote_average: number
    backdrop_path: string
}
