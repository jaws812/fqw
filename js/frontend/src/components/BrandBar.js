import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  // console.log("значение device.brands " + device.brands + " ");
  return (
    <Row className={"d-flex"}>
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer", width: "25%" }}
          key={brand.idBrand}
          className="p-3"
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
