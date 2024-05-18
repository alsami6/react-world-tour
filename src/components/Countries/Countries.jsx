import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [conutries , setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h3>Countries: {conutries.length}</h3>
            {
                conutries.map(country => <Country key={country.cca3} country={country}></Country>)
            }    
        </div>
    );
};

export default Countries;