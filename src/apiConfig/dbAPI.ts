import axios from "axios"
import apiConfig from './apiConfig'


export function getMovie(movieId:number) {
    return axios({
      method: 'get',
      url: `${apiConfig.baseUrl}/movie/${movieId}`,
      params: {
          "api_key": apiConfig.apiKey
      }
    });
  }


  export function getTV(tvId:number) {
    return axios({
      method: 'get',
      url: `${apiConfig.baseUrl}/tv/${tvId}`,
      params: {
        "api_key": apiConfig.apiKey
    }
    });
  }

  export function getMoviePopular() {
    return axios({
      method: 'get',
      url: `${apiConfig.baseUrl}/movie/popular`,
      params: {
        "api_key": apiConfig.apiKey
    }
    });
  }

  export function getSeason(tvId:number, seasonNumber:number) {
    return axios({
      method: 'get',
      url: `${apiConfig.baseUrl}/tv/${tvId}/season/${seasonNumber}`,
      params: {
          "api_key": apiConfig.apiKey
      }
    });
  }

  export function getMovieCredit(movieId:number) {
    return axios({
      method: 'get',
      url: `${apiConfig.baseUrl}/movie/${movieId}/credits`,
      params: {
        "api_key": apiConfig.apiKey
    }
    });
  }

  export function getTVCredit(tvId:number) {
    return axios({
      method: 'get',
      url: `${apiConfig.baseUrl}/tv/${tvId}/credits`,
      params: {
        "api_key": apiConfig.apiKey
    }
    });
  }


  export function getTVVid(tvId:number, seasonNumber:number, episodeNumber:number) {
    return axios({
      method: 'get',
      url: `${apiConfig.baseUrl}/tv/${tvId}/videos/${seasonNumber}/episode/${episodeNumber}/videos`,
      params: {
        "api_key": apiConfig.apiKey
    }
    });
  }

  export function getMovieTrailer(movieId:number) {
    return axios({
      method: 'get',
      url: `${apiConfig.baseUrl}/movie/${movieId}/videos`,
      params: {
          "api_key": apiConfig.apiKey
      }
    });
  }

  export function getTVSeriesTrailer(tvId:number) {
    return axios({
      method: 'get',
      url: `${apiConfig.baseUrl}/tv/${tvId}/videos`,
      params: {
          "api_key": apiConfig.apiKey
      }
    });
  }