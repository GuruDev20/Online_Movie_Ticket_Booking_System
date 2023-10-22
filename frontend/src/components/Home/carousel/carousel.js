import React from 'react';
import ImageSlider from "./ImageSlider";
import leo from '../../../assets/leohorizontal.jpg'
import whitehouse from '../../../assets/whithouse.jpg';
import salaar from '../../../assets/salaar.jpg'
import shawshank from '../../../assets/shawshank.jpg'
import kaithi from '../../../assets/kaithi.jpg'
const Carousel = () => {
  const slides = [
    { url: leo, title: "beach" },
    { url: whitehouse, title: "boat" },
    { url: salaar, title: "forest" },
    { url: shawshank, title: "city" },
    { url: kaithi, title: "italy" },
  ];
  const containerStyles = {
    width: "1450px",
    height: "680px",
    padding:"50px"
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Carousel;
