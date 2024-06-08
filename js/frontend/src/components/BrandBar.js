import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";
import './style.css';


const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className={"d-flex"}>
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer", width: "25%" }}
          key={brand.idBrand}
          className="p-3 brand-bar"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.idBrand === device.selectedBrand.idBrand ? "danger" : "light"}
        >
          {brand.name}
          
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
