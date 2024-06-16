import React from 'react';
import '../styles/Header.css'

export const Header = ({ text }) => {
    return (
        <div className="HeaderSection">
            <h1 className="titulo-header">{text}</h1>
            <div className='button-container'>
                {/* Add any buttons here if needed */}
            </div>
        </div>
    )
}
