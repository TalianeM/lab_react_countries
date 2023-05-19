
import { useEffect, useState } from "react";

// UseEffect to Fetch data from RestCountries API

const CountriesContainer = () => {

    const [countries, setCountries] = useState("");

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json(); 


        setCountries(jsonData.message)

    }


    useEffect(() => {
        fetchCountries();
    }, []) 

    return (
    


    );
}

export default CountriesContainer