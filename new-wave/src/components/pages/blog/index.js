import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {Button, Card, Col, Row, Alert} from "react-bootstrap";
import {actionCreators} from "../../../store/Main-actions";

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      pageSize: 5,
      step: 5,
      filters: []
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll, true);
    this.props.getBlogDates();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (!this.endOfList || this.state.pageSize > this.props.articles.length) return false;
    const top = this.endOfList.getBoundingClientRect().top - 80;
    const isEndOfListVisible = top >= 0 && top <= window.innerHeight;
    const newPage = this.state.currentPage + 1;
    if (isEndOfListVisible && this.props.paginationConfig.totalPages > newPage) {
      this.setState({currentPage: newPage});
      this.props.getArticles(newPage, this.state.pageSize);
    }
  }

  toggleFilter(togFilter, turnOn) {
    if (!turnOn) {
      this.setState({filters: this.state.filters.filter(f => f !== togFilter)});
    } else {
      this.setState({
        filters: [...this.state.filters.filter(f => f.entityName !== togFilter.entityName), togFilter]
      });
    }
  }

  getDates() {
    let currentYear = 0;
    let currentMonth = "";
    return this.props.blogDates.map((date, key) => {
      let result = (
        <div key={key}>
          {currentYear !== date.year && <p className="m-0">&#9675; {date.year}</p>}
          {currentMonth !== date.month && <p className="m-0 pl-2">
            <Button className="text-secondary" variant="link" size="sm"
                    onClick={() => this.toggleFilter({entityName: "date", value: `${date.month} ${date.year}`}, true)}>
              {date.month}
            </Button>
          </p>}
      </div>);
      currentYear = date.year;
      currentMonth = date.month;
      return result;
    });
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
                      onClick={() => this.toggleFilter({entityName: "author", value: item.author}, true)}>
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
          <Col className="text-left" xs="12" md="2">
            {this.getDates()}
          </Col>
          <Col className="text-center" xs="12" md="8">
            <Row>
              {this.state.filters.map((filter, key) => {
                return (<Alert key={key} variant="secondary" className="m-3 pt-1 pb-1">
                  {filter.value}
                  <Alert.Link className="ml-4" onClick={() => this.toggleFilter(filter)}>X</Alert.Link>
                </Alert>);
              })}
            </Row>
            {this.getArticlesList()}
            <div ref={el => {this.endOfList = el;}}></div>
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