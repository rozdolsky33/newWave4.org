import React from "react";
import {Navbar, Nav, NavDropdown, Button} from "react-bootstrap";
import logo from "../assets/NW_logo_sm.png";

export default class NavBarBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          description: "Головна",
          link: "/"
        },
        {
          description: "Проекти",
          subItems: [
            {
              description: "Освітні",
              link: "/educational"
            },
            {
              description: "Культура і Мистецтво",
              link: "/culture-and-art"
            },
            {
              description: "Соціально-суспільні",
              link: "/social"
            },
            {
              description: "Публікації",
              link: "/publications"
            }
          ]
        },
        {
          description: "Про нас",
          subItems: [
            {
              description: "Рада",
              link: "/our-team"
            },
            {
              description: "Історія створення",
              link: "/history"
            },
            {
              description: "Звіти",
              link: "/reports"
            },
            {
              description: "Контакти",
              link: "/contact-us"
            }
          ]
        },
        {
          description: "Блоги",
          link: "/blog"
        }
      ]
    };
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
      <Navbar expand="sm" sticky="top" bg="light" variant="light">
        <Navbar.Brand>
          <a href="/#">
            <img src={logo} style={{width:80, marginTop: -7}} alt=""/>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {this.state.menuItems.map((menuItem, key) => {
              if (!!menuItem.subItems) {
                return (<NavDropdown title={menuItem.description} key={key} className={ this.isNavItemActive(menuItem) ? "active" : ""}>
                  {menuItem.subItems.map((item, key) => {
                    return (<NavDropdown.Item key={key} href={item.link}>{item.description}</NavDropdown.Item>);
                  })}
                </NavDropdown>);
              }
              return (<Nav.Link key={key} href={menuItem.link} className={ this.isNavItemActive(menuItem) ? "active" : ""}>
                {menuItem.description}
              </Nav.Link>);
            })}
          </Nav>
        </Navbar.Collapse>
        <Button href="/donations" className="ml-4">Donate</Button>
      </Navbar>
    );
  }
}
