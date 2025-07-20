import { useState } from "react";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(country)
    const { name, flags, area, population, cca3 } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className={`border border-blue-500 p-3 rounded-md shadow-md flex flex-col items-center ${visited ? 'bg-red-100' : ''}`}>
            <h1 className={`font-semibold mb-2 text-center ${visited ? 'text-fuchsia-500' : 'text-emerald-600'}`}>Name: {name?.common}</h1>
            <div className="w-full aspect-video bg-gray-100 flex items-center justify-center overflow-hidden mb-2">
                <img className="w-full h-full object-cover" src={flags.png} alt="" />
            </div>
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <p><small>Code: {cca3}</small></p>
            <div className="flex gap-4">

                {/* mark visited btn*/}
                <button onClick={() => handleVisitedCountry(country)} className="bg-gradient-to-r from-green-200 to-red-300 px-4 py-2 rounded-md hover:scale-105">Mark Visited</button>

                {/* add flags btn */}
                <button onClick={() => handleVisitedFlags(country.flags.png)} className="bg-gradient-to-r from-fuchsia-400 to-yellow-100 px-4 py-2 rounded-md hover:scale-105">Add Flags</button>

                {/* going btn */}
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white 
             px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2 rounded-md shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out text-sm sm:text-base md:text-lg" onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            </div>
            {visited ? 'I have visited this country' : 'I want to visited'}
            <hr className="divider divider-success" />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;