import React, { useState, useRef, useEffect } from 'react';
import './Admin.css';
import axios from 'axios';

export default function Admin() {
  const [activeScreen, setActiveScreen] = useState(null);
  const [ticketData, setTicketData] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    movieName: '',
    timing: '',
    screen: '',
    amount: '',
    quality: '',
    language: '',
  });

  const fileInputRef = useRef(null);

  const fetchTicketDetails = async (screen) => {
    axios
      .get('http://localhost:3001/Tickets', {
        params: {
          screen: screen,
        }
      })
      .then((response) => setTicketData(response.data))
      .catch((err) => console.log(err));
  };

  const handleScreenClick = (screen) => {
    setActiveScreen((prevActiveScreen) =>
      prevActiveScreen === screen ? null : screen
    );
    fetchTicketDetails(screen);
  };

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    setUploadedImage(image);
    setShowModal(true);
  };

  const handleSave = () => {
    const formDataToSend = new FormData();
    formDataToSend.append('image', uploadedImage);
    formDataToSend.append('movieName', formData.movieName); 
    formDataToSend.append('timing', formData.timing);
    formDataToSend.append('screen', formData.screen);
    formDataToSend.append('amount', formData.amount);
    formDataToSend.append('quality', formData.quality);
    formDataToSend.append('language', formData.language);
    axios
      .post('http://localhost:3001/upload', formDataToSend)
      .then((res) => {
        console.log('Data saved successfully:', res.data);
        setFormData({
          movieName: '', 
          timing: '',
          screen: '',
          amount: '',
          quality: '',
          language: '',
        });
        setUploadedImage(null);
        setShowModal(false);
      })
      .catch((err) => console.log('Error saving data:', err));
  };
  
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    fetchImageData();
  }, []);

  const fetchImageData = async () => {
    axios
      .get('http://localhost:3001/getImages')
      .then((response) => setImageData(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="admin-container">
      <h1 className="admin-header">Movies Mania</h1>
      <div className="adminnav">
        <button onClick={() => handleScreenClick('Screen 1')}>Screen 1</button>
        <button onClick={() => handleScreenClick('Screen 2')}>Screen 2</button>
        <button onClick={() => handleScreenClick('Screen 3')}>Screen 3</button>
      </div>
      {activeScreen && (
        <TableComponent screen={activeScreen} ticketData={ticketData} />
      )}
      <div className="updatemoviessection">
        <div className="upload-section">
          <h3>Upload Movie Image</h3>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={fileInputRef}
          />
          {showModal && (
            <MovieDetailsModal
              formData={formData}
              setFormData={setFormData}
              handleSave={handleSave}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
        <div className="image-gallery">
          {imageData.map((image, index) => (
            <ImageCard key={index} imageUrl={image.url} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MovieDetailsModal({ formData, setFormData, handleSave, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Enter Movie Details</h3>
        <input
          type="text"
          placeholder="Movie Name"
          value={formData.movieName}
          onChange={(e) =>
            setFormData({ ...formData, movieName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Timing"
          value={formData.timing}
          onChange={(e) =>
            setFormData({ ...formData, timing: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Screen"
          value={formData.screen}
          onChange={(e) =>
            setFormData({ ...formData, screen: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Quality"
          value={formData.quality}
          onChange={(e) =>
            setFormData({ ...formData, quality: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Language"
          value={formData.language}
          onChange={(e) =>
            setFormData({ ...formData, language: e.target.value })
          }
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

function TableComponent({ screen, ticketData }) {
  return (
    <div className="table-container">
      <h2>{screen} Data</h2>
      <table>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Timing</th>
            <th>Screen</th>
            <th>Ticket Count</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>
          {ticketData &&
            ticketData.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.moviename}</td>
                <td>{ticket.timing}</td>
                <td>{ticket.screen}</td>
                <td>{ticket.ticketCount}</td>
                <td>{ticket.language}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
function ImageCard({ imageUrl }) {
  return (
    <div className="image-card">
      <img src={imageUrl} alt="Movie" />
    </div>
  );
}