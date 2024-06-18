import React, { useContext, useState } from 'react'
import './NavBarUser.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../helpers/UserContext';

const NavBarUser = () => {
    const [Clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    const {user} = useContext(UserContext)

    const handleClick = () => {setClicked(!Clicked)}

    const handleScrollToMovies = () => {
        navigate('/home'); // Navigate to home first
        setScrollTo('movie-section'); // Then set the scroll target
      };


    const logOut = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
        navigate('/');
      }


  return (
    <>
    <header className='nav-bar'>
        <a href="/home" id='title'>CineCritique</a>

        <nav className="links">
            <ul id="nav-links"className={Clicked ? "#nav-links active" : "#nav-links" }>
                <li><Link to={'/home'}>Home</Link></li>
                <li><a id='movie-section' onClick={handleScrollToMovies} >Movies</a></li>
                <li><a id='about' >About us</a></li>
                <li><a id='logout' onClick={logOut}>Logout</a></li>
            </ul>
        </nav>
        <div className="user-info">
            <div className="user-name" style={{color:'#c2ce98'}}>
                {user ? user.name : 'Guest'}
            </div>
        </div>
        <div id="mobile" onClick={handleClick}>
            <i id="bar" className={Clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
        </div>
    </header>
    </>
  )
}

export default NavBarUser