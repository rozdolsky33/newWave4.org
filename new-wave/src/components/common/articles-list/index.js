import React from "react";
import {Card} from "react-bootstrap";
import archive from "../../../data/archive";
import articles from "../../../data/articles";

export default class ArticlesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles, archive };
  }

  getArticlesList() {
    let articles = this.state[this.props.type] || [];
    return articles.map((article, key) => {
      return (
        <Card key={key} className="mb-2 d-flex flex-row justify-content-start p-3">
          <Card.Img style={{maxWidth: "30%", objectFit: "contain"}} src={article.pic || "./assets/NW_article_pic.png"} />
          <Card.Body className="justify-content-between flex-column d-flex">
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.shortDescription}</Card.Text>
            <div className="d-flex justify-content-between pb-3">
              <span className="text-secondary small">{article.date}</span>
              <span className="text-secondary small">{article.author}</span>
            </div>
            <div className="text-right">
              <Card.Link href={`/article/${this.props.type}/${article.id}`}>Читати далі</Card.Link>
            </div>
          </Card.Body>
        </Card>
      );
    });
  };

  render() {
    return (
      <>
        <div className="text-center">
          <h2 className="p-3 text-primary">{this.props.title}</h2>
        </div>
        <div className="pl-3 justify-content-center">
          {this.getArticlesList()}
        </div>
      </>
    );
  }
}
