// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import './style.css';


// export const Show = (props) => {

//     const [poster, setposter] = useState(" ")

//     let apiUrl = `http://www.omdbapi.com/?t=${props.name}&apikey=d564a2c2`
//     useEffect(() => {
//         const getData = async () => {
//             let info = await axios.get(apiUrl)
//             console.log(info.data.Poster)
//             setposter(info.data.Poster)
//         }
//         getData()
//     }, [apiUrl])


//     return (
//         <>
//             {poster ? <div className="d-flex justify-content-center align-items-center">
//             <div className="card my-5 shadow-lg mb-5 bg-body rounded" style={{ width: "18rem" }}>
//                 <img src={poster} className="card-img-top" alt="poster" />
//                 <div className="card-body">
//                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 </div>
//             </div> </div>: null}
//         </>
//     )
// }

// export default Show





import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import HomeMovie from './HomeMovie'
// import { Name } from '../components/Navbar'

const Show = (props) => {
    // const name = useContext(Name)
    const [poster, setposter] = useState([])
    const apiKey = '?api_key=ff1117747ce10416e420d5b478bc6c84'
    const baseUrl = 'https://api.themoviedb.org/3/search/movie'
    const searchUrl = baseUrl + apiKey + `&query=${props.name}`
    console.log("name", props.name)


    useEffect(() => {
        const getData = async () => {
            let info = await axios.get(searchUrl)
            console.log("info search", info)
            console.log("info.data search", info.data.results)
            setposter(info.data.results)
        }
        getData()
    },[props.name])

    return (
        <>
        {props.name ? <div className="d-flex justify-content-around align-items-center flex-row flex-wrap">
                {poster.map((element,i) => (
                    <div className="card my-5 shadow-lg mb-5 bg-body rounded" key={i} style={{ width: "18rem" }}>
                        <img src={'https://image.tmdb.org/t/p/w300' + element.poster_path} className="card-img-top" alt="poster" />
                        <div className="card-body">
                            <p><span className="card-text truncate">{element.overview}</span><a href="#">Read more</a></p>
                        </div>
                    </div>
                ))}
            </div>: <HomeMovie /> }
            
        </>
    )
}

export default Show