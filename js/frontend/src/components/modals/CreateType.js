import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "../../http/productAPI";

const CreateType = ({ show, onHide }) => {
  const [idBrand, setIdBrand] = useState("");
  const [type, setType] = useState("");

  const addType = () => {
    createType({ name: type, idBrand: idBrand }).then((data) => {
      setType("");
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={"Введите название бренда"}
            value={idBrand}
            onChange={(e) => setIdBrand(Number(e.target.value))}
            style={{ marginBottom: "10px" }}
          />
          <Form.Control
            placeholder={"Введите название типа"}
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-sucsess" onClick={addType}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
