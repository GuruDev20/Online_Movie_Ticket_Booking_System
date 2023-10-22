import React from "react";
import "./available.css";
import harry from "../../assets/harry.jpg";
import jailer from "../../assets/jailer.jpg";
import jawaan from "../../assets/jawaan.jpg";
import john from "../../assets/john.jpg";
import vikram from "../../assets/vikram1.jpg";
import pirates from "../../assets/pirates.jpg";
import leo from "../../assets/leo.jpg";
import mazerunner from "../../assets/mazerunner.jpg";
import wednesday from "../../assets/wednesday.jpg";
import kaithi from "../../assets/kaithi2.jpg";
import {Link} from 'react-router-dom'
function Available(props) {
  const { email } = props;
  return (
    <div className="available">
      <h2 className="shows">Available Shows</h2>
      <div className="available-fields">
        <div className="card-content-field">
          <div className="card-container">
            <img src={harry} alt="Movie 1" className="card-image-field" />
            <Link
              to={`/process/120/Harry Potter/10:00 AM/HD/Screen 1/English/${email}`}
              className="card-button"
            >
              Continue
            </Link>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={jailer} alt="Movie 2" className="card-image-field" />
            <Link
              to={`/process/150/Jailer/1:00 PM/HD/Screen 3/Tamil/${email}`}
              className="card-button"
            >
              Continue
            </Link>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={leo} alt="Movie 2" className="card-image-field" />
            <Link
              to={`/process/200/Leo/8:00 AM/HD/Screen 2/Tamil/${email}`}
              className="card-button"
            >
              Continue
            </Link>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={mazerunner} alt="Movie 2" className="card-image-field" />
            <Link
              to={`/process/90/Maze Runner/4:00 PM/HD/Screen 2/English/${email}`}
              className="card-button"
            >
              Continue
            </Link>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={vikram} alt="Movie 2" className="card-image-field" />
            <Link
              to={`/process/120/Vikram/12:00 PM/HD/Screen 3/Tamil/${email}`}
              className="card-button"
            >
              Continue
            </Link>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={jawaan} alt="Movie 2" className="card-image-field" />
            <Link
              to={`/process/100/Jawaan/2:00 PM/HD/Screen 1/Hindi/${email}`}
              className="card-button"
            >
              Continue
            </Link>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={john} alt="Movie 2" className="card-image-field" />
            <Link
              to={`/process/100/John Wick/6:00 PM/HD/Screen 1/Hindi/${email}`}
              className="card-button"
            >
              Continue
            </Link>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={pirates} alt="Movie 2" className="card-image-field" />
            <Link
              to={`/process/150/Pirates/10:00 AM/HD/Screen 1/English/${email}`}
              className="card-button"
            >
              Continue
            </Link>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={kaithi} alt="Movie 2" className="card-image-field" />
            <Link
              to={`/process/150/Kaithi/10:00 AM/HD/Screen 1/Tamil/${email}`}
              className="card-button"
            >
              Continue
            </Link>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={wednesday} alt="Movie 2" className="card-image-field" />
            <Link
              to={`/process/180/Wednesday/10:00 AM/HD/Screen 3/English/${email}`}
              className="card-button"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Available;
