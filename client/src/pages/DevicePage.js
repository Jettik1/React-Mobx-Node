import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  /* const device = {
    id: 1,
    name: "Iphone 12",
    price: 25000,
    img: "https://alexmak.net/wp-content/uploads/2020/11/IMG_0721-scaled.jpeg",
  }; */

  return (
    <Container className="mt-3">
      <Col md={4}>
        <Image
          width={300}
          height={300}
          src={process.env.REACT_APP_API_URL + device.img}
        />
      </Col>
      <Col md={4}>
        <Card>
          <h3>Средняя цена {device.price} руб</h3>
          <Button
            variant="outline-dark"
            onClick={() => console.log("Добавить в корзину")}
          >
            Добавить в корзину
          </Button>
        </Card>
      </Col>
      <Row className="d-flex flex-column m-3">
        <h1>Описание</h1>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 == 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
