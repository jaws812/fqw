import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../http/productAPI";
import { Context } from "..";
import { createCartProduct, fetchOneCart } from "../http/cartAPI";

const DevicePage = () => {
  const [devices, setDevice] = useState({ info: [] });
  const [carts, setCarts] = useState({});

  const { id } = useParams();
  const { user } = useContext(Context);

  useEffect(() => {
    fetchOneProduct(id).then((data) => setDevice(data));
  }, [id]);

  useEffect(() => {
    fetchOneCart(user.user.id).then((data) => setCarts(data));
  }, [user]);

  const addCartProduct = () => {
    const idCart = carts.idCart;
    createCartProduct(idCart, id);//id это idProduct
    console.log("carts=  ", carts);
    console.log("user.user.id=  ", user.user.id);
    console.log("cart.idCart=  ", carts.idCart);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          {devices.images && devices.images.length > 0 ? (
            <Image
              width={300}
              height={300}
              src={"http://localhost:5000/" + devices.images[0].image}
            />
          ) : (
            <div>Изображение не найдено</div>
          )}
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{devices.name}</h2>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>{devices.price} ₽</h3>

            <Button variant="outline-dark" onClick={addCartProduct}>
              Добавить в корзину
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3"></Row>
      <h1>Описание</h1>
      <Row className="ms-1">{devices.describe}</Row>

      <Row className="d-flex flex-column m-3">
        <h2>Характеристики</h2>
        {devices.idProdChar?.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}:{info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
