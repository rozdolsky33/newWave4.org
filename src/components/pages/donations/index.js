import React from "react";
import {Alert, Button, Col, Form, FormControl, InputGroup} from "react-bootstrap";
import i18n from "../../../i18n";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../../store/main/Main-actions";
import {history} from "../../App";

class DonationsPage extends React.Component {
  render () {
    return (
        <Col className="text-center" xs md={{ span: 8, offset: 2 }}>
          <h2 className="p-3 text-secondary">{i18n.t("donation.title")}</h2>
          <p className="text-center">{i18n.t("donation.sub-title-1")}<br/>
            {i18n.t("donation.sub-title-2")}</p>
          <Form onSubmit={async(e) => {
            e.preventDefault();
            await this.props.donate(this.refs.fullName.value, this.refs.email.value, this.refs.amount.value,
                this.refs.cardNumber.value.replace(/\s+/g, ""), this.refs.expMonth.value, this.refs.expYear.value, this.refs.cvc.value);
            if (!this.props.errorMessage) {
              history.push("/result");
            }
          }}>
            <InputGroup className="mb-3">
              <Form.Check
                  checked={true}
                  name="donate-by"
                  inline
                  label={i18n.t("donation.donate-by") + "Credit Card"}
                  type="radio"
                  id="donate-credit-card"
              />
              <Form.Check
                  name="donate-by"
                  inline
                  disabled
                  label={i18n.t("donation.donate-by") + "PayPal"}
                  type="radio"
                  id="donate-pay-pal"
              />
              <Form.Check
                  name="donate-by"
                  inline
                  disabled
                  label={i18n.t("donation.donate-by") + i18n.t("donation.check")}
                  type="radio"
                  id="donate-check"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="contact-us-name">&nbsp;&#9829;</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl required ref="fullName"
                           placeholder={i18n.t("donation.name")}
                           aria-label="Name"
                           aria-describedby="contact-us-name"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="contact-us-email">@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl required ref="email"
                           placeholder={i18n.t("donation.email")}
                           aria-label="Email"
                           aria-describedby="contact-us-email"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="contact-us-amount">&nbsp;$&nbsp;</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl required ref="amount" type="number"
                           placeholder={i18n.t("donation.amount")}
                           aria-label="Amount"
                           aria-describedby="contact-us-amount"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl required ref="cardNumber"
                           onChange={(e) => {
                             const normalizedVal = e.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
                             let newVal = "";
                             for (let i = 0; i < Math.ceil(normalizedVal.length / 4); i++){
                               newVal += normalizedVal.slice(i * 4, (i + 1) * 4) +
                                   ((normalizedVal.length <= (i + 1) * 4) ? "" : " ");
                             }
                             e.target.value = newVal;
                           }}
                           placeholder={i18n.t("donation.card-number")}
                           aria-label="Card number"
                           aria-describedby="card-number"/>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl required ref="expMonth" type="number"
                           placeholder={i18n.t("donation.valid-till-month")}
                           aria-label="Valid month"
                           aria-describedby="valid-month"/>
              <FormControl required ref="expYear" type="number"
                           placeholder={i18n.t("donation.valid-till-year")}
                           aria-label="Valid year"
                           aria-describedby="valid-year"/>
              <FormControl required ref="cvc" type="number"
                           placeholder={i18n.t("donation.cvc")}
                           aria-label="CVC code"
                           aria-describedby="cvc-code"/>
            </InputGroup>
            {!!this.props.errorMessage && (<Alert variant="danger" className="mt-3">{i18n.t(this.props.errorMessage)}</Alert>)}
            <Form.Group className="p-3">
              <Button variant="secondary" type="submit">{i18n.t("donation.btn-donate")}</Button>
            </Form.Group>
          </Form>
        </Col>
    );
  }
}

export default connect(
  state => state.mainReducer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(withTranslation()(DonationsPage));