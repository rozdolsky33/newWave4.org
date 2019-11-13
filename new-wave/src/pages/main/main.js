import React from 'react';
import CarouselPhotos from './carousel-photos';
import './main.scss';

export default function MainPage() {
  return (
    <div className="d-flex align-items-end">
      <div className="main-page-cover">
        <CarouselPhotos />
      </div>
    </div>
  );
}
