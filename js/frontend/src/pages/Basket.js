import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { fetchOneCart } from "../http/cartAPI";
import { fetchOneProduct } from "../http/productAPI";
import { Button, Container, Image, Row } from "react-bootstrap";
import { ORDER_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState([]);
  // eslint-disable-next-line
  const [userCart, setUserCart] = useState({});
  const [productCountMap, setProductCountMap] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

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
    <Container>
      <h1 style={{ textAlign: "center" }}>Корзина</h1>
      <Row>
        {cartProducts
          .filter(
            (product, index, self) =>
              index === self.findIndex((p) => p.name === product.name)
          )
          .map((product) => (
            <Row xs={2} key={product.id}>
              {/* <Col xs={6}> */}
              <div>
                {product.images && product.images.length > 0 ? (
                  <Image
                    style={{ maxWidth: "25%" }}
                    src={"http://localhost:5000/" + product.images[0].image}
                  />
                ) : (
                  <div>Изображение не найдено</div>
                )}
                {/* </Col> */}
                <div style={{ marginLeft: "180px", marginTop: "-150px" }}>
                  <p><b>{product.name}</b></p>
                  <p>{product.price}₽</p>
                  <p>Количество: {productCountMap[product.name]}</p>
                  <p>Итоговая стоимость: {product.price * productCountMap[product.name]}</p>
                </div>
              </div>
            </Row>
          ))}
      </Row>
      <p>Общая стоимость: {totalPrice}₽</p>
      <Button style={{ width: "100%" }} onClick={()=>navigate(ORDER_ROUTE)}>Оформить заказ</Button>
    </Container>
  );
};

export default Basket;

// next code

// const Basket = () => {
//   const [cartProducts, setCartProducts] = useState([]);
//   const [userCart, setUserCart] = useState({});
//   const [productCountMap, setProductCountMap] = useState({});

//   const { user } = useContext(Context);

//   useEffect(() => {
//     const fetchUserCart = async () => {
//       const cartData = await fetchOneCart(user.user.id);
//       setUserCart(cartData);
//       const productsData = await Promise.all(
//         cartData.allUsersCarts.map(async (cartItem) => {
//           return await fetchOneProduct(cartItem.idProduct);
//         })
//       );
//       setCartProducts(productsData);
//     };

//     fetchUserCart();
//   }, [user]);

//   useEffect(() => {
//     const countMap = {};
//     cartProducts.forEach((product) => {
//       countMap[product.name] = (countMap[product.name] || 0) + 1;
//     });
//     setProductCountMap(countMap);
//   }, [cartProducts]);

//   return (
//     <Container>
//       <h1 style={{ textAlign: "center" }}>Корзина</h1>
//       <Row>
//         {cartProducts
//           .filter(
//             (product, index, self) =>
//               index === self.findIndex((p) => p.name === product.name)
//           )
//           .map((product) => (
//             <Row key={product.id}>
//               <Col xs={6}>
//                 {product.images && product.images.length > 0 ? (
//                   <Image
//                     style={{ maxWidth: "25%" }}
//                     src={"http://localhost:5000/" + product.images[0].image}
//                   />
//                 ) : (
//                   <div>Изображение не найдено</div>
//                 )}
//               </Col>
//               <Col
//                 xs={6}
//                 style={{ display: "flex", marginBottom: "4rem", left: "-20px" }}
//               >
//                 <div className="ml-4">
//                   <p style={{ fontWeight: "bold" }}>{product.name}</p>
//                   <p>{product.price}</p>
//                   <p>{product.describe}</p>
//                   <p>Количество в корзине: {productCountMap[product.name]}</p>
//                 </div>
//               </Col>
//             </Row>
//           ))}
//       </Row>
//       <Button style={{ width: "100%" }}>Оформить заказ</Button>
//     </Container>
//   );
// };

// export default Basket;

//next code

// const Basket = () => {
//   const [cartProducts, setCartProducts] = useState([]);
//   const [userCart, setUserCart] = useState({});

//   const { user } = useContext(Context);

//   useEffect(() => {
//     const fetchUserCart = async () => {
//       const cartData = await fetchOneCart(user.user.id);
//       setUserCart(cartData);
//       const productsData = await Promise.all(
//         cartData.allUsersCarts.map(async (cartItem) => {
//           return await fetchOneProduct(cartItem.idProduct);
//         })
//       );
//       setCartProducts(productsData);
//     };

//     fetchUserCart();
//   }, [user]);

//   return (
//     <Container>
//       <h1 style={{ textAlign: "center" }}>Корзина</h1>
//       <Row>
//         {cartProducts.map((product) => (
//           <Row key={product.id}>
//             <Col xs={6}>
//               {product.images && product.images.length > 0 ? (
//                 <Image
//                   style={{ maxWidth: "25%" }}
//                   src={"http://localhost:5000/" + product.images[0].image}
//                 />
//               ) : (
//                 <div>Изображение не найдено</div>
//               )}
//             </Col>
//             <Col xs={6}
//             style={{ display: "flex", marginBottom: "4rem", left: "-20px" }}>
//               <div className="ml-4">
//                 <p style={{ fontWeight: "bold" }}>{product.name}</p>
//                 <p>{product.price}</p>
//                 <p>{product.describe}</p>
//               </div>
//             </Col>
//           </Row>
//         ))}
//       </Row>
//       <Button style={{ width: "100%" }}>Оформить заказ</Button>
//     </Container>
//   );
// };

// export default Basket;
