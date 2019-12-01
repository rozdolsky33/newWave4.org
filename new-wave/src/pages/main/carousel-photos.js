import React from 'react';
import {Carousel} from 'react-bootstrap';

export default function CarouselPhotos() {
  let photos = [
    './assets/NW_main_cover_1.jpg',
    './assets/NW_main_cover_2.jpg',
    './assets/NW_main_cover_3.jpg'
  ];
  return (
    <>
      <Carousel controls={false}>
        {photos.map((photo, key) => {
          return (<Carousel.Item key={key}>
            <img
              className="w-100"
              src={photo}
              alt={key + " slide"}
            />
          </Carousel.Item>);
        })}
      </Carousel>
    </>
  );
}
