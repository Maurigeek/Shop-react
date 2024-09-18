import React, { useState } from 'react'
import LightButton from "../../assets/website/light-mode-button.png"
import DarkButton from "../../assets/website/dark-mode-button.png"


const DarkMode = () => {
    const [theme, SetTheme] = React.useState(
        localStorage.getItem("theme")? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement; // html element

    React.useEffect(
        () => {
            if (theme === "light") {
                element.classList.remove("dark");
            } else {
                element.classList.add("dark");
            }
        },
        [theme]
    );

  return (
    <div className='relative'>
        <img src={LightButton} alt="" 
        onClick={() => SetTheme(theme === 'light' ? 'dark' : 'light')}
        className= {`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] transition-all duration-300 absolute right-0 z-10 
            ${theme === "dark" ? "opacity-0" : "opacity-100"} ` } />

        <img src={DarkButton} alt=""
        onClick={() => SetTheme(theme === 'light' ? 'dark' : 'light')} 
        className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,1)] transition-all duration-300' />
    </div>
  )
}

export default DarkMode