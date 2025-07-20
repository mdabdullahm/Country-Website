// src/App.jsx

import { useState, useEffect } from 'react'; // 1. Import useEffect
import { Routes, Route } from 'react-router-dom';

import Countries from './commponents/Countrish/Countries';
import VisitedCountries from './commponents/VisitedCountries/VisitedCountries';

function App() {
    // 2. Initialize state from localStorage
    // We pass a function to useState. This function runs only once on the initial render.
    const [visitedCountries, setVisitedCountries] = useState(() => {
        const savedCountries = localStorage.getItem('visitedCountries');
        // If data exists in localStorage, parse it from JSON string, otherwise return an empty array.
        return savedCountries ? JSON.parse(savedCountries) : [];
    });

    const [visitedFlags, setVisitedFlags] = useState(() => {
        const savedFlags = localStorage.getItem('visitedFlags');
        return savedFlags ? JSON.parse(savedFlags) : [];
    });

    // 3. Use useEffect to save state to localStorage whenever it changes.
    // This effect will run every time the 'visitedCountries' state array is updated.
    useEffect(() => {
        // localStorage can only store strings, so we convert the array to a JSON string.
        localStorage.setItem('visitedCountries', JSON.stringify(visitedCountries));
    }, [visitedCountries]); // The dependency array ensures this effect runs only when 'visitedCountries' changes.

    // This effect will run every time the 'visitedFlags' state array is updated.
    useEffect(() => {
        localStorage.setItem('visitedFlags', JSON.stringify(visitedFlags));
    }, [visitedFlags]);


    // Handler functions remain the same
    const handleVisitedCountry = country => {
        if (!visitedCountries.find(c => c.cca3 === country.cca3)) {
            const newVisitedCountries = [...visitedCountries, country];
            setVisitedCountries(newVisitedCountries);
        }
    }

    const handleVisitedFlags = flag => {
        if (!visitedFlags.includes(flag)) {
            const newVisitedFlags = [...visitedFlags, flag];
            setVisitedFlags(newVisitedFlags);
        }
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-center my-4">React World Tour</h1>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Countries
                            handleVisitedCountry={handleVisitedCountry}
                            handleVisitedFlags={handleVisitedFlags}
                            visitedCountriesCount={visitedCountries.length}
                        />
                    }
                />
                <Route
                    path="/visited"
                    element={
                        <VisitedCountries
                            visitedCountries={visitedCountries}
                            visitedFlags={visitedFlags}
                        />
                    }
                />
            </Routes>
        </>
    );
}

export default App;