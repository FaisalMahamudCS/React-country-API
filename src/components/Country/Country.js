import React from 'react';
import './Country.css'

const Country = (props) => {
    const {flags}=props.country;
    return (
        <div className='country'>
            <h3>{props.name}</h3>
            <img src={flags.png} alt="" srcset="" />
            <p>Area:{props.country.area}</p>
            <p>Region:{props.country.region}</p>
        </div>
    );
};

export default Country;