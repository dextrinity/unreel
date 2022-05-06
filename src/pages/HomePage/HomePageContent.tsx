import React, { useState, useEffect, useRef } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import './hero-slide.scss';
import { useNavigate } from 'react-router';
import HomeContent from './HomeContent';
import axios from 'axios';
import { results, Trending } from '../../models/home';
import { Link } from 'react-router-dom';

import './Home.scss'


const base_API = 'https://api.themoviedb.org/3/movie/popular?api_key=580e60a52ac48c49cfd3ca83ce561599'
const HomePageContent = () => {

    SwiperCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState<Trending>();

    useEffect(() => {
        axios.get(base_API).then((response) => {
          const postData: Trending = response.data;
          setMovieItems(postData);
          console.log(postData);
        });
      }, []);



    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
           
                autoplay={{delay: 4000}}
            >
                {
                    movieItems?.results.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <HomeContent popDetails={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}



export default HomePageContent;
