import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { ListGroup } from "react-bootstrap";
import "./style.css";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          className="type-bar"
          style={{ cursor: "pointer" }}
          active={type.idType === device.selectedType.idType}
          onClick={() => device.setSelectedType(type)}
          key={type.idType}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
