import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Button, Col, Tab, Tabs} from 'react-bootstrap';
import AddEditModal from './addEditModal';
import PaginationPanel from '../common/pagination-panel';
import { actionCreators } from '../../store/Main';
import Row from "react-bootstrap/Row";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'articles',
      currentPage: 0,
      pageSize: 10
    };
    this.selectPage = this.selectPage.bind(this);
  }

  selectPage(pageNumber) {
    this.setState({currentPage: pageNumber});
    this.props.getArticles(pageNumber, this.state.pageSize);
  }

  componentWillMount() {
    this.props.getArticles(this.state.currentPage, this.state.pageSize);
  }

  render() {
    return (
      <Col className='text-center' xs md={{ span: 10, offset: 1 }}>
        <div className="pt-3 d-flex justify-content-end">
          <PaginationPanel {...this.props.paginationConfig}
                           selectPage={this.selectPage}
                           currentPage={this.state.currentPage}
                           pageSize={this.state.pageSize}/>
        </div>
        <Tabs id="admin-content" activeKey={this.state.activeTab} onSelect={k => this.setState({activeTab: k})}>
          <Tab eventKey="articles" title="Articles">
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
                this.props.articles.map((article) => {
                  return (
                    <tr key={article.id}>
                      <td>{article.id}</td>
                      <td className="text-left">{article.title}</td>
                      <td>{article.author}</td>
                      <td>{article.createdAt}</td>
                      <td>
                        <Button variant="danger" size="sm" onClick={() => this.props.deleteArticle(article.id)}>
                        X</Button>
                      </td>
                    </tr>);
                })
              }
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="events" title="Events">
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
        <Button variant='primary' size='lg' className='fixed-bottom m-3' onClick={() => {this.props.toggleAddEditArticleModal(true)}}>
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
