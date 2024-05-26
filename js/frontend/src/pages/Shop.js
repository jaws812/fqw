import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchBrands, fetchProducts, fetchTypes } from "../http/productAPI";

const Shop = observer(() => {
  const { device } = useContext(Context);
  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => {
      device.setBrands(data);
      console.log(data);
    });
    fetchProducts().then((data) => {
      console.log("Products:", data); 
      device.setDevices(data.rows);
    });
  }, [device]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar></TypeBar>
        </Col>
        <Col md={9}>
          <BrandBar></BrandBar>
          <DeviceList></DeviceList>
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
