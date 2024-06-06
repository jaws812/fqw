import { useContext, useState } from "react";
import { Context } from "..";
import { Button, Container, Row } from "react-bootstrap";
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
        <label>Город:</label>
        <input
          placeholder={"Введите название города"}
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </Row>
      <Row>
        <label>Улица:</label>
        <input
          placeholder={"Введите название улицы"}
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </Row>
      <Row>
        <label>Дом:</label>
        <input
          placeholder={"Введите номер дома"}
          type="text"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
        />
      </Row>
      <Row>
        <label>Квартира:</label>
        <input
          placeholder={"Введите номер квартиры"}
          type="text"
          value={apartment}
          onChange={(e) => setApartment(e.target.value)}
        />
      </Row>
      <Button style={{ width: "100%" }} onClick={handleOrder}>
        Оформить заказ
      </Button>
    </Container>
  );
};

export default Order;
