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
import ArchivePage from "./pages/archive";
import BlogPage from "./pages/blog";
import ArticlePage from "./pages/article";
import ArticlesTimeLine from "./common/articles-timeline";

function App() {
  return (
    <div className="App">
      <NavBarBlock />
      <Row className="m-0">
        <Col xs md={{ span: 8, offset: 2 }}>
          <Router>
            <Route path="/" exact={true} component={MainPage} />
            <Route path="/reports" component={ReportsPage} />
            <Route path="/history" render={rp => (
              <ArticlesTimeLine articlesType="history" />
            )}/>
            <Route path="/social" component={SocialPage} />
            <Route path="/educational" component={EducationalPage} />
            <Route path="/publications" component={PublicationsPage} />
            <Route path="/culture-and-art" component={CultureAndArtPage} />
            <Route path="/donations" component={DonationsPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/archive" component={ArchivePage} />
            <Route path="/article/:type/:id" component={ArticlePage} />
          </Router>
        </Col>
      </Row>
    </div>
  );
}

export default App;
