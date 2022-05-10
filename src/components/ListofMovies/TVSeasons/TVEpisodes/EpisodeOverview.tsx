
import ReactStars from "react-rating-stars-component";
import React from "react";
import { Episode } from "../../../../models/tvSeries";
import apiConfig from "../../../../apiConfig/apiConfig";
import unknown from '../../../../assets/unknown.jpg'

// import DefaulImage from './DefaultImage.jpeg';
const GUESTIMG_URL = "https://www.themoviedb.org/t/p/w276_and_h350_face/";

interface OverviewProps {
  overview: Episode;
}

const EpisodeOverview = (props: OverviewProps) => {
  const {
    name,
    still_path,
    overview,
    guest_stars,
    vote_average,
  } = props.overview;

  const guest = guest_stars.map((c) => (
    <div className="overAllGuest">
    <div className="guestContent">
      <img
        className="guestImage"
        src={GUESTIMG_URL + c.profile_path}
        alt={c.original_name} onError={({ currentTarget }) => {
          currentTarget.src=`${unknown}`
        }}
      ></img>
      <div className="guestDetails"></div>
      <div className="charName">
      <p className="orignalName" key={c.original_name}>{c.original_name.split(" ")[0] + " " + c.original_name.split(" ")[1]}</p>
      <p className="character"key={c.character}>"{c.character.split(" ")[0]}"</p>
      </div>
    </div>
    </div>
  ));


  const rateVote = (vote_average / 10) * 5;

  // const [expanded, setExpanded] = useState(false);
  // const dataForDisplay = expanded ? guest : guest.slice(0, 8);

  const dataForDisplay = guest.slice(0, 5);
  

  return (
    <>
      <div
        className="bannerEpisode"
        style={{
          backgroundImage: `url(${apiConfig.originalImage(
            still_path
          )})`,
        }}
      ></div>
      <div className="mb-3 movie-content container">
        <div className="movie-content__poster">
          <div
            className="movie-content__poster__img"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                still_path
              )})`,
            }}
          ></div>
        </div>
        <div className="movie-content__info">
          <h1 className="title">{name}</h1>
      
          <ReactStars
              count={5}
              value={rateVote}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#F4C243"
            />
          <p className="overview">{overview}</p>
          
            </div>
           
    </div>
    <div className="section mb-3">
                </div>
    </>
  );
};

export default EpisodeOverview;
