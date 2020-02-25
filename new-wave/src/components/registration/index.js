import React from "react";
import {Button, Alert, Form} from "react-bootstrap";
import { useHistory } from 'react-router-dom';

export default class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined
    }
  }
  register(event) {
    event.preventDefault();
    let url = "http://162.212.158.14:8080/v1/api/users";
    let params = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "GET",
        "Access-Control-Request-Headers": "Content-Type",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": this.refs.email.value,
        "firstName": this.refs.firstName.value,
        "lastName": this.refs.lastName.value,
        "password": this.refs.password.value
      })
    };
    fetch(url, params)
      .then(res => {
        console.log(res);
        if (!res.ok) {
          throw {message: `Some error occurred while login, errorcode - ${res.status}`}
        } else {
          this.props.history.push("/login");
        }
      })
      .catch(err => {
        if (!!err && !!err.message) {
          this.setState({errorMessage: err.message});
        } else {
          this.setState({errorMessage: "Some error occurred while login"})
        }
      });
  }

  render() {
    return (
      <div className="text-center">
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
      </div>
    );
  }
}
