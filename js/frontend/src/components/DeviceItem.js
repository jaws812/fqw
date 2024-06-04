import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();

  return (
    <Col
      md={3}
      className={"mt-3"}
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.idProduct)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
      {device.images && device.images.length > 0 ? (
        <Image
          width={150}
          height={150}
          src={"http://localhost:5000/" + device.images[0].image }
          alt="Ошибка отображения фотографии"
          
        />
      ) : (
        <div>Изображение не найдено</div>
        
      )}
        <div className="text-black-50 d-flex justify-content-between align-items-center"></div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
