import React from "react";
import {Col, Row, Card} from "react-bootstrap";
import CarouselPhotos from "./carousel-photos";
import "./main.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../../store/Main-actions";

function MainPage(props) {
  const getRecentProjects = () => {
    const recentProjects = [];
    for (let i = 0; i < Math.min(3, props.projects.length); i++) {
      recentProjects.push(getCard(props.projects[i]));
    }
    return recentProjects;
  };
  const getRecentArticles = () => {
    const recentArticles = [];
    for (let i = 0; i < Math.min(3, props.articles.length); i++) {
      recentArticles.push(getCard(props.articles[i]));
    }
    return recentArticles;
  };
  const getCard = (item) => {
    return (
      <Card href={`/item/blog/${item.id}`}>
        {!!item.imageUri ?
          <Card.Img style={{height: "70px", objectFit: "cover"}}
                    src={props.host + "/v2/api/image/" + item.imageUri} /> :
          <div className="bg-secondary" style={{height: "50px"}}/>
        }
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text className="overflow-hidden" style={{height: "70px"}}>{item.preview}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Col>
      <div className="main-page-cover">
        <CarouselPhotos/>
      </div>
      <Row className="main-description-block pb-3 pt-3 bg-white position-relative">
        <Col xs md={{ span: 2, offset: 2 }} className="text-center d-flex flex-column justify-content-center align-items-center">
          <img
            src="../assets/NW_logo_sm_2.jpg"
            height="130"
            alt="About Us"
          />
          <h3 className="p-5 text-primary">
            Нова Хвиля
          </h3>
        </Col>
        <Col xs md="6">
          <p>
            Всеамериканська громадська Організація «Нова Українська Хвиля» - національно-патріотична і
            освітньо-культурна
            громадська організація, створена на основі спільності інтересів насамперед вихідців з України останньої
            еміґраційної четвертої хвилі.
          </p>
          <p>
            Організація сприяє відродженню духу національної єдності, збереженню українських звичаїв і традицій,
            утвердженню української національної ідеї, захисту політичних, культурних та історичних здобутків
            українського народу.
          </p>
        </Col>
      </Row>
      <Row className="position-relative">
        <div className="main-recent-block bg-secondary position-absolute h-100 w-100"></div>
        <Col xs md={{ span: 4, offset: 2 }} className="">
          <h4 className="p-3 text-primary text-center">Нові проекти</h4>
          <div className="bg-white p-1">{getRecentProjects()}</div>
        </Col>
        <Col xs md="4" className="">
          <h4 className="p-3 text-primary text-center text-nowrap">Статті з наших блогів</h4>
          <div className="bg-white p-1">{getRecentArticles()}</div>
        </Col>
      </Row>
    </Col>
  );
}
export default connect(
  state => state.mainReducer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(MainPage);
