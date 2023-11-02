import React, { useEffect, useState } from "react";
import acss from '../Available/available.module.css';
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
    <div className={acss["available"]}>
      <h2 className={acss["shows"]}>Available Shows</h2>
      <div className={acss["available-fields"]}>
        {movies.map((movie, index) => (
          <div className={acss["card-content-field"]} key={index}>
            <div className={acss["card-container"]}>
              <img src={`http://localhost:3001/Images/`+movie.image} alt={`Movie ${index + 1}`} className={acss["card-image-field" ]}/>
              <Link
                to={`/process/${movie.amount}/${movie.movieName}/${movie.timing}/${movie.quality}/${movie.screen}/${movie.language}/${email}`}
                className={acss["card-button"]}
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
