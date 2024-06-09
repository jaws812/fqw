import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { fetchOneCart } from "../http/cartAPI";
import { fetchOneProduct } from "../http/productAPI";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { fetchOrderAddress } from "../http/addressAPI";

const Info = () => {
  const navigate = useNavigate();
  
  const [cartProducts, setCartProducts] = useState([]);
  // eslint-disable-next-line
  const [userCart, setUserCart] = useState({});
  // eslint-disable-next-line
  const [productCountMap, setProductCountMap] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  // eslint-disable-next-line
  const [deliveryAddress, setDeliveryAddress] = useState(""); // Состояние для адреса доставки
  const [addr, setAddr] = useState({ });

  const { user } = useContext(Context);

  useEffect(() => {
    fetchOrderAddress().then((data) => setAddr(data));
  }, []);

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

    // const fetchAddress = async () => {
    //   try {
    //     const addressData = await fetchOrderAddress(); // Получаем адрес из базы данных
    //     setDeliveryAddress(
    //       `${addressData.city}, ${addressData.street}, ${addressData.house}, ${addressData.apartment}`
    //     ); // Устанавливаем адрес в состояние
    //   } catch (error) {
    //     console.error("Ошибка при получении адреса:", error);
    //   }
    // };
    // fetchAddress();
  }, [user]);

  useEffect(() => {
    const countMap = {};
    let total = 0;
    cartProducts.forEach((product) => {
      countMap[product.name] = (countMap[product.name] || 0) + 1;
      total += product.price;
    });
    setProductCountMap(countMap);
    setTotalPrice(total);
  }, [cartProducts]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Информация о заказе</h1>
      <div>
        <b>Ваш заказ содержит следующие товары:</b>
      </div>
      <div>
        {cartProducts.map((product, index) => (
          <span key={product.id}>
            {index > 0 && ", "}
            {product.name}
          </span>
        ))}
      </div>
      <br></br>
      <p>
        <b>Общая стоимость товаров:</b> {totalPrice}₽
      </p>
      <p>
        <b>Стутус оплаты:</b> Оплачено
      </p>
      <p>
      <b>Адрес доставки:</b> {addr[0].city}, {addr[0].street}, {addr[0].house}, {addr[0].apartment}
      </p>
      <p>
        <b>Статус доставки:</b> В процессе
      </p>
      <Button onClick={() => navigate(SHOP_ROUTE)}>Главная</Button>
    </div>
  );
};

export default Info;
