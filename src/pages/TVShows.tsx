
import axios from "axios";
import { useEffect, useState } from "react";
import PageHeader from "../components/Header/PageHeader";
import SingleContent from "../components/ListofMovies/SingleContent/SingleContent";
import { Trending } from "../models/home";
import { SearchMovies } from "../models/search";
import useDebounce from "../hooks/useDebounce";
// import SearchInput from "./Search/SearchInput";
// import SearchContent from "./Search/SearchContent";
const base_API = "https://api.themoviedb.org/3/trending/tv/day?api_key=580e60a52ac48c49cfd3ca83ce561599"

const TVShows = () => {

 

  const [content, setContent] = useState<Trending>();
  
    useEffect(() => {
    axios.get(base_API).then((response) => {
      const postData: Trending = response.data;
      setContent(postData);
      console.log(postData);
    });
  }, []);

  // Search Section

  const [searchTerm, setSearchTerm] = useState<SearchMovies>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchQuery, 500);


  useEffect(
    () => {
      if (debouncedSearchTerm) {
        console.log('debounced');
        if (debouncedSearchTerm.length >= 3) {
          console.log(debouncedSearchTerm)
        } else {
        }
      } else {
        // setResults([]);
        // setIsSearching(false);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  // const handleSubmit = (e?:any) => {
  //   e.preventDefault();
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=580e60a52ac48c49cfd3ca83ce561599&query=${searchQuery}`
  //     )
  //     .then((response) => {
  //       const searchData: SearchMovies = response.data;
  //       setSearchTerm(searchData)
  //       console.log(searchData);

  //     });
  // };

  // const handleChange = (e) => {
  //   setSearchQuery(e.target.value);


  // };

  return ( 
    <>
    <PageHeader/>
  <div className="main-content">
    <span className="pageTitle">Movies</span>   
    <div className="movie-grid">
      {content && content?.results.map((c) => <SingleContent key={c.id} trendingDetails={c}  />)}
    </div>
    </div>
    
    </>
  );
};

export default TVShows;