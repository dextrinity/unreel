import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/Header/PageHeader'
import HomeContent from '../../components/ListofMovies/HomeContent/HomeContent'
import HomePageContent from './HomePageContent'
import { Trending } from '../../models/home'
import { Link } from 'react-router-dom'
import MovieList from '../../components/ListofMovies/Movies/MovieList'
import SingleContent from '../../components/ListofMovies/SingleContent/SingleContent'
const base_API_trending = "https://api.themoviedb.org/3/trending/all/day?api_key=580e60a52ac48c49cfd3ca83ce561599"
const base_API_movie = "https://api.themoviedb.org/3/trending/movie/day?api_key=580e60a52ac48c49cfd3ca83ce561599"
const base_API_tv = "https://api.themoviedb.org/3/trending/tv/day?api_key=580e60a52ac48c49cfd3ca83ce561599"



const Home = () => {

  const [contentTrending, setContentTrending] = useState<Trending>();
  const [contentTV, setContentTV] = useState<Trending>();
  const [contentMovie, setContentMovie] = useState<Trending>();

  useEffect(() => {
    axios.get(base_API_trending).then((response) => {
      const postData: Trending = response.data;
      setContentTrending(postData);
      console.log(postData);
    });
  }, []);

  useEffect(() => {
    axios.get(base_API_tv).then((response) => {
      const postData: Trending = response.data;
      setContentTV(postData);
      console.log(postData);
    });
  }, []);


  useEffect(() => {
    axios.get(base_API_movie).then((response) => {
      const postData: Trending = response.data;
      setContentMovie(postData);
      console.log(postData);
    });
  }, []);
  return (
    <div>
      <HomePageContent />
  <div className="main-content">
      


      <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h3>Movies</h3>
                        <Link to="/movies">
                            <h3 className="small">View more</h3>
                        </Link>
                    </div>
                </div>
            </div>

    <div className="trending">
      {contentMovie && contentMovie?.results.map((c) => <SingleContent key={c.id} trendingDetails={c}   />)}
    </div>

    
    <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h3>TV Series</h3>
                        <Link to="/tvshows">
                            <h3 className="small">View more</h3>
                        </Link>
                    </div>
                </div>
            </div>

    <div className="trending">
      {contentTV && contentTV?.results.map((c) => <SingleContent key={c.id} trendingDetails={c}   />)}
    </div>


    <div></div>
    </div>
    </div>
  )
}

export default Home