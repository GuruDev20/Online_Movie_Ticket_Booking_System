import React from 'react';
import { Link, Element } from 'react-scroll';
import menucss from '../components/Menu.module.css'
import Home from './Home/Home';
import Upcomingmovies from './Upcmingmovies/Upcomingmovies';
import Available from './Available/Available';
import Contact from './Contact/Contact';
import Account from './profile/profile';

function Menu(props) {
  const { email } = props;
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
      title: 'Available',
      component: <Available email={email} />,
    },
    {
      id: 4,
      title: 'Contact',
      component: <Contact />,
    },
    {
      id: 5,
      title: 'Account',
      component: <Account email={email} />,
    },
  ];

  return (
    <div className={menucss['filedcontenthome']}>
    <div className={menucss["App"]}>
      <header>
        <nav>
          <ul>
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.title} smooth={true} duration={700}>
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        {menuItems.map((menu) => (
          <div className={menucss["content"]} key={menu.id}>
            <Element name={menu.title} className={menucss["content-section"]}>
              {menu.component}
            </Element>
          </div>
        ))}
      </main>
    </div>
    </div>
  );
}

export default Menu;

