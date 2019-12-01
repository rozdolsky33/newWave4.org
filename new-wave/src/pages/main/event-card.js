import React from 'react';
import {Card} from 'react-bootstrap';

export default class EventCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card className="mb-2 text-center">
        <Card.Body className="text-center">
          <h5>{this.props.title}</h5>
          <span className="text-secondary">{this.props.date}</span>
          <p>{this.props.shortDescription} ...</p>
          <div className="text-right">
            <Card.Link href={"/article/events/" + this.props.id}>Читати далі</Card.Link>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
