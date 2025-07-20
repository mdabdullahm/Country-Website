// src/commponents/Countrish/Countries.jsx

import { useEffect, useState } from "react";
import Country from "../Country/Country";
import { Link } from "react-router-dom"; // Import Link for navigation

const Countries = ({ handleVisitedCountry, handleVisitedFlags, visitedCountriesCount }) => {
    const [countries, setCountries] = useState([]);

    // Fetch country data from the API when the component mounts
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags,area,population,cca3')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Total Countries: {countries.length}</h2>

            {/* Button to navigate to the visited countries page */}
            <div className="text-center mb-4">
                <Link to="/visited">
                    <button className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition-all">
                        Visited Countries ({visitedCountriesCount})
                    </button>
                </Link>
            </div>

            {/* Display all countries in a grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}
                    />)
                }
            </div>
        </div>
    );
};

export default Countries;