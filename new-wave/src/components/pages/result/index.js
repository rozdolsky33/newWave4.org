import React from "react";
import {Col} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../../store/Main-actions";
import errorImg from "../../../assets/NW_error.png";
import successImg from "../../../assets/NW_success.png";

class ResultPage extends React.Component {
  componentDidMount() {
    if (this.props.match.params.token) {
      this.props.checkToken(this.props.match.params.token);
    }
  }
  render() {
    return (
      <Col className="text-center pt-5" xs md={{ span: 8, offset: 2 }}>
        {this.props.errorMessage ?
          <>
            <img src={errorImg} style={{width:80}} alt=""/>
            <h2 className="p-3">Сталася помилка</h2>
            <p>{this.props.errorMessage}</p>
          </> :
          <>
            <img src={successImg} style={{width:80}} alt=""/>
            <h2 className="p-3">Успіх</h2>
            <p>{this.props.successMessage}</p>
          </>}
      </Col>
    );
  }
}
export default connect(
  state => state.mainReducer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(ResultPage);
