import React from 'react';
import Questions from '../Components/Hooks/Questions';
import SideBar from '../Components/Hooks/SideBar/SideBar';
import UpHeader from '../Main/UpHeader';

function Hooks(){
    return(
        <>
        <UpHeader title="Hooks - Click on icons" />
        <SideBar />
        <Questions />
        </>
    )
};
export default Hooks;