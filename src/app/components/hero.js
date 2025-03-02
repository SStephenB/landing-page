'use client'
import React from 'react';

function Hero() {
    return (
        <div className="hero">
            <div className='hero-text'>
                <h1>DevOps Without the Red Tape</h1>
                <h2>At Massdriver, we believe in prevention, not permission.</h2>
                <h2>Our platform lets teams encode their expertise and your organization’s non-negotiables into preapproved self-service infrastructure powered by the IaC tools you already know.</h2>
                <h2>Massdriver—Fast by default. Safe by design.</h2>
                <div className='btn-group'>    
                    <button className="buttons-secondary">See a demo</button>
                    <button className="buttons">Start free trial ➜</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;