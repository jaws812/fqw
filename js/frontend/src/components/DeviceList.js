import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import Row from "react-bootstrap/Row";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  // useEffect(() => {
  //   fetchProducts().then((data) => {
  //     console.log("Products:", data);
  //     device.setDevices(data);
  //   });
  // }, [device]);

  // console.log(device.devices);

  // const context = useContext(Context);
  // // console.log(context);
  return (
    <Row className="d-flex">
      {device.devices.map((device) => (
        <DeviceItem key={device.idProduct} device={device}></DeviceItem>
      ))}
    </Row>
  );
});

export default DeviceList;
