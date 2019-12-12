import React from 'react';
import {Row, Col} from "react-bootstrap";
import CarouselPhotos from './carousel-photos';
import EventCard from './event-card';
import events from '../../data/events';
import './main.scss';

export default function MainPage() {
  const getEventsList = () => {
    let eventDate = '';
    return events.map((event, key) => {
      if (eventDate !== event.date) {
        eventDate = event.date;
        return (
          <div key={key}>
            <div className="pt-3 pb-1" >
              <span className="event-date-point"></span>
              <span className="text-secondary small">{event.date}</span>
            </div>
            <EventCard {...event} />
          </div>);
      } else {
        return <EventCard key={key} {...event} />;
      }
    });
  };

  return (
    <div>
      <Row className="position-absolute w-100">
        <Col className="d-flex justify-content-center align-items-center flex-column">
          <h1 className="pb-5 pt-5">Нова хвиля</h1>
          <h3 className="d-none d-md-inline text-center">Всеамериканська громадська Організація  «Нова Українська Хвиля»  - національно-патріотична і освітньо-культурна громадська організація, створена на основі спільності інтересів насамперед вихідців з України останньої еміґраційної четвертої хвилі.</h3>
        </Col>
      </Row>
      <div className="d-flex align-items-end">
        <div className="main-page-cover">
          <CarouselPhotos />
        </div>
      </div>
      <Row>
        <Col className="text-center">
          <h2 className="p-3 text-primary">Події</h2>
        </Col>
      </Row>
      <div className="events-container border-left pl-3">
        {getEventsList()}
      </div>
    </div>
  );
}
