import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.css'


function Home() {
    return <>
        <div className="p-5 mb-4 bg-body-tertiary rounded-3 baner">

            <div className="container-fluid py-5 jumboCopy">
                <p1>Hi! My name is</p1>
                <h1 className="display-5 fw-bold">Klaudia Kierepka</h1>
                <h2>and I build things for the web!</h2>
            </div>
        </div>
        <div className='home-content-container'>
            <div className='home-content'>
                <p2>Front-end Developer with a background in the archival and historical sector for the last 10 years.</p2>
                <p2> I highly value customer service, patience, and a solution-finding mindset.</p2>
                <p2> I am extremely focused on details and my goal is to code YOUR dream webside!</p2>
                <p2> Have a look st my previous project and if you like them...</p2>
                <p2>  don't wait, give me a call or drop en email!</p2>

            </div>
            <div className='image'>
                <img src="./IMG_0560(1).jpg" />
                {/* <img src="portfolio/public/IMG_0560(1).jpg" /> */}
            </div>
        </div>
    </>
}
export default Home;