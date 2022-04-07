import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const history = useNavigate();
  console.log(history);
  return (
    <Col md={3} className="mt-3">
      <Card
        style={{ width: 150, cursor: "pointer" }}
        border={"light"}
        onClick={() => history(DEVICE_ROUTE + "/" + device.id)}
      >
        <Image width={150} height={150} src={device.img} />
        <div className="mt-1">
          <div className="text-center">{device.name}</div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
