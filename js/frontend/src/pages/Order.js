import { useContext, useState } from "react";
import { Context } from "..";
import { Button, Container, Row, Col } from "react-bootstrap";
import { createOrderAddress } from "../http/addressAPI";
import { useNavigate } from "react-router-dom";
import { PAY_ROUTE } from "../utils/consts";

const Order = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [apartment, setApartment] = useState("");
  const { user } = useContext(Context);

  const handleOrder = () => {
    createOrderAddress(user.user.id, city, street, house, apartment);
    navigate(PAY_ROUTE);
  };
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Оформление заказа</h1>
      <Row>
        <Col xs={12} md={6}> 
          <label style={{ width: "100%", marginLeft: "21rem" }}>Город:</label>
          <input
            style={{ width: "100%", marginLeft: "21rem" }}
            placeholder={"Введите название города"}
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <label style={{ width: "100%", marginLeft: "21rem" }}>Улица:</label>
          <input
            style={{ width: "100%", marginLeft: "21rem" }}
            placeholder={"Введите название улицы"}
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <label style={{ width: "100%", marginLeft: "21rem" }}>Дом:</label>
          <input
            style={{ width: "100%", marginLeft: "21rem" }}
            placeholder={"Введите номер дома"}
            type="number"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <label style={{ width: "100%", marginLeft: "21rem" }}>Квартира:</label>
          <input
            style={{ width: "100%", marginLeft: "21rem" }}
            placeholder={"Введите номер квартиры"}
            type="number"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
          />
        </Col>
      </Row>
      <Button style={{ width: "80%", marginTop: "20px", marginLeft: "9rem" }} onClick={handleOrder}>
        Оформить заказ
      </Button>
    </Container>
  );
};

export default Order;
