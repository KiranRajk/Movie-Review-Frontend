import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const MovieCards = ({movie}) => {
    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if(words.length > wordLimit){
            return words.slice(0, wordLimit).join(' ') + '....';
        }
        return text
    }
  const navigate = useNavigate()
//   const openCourtDetails = () =>{
//     navigate(`/courtDetails/${court._id}`)
//   }
  return (
    
    <MDBCard style={{width:'18rem'}} className='col-12 col-md-3  col-lg-4 col-xl-2 col-xxl-1 ' >
      <MDBCardImage style={{height:'20rem'}}  src={movie.image} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{movie.title}</MDBCardTitle>
        <MDBCardTitle tag='small' className='text-muted font-monospace  '>{movie.director}</MDBCardTitle>
        <MDBCardTitle tag='small' className='text-muted font-monospace mx-6'>{movie.year}</MDBCardTitle>
        <MDBCardText className='mt-2'>
          {truncateText(movie.description, 10)}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

export default MovieCards