import React, { useState, useRef, useEffect } from 'react';
import styles from '../Admin/Admin.module.css'
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
        },
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

  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    axios
      .get('http://localhost:3001/getMovies')
      .then((response) => setMovies(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleDelete = (movieId) => {
    axios
      .delete(`http://localhost:3001/delete-movie/${movieId}`)
      .then((response) => {
        console.log('Movie deleted successfully');
      })
      .catch((err) => console.error('Error deleting movie:', err));
  };

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleUpdate = (movie) => {
    setSelectedMovie(movie);
    setIsUpdateModalOpen(true);
    setFormData({
      movieName: movie.movieName,
      timing: movie.timing,
      screen: movie.screen,
      amount: movie.amount,
      quality: movie.quality,
      language: movie.language,
    });
  };

  const handleUpdateSave = () => {
    const updatedMovieData = { ...selectedMovie };
    updatedMovieData.movieName = formData.movieName;
    updatedMovieData.screen = formData.screen;
    updatedMovieData.amount = formData.amount;
    updatedMovieData.timing = formData.timing;
    updatedMovieData.quality = formData.quality;
    updatedMovieData.language = formData.language;
  
    axios
      .put(`http://localhost:3001/update-movie/${selectedMovie._id}`, updatedMovieData)
      .then((response) => {
        console.log('Movie updated successfully:', response.data);
        setIsUpdateModalOpen(false);
        // You may also want to update the local movies state with the updated movie data
        const updatedMovies = movies.map((movie) =>
          movie._id === selectedMovie._id ? { ...movie, ...updatedMovieData } : movie
        );
        setMovies(updatedMovies);
      })
      .catch((error) => {
        console.error('Error updating movie:', error);
      });
  };
  
  
  return (
    <div className={styles['admin-container']}>
      <h1 className={styles['admin-header']}>Movies Mania</h1>
      <div className={styles['adminnav']}>
        <button onClick={() => handleScreenClick('Screen 1')}>Screen 1</button>
        <button onClick={() => handleScreenClick('Screen 2')}>Screen 2</button>
        <button onClick={() => handleScreenClick('Screen 3')}>Screen 3</button>
      </div>
      {activeScreen && (
        <TableComponent screen={activeScreen} ticketData={ticketData} />
      )}
      <div className="updatemoviessection">
        <div className="upload-section">
          <h3>Available Movies</h3>
          <input className='uploadoption'
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
      <br/>
      <div className="currentmovies">
        <table>
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Timing</th>
              <th>Screen</th>
              <th>Amount</th>
              <th>Quality</th>
              <th>Language</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.movieName}</td>
                <td>{movie.timing}</td>
                <td>{movie.screen}</td>
                <td>{movie.amount}</td>
                <td>{movie.quality}</td>
                <td>{movie.language}</td>
                <td>
                  <button onClick={() => handleUpdate(movie)}>Update</button>
                  <button onClick={() => handleDelete(movie._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isUpdateModalOpen && (
        <UpdateMovieModal
          movie={selectedMovie}
          handleSave={handleUpdateSave}
          onClose={() => setIsUpdateModalOpen(false)}
        />
      )}
      </div>
  );
}
function UpdateMovieModal({ movie, handleSave, onClose }) {
  const screenOptions = ['Screen 1', 'Screen 2', 'Screen 3'];
  const amountOptions = ['100', '120', '140', '160', '200'];
  const timingOptions = ['Morning', 'Afternoon', 'Evening', 'Night'];
  const qualityOptions = ['HD', '4K', '2D', '3D'];
  const languageOptions = ['English', 'Spanish', 'Tamil', 'Hindi'];

  const [updatedMovieData, setUpdatedMovieData] = useState({ ...movie });

  const handleFieldChange = (fieldName, value) => {
    setUpdatedMovieData({
      ...updatedMovieData,
      [fieldName]: value,
    });
  };

  return (
    <div className="modal">
      <div className="modalContent">
        <h3>Edit Movie Details</h3>
        <input
          type="text"
          placeholder="Movie Name"
          value={updatedMovieData.movieName}
          onChange={(e) => handleFieldChange('movieName', e.target.value)}
        />
        <select
          value={updatedMovieData.screen}
          onChange={(e) => handleFieldChange('screen', e.target.value)}
        >
          {screenOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          value={updatedMovieData.amount}
          onChange={(e) => handleFieldChange('amount', e.target.value)}
        >
          {amountOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          value={updatedMovieData.timing}
          onChange={(e) => handleFieldChange('timing', e.target.value)}
        >
          {timingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          value={updatedMovieData.quality}
          onChange={(e) => handleFieldChange('quality', e.target.value)}
        >
          {qualityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          value={updatedMovieData.language}
          onChange={(e) => handleFieldChange('language', e.target.value)}
        >
          {languageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
function MovieDetailsModal({ formData, setFormData, handleSave, onClose }) {
  const screenOptions = ['Screen 1', 'Screen 2', 'Screen 3'];
  const amountOptions = ['100', '120', '140', '160', '200'];
  const timingOptions = ['Morning', 'Afternoon', 'Evening', 'Night'];
  const qualityOptions = ['HD', '4K', '2D', '3D'];
  const languageOptions = ['English', 'Spanish', 'Tamil', 'Hindi'];

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h3>Enter Movie Details</h3>
        <input
          type="text"
          placeholder="Movie Name"
          value={formData.movieName}
          onChange={(e) => setFormData({ ...formData, movieName: e.target.value })}
        />
        <select
          className={styles.dropdown}
          value={formData.screen}
          onChange={(e) => setFormData({ ...formData, screen: e.target.value })}
        >
          {screenOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          className={styles.dropdown} 
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        >
          {amountOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          className={styles.dropdown} 
          value={formData.timing}
          onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
        >
          {timingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          className={styles.dropdown} 
          value={formData.quality}
          onChange={(e) => setFormData({ ...formData, quality: e.target.value })}
        >
          {qualityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          className={styles.dropdown}
          value={formData.language}
          onChange={(e) => setFormData({ ...formData, language: e.target.value })}
        >
          {languageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
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
      <div className="image-card-inner">
        <img src={imageUrl} alt="Movie" />
      </div>
    </div>
  );
}
