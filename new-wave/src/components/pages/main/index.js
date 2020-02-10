import React from "react";
import {Col, Row} from "react-bootstrap";
import CarouselPhotos from "./carousel-photos";
import "./main.scss";

export default function MainPage() {
  return (
    <div>
      <div id="main" className="d-flex align-items-end">
        <div className="main-page-cover">
          <CarouselPhotos/>
        </div>
      </div>
      <Row className="mt-5 mb-3 pb-3">
        <Col md="4" className="text-center d-flex flex-column justify-content-center align-items-center">
          <img
            src="../assets/NW_logo_sm_2.jpg"
            height="130"
            alt="About Us"
          />
          <h3 className="p-5 text-primary">
            Нова Хвиля
          </h3>
        </Col>
        <Col md="8">
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
    </div>
  );
}
