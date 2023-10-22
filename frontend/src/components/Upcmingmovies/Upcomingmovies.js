import React from "react";
import "./Upcoming.css";
import leo from '../../assets/leo.jpg'
import endgame from '../../assets/endgame.jpg'
import paathan from '../../assets/athaan.jpg'
import ironman from '../../assets/ironman.jpg'
import loki from '../../assets/loki.jpg'
import panther from '../../assets/panther.jpg'
import kaithi from '../../assets/kaithi2.jpg'
import pacificrim from '../../assets/pacificrim.jpg'
function Upcomingmovies() {
  return (
    <div className="card-container-movies">
      <div className="card-header">
        <h2>Upcoming Movies</h2>
      </div>
      <div className="divider"></div>
      <div className="card-content">
        <div className="card">
          <img src={leo} alt="Movie 1" className="card-image" />
        </div>
        <div className="card">
          <img src={endgame} alt="Movie 2" className="card-image" />
        </div>
        <div className="card">
          <img src={paathan} alt="Movie 3" className="card-image" />
        </div>
        <div className="card">
          <img src={ironman} alt="Movie 4" className="card-image" />
        </div>
        <div className="card">
          <img src={loki} alt="Movie 5" className="card-image" />
        </div>
        <div className="card">
          <img src={panther} alt="Movie 6" className="card-image" />
        </div>
      </div>
      <div className="toprated">
        <div className="ratings">
          <h1>Top Rated</h1>
          <div className="divider-rating1"></div>
          <div className="divider-rating2"></div>
          <div className="divider-rating3"></div>
          <div className="stars"><h1>⭐⭐⭐⭐⭐⭐</h1></div>
        </div>
        <div className="card-ratings">
          <div className="card">
            <img src={kaithi} alt="Movie 1" className="card-image" />
          </div>
          <div className="card">
            <img src={pacificrim} alt="Movie 2" className="card-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upcomingmovies;
