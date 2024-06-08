import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchBrands, fetchProducts, fetchProductsByBrandAndType, fetchTypes } from "../http/productAPI";
import "./style.css";

const Shop = observer(() => {
  const { device } = useContext(Context);
  const [filteredDevices, setFilteredDevices] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => {
      device.setBrands(data);
    });
    fetchProducts().then((data) => {
      device.setDevices(data);
    });
  }, [device]);


  useEffect(() => {
    if (device.selectedBrand.idBrand && device.selectedType.idType) {
      fetchProductsByBrandAndType(device.selectedBrand.idBrand, device.selectedType.idType)
        .then((data) => {
          setFilteredDevices(data);
        })
        .catch((error) => {
          console.error("Error fetching filtered devices:", error);
        });
    }
  }, [device.selectedBrand.idBrand, device.selectedType.idType]);

  return (
    <Container className="shop-container">
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar></TypeBar>
        </Col>
        <Col md={9}>
          <BrandBar></BrandBar>
          <DeviceList device={filteredDevices.length > 0 ? filteredDevices : device.idProduct}></DeviceList>
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
