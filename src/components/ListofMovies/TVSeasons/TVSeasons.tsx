import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getSeason, getTV } from "../../../apiConfig/dbAPI";
import { TV, TVModel } from "../../../models/tv";
import { Episode, Seasons, TVDetails } from "../../../models/tvSeries";

import "./TVSeasons.css";

interface SeasonProps {
  seasonDetails: Seasons;
  handleOverviewClick: (seasons: Seasons) => unknown;
}


const TVSeasons = (props: SeasonProps) => {
  // const [selectedEpisode, setSelectedEpisode] = useState<Episode>();
  const { season_number } = props.seasonDetails;


  const handleOverview = (event: React.MouseEvent) => {
    event.preventDefault();
    props.handleOverviewClick(props.seasonDetails);
  };


  return (
    <>
      <ul className="seasons">
        <li className="season__number" onClick={handleOverview} >
          Season {season_number}
        </li>
       </ul>
    </>
  );
};

export default TVSeasons;
