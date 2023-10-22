import React, { useEffect, useState } from "react";
import "./profile.css";
import pic1 from "./pic1.avif";
import axios from "axios";

function Account(props) {
  const { email } = props;
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/getUsers', {
        params: {
          email: email
        }
      })
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));

    axios
      .get('http://localhost:3001/getTickets', {
        params: {
          email: email
        }
      })
      .then(response => setTickets(response.data))
      .catch(err => console.log(err));
  }, [email]);

  return (
    <div className="profile">
      <div className="user">
        <div className="user-image">
          <img src={pic1} alt="User" />
        </div>
      </div>
      <div className="divider-img"></div>
      <div className="user-details">
        {users.map((user, index) => (
          <div key={index} className="field">
            <label htmlFor="name" className="label">
              Name: {user.username}
            </label>
          </div>
        ))}
        <div className="divider-field"></div>
        <div className="field">
          <label htmlFor="email" className="label">
            Email: {email}
          </label>
        </div>
        <div className="divider-field"></div>
        <div className="ticket-details">
          <h2>My Shows</h2>
          <table className="ticket-table">
            <thead>
              <tr>
                <th>Moviename</th>
                <th>Timing</th>
                <th>Screen</th>
                <th>Language</th>
                <th>Tickets</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, index) => (
                <tr key={index}>
                  <td>{ticket.moviename}</td>
                  <td>{ticket.timing}</td>
                  <td>{ticket.screen}</td>
                  <td>{ticket.language}</td>
                  <td>{ticket.ticketCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Account;
