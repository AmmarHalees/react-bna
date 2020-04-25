import React from 'react';
import './style.css';

const Image = ({ before,after, alt, height ,onLoad , onError }) => {

    return (
    
    <div>


        <img  name="after"  onError={onError} onLoad={onLoad}  src={after} id="_image" style={{ height }} alt={alt} />

        <img name="before" onError={onError} onLoad={onLoad} src={before} id="_image_after" style={{ height:"0px" }} alt={alt} />


    </div>
    
    
    );
}

export default Image;