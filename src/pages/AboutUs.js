import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const aboutus = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/aboutus4.jpg";
const logo3 = "https://images-bucket-yutk.s3.eu-north-1.amazonaws.com/Images/logo3.png"

function AboutUs() {
  return (
    <Container className="about-us">
      <img src={aboutus} alt="banner" className="about-us-bg" />
      <Row className="about-us-text align-items-center">
        <Col md={8}>
          <h2 className="mb-4">About Us</h2>
          <p className="fs-5 fw-bold custom-font">
            Yutk. This word translates to shirt in Sanskrit. One word. Many
            Emotions. We are dedicated to providing athletes and sports
            enthusiasts with top-notch products that enhance performance, style,
            and comfort.
          </p>
          <p className="fs-5 fw-bold custom-font">
            Our team of experts is committed to sourcing and designing sports
            apparel and equipment that not only meets industry standards but
            exceeds expectations. We work closely with manufacturers and
            suppliers who share our commitment to quality, ensuring that every
            product we offer undergoes testing and careful craftsmanship.
          </p>
          <p className="fs-5 fw-bold custom-font">
            We take pride in the meticulous attention to detail that goes into
            every aspect of our products. From the selection of materials to the
            manufacturing process, we prioritize durability, functionality, and
            performance.
          </p>
          <p className="fs-5 fw-bold custom-font">
            At our sports brand company, we are passionate about sports and
            empowering athletes to perform at their best. We are driven by a
            vision to make high-quality sports gear accessible to all, without
            compromising on performance or price. Join us in embracing your
            passion for sports and let our products elevate your game to new
            heights.
          </p>
        </Col>
        <Col md={4} className="text-center">
          <img src={logo3} alt="logo" className="img-fluid4 larger-logo" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
