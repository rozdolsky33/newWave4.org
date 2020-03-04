import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Col } from 'react-bootstrap';
import {actionCreators} from '../../../store/Main';

class BlogPage extends React.Component {
  componentWillMount() {
    this.props.getArticles();
  }

  getArticlesList() {
    return this.props.articles.map((article, key) => {
      return (
        <Card key={key} className='mb-2 d-flex flex-row justify-content-start p-3'>
          <Card.Img style={{maxWidth: '30%', objectFit: 'contain'}} src={article.pic || './assets/NW_article_pic.png'} />
          <Card.Body className='justify-content-between flex-column d-flex'>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.shortDescription}</Card.Text>
            <div className='d-flex justify-content-between pb-3'>
              <span className='text-secondary small'>{article.date}</span>
              <span className='text-secondary small'>{article.author}</span>
            </div>
            <div className='text-right'>
              <Card.Link href={`/article/${this.props.type}/${article.id}`}>Читати далі</Card.Link>
            </div>
          </Card.Body>
        </Card>
      );
    });
  };

  render () {
    return (
      <Col className='text-center' xs md={{ span: 8, offset: 2 }}>
        <h2 className='p-3 text-primary'>Блог</h2>
        <div className='pl-3 justify-content-center'>
          {this.getArticlesList()}
        </div>
      </Col>
    );
  }
}
export default connect(
  state => state.mainReducer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(BlogPage);