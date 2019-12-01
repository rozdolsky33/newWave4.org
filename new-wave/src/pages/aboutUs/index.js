import React from 'react';
import {Row, Col, CardDeck} from 'react-bootstrap';
import TeamMemberCard from './team-member-card';
import teamMembers from '../../data/teamMembers';
import './aboutUs.scss';

export default function BlogPage() {
  return (
    <div>
      <Row>
        <Col className="text-center">
          <h2 className="p-3 text-primary">Про нас</h2>
          <br/>
          <img
            src="./assets/NW_logo_sm_2.jpg"
            alt="About Us"
          />
        </Col>
        <br/>
        <p>
          Всеамериканська громадська Організація  «Нова Українська Хвиля»  - національно-патріотична і освітньо-культурна
          громадська організація, створена на основі спільності інтересів насамперед вихідців з України останньої еміґраційної четвертої хвилі.
        </p>
        <p>
          Організація сприяє відродженню духу національної єдності, збереженню українських звичаїв і традицій,
          утвердженню української національної ідеї, захисту політичних, культурних та історичних здобутків українського народу.
        </p>
        <p>
          "Нова Українська Хвиля" створює структуру, здатну ефективно проводити аналіз існуючої ситуації в українських
          громадах США, розробляє стратегію розвитку двохсторонніх стосунків між Україною та її діаспорою в США.
          На базі цієї інформації здійснює заходи, що відповідають чинному законодавству обидвох держав та реалізації
          спільних програм світового українства.
        </p>
        <p>Статут Всеамериканської громадської організації "Нова Українська Хвиля</p>
      </Row>
      <Row>
        <Col className="text-center">
          <h2 className="p-3 text-primary">Наша команда</h2>
        </Col>
      </Row>
      <CardDeck className="justify-content-center">
        {teamMembers.map(teamMember => {
          return (
            <TeamMemberCard {...teamMember}/>
          )
        })}
      </CardDeck>
    </div>
  );
}
