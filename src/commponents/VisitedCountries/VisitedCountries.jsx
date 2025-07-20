// src/commponents/VisitedCountries/VisitedCountries.jsx

import { Link } from "react-router-dom";

const VisitedCountries = ({ visitedCountries, visitedFlags }) => {
    return (
        <div className="p-4">
            {/* Button to navigate back to the home page */}
            <div className="text-center mb-4">
                <Link to="/">
                    <button className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-all">
                        ← Back to All Countries
                    </button>
                </Link>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-center">Visited Countries: {visitedCountries.length}</h2>

            {/* Display visited flags */}
            <h3 className="text-xl font-semibold mb-2">Visited Flags:</h3>
            <div className="flex flex-wrap gap-2 py-2 mb-6 border-b pb-4">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} className="w-24 h-16 object-cover border-2 border-gray-300 rounded" src={flag} alt="country flag" />)
                }
            </div>

            {/* Display the names of visited countries */}
            <h3 className="text-xl font-semibold mb-2">Visited Country Names:</h3>
            <ul className="list-inside bg-teal-300 p-4 rounded-md list-none">
                {
                    visitedCountries.map(country => (
                        <li key={country.cca3} className="text-lg mb-1">{country.name.common}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default VisitedCountries;