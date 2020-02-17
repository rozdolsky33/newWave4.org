import React from "react";
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";


export default function DonationsPage() {
  return (
    <div className="text-center">
      <h2 className="p-3 text-primary">Пожертви</h2>
      <p className="text-center">Ukrainian New Wave is a 501(c)(3) organization.<br/>
        Donations and gifts are deductible to the full extent<br/>
        allowable under IRS regulations</p>
      <Form>
        <InputGroup className="mb-3">
          <Form.Check
            name="donate-by"
            inline
            label="Donate by Credit Card"
            type="radio"
            id="donate-credit-card"
          />
          <Form.Check
            name="donate-by"
            inline
            label="Donate by PayPal"
            type="radio"
            id="donate-pay-pal"
          />
          <Form.Check
            name="donate-by"
            inline
            disabled
            label="Donate by check"
            type="radio"
            id="donate-check"
          />
        </InputGroup>
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
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Номер картки"
            aria-label="Card number"
            aria-describedby="card-number"/>
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Дійсна до"
            aria-label="Valid date"
            aria-describedby="valid-date"/>
          <FormControl
            placeholder="CVC-код"
            aria-label="CVC code"
            aria-describedby="cvc-code"/>
        </InputGroup>
        <Form.Group className="p-3">
          <Button variant="primary" type="submit">
            Пожартвувати
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
