import React, { useState } from 'react'
// import Show from './Show'


const Search = () => {
    const [search, setsearch] = useState('');
    const enterName = (e) => {
        setsearch(e.target.value)
    }

    return (
        <>
            <div>
                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" onChange={enterName}/>
            </div>
            {/* <Show name={search} /> */}
        </>
    )
}

export default Search