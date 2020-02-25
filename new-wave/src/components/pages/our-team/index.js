import React from "react";
import {CardDeck, Col} from "react-bootstrap";
import teamMembers from "../../../data/teamMembers";
import TeamMemberCard from "../../common/team-member-card";

export default function OurTeamPage() {
  return (
    <Col className="text-center" xs md={{ span: 8, offset: 2 }}>
      <h2 className="p-3 text-primary">Наша команда</h2>
        <div className="text-center mb-3 pb-3">
            <CardDeck className="justify-content-center">
                {teamMembers.map(teamMember => {
                    return (
                        <TeamMemberCard key={teamMember.id} {...teamMember}/>
                    )
                })}
            </CardDeck>
        </div>
    </Col>
  );
}
