import React from "react";
import Sun from './Sun.svg';
import Moon from './Moon.svg';
import "./DarkMode.css";

const DarkMode = () => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
            {/* <img src={Sun} alt="Sun Icon" />
            <img src={Moon} alt="Moon Icon" /> */}
            </label>
        </div>
    );
};

export default DarkMode;
