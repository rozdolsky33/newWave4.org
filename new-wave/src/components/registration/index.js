import React from "react";
import {Button, Alert, Form, Col} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../store/Main";

class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined
    }
  }
  register(event) {
    event.preventDefault();
    this.props.register(this.refs.email.value, this.refs.firstName.value, this.refs.lastName.value, this.refs.password.value);
  }

  render() {
    return (
      <Col className="text-center" xs md={{ span: 8, offset: 2 }}>
        <h2 className="p-3 text-primary">Registration</h2>
        <Form onSubmit={(e) => this.register(e)} className="text-left">
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" ref="email" />
          </Form.Group>
          <Form.Group controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="First name" ref="firstName" />
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Last name" ref="lastName" />
          </Form.Group>
          <Form.Group controlId="pass">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref="password" />
          </Form.Group>
          <Button type="submit" className="mb-1 w-100">Register</Button>
        </Form>
        {!!this.state.errorMessage && (
          <Alert variant="danger" className="mt-3">
            {this.state.errorMessage}
          </Alert>
        )}
      </Col>
    );
  }
}
export default connect(
  state => state.mainReducer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(RegistrationPage);
