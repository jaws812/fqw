import React, { useContext, useEffect, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { createImage } from "../../http/imageAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { fetchProducts } from "../../http/productAPI";

const CreateImage = observer(({ show, onHide }) => {
  const { device } = useContext(Context);

  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchProducts().then((data) => device.setDevices(data));
  }, [device]);

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addProduct = () => {
    const formData = new FormData();
    formData.append("idProduct", device.selectedDevice.idProduct);
    formData.append("images", file);

    createImage(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить photo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedDevice.name || "Выберите товар"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.devices?.map((deviceItem) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedDevice(deviceItem)}
                  key={deviceItem.idProduct}
                >
                  {deviceItem.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className="mt-3" type="file" onChange={selectFile} />
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

export default CreateImage;
