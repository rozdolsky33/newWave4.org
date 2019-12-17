import React from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import logo from "../assets/NW_logo_sm.png";

export default function NavBarBlock() {
  return (
    <Navbar expand="sm" sticky="top" bg="light" variant="light">
      <Navbar.Brand>
        <a href="/#">
          <img src={logo} style={{width:80, marginTop: -7}} alt=""/>
        </a>
      </Navbar.Brand>
      <Nav className="mr-auto w-100 d-flex justify-content-end">
        <Nav.Link href="/#main">Головна</Nav.Link>
        <NavDropdown title="Проекти" id="projects-list">
          <NavDropdown.Item href="/educational">Освітні</NavDropdown.Item>
          <NavDropdown.Item href="/culture-and-art">Культура і Мистецтво</NavDropdown.Item>
          <NavDropdown.Item href="/social">Соціально-суспільні</NavDropdown.Item>
          <NavDropdown.Item href="/publications">Публікації</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Про нас" id="projects-list">
          <NavDropdown.Item href="/#our-team">Рада</NavDropdown.Item>
          <NavDropdown.Item href="/history">Історія створення</NavDropdown.Item>
          <NavDropdown.Item href="/reports">Звіти</NavDropdown.Item>
          <NavDropdown.Item href="/#contacts">Контакти</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/blog">Блоги</Nav.Link>
        <Nav.Link href="/donations">Пожертви</Nav.Link>
        <Nav.Link href="/archive">Архів</Nav.Link>
      </Nav>
    </Navbar>
  );
}
