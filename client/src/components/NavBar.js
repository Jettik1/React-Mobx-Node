import React, { useContext } from "react";
import { Context } from "..";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
/* import { NavLink } from "react-router-dom"; */
import { SHOP_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          style={{ borderBottom: "3px solid white", display: "inline" }}
          href={SHOP_ROUTE}
        >
          Антиквариат.ру
        </Navbar.Brand>
        {/* <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          Антиквариат
        </NavLink> */}
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"}>Админ панель</Button>
            <Button
              href={LOGIN_ROUTE}
              variant={"outline-light"}
              onClick={() => user.setIsAuth(false)}
              style={{ marginLeft: "4px" }}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"} href={LOGIN_ROUTE}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
