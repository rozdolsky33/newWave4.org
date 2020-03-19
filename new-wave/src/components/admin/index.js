import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {Table, Button, Col, Tab, Tabs, Alert} from "react-bootstrap";
import AddEditModal from "./addEditModal";
import PaginationPanel from "../common/pagination-panel";
import { actionCreators } from "../../store/Main";
import Row from "react-bootstrap/Row";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
    this.selectPage = this.selectPage.bind(this);
    this.changeActiveTab = this.changeActiveTab.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  selectPage(pageNumber) {
    this.setState({currentPage: pageNumber});
    this.props.getItemsList(this.props.activeItems, pageNumber, this.props.paginationConfig.size);
  }

  changeActiveTab(newTab) {
    this.props.changeActiveItems(newTab);
    this.props.getItemsList(newTab, this.state.currentPage, this.props.paginationConfig.size);
  }

  async deleteItem(item) {
    await this.props.deleteItem(this.props.activeItems, item.id);
    this.props.getItemsList(this.props.activeItems, this.state.currentPage, this.props.paginationConfig.size);
  }

  componentWillMount() {
    this.props.getItemsList(this.props.activeItems, this.state.currentPage, this.props.paginationConfig.size);
  }

  render() {
    return (
      <Col className="text-center" xs md={{ span: 10, offset: 1 }}>
        {!!this.props.errorMessage && (
          <Alert variant="danger" className="mt-3">
            {this.props.errorMessage}
          </Alert>
        )}
        <div className="pt-3 d-flex justify-content-end">
          <PaginationPanel {...this.props.paginationConfig}
                           selectPage={this.selectPage}
                           currentPage={this.state.currentPage}
                           pageSize={this.props.paginationConfig.size}/>
        </div>
        <Tabs id="admin-content" activeKey={this.props.activeItems} onSelect={this.changeActiveTab}>
          <Tab eventKey="blog" title="Articles">
            <Table striped bordered hover>
              <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
                <th>X</th>
              </tr>
              </thead>
              <tbody>
              {
                this.props.items.map((item) => {
                  return (
                    <tr key={item.id} onClick={() => {this.props.toggleAddEditModal(true, true)}}>
                      <td>{item.id}</td>
                      <td className="text-left">{item.title}</td>
                      <td>{item.author}</td>
                      <td>{item.date}</td>
                      <td>
                        <Button variant="danger" size="sm" onClick={() => this.deleteItem(item)}>
                        X</Button>
                      </td>
                    </tr>);
                })
              }
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="project" title="Projects">
            <Table striped bordered hover>
              <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
                <th>X</th>
              </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </Tab>
        </Tabs>
        <Button variant="primary" size="lg" className="fixed-bottom m-3"
                onClick={() => {this.props.toggleAddEditModal(true)}}>
          +
        </Button>
        <AddEditModal />
      </Col>
    );
  }
}

export default connect(
  state => state.mainReducer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(AdminPage);
