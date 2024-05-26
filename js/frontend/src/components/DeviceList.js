import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import Row from "react-bootstrap/Row";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  console.log("значение device.devices " + device.devices + " ");
  return (
    <Row className="d-flex">
      {device.devices &&
        device.devices.map((device) => (
          <DeviceItem key={device.id} device={device}></DeviceItem>
        ))}
    </Row>
  );
});

export default DeviceList;
