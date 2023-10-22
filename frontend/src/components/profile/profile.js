import React, { useEffect, useState } from "react";
import "./profile.css";
import pic1 from "./pic1.avif";
import axios from "axios";

function Account(props) {
  const { email } = props;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/getUsers', {
        params: {
          email: email
        }
      })
      .then(response => setUsers(response.data))
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
      </div>
    </div>
  );
}

export default Account;
