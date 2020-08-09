import React from 'react';
import './form.css';

const Form = give => {
  return (
    <div className="container1">
    <h1>Weather App ReactJS</h1> 
    <div className="container">
        <div>{give.error ? error() : null}</div>
        
      <form onSubmit={give.loadweather}>
        <div className="row">
            
          <div className="col-md-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="Type in a City"
              name="city"
              size="30"
            />
          </div>
          <br></br>
          <br></br>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Type in a Country"
              name="country"
              size="30"
              width="30"
            />
          </div>
          <br/><br/>
          <div className="col-md-3">
            <button className="btn btn-warning" >Search for Weather</button>
          </div>
        </div>
     </form>
    </div>
    </div>
  );
};

function error()
{
 return(
    <div className="alert" >
        Enter a CityName and a CountryName
    </div>
 );
}

export default Form;