import React from "react";
import {InputGroup, FormControl, Form, Button, Row, Col} from "react-bootstrap";

export default function ContactUsForm() {
  return (
    <div>
      <Row className="justify-content-center">
        <h3 className="p-3 text-primary">Контактна інформація</h3>
      </Row>
      <Row>
        <Col>
          <p>Контактувати з організаційним комітетом</p>
          <h5 className="pb-3">“Нової Української Хвилі”</h5>
          <p>Мирослава Роздольська  (347) 420-7678</p>
          <p>Лариса Заник (718) 509-7155</p>
          <a href="mailto:newwaveorg4@yahoo.com?subject=New%20Wave%204&body=">newwaveorg4@yahoo.com</a>
        </Col>
        <Col>
        <div className="text-center">
          <p>Відправте нам листа з Вашими контактами:</p>
        </div>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="contact-us-name">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Ім`я"
              aria-label="Name"
              aria-describedby="contact-us-name"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="contact-us-email">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Пошта"
              aria-label="Email"
              aria-describedby="contact-us-email"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="contact-us-message">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              as="textarea"
              aria-label="Message"
              aria-describedby="contact-us-message"/>
          </InputGroup>
          <Form.Group className="p-3">
            <Button variant="primary" type="submit">
              Відправити листа
            </Button>
          </Form.Group>
        </Form>
      </Col>
      </Row>
    </div>
  );
}
