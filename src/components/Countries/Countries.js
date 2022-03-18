import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
const Countries = () => {
    const [countries,setCountries]=useState([])
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
      },[])
    return (
        <div>
            <h2>Countries in others</h2>
            {
                countries.map(country => <Country country={country} name={country.name.common}></Country>)
            }
        </div>
    );
};

export default Countries;