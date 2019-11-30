import React from 'react';
import {Card} from 'react-bootstrap';
import './main.scss';

export default class TeamMemberCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <Card className="mb-2 text-center team-member-card" style={{flex: "0 0 25%"} }>
        <Card.Img variant="top" src="./assets/NW_person_placeholder.png" className="member-img"/>
        <Card.Body className="text-center">
          <h5>{this.props.fullName}</h5>
          <span className="text-secondary">{this.props.location}</span>
          <p>{this.props.position}</p>
        </Card.Body>
      </Card>
    );
  }
}
