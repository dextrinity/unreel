import React from 'react'
import { useNavigate } from 'react-router-dom';
import apiConfig from '../../apiConfig/apiConfig';
import { results } from '../../models/home';
import './Home.scss'

export interface PopularityProps {
    popDetails: results
    className: string
}

const HomeContent = (props: PopularityProps) => {

    const {title, overview, poster_path, backdrop_path } = props.popDetails
    const background = apiConfig.originalImage(backdrop_path ? backdrop_path : poster_path);


  return (
    <div
            className={`hero-slide__item ${props.className}`}
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="hero-slide__item__content container">
            <div className="hero-slide__item__content__poster">
                    <img src={apiConfig.w500Image(poster_path)} alt="" />
                </div>
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{title}</h2>
                    <div className="overview">{overview}</div>
                </div>
               
            </div>
        </div>
  )
}

export default HomeContent