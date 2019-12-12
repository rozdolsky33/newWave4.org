import React from 'react';
import {Navbar, Nav, NavDropdown, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import logo from './assets/NW_logo_sm.png';
import MainPage from './pages/main';
import FooterBlock from './footer';
import BlogPage from './pages/blog';
import AboutUsPage from './pages/aboutUs';
import ContactsPage from './pages/contacts';
import ArticlePage from './pages/article';
import LocationsPage from './pages/locations';
import CultureAndArtPage from './pages/projects/cultureAndArt';
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
            <NavDropdown.Item href="/culture-and-art">Культура - мистецтво</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/blog">Блог</Nav.Link>
          <Nav.Link href="/aboutUs">Про нас</Nav.Link>
          <Nav.Link href="/contacts">Контакти</Nav.Link>
        </Nav>
      </Navbar>
      <Row className="m-0">
        <Col xs md={{ span: 8, offset: 2 }}>
          <Router>
            <Route path="/" exact={true} component={MainPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/aboutUs" component={AboutUsPage} />
            <Route path="/contacts" component={ContactsPage} />
            <Route path="/studying" component={StudyingPage} />
            <Route path="/locations" component={LocationsPage} />
            <Route path="/cooperation" component={CooperationPage} />
            <Route path="/culture-and-art" component={CultureAndArtPage} />
            <Route path="/article/:type/:id" component={ArticlePage} />
          </Router>
        </Col>
      </Row>
      <FooterBlock />
    </div>
  );
}

export default App;
