import React from "react";
import archive from "../../../data/archive";
import articles from "../../../data/articles";

export default class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { article: {} , articles: {archive, articles} };
  }
  async componentDidMount() {
    let articlesList = this.state.articles[this.props.match.params.type] || [];
    this.setState({article: articlesList.find((article) => {
      return article.id === this.props.match.params.id;
    })
    });
  }
  render() {
    return (
      <div className="text-center">
        <h2 className="p-3 text-primary">{this.state.article.title}</h2>
        <p className="pt-5">{this.state.article.longDescription}</p>
        <div className="d-flex justify-content-between pt-5">
          <span className="text-secondary">{this.state.article.date}</span>
          <span className="text-secondary">{this.state.article.author}</span>
        </div>
      </div>
    );
  }
}
