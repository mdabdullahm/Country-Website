import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags,area,population,cca3')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your vosited country')
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    // remove
    

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Countries: {countries.length}</h2>
            {/* visited country */}
            <div>
                <h2>Visited Countries: {visitedCountries.length}</h2>
                <ul>
                    {
                        visitedCountries.map(country => <li>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flex gap-2 py-2">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} className="w-16 h-10" src={flag}></img>)
                }
            </div>
            {/* display countries */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;