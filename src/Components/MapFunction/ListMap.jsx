import React from 'react';
import { listData } from './data';

function ListMap(){
    return(
       <div className="list-map">
           <ul>
               {listData.map((item,i) =>{
                   return(
                       <li key={i}>
                           {item.icon}
                           <h2>{item.title}</h2>
                           <p>{item.desc}</p>
                       </li>
                   )
               })}
           </ul>
       </div>
    )
};
export default ListMap ;