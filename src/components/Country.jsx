import { useState } from "react";
import PropTypes from 'prop-types';

const Country = ({ country, handleVisit, HandleFlag }) => {
    // console.log(country)
    let { name, independent, flags, population, area } = country;

    const [visit, setVisit] = useState(false)
    const handleTFvisit = () => {
        setVisit(!visit)
    }
    // console.log(visit)


    return (
        <div className="border border-purple-400 space-y-2 py-5 rounded-md">
            <p className="font-bold">{name.common}</p>
            <p className="font-semibold">{independent ? 'Independent' : 'notIndependent'}</p>
            <button className="shadow-md shadow-gray-400 px-2 py-1 rounded-sm font-bold hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]" onClick={() => handleVisit(name.common)}>Mark visited</button>
            <div className="flex items-center justify-center"><img className="h-[40vh] px-5" src={flags.png} alt="" /></div>
            <button className="shadow-md shadow-gray-400 px-2 py-1 rounded-sm font-bold hover:-translate-y-[0.10rem] active:translate-y-[0.10rem]" onClick={() => HandleFlag(flags.png)}>Add Flag</button>
            <p>area : {area}</p>
            <p>Population : {population}</p>
            <button className={`shadow-md shadow-gray-400 px-2 py-1 rounded-sm font-bold hover:-translate-y-[0.10rem] active:translate-y-[0.10rem] ${visit ? 'text-green-400' : 'text-red-400'} font-bold`} onClick={() => handleTFvisit()}>{visit ? 'Visited' : 'Visit'}</button>
            <p className="font-semibold">{visit ? 'I have visited the country.' : 'I want to visit the country.'}</p>
        </div>
    )
}

Country.propTypes = {
    country: PropTypes.object,
    handleVisit: PropTypes.func,
    HandleFlag: PropTypes.func,
}


export default Country