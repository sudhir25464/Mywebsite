import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Service = () => {
  return (
    <Container fluid className="p-0">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Row className="justify-content-center">
            <Col lg={6}>
              <h1 className="display-4 text-center mt-5 animate__animated animate__fadeInDown">
                Our Services
              </h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6}>
              <p className="lead text-center mb-5 animate__animated animate__fadeInUp">
                We offer a wide range of services to meet your needs.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="mb-5 animate__animated animate__fadeInLeft">
          <div className="service-card p-4 text-center">
            <i className="fas fa-laptop-code fa-3x mb-3"></i>
            <h3>Web Development</h3>
            <p>
              We build responsive and user-friendly websites that help you
              connect with your audience.
            </p>
          </div>
        </Col>
        <Col md={6} lg={4} className="mb-5 animate__animated animate__fadeInUp">
          <div className="service-card p-4 text-center">
            <i className="fas fa-paint-brush fa-3x mb-3"></i>
            <h3>Graphic Design</h3>
            <p>
              Our team of talented designers can help you create stunning
              visuals that will make your brand stand out.
            </p>
          </div>
        </Col>
        <Col md={6} lg={4} className="mb-5 animate__animated animate__fadeInRight">
          <div className="service-card p-4 text-center">
            <i className="fas fa-chart-line fa-3x mb-3"></i>
            <h3>Digital Marketing</h3>
            <p>
              We offer a range of digital marketing services to help you reach
              your target audience and grow your business.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Service;