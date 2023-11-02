import React from "react";
import { useSpring, animated } from 'react-spring';
import upcss from '../Upcmingmovies/Upcoming.module.css';
import leo from '../../assets/leo.jpg'
import endgame from '../../assets/endgame.jpg'
import paathan from '../../assets/athaan.jpg'
import ironman from '../../assets/ironman.jpg'
import loki from '../../assets/loki.jpg'
import panther from '../../assets/panther.jpg'
import kaithi from '../../assets/kaithi2.jpg'
import pacificrim from '../../assets/pacificrim.jpg'

function useScrollAnimation(delay) {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 150, friction: 10 },
    delay,
  });
  return props;
}

function Upcomingmovies() {
  const cardProps = useScrollAnimation(0);

  return (
    <div className={upcss["card-container-movies"]}>
      <div className={upcss["card-header"]}>
        <h2>Upcoming Movies</h2>
      </div>
      <div className={upcss["divider"]}></div>
      <div className={upcss["card-content"]}>
        <animated.div style={cardProps} className={upcss["card"]}>
          <img src={leo} alt="Movie 1" className={upcss["card-image" ]}/>
        </animated.div>
        <animated.div style={cardProps} className={upcss["card"]}>
          <img src={endgame} alt="Movie 2" className={upcss["card-image" ]}/>
        </animated.div>
        <animated.div style={cardProps} className={upcss["card"]}>
          <img src={paathan} alt="Movie 3" className={upcss["card-image" ]}/>
        </animated.div>
        <animated.div style={cardProps} className={upcss["card"]}>
          <img src={ironman} alt="Movie 4" className={upcss["card-image" ]}/>
        </animated.div>
        <animated.div style={cardProps} className={upcss["card"]}>
          <img src={loki} alt="Movie 5" className={upcss["card-image"]} />
        </animated.div>
        <animated.div style={cardProps} className={upcss["card"]}>
          <img src={panther} alt="Movie 6" className={upcss["card-image" ]}/>
        </animated.div>
      </div>
      <div className={upcss["toprated"]}>
        <div className={upcss["ratings"]}>
          <h1>Top Rated</h1>
          <div className={upcss["divider-rating1"]}></div>
          <div className={upcss["divider-rating2"]}></div>
          <div className={upcss["divider-rating3"]}></div>
          <div className={upcss["stars"]}><h1>⭐⭐⭐⭐⭐⭐</h1></div>
        </div>
        <div className={upcss["card-ratings"]}>
        <animated.div style={cardProps} className={upcss["card"]}>
            <img src={kaithi} alt="Movie 1" className={upcss["card-image" ]}/>
          </animated.div>
          <animated.div style={cardProps} className={upcss["card"]}>
            <img src={pacificrim} alt="Movie 2" className={upcss["card-image" ]}/>
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Upcomingmovies;
