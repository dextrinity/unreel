import React, { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router';
import { getMovieTrailer } from '../../../apiConfig/dbAPI';
import { results, VideoTrailer } from '../../../models/video';


const VideoList = (props:any) => {

    let { movieId } = useParams<{movieId?: any}>();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getMovieTrailer(+movieId).then((response) => {
            const dataTrailer: VideoTrailer = response.data;
            console.log(dataTrailer.results);
            const trailerSlice:any = dataTrailer.results.slice(0, 5)
            setVideos(trailerSlice);
          });
        }, [movieId]);

    return (
        <>
            {
                videos.map((item, i) => (
                    <Video key={i} item={item}/>
                ))
            }
        </>
    );
}

const Video = (props:any) => {

    const item = props.item;

    const iframeRef:any = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}

export default VideoList;
