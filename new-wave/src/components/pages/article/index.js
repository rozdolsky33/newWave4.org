import React from "react";
import {Card, Col} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../../store/Main";

class ArticlePage extends React.Component {
  componentDidMount() {
    this.props.getArticle(this.props.match.params.id);
  }
  render() {
    return (
      <Col className="text-center" xs md={{ span: 8, offset: 2 }}>
        {!this.props.selectedArticle ||
          <>
            {!!this.props.selectedArticle.pic ?
              <img style={{width: "100%", objectFit: "contain"}} src={this.props.selectedArticle.pic} /> :
              <div className="bg-secondary w-100"><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>
            }
            <h2 className="p-3 text-primary">{this.props.selectedArticle.title}</h2>
            <div className="d-flex justify-content-between pt-5">
              <span className="text-secondary">{this.props.selectedArticle.date}</span>
              <span className="text-secondary">{this.props.selectedArticle.author}</span>
            </div>
            <p className="pt-5">{this.props.selectedArticle.content}</p>
          </>
          }
      </Col>
    );
  }
}
export default connect(
  state => state.mainReducer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(ArticlePage);
