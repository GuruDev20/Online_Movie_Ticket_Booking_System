import React from "react";
import "./Upcoming.css";
import pic1 from "./pic1.avif";

function Upcomingmovies() {
  return (
    <div className="card-container">
      <div className="card-header">
        <h2>Upcoming Movies</h2>
      </div>
      <div className="divider"></div>
      <div className="card-content">
        <div className="card">
          <img src={pic1} alt="Movie 1" className="card-image" />
        </div>
        <div className="card">
          <img src={pic1} alt="Movie 2" className="card-image" />
        </div>
        <div className="card">
          <img src={pic1} alt="Movie 3" className="card-image" />
        </div>
        <div className="card">
          <img src={pic1} alt="Movie 4" className="card-image" />
        </div>
        <div className="card">
          <img src={pic1} alt="Movie 5" className="card-image" />
        </div>
        <div className="card">
          <img src={pic1} alt="Movie 6" className="card-image" />
        </div>
      </div>
      <div className="toprated">
        <div className="ratings">
          <h1>Top Rated</h1>
          <div className="divider-rating1"></div>
          <div className="divider-rating2"></div>
          <div className="divider-rating3"></div>
        </div>
        <div className="card-ratings">
          <div className="card">
            <img src={pic1} alt="Movie 1" className="card-image" />
          </div>
          <div className="card">
            <img src={pic1} alt="Movie 2" className="card-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upcomingmovies;
