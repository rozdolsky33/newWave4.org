import React from "react";
import {Table, Button, Col} from "react-bootstrap";
import AddEditModal from "./addEditModal";

export default class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      addEditModalShown: false
    };
    this.hideModal.bind(this);
  }

  hideModal () {
    this.setState({addEditModalShown: false});
  }
  componentDidMount() {
    let url = "http://162.212.158.14:8080/v2/api/blog?limit=2&page=0";
    let params = {
      method: "GET",
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "GET",
        "Access-Control-Request-Headers": "Content-Type",
        "Content-Type": "application/json"
      }
    };
    fetch(url, params)
      .then(response => response.json())
      .then(articles => {
        this.setState({ articles });
        console.log(articles);
      });
  }

  deleteArticle(id) {
    let url = `http://162.212.158.14:8080/v1/api/blog/${id}`;
    let params = {
      method: "DELETE",
      headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "GET",
        "Access-Control-Request-Headers": "Content-Type",
        "Content-Type": "application/json"
      }
    };
    fetch(url, params).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <Col className="text-center" xs md={{ span: 8, offset: 2 }}>
        <h2 className="p-3 text-primary">Articles</h2>
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
            this.state.articles.map((article) => {
              return (
                <tr>
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
        <Button variant="primary" size="lg" className="fixed-bottom m-3" onClick={() => {this.setState({addEditModalShown: true})}}>
          +
        </Button>
        <AddEditModal shown={this.state.addEditModalShown} hideModal={() => this.hideModal()}/>
      </Col>
    );
  }
}
