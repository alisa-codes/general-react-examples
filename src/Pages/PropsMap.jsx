import React from 'react';
import Cards from '../Components/PropsAndMap/Cards';
import Positions from '../Components/PropsAndMap/Positions';

import UpHeader from '../Main/UpHeader';

function PropsMap(){
    return(
        <>
        <UpHeader title="Props and Map" />
        <Positions />
        <Cards />
        </>
    )
};
export default PropsMap;