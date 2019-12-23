import React from "react";
import {Row, Col} from "react-bootstrap";
import {BrowserRouter as Router , Route} from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <NavBarBlock />
      <Row className="m-0">
        <Col xs md={{ span: 8, offset: 2 }}>
          <Router>
            <Route path="/" exact={true} component={MainPage} />
            <Route path="/reports" component={ReportsPage} />
            <Route path="/history" component={HistoryPage}/>
            <Route path="/social" component={SocialPage} />
            <Route path="/educational" component={EducationalPage} />
            <Route path="/publications" component={PublicationsPage} />
            <Route path="/culture-and-art" component={CultureAndArtPage} />
            <Route path="/donations" component={DonationsPage} />
            <Route path="/blog" render={rp => (
              <ArticlesList type="articles" title="Блоги"/>
            )}/>
            <Route path="/archive" render={rp => (
              <ArticlesList type="archive" title="Архів"/>
            )}/>
            <Route path="/article/:type/:id" component={ArticlePage} />
          </Router>
        </Col>
      </Row>
    </div>
  );
}

export default App;
