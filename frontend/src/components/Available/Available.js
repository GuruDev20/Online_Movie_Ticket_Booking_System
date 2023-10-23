import React, { useEffect, useState } from "react";
import "./available.css";
import { Link } from "react-router-dom";
import axios from 'axios';

function Available(props) {
  const { email } = props;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesFromAPI = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getImage');
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMoviesFromAPI();
  }, []);

  return (
    <div className="available">
      <h2 className="shows">Available Shows</h2>
      <div className="available-fields">
        {movies.map((movie, index) => (
          <div className="card-content-field" key={index}>
            <div className="card-container">
              <img src={movie.image} alt={`Movie ${index + 1}`} className="card-image-field" />
              <Link
                to={`/process/${movie.amount}/${movie.movieName}/${movie.timing}/${movie.quality}/${movie.screen}/${movie.language}/${email}`}
                className="card-button"
              >
                Continue
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Available;
