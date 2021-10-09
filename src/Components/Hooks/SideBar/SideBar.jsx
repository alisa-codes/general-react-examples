import React, { useState } from 'react';
import Backdrop from './Backdrop';
function SideBar(){
    const [toggle,toggleBar ] = useState(false);
    const [backdrop , setBackdrop] = useState(false);
    const [active,setActive] = useState(false);


    function setToggle(){
        toggleBar(!toggle);
    }
    function setBar(){
        setActive(!active);
    }
    function hideBar(){
        setActive(false);
    }
    function handleBackdrop(){
        setBackdrop(true);
    };
    
    return(
        <div className="sidebar">
        <div onClick={() => {setToggle() ; handleBackdrop(); setBar();}}  className={toggle===false ? 'toggle-button' : 'toggle-button toggle-active'}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={active===false ?`main-sidebar` : `main-sidebar sidebar-reveal`}>
               <h1>Side Bar Reveal</h1>
        </div>
        <Backdrop trigger={backdrop} setTrigger={setBackdrop} hideBar={hideBar} toggle={setToggle} />
        </div>
    )
};
export default SideBar;