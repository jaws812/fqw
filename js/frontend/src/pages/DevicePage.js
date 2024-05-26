import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const DevicePage = () => {
  const device = { id: 1, name: "iphone 12", price: 2500, rating: 2 };

  const description = [
    { id: 1, title: "Оперативная память", description: " 5 гб" },
    { id: 2, title: "Камера", description: " 12 мп" },
    { id: 3, title: "Процессор", description: " Пентиум 3" },
    { id: 4, title: "Ядра", description: " 2" },
    { id: 5, title: "Аккумулятор", description: " 1000 maH" },
  ];

  // const [device, setDevice] = useState({ info: [] });

  // const {id} = useParams();

  // useEffect(() => {
  //   fetchOneProduct(id).then(data=>setDevice(data))
  // }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} />
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

      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {description.map((info, index) => (
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
