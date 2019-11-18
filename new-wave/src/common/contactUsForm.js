import React from 'react';
import {InputGroup, FormControl, Form, Button} from 'react-bootstrap';

export default function ContactUsForm() {
  return (
    <div>
      <div className="text-center pt-3">
        <h3>Зв'яжіться з нами</h3>
        <p>Відправте нам листа з вашими контактами і ми зв'яжемося з Вами якнайшвидше :)</p>
      </div>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="contact-us-name">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Ім'я"
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
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
