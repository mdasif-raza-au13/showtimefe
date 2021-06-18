import React, { useState } from 'react'
import axios from 'axios'

const AddCityTheater = () => {

    const [city, setcity] = useState({cityName: "" })

    const addCity = (e) => {
        console.log(e.target.value)
        setcity(() => {return {cityName: e.target.value}})
    }
    console.log("state", city)
    const submitCity = async (e) => {
        e.preventDefault();
        alert("City Name Added!")
        const data = await axios.post('https://showtimebe.herokuapp.com/api/cities', city)
        console.log(data)
    }

    return (
        <>
            <div className="container">
                <form onSubmit={submitCity}>
                    <input type="text" placeholder="Enter Name of City" name="cityName" onChange={addCity} value={city.cityName} />
                    {/* <input type="text" placeholder="Enter Name of Theater" /> */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddCityTheater