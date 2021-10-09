import React from 'react';
import {HiOutlineArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
function UpHeader({title}){
    return(
        <div className="up-header">
        <Link to="/">
        <h1>
        <HiOutlineArrowLeft /> 
        {title}
        </h1>
        </Link>
        </div>
    )
};
export default UpHeader;