import React, { useState } from 'react'
import './UserNavbar.css'

const UserNavbar = () => {
    const [Clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!Clicked)
    }
  return (
    <>
    <header className="nav-bar">
        <a href="#" id='title'>CineCritique</a>
        <nav className="links">
            <ul id='nav-links' className={Clicked ? '#nav-links active' : '#nav-links'}>

                <li><a href="/home">Home</a></li>
                <li><a href="/movies">Movies</a></li>
                <li><a href="/tvshows">TV Shows</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </nav>
        <div className="user-info">
            <div className="user-name" style={{color:'#c2ce98'}}>John Doe &#x25BE;</div>
        </div>
        <div id='mobile' onClick={handleClick}>
            <i id='bar' className={Clicked ? 'fas fa-times'  : 'fas fa-bars'}></i>

        </div>
    </header>
    </>
  )
}

export default UserNavbar