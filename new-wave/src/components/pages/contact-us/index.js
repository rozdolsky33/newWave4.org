import React from "react";
import ContactUsForm from "../../common/contact-us-form";
import {Col} from "react-bootstrap";


export default function ContactUsPage() {
  return (
    <Col className="text-center" xs md={{ span: 8, offset: 2 }}>
      <ContactUsForm/>
    </Col>
  );
}
