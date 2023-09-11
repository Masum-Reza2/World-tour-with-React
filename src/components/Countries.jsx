import React, { useEffect, useState } from 'react'
import Country from './Country'

const Countries = () => {

    // one
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    // console.log(country)

    // two
    const [visitedCountry, setVisitedCountry] = useState([]);
    const handleVisitedCountry = (name) => {
    //    console.log(name)

       let newArray = [...visitedCountry, name]
       setVisitedCountry(newArray)
    }
    // console.log(visitedCountry)

    // three
    const [flags, setFlag] = useState([])
    const handleFlag = (flag) =>{
        // console.log(flag)
        let newArray = [...flags, flag];
        setFlag(newArray);
    }

    // console.log(flags)

    return (
        <>
            <div className='py-5'>
                <h1 className='text-center text-2xl font-bold'>React world tour</h1>
                <h1 className='text-center text-xl '>Countries : {country.length}</h1>
            </div>
            <div className='text-center'>
                <h1 className='font-bold'>Visited Country</h1>
                <div>
                    {visitedCountry.map((name, index) => <p key={index}>{name}</p>)}
                </div>
            </div>
            <div className='text-center mt-5'>
                <h1 className='font-bold'>Visited Flags</h1>
                <div className='flex items-center justify-center space-x-3'>
                    {flags.map((flag, index) => <img key={index} className='w-16 h-10' src={flag}></img>)}
                </div>
            </div>
            
            <div className='grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto gap-x-5'>
                {country.map((county, index) => <Country key={index} country={county} handleVisitedCountry={handleVisitedCountry} handleFlag={handleFlag}/>)}
            </div>
        </>
    )
}

export default Countries
