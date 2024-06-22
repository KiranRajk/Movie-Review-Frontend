import React, { useEffect, useState } from 'react'
import UserCarousel from '../../components/UserCarousel/UserCarousel'
import './UserHome.css'
import MovieCards from '../../components/MovieCards/MovieCards'
import axiosInstance from '../../../config/AxiosInstance'
import NavBarUser from '../../components/common/NavBarUser/NavBarUser'
import CustomNavBar from '../../components/common/CustomNavBar/CustomNavBar'


const UserHome = () => {
  const[movieData, setMovieData] = useState([])
  const [scrollTo, setScrollTo] = useState(null);

  useEffect(()=>{
    getMovieData()
  }, [])

  useEffect(() => {
    if (scrollTo === 'movie-section') {
      setTimeout(() => {
        const movieSection = document.getElementById('movie-section');
        if (movieSection) {
          movieSection.scrollIntoView({ behavior: 'smooth' });
          setScrollTo(null); 
        }
      }, 100); 
    }
  }, [scrollTo, movieData]);

  const getMovieData = async ()=> {
    try {
     
      const response = await axiosInstance.get(`/api/v1/user/getMovieData`)
      
      setMovieData(response.data)
      console.log(response.data);
      console.log('Got movie data');

    } catch (error) {
      if(error.response.status === 500) {
        alert('Error while fetching movie details.')
      } else if (error.response.status=== 401){
        alert('Unauthorized access. Please login again.')
      }
      else {
        alert('An unknown error occured')
      }
    }
  }

  return (
    <>
  {/* <CustomNavBar/>  */}
  <NavBarUser setScrollTo={setScrollTo}/>
    <UserCarousel/>

    <div className='  main movie-cards '>
      <div className=" container row justify-content-center pt-5" id='movie-section'>
        {movieData.map((movie)=>(
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
             <MovieCards movie={movie}/>
          </div>   
          ))}
      </div>
    </div>
    </>
  )
}

export default UserHome