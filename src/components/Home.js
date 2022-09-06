import React from 'react';
import Navbar from './Navbar';
import './home.css';



function Home() {
    return (
        <div className='home'>
            <Navbar />
            <h1>
                hikeings
            </h1>
            <p>lorem ispum</p>
            <img src="https://thumbs.dreamstime.com/b/hiking-young-woman-sunny-day-high-mountains-33933566.jpg" alt="random image" />
            <a href="#" >link </a>


        </div>
    );
}

export default Home;