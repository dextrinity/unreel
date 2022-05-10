import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getTVCredit } from "../../../../apiConfig/dbAPI";
import { Credit, Cast } from "../../../../models/movie";
import unknown from '../../../../assets/unknown.jpg'

const GUESTIMG_URL = "https://image.tmdb.org/t/p/w500/";

const TVCastList = () => {
  let { tvId } = useParams<{tvId?: any}>();

  const [post, setPost] = useState<Credit>();
  const [mainCast, setMainCast] = useState<Cast[]>();

  useEffect(() => {
    getTVCredit(+tvId).then((response) => {
      const movieCredit: Credit = response.data;
      const movCast: Cast[] = movieCredit.cast.splice(0, 5)
      setPost(movieCredit);
      setMainCast(movCast)
      // console.log(movieCredit);
    });
  }, [tvId]);

  return (
    <div className="casts">
      {post && mainCast && mainCast.length > 0 &&
        mainCast?.map((item, i) => (
          <div key={i} className="casts__item">
            <img
              id={"image" + item.id}
              className="casts__item__img"
              src={GUESTIMG_URL + item.profile_path}
              alt={item.name}
              onError={({ currentTarget }) => {
                currentTarget.src = `${unknown}`;
              }}
            ></img>
            <p className="casts__item__name">{item.name}</p>
          </div>
        ))}
    </div>
  );
};

export default TVCastList;
