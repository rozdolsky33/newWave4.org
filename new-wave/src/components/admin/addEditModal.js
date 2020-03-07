import React from "react";
import {Modal, Button, Form, Col, Row, Alert} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DatePicker from "react-datepicker";
import { actionCreators } from "../../store/Main";
import "react-datepicker/dist/react-datepicker.css";

class AddEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.changeDate = this.changeDate.bind(this);
  }

  changeDate(date) {
    this.setState({ startDate: date });
  }
  
  submitArticle(event) {
    event.preventDefault();
    const params = {
      title: this.refs.title.value,
      author: this.refs.author.value,
      category: this.refs.category.value,
      preview: this.refs.preview.value,
      content: this.refs.content.value,
      createdAt: this.state.startDate
    };
    this.props.addArticle(params);
  }
  render() {
    return (
      <Modal show={this.props.addEditModalShown} onHide={() => this.props.toggleAddEditArticleModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.editMode ? "Edit article" : "Add article"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => this.submitArticle(e)}>
          <Modal.Body>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Article title" ref="title" />
            </Form.Group>
            <Form.Group as={Row} controlId="author">
              <Form.Label column sm="2">Author</Form.Label>
              <Col sm="10">
                <Form.Control as="select" ref="author">
                  <option>Myroslava Rozdolska</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="category">
              <Form.Label column sm="2">Category</Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Article category" ref="category" />
              </Col>
            </Form.Group>
            <Form.Group controlId="createdAt">
              <Form.Label className="pr-3">Created at</Form.Label>
              <DatePicker className="form-control"
                          selected={this.state.startDate}
                          onChange={this.changeDate} />
            </Form.Group>
            <Form.Group controlId="preview">
              <Form.Label>Preview</Form.Label>
              <Form.Control as="textarea" rows="2" ref="preview" />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Article</Form.Label>
              <Form.Control as="textarea" rows="5" ref="content" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.props.toggleAddEditArticleModal(false)}>Close</Button>
            <Button variant="primary" type="submit">Submit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}
export default connect(
  state => state.mainReducer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(AddEditModal);
