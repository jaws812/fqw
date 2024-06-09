import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { INFO_ROUTE } from "../utils/consts";

const Pay = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>
        Оплата заказа, введите свои данные
      </h1>
      <Row>
        <Col xs={12} md={6}>
          <label style={{ width: "100%", marginLeft: "21rem" }}>
            Номер карты:
          </label>
          <input
            style={{ width: "100%", marginLeft: "21rem" }}
            placeholder={"Введите номер карты"}
            type="number"
            maxlength="16"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <label style={{ width: "100%", marginLeft: "21rem" }}>
            Владелец карты:
          </label>
          <input
            style={{ width: "100%", marginLeft: "21rem" }}
            placeholder={"Введите владельца карты"}
            type="text"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <label style={{ width: "100%", marginLeft: "21rem" }}>
            Срок действия карты:
          </label>
          <input
            style={{ width: "100%", marginLeft: "21rem" }}
            placeholder={"Введите срок действия карты"}
            type="text"
            maxlength="5"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <label style={{ width: "100%", marginLeft: "21rem" }}>CVV код:</label>
          <input
            style={{ width: "100%", marginLeft: "21rem" }}
            placeholder={"Введите CVV код"}
            type="password"
            maxlength="3"
          />
        </Col>
      </Row>
      <Button style={{ width: "80%", marginTop: "20px", marginLeft: "9rem" }} onClick={() => navigate(INFO_ROUTE)}>
        Оформить заказ
      </Button>
    </Container>
  );
};

export default Pay;
