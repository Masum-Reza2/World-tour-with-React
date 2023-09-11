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




    return (
        <>
            <div className='py-5'>
                <h1 className='text-center text-2xl font-bold'>React world tour</h1>
                <h1 className='text-center text-xl '>Countries : {country.length}</h1>
            </div>
            <div className='text-center'>
                <h1>Visited Country</h1>
                <div>
                    
                </div>
            </div>
            <div className='grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto gap-x-5'>
                {country.map((county, index) => <Country key={index} country={county} />)}
            </div>
        </>
    )
}

export default Countries
