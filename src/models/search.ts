export interface SearchMovies {
    page: number;
    results: Searchresults[];
}

export interface Searchresults {
    id: number;
    title: string;
    release_date: string;
    popularity: number;
    poster_path: string;
    name: string
    overview: string
    vote_average: number
}

