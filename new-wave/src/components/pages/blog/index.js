import React from "react";
import {Col} from "react-bootstrap";


export default function BlogPage() {
  return (
    <Col className="text-center" xs md={{ span: 8, offset: 2 }}>
      <h2 className="p-3 text-primary">Блог</h2>
      <p>Сторінка на стадії розробки</p>
    </Col>
  );
}
