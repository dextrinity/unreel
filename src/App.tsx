import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import HeaderContent from "./components/Header/HeaderContent"
import MovieList from './components/ListofMovies/Movies/MovieList';
import EpisodeList from './components/ListofMovies/TVSeasons/TVEpisodes/EpisodeList';
import TVSeasonList from './components/ListofMovies/TVSeasons/TVSeasonList';
import TVSeasons from './components/ListofMovies/TVSeasons/TVSeasons';
import Home from './pages/HomePage/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderContent />
          <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />}/>
            <Route path='/tvshows' element={<TVShows />}/>
            <Route path='/movies/:movieId' element={<MovieList />}/>
            <Route path='/tvshows/:tvId' element={<TVSeasonList />}/>
          </Routes>
        
        </div>

    </BrowserRouter>
    </div>
  );
}

export default App;
