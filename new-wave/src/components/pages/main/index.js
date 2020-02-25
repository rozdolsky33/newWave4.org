import React from "react";
import {Col, Row} from "react-bootstrap";
import CarouselPhotos from "./carousel-photos";
import "./main.scss";

export default function MainPage() {
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
      <Row className="main-recent-block bg-dark position-relative">
        <Col xs md={{ span: 4, offset: 2 }} className="">
          <h2 className="p-3 text-primary text-center">Нові проекти</h2>
          <div className="bg-white p-5"><span>тут буде перелік нових проектів</span></div>
        </Col>
        <Col xs md="4" className="">
          <h2 className="p-3 text-primary text-center">Статті з наших блогів</h2>
          <div className="bg-white p-5"><span>тут буде перелік останніх статтей</span></div>
        </Col>
      </Row>
    </Col>
  );
}
