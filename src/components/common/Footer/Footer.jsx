import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div>
    <footer
      className="text-center text-white"
      
    >
      {/* Grid container */}
      <div className="container pt-4">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="#CineCritique"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-facebook-f" />
          </a>
          {/* Twitter */}
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="#CineCritique"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter" />
          </a>
          {/* Google */}
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="#CineCritique"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-google" />
          </a>
          {/* Instagram */}
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="#CineCritique"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-instagram" />
          </a>
          {/* Linkedin */}
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="#CineCritique"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin" />
          </a>
          {/* Github */}
          <a
            className="btn btn-link btn-floating btn-lg text-white m-1"
            href="#CineCritique"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github" />
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center text-white p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <a className="text-white" href="#">
          CineCritique.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
  </div>
  {/* End of .container */}
</>

  )
}

export default Footer