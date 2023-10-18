import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Upcomingmovies from "./components/Upcmingmovies/Upcomingmovies";
import Toprated from "./components/TopRated/Toprated";
import Search from "./components/Search/Search";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavbarComponent />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/upcoming" component={Upcomingmovies} />
            <Route path="/top-rated" component={Toprated} />
            <Route path="/search" component={Search} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
