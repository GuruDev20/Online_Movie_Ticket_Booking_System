import React, { useEffect, useState } from "react";
import pcss from '../profile/profile.module.css';
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
    <div className={pcss["profile"]}>
      <div className={pcss["user"]}>
        <div className={pcss["user-image"]}>
          <img src={pic1} alt="User" />
        </div>
      </div>
      <div className={pcss["divider-img"]}></div>
      <div className={pcss["user-details"]}>
        {users.map((user, index) => (
          <div key={index} className={pcss["field"]}>
            <label htmlFor="name" className={pcss["label"]}>
              Name: {user.username}
            </label>
          </div>
        ))}
        <div className={pcss["divider-field"]}></div>
        <div className={pcss["field"]}>
          <label htmlFor="email" className={pcss["label"]}>
            Email: {email}
          </label>
        </div>
        <div className={pcss["divider-field"]}></div>
        <div className={pcss["ticket-details"]}>
          <h2>My Shows</h2>
          <table className={pcss["ticket-table"]}>
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
