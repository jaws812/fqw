import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";
import { Button, Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";

//импортируй навбары
const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: "green" }} to={SHOP_ROUTE}>
          Furniture Shop
        </NavLink>

        {user.isAuth ? (
          <Nav className="ms-auto" style={{ color: "green" }}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(ADMIN_ROUTE)}
              style={{ color: "green" }}
            >
              Панель администратора{" "}
            </Button>
            <Button
              variant={"outline-light"}
              className="ms-2"
              style={{ color: "green" }}
              onClick={() => navigate(BASKET_ROUTE)}
            >
              Корзина{" "}
            </Button>
            <Button
              variant={"outline-light"}
              className="ms-2"
              style={{ color: "green" }}
              onClick={() => logOut()}
            >
              Выйти{" "}
            </Button>
          </Nav>
        ) : (
          <Nav className="ms-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(LOGIN_ROUTE)}
              style={{ color: "green" }}
            >
              Авторизация{" "}
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
