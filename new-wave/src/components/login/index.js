import React from "react";
import {Button, Alert, Form} from "react-bootstrap";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: undefined
    }
  }
  login(event) {
    event.preventDefault();
    let url = "http://162.212.158.14:8080/v1/api/users/login";
    let headers = new Headers({
      "Access-Control-Request-Method": "POST",
      "Access-Control-Request-Headers": "Content-Type",
      "Content-Type": "application/json",
      //"Authorization": `Basic ${btoa('****')}`
    });
    let params = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        "email": this.refs.email.value,
        "password": this.refs.password.value
      })
    };

    fetch(url, params)
      .then(res => {
        console.log(res, res.headers.get("Authorization"));
        res.headers.forEach((header, key) => {
          console.log(key + ':' + header);
        });
        if (!res.ok) {
          throw {message: `Some error occurred while login, errorcode - ${res.status}`}
        } else {
          //this.props.history.push("/admin");
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
        <h2 className="p-3 text-primary">Login</h2>
        <Form onSubmit={(e) => this.login(e)} className="text-left">
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" ref="email" />
          </Form.Group>
          <Form.Group controlId="pass">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref="password" />
          </Form.Group>
          <Button type="submit" className="mb-1 w-100">Login</Button>
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
