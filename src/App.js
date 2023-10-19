import React from 'react';
import { Link, Element } from 'react-scroll';
import './App.css';
import Home from './components/Home/Home';
import Upcomingmovies from './components/Upcmingmovies/Upcomingmovies'
import Toprated from './components/TopRated/Toprated';
import Search from './components/Search/Search';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  const menuItems = [
    {
      id: 1,
      title: 'Home',
      component: <Home />,
    },
    {
      id: 2,
      title: 'Upcoming Movies',
      component: <Upcomingmovies />,
    },
    {
      id: 3,
      title: 'Top Rated',
      component: <Toprated />,
    },
    {
      id: 4,
      title: 'Search',
      component: <Search />,
    },
    {
      id: 5,
      title: 'About',
      component: <About />,
    },
    {
      id: 6,
      title: 'Contact',
      component: <Contact />,
    },
  ];

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.title} smooth={true} duration={500}>
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        {menuItems.map((menu) => (
          <div className="content" key={menu.id}>
            <Element name={menu.title} className="content-section">
              {menu.component}
            </Element>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
