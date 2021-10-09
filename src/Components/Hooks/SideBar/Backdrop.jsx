import React from 'react';
const Backdrop =(props)=>{
    let formClasses = 'backdrop';
    if(props.show) {
        formClasses = 'backdrop open';
    }
    return(props.trigger)?(
        <div className='backdrop'  onClick={()=> {
            props.setTrigger(false);
            props.hideBar();
            props.toggle();
        }}>

        </div>
    ):"";
};

export default Backdrop ;
