import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    // const {country, handleVisitedCountry, handleVisitedFlags} = props;
    return (
        <div className="w-full">
            <h4>Country Details</h4>
            <hr className="divider divider-info w-full"/>
            {/* <CountryData 
               country={country}
               handleVisitedCountry={handleVisitedCountry}
               handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;