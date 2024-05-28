import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../..";
import {
  createProductApi,
  fetchBrands,
  fetchTypes,
} from "../../http/productAPI";
import { observer } from "mobx-react-lite";

const CreateProduct = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [describe, setDescribe] = useState("");
  // const [brand, setBrand] = useState(null);
  // const [type, setType] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, [device]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const addProduct = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("describe", describe);
    formData.append("idBrand", device.selectedBrand.idBrand);
    formData.append("idType", device.selectedType.idType);
    formData.append("character", JSON.stringify(info));

    createProductApi(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить товар
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedType.name || "Выберите тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types?.map((type) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedType(type)}
                  key={type.idType}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedBrand?.name || "Выберите бренд"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.idBrand}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder="Введите название товара"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите описание товара"
            value={describe}
            onChange={(e) => setDescribe(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите стоимость товара"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <hr />

          <Button variant="outline-dark" onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  placeholder="Введите название свойства"
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                ></Form.Control>
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder="Введите описание свойства"
                  value={i.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                ></Form.Control>
              </Col>
              <Col md={4}>
                <Button
                  variant={"outline-danger"}
                  onClick={() => removeInfo(i.number)}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-sucsess" onClick={addProduct}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateProduct;
