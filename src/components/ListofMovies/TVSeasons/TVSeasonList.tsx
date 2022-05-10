import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Episode, Seasons, TVDetails } from "../../../models/tvSeries";
import "./TVSeasons.css";
import TvSeasonDetails from "../TVSeasons/TVSeasonDetails/TvSeasonDetails";
import { getSeason, getTV } from "../../../apiConfig/dbAPI";
import { TV, TVModel } from "../../../models/tv";
import TVVideoList from "./TVSeasonDetails/TVVideoList";
import TVSeasons from "./TVSeasons";
import EpisodeList from "./TVEpisodes/EpisodeList";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EpisodeOverview from "./TVEpisodes/EpisodeOverview";

import './TVSeasonList.css'

const TVSeasonList = () => {
  let { tvId } = useParams<{ tvId?: any }>();
  const base_API = `https://api.themoviedb.org/3/tv/${tvId}?api_key=580e60a52ac48c49cfd3ca83ce561599`;

  const [content, setContent] = useState<TVDetails>();
  const [selectedSeason, setSelectedSeason] = useState<Seasons>();

  useEffect(() => {
    axios.get(base_API).then((response) => {
      const postData: TVDetails = response.data;
      setContent(postData);
      // console.log(postData);
    });
  }, [base_API]);

  const [post, setPost] = useState<TVModel>();
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>();

  // useEffect(() => {
  //   getTV(+tvId).then((response) => {
  //     const tvData: TV = response.data;
  //     getSeason(tvData.id, 1).then((response) => {
  //       const postData: Series = response.data;
  //       setPost(postData);
  //       setSelectedEpisode(postData.episodes[0])
  //       console.log(postData)
  //       console.log(tvData)
  //     });
  //   });
  // }, [tvId]);

  useEffect(() => {
    getTV(+tvId).then((response) => {
      const tvData: TVModel = response.data;
      getSeason(tvData.id, 1).then((response) => {
        const postTVData: Seasons = response.data;
        setSelectedSeason(postTVData);
        console.log(postTVData);
      });
      setPost(tvData);
    });
  }, [tvId]);

  const handleOverviewClick = (seasons: Seasons) => {
    const seasonId = seasons.season_number;
    getSeason(tvId, seasonId).then((response) => {
      const postTVData: Seasons = response.data;
      setSelectedSeason(postTVData);
      console.log(postTVData);
    });
    // console.log(seasons);
  };

  const handleOverviewEpisode = (episode: Episode) => {
    setSelectedEpisode(episode);
    console.log(episode);

  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <>
      <div>{post && <TvSeasonDetails movieOverview={post} />}</div>
      <ul className="tv-season">
        {content &&
          content.seasons
            .filter((s) => s.season_number !== 0)
            .map((c, index) => (
              <TVSeasons
                key={c.id}
                seasonDetails={c}
                handleOverviewClick={handleOverviewClick}
              />
            ))}
      </ul>

      <div>
        <div className="content">
          <div className="episodeList">
            <Slider {...settings}>
              {selectedSeason &&
                selectedSeason?.episodes.map((sd) => (
                  <EpisodeList
                    epDetails={sd}
                    handleOverviewEpisode={handleOverviewEpisode}
                  />
                ))}
            </Slider>
          </div>

          
        </div>
        <div>
        {/* {selectedEpisode && (
        <EpisodeOverview key={selectedEpisode.id} overview={selectedEpisode} />
      )} */}
      </div>
      </div>
      <div className="section mb-3">
        <TVVideoList />
      </div>
    </>
  );
};

export default TVSeasonList;
