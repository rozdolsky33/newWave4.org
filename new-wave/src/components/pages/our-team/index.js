import React from "react";
import {CardDeck} from "react-bootstrap";
import teamMembers from "../../../data/teamMembers";
import TeamMemberCard from "../../common/team-member-card";
import ContactUsForm from "../../common/contact-us-form";


export default function OurTeamPage() {
  return (
    <div className="text-center">
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
    </div>
  );
}
