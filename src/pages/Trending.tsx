import React, { useState, useEffect} from "react";
import axios from "axios";
import { Trending } from "../models/home";
import SingleContent from "../components/ListofMovies/SingleContent/SingleContent";
import PageHeader from "../components/Header/PageHeader";
const base_API = "https://api.themoviedb.org/3/trending/all/day?api_key=580e60a52ac48c49cfd3ca83ce561599"


const TrendingPage = () => {
  const [content, setContent] = useState<Trending>();


  useEffect(() => {
    axios.get(base_API).then((response) => {
      const postData: Trending = response.data;
      setContent(postData);
      console.log(postData);
    });
  }, []);

  return ( 
 <>
    <PageHeader/>
  <div className="main-content">
    
    <div>
      <span className="pageTitle">Trending</span>
    </div>
    <div className="movie-grid">
      {content && content?.results.map((c) => <SingleContent key={c.id} trendingDetails={c}   />)}
    </div>
    </div>
  
    </>
  );
};

export default TrendingPage;
