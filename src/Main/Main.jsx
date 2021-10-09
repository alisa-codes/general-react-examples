import React from 'react';
import { Link } from 'react-router-dom';


function Main(){
    const links = [
        {
            title:"Map Function",
            to:"/map-function"
        },
        {
            title:"Props and Map",
            to:"/props-map"
        },
        {
            title:"Hooks",
            to:"/hooks"
        },
        {
            title:"Tabs",
            to:"/tabs"
        }
    ]
    return(
        <div className="main-page">
          {links.map((d) =>{
              return(
                  <StyledButton {...d} />
              )
          })}
        </div>
    )
}
export default Main ;

export function StyledButton({title,to}){
    return(
        <Link className="mainlink" to={to}>
        <div className="styled-button">
            {title}
        </div>
        </Link>
    )
};