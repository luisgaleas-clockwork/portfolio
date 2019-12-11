import React from 'react';

const Me = () => {
    return (
        <div className="me-card">
            <div className="me-img-container animated pulse infinite slower">
                <img src="https://i.imgur.com/74cTAWp.jpg" alt="picture of me"/>
            </div>
            <div className="me-text-container animated fadeIn slow">
                <h1>Luis Galeas</h1>
                <h2>Web developer</h2>
                <div className="social"></div>
            </div>
        </div>
    )
}

export default Me