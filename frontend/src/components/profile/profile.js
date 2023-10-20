import React, { useState } from "react";
import "./profile.css";
import pic1 from "./pic1.avif";

function Account() {
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [mobile, setMobile] = useState("123-456-7890");
  const [dob, setDob] = useState("01/01/1990");

  const handleEditClick = () => {
    setEditing(!isEditing);
  };

  const handleFieldChange = (e, field) => {
    if (field === "name") {
      setName(e.target.value);
    } else if (field === "email") {
      setEmail(e.target.value);
    } else if (field === "mobile") {
      setMobile(e.target.value);
    } else if (field === "dob") {
      setDob(e.target.value);
    }
  };

  return (
    <div className="profile">
      <div className="user">
        <div className="user-image">
          <img src={pic1} alt="User" />
        </div>
      </div>
      <div className="divider-img"></div>
      <div className="user-details">
        <div className="field">
          <label htmlFor="name" className="label">
            Name:
          {isEditing ? (
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => handleFieldChange(e, "name")}
            />
          ) : (
            <span className="text">{name}</span>
          )}
          </label>
        </div>
        <div className="divider-field"></div>
        <div className="field">
          <label htmlFor="email" className="label">
            Email:
          {isEditing ? (
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => handleFieldChange(e, "email")}
            />
          ) : (
            <span className="text">{email}</span>
          )}
          </label>
        </div>
        <div className="divider-field"></div>
        <div className="field">
          <label htmlFor="mobile" className="label">
            Mobile:
          {isEditing ? (
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={(e) => handleFieldChange(e, "mobile")}
            />
          ) : (
            <span className="text">{mobile}</span>
          )}
          </label>
        </div>
        <div className="divider-field"></div>
        <div className="field">
          <label htmlFor="dob" className="label">
            DOB:
          {isEditing ? (
            <input
              type="text"
              id="dob"
              value={dob}
              onChange={(e) => handleFieldChange(e, "dob")}
            />
          ) : (
            <span className="text">{dob}</span>
          )}
          </label>
        </div>
        <div className="divider-field"></div>
        <div className="edit">
          <button onClick={handleEditClick}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
