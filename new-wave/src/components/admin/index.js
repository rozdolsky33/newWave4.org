import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table, Button, Col, Tab, Tabs} from 'react-bootstrap';
import AddEditModal from './addEditModal';
import PaginationPanel from '../common/pagination-panel';
import { actionCreators } from '../../store/Main';

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'articles',
      addEditModalShown: false,
      currentPage: 0,
      pageSize: 10
    };
    this.hideModal.bind(this);
  }

  componentWillMount() {
    this.props.getArticles(this.state.currentPage, this.state.pageSize);
  }

  hideModal () {
    this.setState({addEditModalShown: false});
  }

  render() {
    return (
      <Col className='text-center' xs md={{ span: 8, offset: 2 }}>
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
                      <td>{article.title}</td>
                      <td>{article.author}</td>
                      <td>{article.createdAt}</td>
                      <td><i onClick={() => this.deleteArticle(article.id)}>X</i></td>
                    </tr>
                  )
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
        <PaginationPanel {...this.props.paginationConfig}
                         currentPage={this.state.currentPage}
                         pageSize={this.state.pageSize}/>
        <Button variant='primary' size='lg' className='fixed-bottom m-3' onClick={() => {this.setState({addEditModalShown: true})}}>
          +
        </Button>
        <AddEditModal shown={this.state.addEditModalShown} hideModal={() => this.hideModal()}/>
      </Col>
    );
  }
}

export default connect(
  state => state.mainReducer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(AdminPage);
