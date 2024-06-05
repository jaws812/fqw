import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { fetchCartProductByIdUser, fetchOneCart } from "../http/cartAPI";
import { fetchOneProduct } from "../http/productAPI";
import { Col, Container, Image, Row } from "react-bootstrap";

const Basket = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [userCart, setUserCart] = useState({});

  const { user } = useContext(Context);

  useEffect(() => {
    const fetchUserCart = async () => {
      const cartData = await fetchOneCart(user.user.id);
      setUserCart(cartData);
      const productsData = await Promise.all(
        cartData.allUsersCarts.map(async (cartItem) => {
          return await fetchOneProduct(cartItem.idProduct);
        })
      );
      setCartProducts(productsData);
    };

    fetchUserCart();
  }, [user]);

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Корзина</h1>
      <Row>
        {cartProducts.map((product) => (
          <Row key={product.id}>
            <Col xs={6}>
              {product.images && product.images.length > 0 ? (
                <Image
                  style={{ maxWidth: "25%" }}
                  src={"http://localhost:5000/" + product.images[0].image}
                />
              ) : (
                <div>Изображение не найдено</div>
              )}
            </Col>
            <Col
              xs={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.describe}</p>
            </Col>
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default Basket;
