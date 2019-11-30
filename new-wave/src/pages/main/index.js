import React from 'react';
import {Row, Col, CardDeck} from "react-bootstrap";
import CarouselPhotos from './carousel-photos';
import TeamMemberCard from "./team-member-card";
import './main.scss';

export default function MainPage() {
  let teamMembers = [
    {
      fullName: 'Мирослава Роздольська',
      position: 'Голова',
      location: 'Стемфорд, КТ'
    },
    {
      fullName: 'Богдан Бохонок',
      position: 'Заступник по організаційній роботі',
      location: 'Пітсбург, ПА'
    },
    {
      fullName: 'Микола Мегец',
      position: 'Заступник з питань зв\'язків з американськими урядовими і бізнесовими структурами',
      location: 'Меніаполіс, МН'
    },
    {
      fullName: 'Надія Петрик',
      position: 'Заступник з питань соціального захисту',
      location: 'Філадельфі, ПА'
    },
    {
      fullName: 'Леся Лесик',
      position: 'Заступник по зв’язках з громадськістю та ЗМІ',
      location: 'Чикаго, ІЛ'
    },
    {
      fullName: 'Остап Стахів',
      position: 'Заступник по культурно-масовій роботі',
      location: 'Клівленд, ОГ'
    },
    {
      fullName: 'Олексiй Нікітин',
      position: 'Члени координаційної ради',
      location: 'Нью–Йорк, НЙ'
    },
    {
      fullName: 'Наталя Брандафі',
      position: 'Члени координаційної ради',
      location: 'Перс Амбой, НДж'
    },
    {
      fullName: 'Олена Паливода',
      position: 'Члени координаційної ради',
      location: 'Детройт, МІ'
    },
    {
      fullName: 'Христина Горбачевська',
      position: 'Члени координаційної ради',
      location: 'Балтимор, МД'
    },
    {
      fullName: 'Галина Семеняк',
      position: 'Члени координаційної ради',
      location: 'Пассейк, НДж'
    },
    {
      fullName: 'Олена Устюжанцева',
      position: 'Пресс-секретар',
      location: 'Стемфорд, КТ'
    },
    {
      fullName: 'Уляна Киричук',
      position: 'Скарбник',
      location: 'Стемфорд, КТ'
    }
  ];
  return (
    <div>
      <Row className="d-flex align-items-end">
        <Col className="main-page-cover">
          <CarouselPhotos />
        </Col>
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
