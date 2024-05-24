import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

//неработает
  if (!device.devices) {
    console.log(device)
    return "null"; // или можно отобразить загрузочный индикатор
  }

  return (
    <Row className="d-flex">
      {device.devices.map(device=>
        <DeviceItem key={device.id} device={device}/>
      )}
    </Row>
  );
});

export default DeviceList;
