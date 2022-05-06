import React from 'react'
import { Seasons } from '../../../models/tvSeries';
import PageHeader from '../../Header/PageHeader';
import './TVSeasons.css'


interface SeasonProps {
  seasonDetails: Seasons;
  handleOverviewClick: (seasons: Seasons) => unknown;
}


const TVSeasons = (props: SeasonProps) => {

    const {id, name, episode_count, season_number } = props.seasonDetails

    const handleOverview = (event: React.MouseEvent) => {
        event.preventDefault();
        props.handleOverviewClick(props.seasonDetails)
      }


  return (
    <>
      <div>
    <p className="season__number" onClick={handleOverview} >{name}</p>
    </div>

    </>
  )
}


export default TVSeasons;