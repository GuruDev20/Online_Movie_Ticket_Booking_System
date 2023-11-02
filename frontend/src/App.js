import React, { useState } from "react";
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Menu from './Menu';
import axios from "axios";
import Process from "./components/process";
import Admin from './components/Admin/Admin'
function App() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [redirectToMenu, setRedirectToMenu] = useState(false);
  const [redirectToAdmin, setRedirectToAdmin] = useState(false);
  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const isEmailValid = (value) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(value);
  };

  const isPasswordValid = (value) => {
    return value.length >= 8; 
  };

  const handleEmailChange = (e) => {
    const newValue = e.target.value;
    setEmail(newValue);
  };

  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    setPassword(newValue);
  };

  const handleUsernameChange = (e) => {
    const newValue = e.target.value;
    setUsername(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      if (isEmailValid(email) && isPasswordValid(password)) {
        console.log("Registering with Username:", username, "Email:", email, "Password:", password);
        axios.post('http://localhost:3001/register', { email, password, username })
          .then(result => {
            console.log(result);
            setRedirectToMenu(true);
          })
          .catch(err => console.log(err));
      } else {
        alert("Please enter a valid email and password.");
      }
    } else {
      if (isEmailValid(email) && isPasswordValid(password)) {
        console.log("Logging in with Email:", email, "Password:", password);
        axios.post('http://localhost:3001/login', { email, password })
          .then(result => {
            console.log(result);
            if (result.data === "Success") {
              if (email === "admin2003@gmail.com" && password === "admin2003") {
                setRedirectToAdmin(true);
              } else {
                setRedirectToMenu(true);
              }
            }
          })
          .catch(err => console.log(err));
      } else {
        alert("Please enter a valid email and password.");
      }
    }
  };
  
  return (
    <Router>
      <div className="appdetails">
        <Switch>
          <Route path="/menu" render={() => <Menu email={email} />} />
          <Route path="/process/:amount/:moviename/:timing/:quality/:screen/:language/:email" component={Process} />
          <Route path="/account"/>
          <Route path="/admin" render={() => <Admin email={email} />} />
          <Route exact path="/">
            <div className={isRegistering ? "login-form left-hidden" : "login-form left"}>
              <div className="loginfrom">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                  <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                  </label>
                  <label>
                    Password:
                    <input
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </label>
                  <button type="submit">Login</button>
                </form>
                <p>
                  Don't have an account?{" "}
                  <span onClick={handleToggleForm}>Register</span>
                </p>
              </div>
            </div>
            <div className="image">
              {/* <img src={pic1} alt="BG" /> */}
            </div>
            <div className={isRegistering ? "register-form right" : "register-form right-hidden"}>
              <div className="registerfrom">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                  <label>
                    Username:
                    <input
                      type="text"
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </label>
                  <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                  </label>
                  <label>
                    Password:
                    <input
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </label>
                  <button type="submit">Register</button>
                </form>
                <p>
                  Already have an account? <span onClick={handleToggleForm}>Login</span>
                </p>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
      {redirectToMenu && <Redirect to="/menu" />}
      {redirectToAdmin && <Redirect to="/admin" />}

    </Router>
  );
}

export default App;

