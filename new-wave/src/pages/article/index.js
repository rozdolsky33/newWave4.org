import React from 'react';
import events from '../../data/events';

export default class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0, type: "", article: {} };
  }

  async componentDidMount() {
    this.setState({id: this.props.match.params.id});
    this.setState({type: this.props.match.params.type});
    this.setState({article: events.find((article) => {return article.id === this.props.match.params.id})});
  }
  render() {
    return (
      <div className="text-center">
        <h2 className="p-3 text-primary">{this.state.article.title}</h2>
        <p className="pt-5">{this.state.article.longDescription}</p>
        <div className="d-flex justify-content-between pt-5">
          <span className="text-secondary">{this.state.article.author}</span>
          <span className="text-secondary">{this.state.article.date}</span>
        </div>
      </div>
    );
  }
}
