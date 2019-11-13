import React from 'react';
import {Navbar, Nav, NavDropdown, Row, Col} from 'react-bootstrap';
import logo from './assets/NW_logo_sm.png';
import MainPage from './pages/main/main';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand>
          <a href="#">
            <img src={logo} style={{width:80, marginTop: -7}} />
          </a>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Головна</Nav.Link>
          <NavDropdown title="Проекти" id="projects-list">
            <NavDropdown.Item href="/project/1">Навчальні програми</NavDropdown.Item>
            <NavDropdown.Item href="/project/2">У співпраці</NavDropdown.Item>
            <NavDropdown.Item href="/project/3">Культура - мистецтсо</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/blog">Блог</Nav.Link>
          <Nav.Link href="/aboutUs">Про нас</Nav.Link>
          <Nav.Link href="/contacts">Контакти</Nav.Link>
        </Nav>
      </Navbar>
      <Row>
        <Col md="2"></Col>
        <Col xs md="8">
          <MainPage/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
