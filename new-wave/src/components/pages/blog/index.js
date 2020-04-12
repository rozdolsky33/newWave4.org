import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {Button, Card, Col, Row} from "react-bootstrap";
import {actionCreators} from "../../../store/Main-actions";
import {history} from "../../App";

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      pageSize: 5,
      step: 5
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (!this.endOfList || this.state.pageSize > this.props.articles.length) return false;
    const top = this.endOfList.getBoundingClientRect().top - 80;
    const isEndOfListVisible = top >= 0 && top <= window.innerHeight;
    if (isEndOfListVisible) {
      this.setState({currentPage: this.state.currentPage++});
      this.props.getArticles(this.state.currentPage++, this.state.pageSize);
    }
  }

  getYears() {
    const years = [];
    this.props.articles.forEach(article => {
      let year = article.date.slice(0, 4);
      if (years.indexOf(year) < 0) {
        years.push(year);
      }
    });
    return years;
  }

  getArticlesList() {
    return this.props.articles.map((item, key) => {
      return (
        <Card key={key} className="mb-2 d-flex flex-row justify-content-start text-left">
          {!!item.imageUri ?
            <Card.Img style={{width: "25%", objectFit: "cover"}}
                      src={this.props.host + "/v2/api/image/" + item.imageUri} /> :
            <div className="bg-secondary w-25"/>
          }
          <Card.Body className="justify-content-between flex-column d-flex w-75">
            <Card.Title>{item.title}</Card.Title>
            <div className="d-flex justify-content-between pb-3">
              <span className="text-secondary small">{new Date(item.date).toDateString()}</span>
              <Button className="text-secondary" variant="link" size="sm"
                      onClick={() => {history.push("blog")}}>
                {item.author}
              </Button>
            </div>
            <Card.Text>{item.preview}</Card.Text>
            <div className="text-right">
              <Card.Link href={`/item/blog/${item.id}`}>Читати далі</Card.Link>
            </div>
          </Card.Body>
        </Card>
      );
    });
  };

  render () {
    return (
      <Col className="text-center">
        <h2 className="p-3 text-primary">Блог</h2>
        <Row>
          <Col className="text-center" xs="12" md="2">
            {this.getYears().map(year => <p key={year}>&#9675; {year}</p>)}
          </Col>
          <Col className="text-center" xs="12" md="8">
            <div className="pl-3 justify-content-center">
              {this.getArticlesList()}
              <div ref={el => {this.endOfList = el;}}></div>
            </div>
          </Col>
        </Row>
      </Col>
    );
  }
}
export default connect(
  state => state.mainReducer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(BlogPage);