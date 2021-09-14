import React from 'react'
import "./Home.css"
import Popular from "./Popular"
import Recently from './Recently'
import Best from './Best'

function Home() {
    return (
        <div>
            <div className="search">
                <input type="text" name="article" placeholder="Search articles by author / article / tags " />
            </div>
            <Best/>
            <Popular/>
            <Recently/>
        </div>
    )
}

export default Home
