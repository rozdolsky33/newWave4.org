import React, { Suspense } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import {actionCreators} from "../store/Main-actions";
import logo from "../assets/NW_logo_sm.png";
import i18n from "../i18n";

class NavBarBlock extends React.Component {
  componentDidMount() {
    this.props.getMenuItems();
    this.props.getArticles(0, 5);
  }

  isNavItemActive(navItem) {
    if (!navItem.subItems) {
      return this.props.history.location.pathname === navItem.link;
    }
    let result = false;
    navItem.subItems.forEach(subItem => {
      if (this.props.history.location.pathname === subItem.link) {
        result = true;
      }
    });
    return result;
  }

  render() {
    return (
      <Navbar expand="sm" sticky="top" bg="light" variant="light" className="d-flex">
        <Navbar.Brand className="order-1">
          <a href="/">
            <img src={logo} style={{width:80, marginTop: -7}} alt=""/>
          </a>
          <span onClick={() => i18n.changeLanguage( i18n.language === "en" ? "ua" : "en")}>
            <img src={`../assets/imgs/${i18n.language === "en" ? "ua" : "en"}.png`} style={{width:30}} alt=""/>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle className="order-3 order-sm-2" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end order-3 order-sm-2">
          <Nav>
            {this.props.menuItems.map((menuItem, key) => {
              if (!!menuItem.subItems) {
                return (<NavDropdown title={i18n.t(menuItem.description)} key={key} className={ this.isNavItemActive(menuItem) ? "active" : ""}>
                  {menuItem.subItems.map((item, key) => {
                    return (<NavDropdown.Item key={key} href={item.link}>{i18n.t(item.description)}</NavDropdown.Item>);
                  })}
                </NavDropdown>);
              }
              return (<Nav.Link key={key} href={menuItem.link} className={ this.isNavItemActive(menuItem) ? "active" : ""}>
                {i18n.t(menuItem.description)}
              </Nav.Link>);
            })}
          </Nav>
        </Navbar.Collapse>
        <div className="order-2 order-sm-3">
          <Button href="/donations" className="ml-4">{i18n.t("menu.donate")}</Button>
        </div>
      </Navbar>
    );
  }
}
export default connect(
  state => state.mainReducer,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(withTranslation()(NavBarBlock));
