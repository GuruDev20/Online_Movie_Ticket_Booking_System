import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import './process.css'
import axios from "axios";

function Process() {
  const { amount, moviename, timing, quality, screen, language, email } = useParams();
  const [ticketCount, setTicketCount] = useState(1);
  const history = useHistory(); 

  const handleMinusClick = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const handlePlusClick = () => {
    setTicketCount(ticketCount + 1);
  };

  const handleSave = async (e) => {
    axios.post('http://localhost:3001/saveTickets', { moviename, timing, quality, screen, language, ticketCount, email })
      .then(result => {
        console.log(result);
        history.push('/menu'); 
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="process">
      <h2>Processing:</h2>
      <p>Amount: {amount}</p>
      <p>Movie Name: {moviename}</p>
      <p>Timing: {timing}</p>
      <p>Quality: {quality}</p>
      <p>Screen: {screen}</p>
      <p>Language: {language}</p>
      <div className="ticket-count">
        <div className="ticket-buttons">
          <button onClick={handleMinusClick}>-</button>
          <p>{ticketCount}</p>
          <button onClick={handlePlusClick}>+</button>
        </div>
      </div>
      <div className="save">
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default Process;
