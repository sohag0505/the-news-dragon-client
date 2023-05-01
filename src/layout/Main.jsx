// eslint-disable-next-line no-unused-vars
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../pages/shared/Header/Header";
import LeftNav from "../pages/shared/LeftNav/LeftNav";
import RightNav from "../pages/shared/RightNav/RightNav";
import Footer from "../pages/shared/footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <h2>Main contain coming.........</h2>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
