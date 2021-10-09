import React from 'react';
import CardMap from '../Components/MapFunction/CardMap';
import ListMap from '../Components/MapFunction/ListMap';
import UpHeader from '../Main/UpHeader';

function MapFunction (){
    return(
        <>
        <UpHeader title="Map Function" />
        <ListMap />
        <CardMap />
        </>
    )
};
export default MapFunction;