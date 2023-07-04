import "./ImageGrid.scss"
import { FC } from "react";
import Card from "../Card";
import { cardData } from "../../data";
import Ratings from "../CustomIcons/Ratings";
import { ProductCardProps } from "../../types";

const ImageGrid : FC= () =>{
    return(
        <div className={`cardGrid`}>
        {cardData.map((card: ProductCardProps, index: number) => {
          return (
            <div key={index} className="card">
              <Card imageArray={card.images} />
              <div className={`details`}>
                <div className={`location`}>
                  <div>{card.location}</div>
                  <div>
                    <Ratings />
                    <span className={`rating`}>{card.rating}</span>
                  </div>
                </div>
                <div className={`owner`}>{card.host}</div>
                <div className={`date`}>{card.available}</div>
                <div className={`price`}>
                  <span>${card.price}</span> night
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
}

export default ImageGrid