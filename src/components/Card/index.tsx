import { FC } from "react";
import "./Card.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import Like from "../CustomIcons/Like";
import LeftIcon from "../CustomIcons/LeftIcon";
import RightIcon from "../CustomIcons/RightIcon";
import { CardProps } from "../../types";

const Card: FC<CardProps>= ({ imageArray}) => {
    const [isLiked, setIsLiked] = useState(false)
    const setLike = () => {
      setIsLiked(!isLiked)
    }
  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay={false}
        showStatus={false}
        axis="horizontal"
        className="carousel"
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
            className={`left_0 carousel_slide_btn ${hasPrev ? "absolute" : "hidden"}`}
              onClick={clickHandler}
            >
              <LeftIcon />
            </div>
          )
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
            className={`right_0 carousel_slide_btn ${hasNext ? "absolute" : "hidden"}`}
              onClick={clickHandler}
            >
              <RightIcon />
            </div>
          )
        }}
      >
        {imageArray.map((item: string, index: number) => {
          return (
              <div key={index} className="image_container">
                <img
                  src={item}
                  width={279.3}
                  height={265.23}
                  alt=""
                />
                 <button onClick={() => setLike()} className={`like ${isLiked ? "liked" : ""}`}><Like /></button> 
              </div>
                     )
        })}
      </Carousel>
    </div>
  );
};

export default Card;
