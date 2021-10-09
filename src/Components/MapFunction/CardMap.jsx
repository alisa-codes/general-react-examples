import React from 'react';
import { cardsData } from './data';

function CardMap(){
    return(
        <div className="card-map">
          {cardsData.map((d) =>{
              return(
                  <Card {...d} />
              )
          })}
        </div>
    )
};
export default CardMap ;

export function Card({backgroundImage,title,desc}){
    return(
        <div className="card">
            <div className="image-part"  style={{ backgroundImage: `url(${backgroundImage})` }} ></div>
            <div className="content">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
};
