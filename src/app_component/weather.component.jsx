import React from 'react';

const Weather = (give) => {
    return(
    
    <div className="cont2">
    <h2>{give.city} {give.country} </h2>
    
    {give.temp_celsius ? (<h3 className="py-2">{give.temp_celsius}&deg;</h3>):null}
    <h4 className="py-4">
    <i className={`wi ${give.weatherIcon}`} ></i> 
    </h4>
    <h4 className="py-3">{give.description}</h4>  
    </div>
        
    
    );
};

export default Weather;