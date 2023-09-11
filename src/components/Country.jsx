import React, { useState } from 'react'

const Country = ({ country, handleVisitedCountry, handleFlag }) => {
    let { name, cca2, flags, independent, population, area } = country;

    const [visit, setVisit] = useState(false)
    const handleVisit = () => {
        setVisit(!visit)
        // we can also use if else for toggle 
    }


    return (
        <div className='border border-purple-800 p-5 rounded-lg my-5 space-y-2'>
            <h1 className='font-bold'>{name.common}</h1>
            <p className='font-semibold'>{independent ? 'Independent' : 'Notindependent'}</p>
            <button className={`border px-5 rounded-sm shadow-md font-bold shadow-gray-500`} onClick={() => handleVisitedCountry(name.common)}>Mark Visited</button>
            <div className='flex items-center justify-center'>
                <img className='h-[35vh]' src={flags.png} alt="" />
            </div>
            <button className={`border px-5 rounded-sm shadow-md font-bold shadow-gray-500`} onClick={() => handleFlag(flags.png)}>Add Flag</button>
            <p>Area : {area}</p>
            <p>Population : {population}</p>
            <p className={`${visit ? 'text-green-500' : 'text-red-500'} font-bold`}>{visit ? 'I have visited' : 'I want to visit'}</p>
            <button onClick={handleVisit} className={`border px-5 rounded-sm shadow-md font-bold shadow-gray-500 ${visit ? 'text-red-500' : 'text-green-500'}`}>{visit ? 'Visited' : 'visit'}</button>
        </div>
    )
}

export default Country
