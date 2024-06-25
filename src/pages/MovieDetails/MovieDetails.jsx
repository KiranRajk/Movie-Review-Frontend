import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import NavBarUser from "../../components/common/NavBarUser/NavBarUser";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../config/AxiosInstance";
import { Modal, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import Footer from "../../components/common/Footer/Footer";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    getMovieDataById();
  }, []);

  const getMovieDataById = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/user/getMovieById`, {
        params: { id },
      });
      setMovie(response.data);
    } catch (error) {
      if (error.response.status === 404) {
        alert("Movie not found");
      } else if (error.response.status === 500) {
        alert(
          "Internal Server Error. Movie data cant be fetched at the moment"
        );
      } else {
        alert("Something went wrong. Please try again later");
      }
    }
  };

  const handleSubmitReview = async () => {
    try {
        const response = await axiosInstance.post('/api/v1/user/addReview' , {
            movieId: id,
            rating,
            comment,
        });

      setShowModal(false);
      setRating(0);
      setComment('');
      toast.success('Review added successfully')
      getMovieDataById();
    } catch (error) {
        toast.error('Error while adding your review')
    }
  };

  return (
    <>
      <NavBarUser/>
      <div className="movie-container">
        <div className="movie-details">
          <div className="movie-content">
            <div className="movie-image">
              <img src={movie.image} alt="Image related to this movie" />
            </div>
            <div className="movie-caption">
              <h1>{movie.title}</h1>
              <p>
                <strong>Director:</strong> {movie.director}
              </p>
              <p>
                <strong>Year:</strong> {movie.year}
              </p>
              <p>
                <strong>Language:</strong> {movie.language}
              </p>
              <p>
                <strong>Rating: </strong> {movie.rating} <span> / 5</span>
              </p>
            </div>
          </div>
          <div className="movie-description">
            <h2>Description</h2>
            <p>{movie.description}</p>
            <button className="add-review-btn" onClick={()=> setShowModal(true)}>Add Review</button>
          </div>
        </div>
        <div className="movie-reviews">
          <h2 className="mb-2">Reviews</h2>
          {movie.reviews ? (
            movie.reviews.map((review) => (
              <div className="review-item" key={review._id}>
                <p>
                  <strong>User:</strong> {review.user?.name || "Unknown User"}
                </p>
                <p>
                  <strong>Rating:</strong> {review.rating}
                </p>
                <p><strong>Review:</strong> {review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews available</p>
          )}
        </div>
      </div>
      <Footer/>

      <Modal show={showModal} onHide={() => setShowModal(false)} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Add Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Rate the movie according to your liking</h5>
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= (hover || rating) ? "star on" : "star"}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <FaStar />
                </button>
              );
            })}
          </div>
          <h5 className="mt-4 mb-1">Write your review</h5>
          <textarea rows={5}
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success"  onClick={handleSubmitReview}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieDetails;
