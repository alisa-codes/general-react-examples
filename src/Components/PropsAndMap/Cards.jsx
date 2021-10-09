import React from 'react';
import { cardsProps } from './data';


function Cards(){
    return(
        <div className="propscards">
          {cardsProps.map((d) =>{
              return(
                  <PropsCard {...d} />
              )
          })}
        </div>
    )
};
export default Cards;


export function PropsCard(props){
    return(
        <div className="props-card">
            <p>{props.date}</p>
            <div className="name">
                <h3 style={{ backgroundColor: `${props.color}` }}>{props.subtitle}</h3>
                <h2>{props.name}</h2>
            </div>
            <p>{props.desc}</p>
        </div>
    )
}