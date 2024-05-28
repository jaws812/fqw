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
        <Image width={150} height={150} />
        <div className="text-black-50 d-flex justify-content-between align-items-center"></div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
