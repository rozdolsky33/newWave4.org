import React from "react";
import ArticleCard from "./article-card"
import events from "../../../data/events";
import articles from "../../../data/articles";
import "./articles-timeline.scss";
import {Row} from "react-bootstrap";

export default class ArticlesTimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0, type: "", article: {} };
  }

  getArticlesList() {
    let articleDate = "";
    return articles.map((article, key) => {
      if (article !== article.date) {
        articleDate = article.date;
        return (
          <div key={key}>
            <div className="pt-3 pb-1" >
              <span className="article-date-point"></span>
              <span className="text-secondary small">{article.date}</span>
            </div>
            <ArticleCard {...article} />
          </div>);
      } else {
        return <ArticleCard key={key} {...article} />;
      }
    });
  };

  render() {
    return (
      <>
        <div className="text-center">
          <h2 className="p-3 text-primary">Наша історія</h2>
        </div>
        <div className="articles-container border-left pl-3">
          {this.getArticlesList()}
        </div>
      </>
    );
  }
}
