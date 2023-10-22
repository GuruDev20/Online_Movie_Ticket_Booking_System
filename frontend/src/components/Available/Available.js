import React from 'react';
import './available.css';
import harry from '../../assets/harry.jpg'
import jailer from '../../assets/jailer.jpg'
import jawaan from '../../assets/jawaan.jpg'
import john from '../../assets/john.jpg'
import vikram from '../../assets/vikram1.jpg'
import pirates from '../../assets/pirates.jpg'
import leo from '../../assets/leo.jpg'
import mazerunner from '../../assets/mazerunner.jpg'
import wednesday from '../../assets/wednesday.jpg'
import kaithi from '../../assets/kaithi2.jpg'
function Available() {
  return (
    <div className='available'>
      <h2 className='shows'>Available Shows</h2>
      <div className='available-fields'>
        <div className="card-content-field">
          <div className="card-container">
            <img src={harry} alt="Movie 1" className="card-image-field" />
            <div className="card-button">Continue</div>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={jailer} alt="Movie 1" className="card-image-field" />
            <div className="card-button">Continue</div>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={jawaan} alt="Movie 1" className="card-image-field" />
            <div className="card-button">Continue</div>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={john} alt="Movie 1" className="card-image-field" />
            <div className="card-button">Continue</div>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={vikram} alt="Movie 1" className="card-image-field" />
            <div className="card-button">Continue</div>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={pirates} alt="Movie 1" className="card-image-field" />
            <div className="card-button">Continue</div>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={leo} alt="Movie 1" className="card-image-field" />
            <div className="card-button">Continue</div>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={mazerunner} alt="Movie 1" className="card-image-field" />
            <div className="card-button">Continue</div>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={wednesday} alt="Movie 1" className="card-image-field" />
            <div className="card-button">Continue</div>
          </div>
        </div>
        <div className="card-content-field">
          <div className="card-container">
            <img src={kaithi} alt="Movie 1" className="card-image-field" />
            <div className="card-button">Continue</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Available;
