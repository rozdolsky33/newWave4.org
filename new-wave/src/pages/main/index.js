import React from 'react';
import {Row, Col} from "react-bootstrap";
import CarouselPhotos from './carousel-photos';
import EventCard from './event-card';
import events from '../../data/events';
import './main.scss';

export default function MainPage() {
  return (
    <div>
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
      {events.map((event, key) => <EventCard key={key} {...event} />)}
    </div>
  );
}
