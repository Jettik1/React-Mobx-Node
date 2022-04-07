import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button, Card, CardGroup, Col, ListGroup, Row } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex" md={6} /* Больше 6 - разметка слетает */>
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          className={"p-3"}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          key={brand.id}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
