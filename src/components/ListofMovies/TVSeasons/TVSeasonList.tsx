import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Seasons, TVDetails } from "../../../models/tvSeries";
import PageHeader from "../../Header/PageHeader";
import TVSeasons from "./TVSeasons";
import './TVSeasons.css'

const TVSeasonList = () => {
  let { tvId } = useParams();
  const base_API = `https://api.themoviedb.org/3/tv/${tvId}?api_key=580e60a52ac48c49cfd3ca83ce561599`;

  const [content, setContent] = useState<TVDetails>();
  const [selectedSeason, setSelectedSeason] = useState<Seasons>();

  useEffect(() => {
    axios.get(base_API).then((response) => {
      const postData: TVDetails = response.data;
      setContent(postData);
      console.log(postData);
    });
  },[base_API]);

  const handleOverviewClick = (seasons: Seasons) => {
    setSelectedSeason(seasons);
    console.log(seasons);
  };

  return (
    <>
        <div>
      <PageHeader />
    </div>
        <div className="tv-season">
      {content &&
        content?.seasons.map((c) => (
          <TVSeasons
            key={c.id}
            seasonDetails={c}
            handleOverviewClick={handleOverviewClick}
          />
        ))}
        </div>
    </>
  );
};

export default TVSeasonList;
