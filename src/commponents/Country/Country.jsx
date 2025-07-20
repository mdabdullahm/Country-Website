// src/commponents/Country/Country.jsx

import { useState } from "react";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    // Destructure properties from the country object for easier use
    const { name, flags, area, population, cca3 } = country;

    // Local state to track if this specific country card is marked as "visited" for UI purposes (e.g., changing background color)
    const [visited, setVisited] = useState(false);

    // Handler to toggle the local 'visited' state
    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`border border-blue-500 p-3 rounded-md shadow-md flex flex-col items-center ${visited ? 'bg-red-100' : ''}`}>
            <h1 className={`font-semibold mb-2 text-center ${visited ? 'text-fuchsia-500' : 'text-emerald-600'}`}>Name: {name?.common}</h1>
            <div className="w-full aspect-video bg-gray-100 flex items-center justify-center overflow-hidden mb-2">
                <img className="w-full h-full object-cover" src={flags.png} alt={`${name?.common} flag`} />
            </div>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            <div className="flex gap-4 mt-2">

                {/* Mark Visited button: calls the function from App.jsx to update the global list */}
                <button onClick={() => handleVisitedCountry(country)} className="bg-gradient-to-r from-green-200 to-red-300 px-4 py-2 rounded-md hover:scale-105">Mark Visited</button>

                {/* Add Flag button: calls the function from App.jsx to update the global flag list */}
                <button onClick={() => handleVisitedFlags(country.flags.png)} className="bg-gradient-to-r from-fuchsia-400 to-yellow-100 px-4 py-2 rounded-md hover:scale-105">Add Flag</button>

                {/* Going button: toggles the local 'visited' state for this card's UI */}
                <button className="... (your styles)" onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            </div>
            
            {/* Conditional text based on the local 'visited' state */}
            {visited ? 'I have visited this country.' : 'I want to visit.'}
            
            <hr className="divider divider-success my-2" />
            
            {/* Passing all props down to the child component (Prop Drilling) */}
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            />
        </div>
    );
};

export default Country;