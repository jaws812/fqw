import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneProduct } from "../http/productAPI";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneProduct(id).then((data) => setDevice(data));
  }, [id]);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
        {device.images && device.images.length > 0 ? (
          <Image width={300} height={300} src={"http://localhost:5000/" + device.images[0].image } />
        ) : (
          <div>Изображение не найдено</div>
        )}
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
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
            <h3>{device.price} ₽</h3>
            <Button variant="outline-dark">Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3"></Row>
      <h1>Описание</h1>
      <Row className="ms-1">{device.describe}</Row>

      <Row className="d-flex flex-column m-3">
        <h2>Характеристики</h2>
        {device.idProdChar?.map((info, index) => (
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


// import React, { useEffect, useState } from "react";
// import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// import { fetchOneProduct } from "../http/productAPI";

// const DevicePage = () => {
//   const [device, setDevice] = useState({ info: [] });
//   const { id } = useParams();
//   useEffect(() => {
//     fetchOneProduct(id).then((data) => setDevice(data));
//   }, [id]);

//   return (
//     <Container className="mt-3">
//       <Row>
//         <Col md={4}>
//           <Image width={300} height={300}  />
          
//         </Col>
//         <Col md={4}>
//           <Row className="d-flex flex-column align-items-center">
//             <h2>{device.name}</h2>
//           </Row>
//         </Col>
//         <Col md={4}>
//           <Card
//             className="d-flex flex-column align-items-center justify-content-around"
//             style={{
//               width: 300,
//               height: 300,
//               fontSize: 32,
//               border: "5px solid lightgray",
//             }}
//           >
//             <h3>{device.price} ₽</h3>
//             <Button variant="outline-dark">Добавить в корзину</Button>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="d-flex flex-column m-3"></Row>
//       <h1>Описание</h1>
//       <Row className="ms-1">{device.describe}</Row>

//       <Row className="d-flex flex-column m-3">
//         <h2>Характеристики</h2>
//         {device.idProdChar?.map((info, index) => (
//           <Row
//             key={info.id}
//             style={{
//               background: index % 2 === 0 ? "lightgray" : "transparent",
//               padding: 10,
//             }}
//           >
//             {info.title}:{info.description}
//           </Row>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default DevicePage;

