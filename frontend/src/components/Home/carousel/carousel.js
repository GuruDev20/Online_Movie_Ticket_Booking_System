import React from 'react';
import ImageSlider from "./ImageSlider";
import pic1 from './pic1.avif'
import pic2 from './pic2.jpg'
const Carousel = () => {
  const slides = [
    { url: pic1, title: "beach" },
    { url: pic2, title: "boat" },
    { url: pic1, title: "forest" },
    { url: pic2, title: "city" },
    { url: pic1, title: "italy" },
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
