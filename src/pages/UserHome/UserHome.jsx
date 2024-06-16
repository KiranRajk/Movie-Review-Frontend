import React, { useEffect, useState } from 'react'
import UserNavbar from '../../components/common/UserNavBar/UserNavbar'
import UserCarousel from '../../components/UserCarousel/UserCarousel'
import axios from 'axios'
import MovieCards from '../../components/MovieCards/MovieCards'
import axiosInstance from '../../../config/AxiosInstance'

const UserHome = () => {
  const[movieData, setMovieData] = useState([])

  useEffect(()=>{
    getMovieData()
  }, [])

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
    <UserNavbar/>
    <UserCarousel/>
    <div className='main container-fluid'>
      <div className="row gap-2 p-2">
      {movieData.map((movie)=><MovieCards movie={movie}/>)}
      </div>
        <h1>Welcome to your home page!</h1>
    </div>
    </>
  )
}

export default UserHome