import React from "react";
import {Row, Col} from "react-bootstrap";
import {BrowserRouter as Router , Route} from "react-router-dom";
import { createBrowserHistory } from 'history';
import NavBarBlock from "./nav-bar";
import MainPage from "./pages/main";
import ReportsPage from "./pages/reports";
import SocialPage from "./pages/projects/social";
import CultureAndArtPage from "./pages/projects/cultureAndArt";
import PublicationsPage from "./pages/projects/publications";
import EducationalPage from "./pages/projects/educational";
import DonationsPage from "./pages/donations";
import HistoryPage from "./pages/history";
import ArticlePage from "./pages/article";
import ArticlesList from "./common/articles-list";
import OurTeamPage from "./pages/our-team";
import ContactUsPage from "./pages/contact-us";
import AdminPage from "./admin";
import LoginPage from "./login";
import RegistrationPage from "./registration";

function App() {
  let history = createBrowserHistory();
  return (
    <div className="App">
      <NavBarBlock history={history} />
      <Row className="m-0 overflow-hidden">
        <Router history={history}>
          <Route path="/" exact={true} component={MainPage} />
          <Route path="/reports" component={ReportsPage} />
          <Route path="/our-team" component={OurTeamPage} />
          <Route path="/contact-us" component={ContactUsPage} />
          <Route path="/history" component={HistoryPage} />
          <Route path="/social" component={SocialPage} />
          <Route path="/educational" component={EducationalPage} />
          <Route path="/publications" component={PublicationsPage} />
          <Route path="/culture-and-art" component={CultureAndArtPage} />
          <Route path="/donations" component={DonationsPage} />
          <Route path="/blog" render={rp => (
            <ArticlesList type="articles" title="Блоги"/>
          )}/>
          <Route path="/article/:type/:id" component={ArticlePage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/login" component={LoginPage} history={history} />
          <Route path="/registration" component={RegistrationPage} history={history} />
        </Router>
      </Row>
    </div>
  );
}

export default App;
