import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Booking = () => {
    const [cityresult, setcityresult] = useState([])
    const [theaterresult, settheaterresult] = useState([])
    const [cityoption, setcityoption] = useState("")

    useEffect(() =>{    
        const getCities = async () => {
            const res = await axios.get('http://localhost:5000/api/cities')
            setcityresult(res.data)
            console.log(res)
        }
        getCities()
    },[])

    useEffect(() =>{    
        const getTheaters = async () => {
            const res = await axios.get('http://localhost:5000/api/theaters')
            settheaterresult(res.data)
            console.log(res)
        }
        getTheaters()
    },[])

    const selectedCity = (e) => {
        console.log("cityname",e)
        setcityoption(e.target.value)
        console.log(e.target.value)
    }
    console.log("usest",cityoption)

    return (
        <>
            <label htmlFor="city"><h1>Select City</h1></label>
                <div>
                    <select name="city" id="city" onChange={selectedCity}>
                        <option value="" disabled selected>Select</option>
                        {cityresult.map((city,i) => ( 
                            <option key={i} value={city.cityName}>
                                {city.cityName}
                            </option>
                        ))}
                    </select>
                </div>
            <label htmlFor="theater"><h1>Select Theater</h1></label>
                <div>
                    <select name="theater" id="theater">
                    <option value="" disabled selected>Select</option>
                    {cityoption ? (theaterresult.map((theater,i) => ( 
                            <option key={i} value={theater.theaterName}>
                                {theater.theaterName}
                            </option>)
                    )):null}
                    </select>
                </div>
        </>
            
    )
}
    


export default Booking
