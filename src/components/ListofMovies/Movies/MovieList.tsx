import React, { useState, useEffect } from "react";

import Movie from "./Movie";

import { useParams } from "react-router-dom";
import { getMovie } from "../../../apiConfig/dbAPI";
import { MovieModel } from "../../../models/movie";
import VideoList from "./VideoList";
// import VideoList from "./VideoList";



const MovieList = () => {
  let { movieId }  = useParams<{movieId?: any}>();

  const [post, setPost] = useState<MovieModel>();

  useEffect(() => {
    getMovie(+movieId).then((response) => {
      const movieData: MovieModel = response.data;
      setPost(movieData);
      console.log(movieData);
    });
  }, [movieId]);

  return (
    <div className="main-frame">
        {post && <Movie movieOverview={post} />
    }
    <div className="section mb-3">
        <VideoList />
                </div>
    </div>
  );
};

export default MovieList;
