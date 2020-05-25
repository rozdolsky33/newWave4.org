import React from "react";
import {Modal, Button, Form, Col, Row} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DatePicker from "react-datepicker";
import { actionCreators } from "../../store/main/Main-actions";
import "react-datepicker/dist/react-datepicker.css";
import { withTranslation } from "react-i18next";
import i18n from "../../i18n";
import CKEditor from "ckeditor4-react";

class AddEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.editMode ? {
      ...props.selectedItem,
      date: new Date(props.selectedItem.date)
    } : {
      date: new Date(),
      title: "",
      author: "Myroslava Rozdolska",
      category: "",
      preview: "",
      content: "",
      imageUri: "",
    };
    this.changeValue = this.changeValue.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  changeValue(event) {
    let fieldName = event.target ? event.target.name : "content";
    let fieldValue = event.target ? event.target.value : event.editor.getData();
    this.setState({ [fieldName]: fieldValue });
  }
  changeDate(newDate) {
    this.setState({date: newDate });
  }
  uploadFile(e) {
   this.setState({imageUri: e.target.files[0].name});
   this.props.uploadImage(e.target.files[0]);
  }
  
  async submit(event) {
    event.preventDefault();
    await this.props.addEditItem(this.props.activeItems, this.state, this.props.editMode);
    this.props.getItemsList(this.props.activeItems, 0, this.props.paginationConfig.size);
  }
  render() {
    return (
      <Modal size="lg" show={this.props.addEditModalShown} onHide={() => this.props.toggleAddEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.editMode ? i18n.t("admin.edit") : i18n.t("admin.add")}
            {this.props.activeItems === "blog" ? i18n.t("admin.article") : i18n.t("admin.project")}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => this.submit(e)}>
          <Modal.Body>
            <Form.Group as={Row} controlId="title">
              <Form.Label column sm="2">{i18n.t("admin.title")}</Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={i18n.t("admin.title")}
                              value={this.state.title}
                              name="title" onChange={this.changeValue} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="author">
              <Form.Label column sm="2">{i18n.t("admin.author")}</Form.Label>
              <Col sm="10">
                <Form.Control as="select" value={this.state.author}
                              name="author" onChange={this.changeValue}>
                  <option>Myroslava Rozdolska</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="pic">
              <Form.Label column sm="2">{i18n.t("admin.picture")}</Form.Label>
              <Col sm="10">
                <div className="custom-file">
                  <input type="file" multiple={false}
                         className="custom-file-input"
                         id="pictureInput"
                         onChange={this.uploadFile}/>
                  <label className="custom-file-label" htmlFor="pictureInput">
                    {this.state.imageUri || "Choose file"}
                  </label>
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="category">
              <Form.Label column sm="2">{i18n.t("admin.category")}</Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={i18n.t("admin.category")} value={this.state.category}
                              name="category" onChange={this.changeValue} />
              </Col>
            </Form.Group>
            <Form.Group  as={Row} controlId="date">
              <Form.Label column sm="2">{i18n.t("admin.date")}</Form.Label>
              <Col sm="10">
                <DatePicker className="form-control"
                            selected={this.state.date}
                            onChange={this.changeDate} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="preview">
              <Form.Label column sm="2">{i18n.t("admin.preview")}</Form.Label>
              <Col sm="10">
                <Form.Control as="textarea" rows="2" value={this.state.preview}
                              name="preview" onChange={this.changeValue} />
              </Col>
            </Form.Group>
            <label>{i18n.t("admin.content")}</label>
            <CKEditor data={this.state.content} type="classic" onChange={this.changeValue}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => this.props.toggleAddEditModal(false)}>{i18n.t("common.btn-close")}</Button>
            <Button variant="success" type="submit">{i18n.t("common.btn-submit")}</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}
export default connect(
  state => state.mainReducer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(withTranslation()(AddEditModal));
