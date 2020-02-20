import React from "react";
import {Modal, Button, Form} from "react-bootstrap";


export default class AddEditModal extends React.Component {
  constructor(props) {
    super(props);
  }

  sublitArticle() {
    let url = "http://ec2-3-94-118-242.compute-1.amazonaws.com:8080/v1/api/blog";
    let params = {
      method: "POST",
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "GET",
        "Access-Control-Request-Headers": "Content-Type",
        "Content-Type": "application/json"
      }
    };
    fetch(url, params).then(res => {});
  }
  render() {
    return (
      <Modal show={this.props.shown} onHide={this.props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add article</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="articleTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Article title" />
            </Form.Group>
            <Form.Group controlId="articleAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control as="select">
                <option>Myroslava Rozdolska</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="articlePreview">
              <Form.Label>Preview</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group controlId="articleFullText">
              <Form.Label>Article</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hideModal}>Close</Button>
          <Button variant="primary" type="submit">Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
