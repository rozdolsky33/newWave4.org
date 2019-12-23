import React from "react";
import {CardDeck} from "react-bootstrap";
import CarouselPhotos from "./carousel-photos";
import AboutUsBlock from "./about-us";
import TeamMemberCard from "../../common/team-member-card";
import ContactUsForm from "../../common/contact-us-form";
import teamMembers from "../../../data/teamMembers";
import "./main.scss";

export default function MainPage() {
  return (
    <div>
      <div id="main" className="d-flex align-items-end">
        <div className="main-page-cover">
          <CarouselPhotos />
        </div>
      </div>
      <AboutUsBlock id="about-us"/>
      <div id="our-team" className="text-center border-bottom mb-3 pb-3">
        <h3 className="text-primary">Наша команда</h3>
        <CardDeck className="justify-content-center">
          {teamMembers.map(teamMember => {
            return (
              <TeamMemberCard {...teamMember}/>
            )
          })}
        </CardDeck>
      </div>
      <ContactUsForm id="contacts"/>
    </div>
  );
}
