import React from 'react';
import { positionsData } from './data';

function Positions(){
    return(
        <div className="positions">
           {positionsData.map((d) =>{
               return(
                   <Position {...d} />
               )
           })}
        </div>
    )
}
export default Positions ;
export function Position(props){
    return(
        <div className="position">
            <h3>{props.sub}</h3>
            <div className="title">
                <h1>{props.title}</h1>
                <button>Browse Job</button>
            </div>
            <p>Project : <span>{props.project}</span></p>
        </div>
    )
};