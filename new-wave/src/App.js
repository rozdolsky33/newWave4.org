import React from 'react';
import {Navbar, Nav, NavDropdown, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import logo from './assets/NW_logo_sm.png';
import MainPage from './pages/main';
import BlogPage from './pages/blog';
import AboutUsPage from './pages/aboutUs';
import ContactsPage from './pages/contacts';
import CoultureAndArtPage from './pages/projects/cultureAndArt';
import CooperationPage from './pages/projects/cooperation';
import StudyingPage from './pages/projects/studying';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand>
          <a href="/#"> 
            <img src={logo} style={{width:80, marginTop: -7}} alt=""/> 
          </a>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Головна</Nav.Link>
          <NavDropdown title="Проекти" id="projects-list">
            <NavDropdown.Item href="/studying">Навчальні програми</NavDropdown.Item>
            <NavDropdown.Item href="/cooperation">У співпраці</NavDropdown.Item>
            <NavDropdown.Item href="/culture-and-art">Культура - мистецтсо</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/blog">Блог</Nav.Link>
          <Nav.Link href="/aboutUs">Про нас</Nav.Link>
          <Nav.Link href="/contacts">Контакти</Nav.Link>
        </Nav>
      </Navbar>
      <Row className="m-0">
        <Col md="2"></Col>
        <Col xs md="8">
          <Router>
            <Route path="/" exact={true} component={MainPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/aboutUs" component={AboutUsPage} />
            <Route path="/contacts" component={ContactsPage} />
            <Route path="/studying" component={StudyingPage} />
            <Route path="/cooperation" component={CooperationPage} />
            <Route path="/culture-and-art" component={CoultureAndArtPage} />
          </Router>
        </Col>
      </Row>
    </div>
  );
}

export default App;
