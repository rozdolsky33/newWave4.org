import React from "react";
import {Carousel} from "react-bootstrap";

export default function CarouselPhotos() {
  let photos = [
    "./assets/NW_main_cover_1.jpg",
    "./assets/NW_main_cover_4.jpg",
    "./assets/NW_main_cover_5.jpg",
    "./assets/NW_main_cover_6.jpg",
    "./assets/NW_main_cover_7.jpg",
    "./assets/NW_main_cover_8.jpg",
    "./assets/NW_main_cover_9.jpg",
    "./assets/NW_main_cover_10.jpg"
  ];
  return (
    <div className="carousel-photo-block">
      <Carousel controls={false}>
        {photos.map((photo, key) => {
          return (<Carousel.Item key={key} className="h-100">
            <div style={{backgroundImage: `url(${photo})`}} className="photo-view-background"></div>
            <img className="photo-view"
                 src={photo}
                 alt={key + " slide"}/>
          </Carousel.Item>);
        })}
      </Carousel>
    </div>
  );
}
