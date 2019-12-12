import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';

export default class FooterBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerContent: [
        {
          title: 'Про нас',
          collapsed: false,
          percentage: '2',
          items: [
            {
              text: 'Основна ідея',
              link: '/aboutUs'
            },
            {
              text: 'Осередки',
              link: '/locations'
            },
            {
              text: 'Блог',
              link: '/blog'
            }
          ]
        },
        {
          title: 'Програми',
          collapsed: false,
          percentage: '2',
          items: [
            {
              text: 'Навчальні програми',
              link: '/studying'
            },
            {
              text: 'У співпраці',
              link: '/cooperation'
            },
            {
              text: 'Культура - мистецтво',
              link: '/culture-and-art'
            }
          ]
        },
        {
          title: 'Контакти',
          collapsed: false,
          percentage: '4',
          items: [
            {
              text: '"New Ukrainian Wave"'
            },
            {
              text: '14 Peveril Road Stamford, CT 06902'
            },
            {
              text: 'newwave4@gmail.com'
            }
          ]
        }
      ]
    };
  }

  toggleFooterBlock(id) {
    this.state.footerContent[id].collapsed = !this.state.footerContent[id].collapsed;
    this.setState({footerContent: this.state.footerContent})
  }

  render() {
    return (
      <Row className="ml-0 mr-0 mt-3 pt-5 pb-5 bg-dark">
        <Col xs="0" md="2"></Col>
        {!!this.state.footerContent && this.state.footerContent.map( (footerBlock, key) => {
          return (
            <Col xs="12" md={footerBlock.percentage} key={key}>
              <h5 className="text-light d-flex">
                {footerBlock.title}
                <Button variant="link" size="sm" className="d-block d-sm-none text-light"
                onClick={() => {this.toggleFooterBlock(key)}}>{footerBlock.collapsed ? '▼' : '▲'}</Button>
              </h5>
              {!footerBlock.collapsed && footerBlock.items.map( (item, key0) => {
                return (
                  <div key={key0}>
                    {!item.link ? <p className="text-light mb-2">{item.text}</p> :
                      <>
                        <Button variant="link" size="sm" className="text-light text-left" href={item.link}>{item.text}</Button>
                        <br/>
                      </>}
                  </div>
                );
              })}
            </Col>
          )
        })}
      </Row>
    );
  }
}
