import { useEffect } from "react"
import { useState } from "react"
import Country from "./Country"

const Countries = () => {

    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    // console.log(countries)

    const [visited, setVisited] = useState([])
    const handleVisit = (data) => {
        // console.log(data)
        let newArray = [...visited, data]
        setVisited(newArray);
    }

    const handleDelVisited = (data) => {
        let newVisited = visited.filter(visit => visit !== data)
        setVisited(newVisited)
    }


    const [flags, setFlags] = useState([])
    const HandleFlag = (data) => {
        // console.log(data)
        let newArray = [...flags, data]
        setFlags(newArray)
    }
    // console.log(flags)

    const handleDelFlag = (data) => {
        let newArray = flags.filter(flag => flag !== data);
        setFlags(newArray)
    }

    return (
        <div className="space-y-5">
            <h1 className="text-center font-bold text-2xl mt-2">React World Tour</h1>
            <h3 className="text-center font-bold">Countries : {countries.length}</h3>

            <div className="text-center font-bold">
                <h3 className="underline">Visited Country : {visited.length}</h3>
                <div className="space-y-2">{visited.map((visit, index) => <div className="flex items-center justify-center gap-5" key={index}><p >{`${index + 1} ${visit}`}</p>
                    <button className="border px-2 rounded-lg text-gray-500" onClick={() => handleDelVisited(visit)}>del</button>
                </div>)}</div>
            </div>

            <div className="text-center font-bold">
                <h3 className="underline">Visited Flag : {flags.length}</h3>
                <div className="flex justify-center gap-5 mt-2">
                    {flags.map((flag, index) => <img className="h-[50px] cursor-pointer" key={index} src={flag} onClick={() => handleDelFlag(flag)}></img>)}
                </div>
            </div>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto text-center">
                {countries.map((country, index) => <Country key={index} country={country} handleVisit={handleVisit} HandleFlag={HandleFlag} />)}
            </div>
        </div>
    )
}

export default Countries