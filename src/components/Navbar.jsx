import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, isLoggedIn } from "../Sessions/sessions";
import { useEffect } from "react";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
  color: black;
  font: ${mobile({ fontSize: "24px" })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  useEffect(() => {
    if (!isLoggedIn()){
      document.getElementById("logout_btn").style.display="none";
      document.getElementById("cart_btn").style.display="none";
      document.getElementById("signin_btn").style.display="block";
      document.getElementById("register_btn").style.display="block";
    } else{
      document.getElementById("logout_btn").style.display="block";
      document.getElementById("cart_btn").style.display="block";
      document.getElementById("signin_btn").style.display="none";
      document.getElementById("register_btn").style.display="none";
    }
  })
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo>COFFEE SHOP</Logo>
          </Link>
        </Center>
        <Right>
          <Link id="register_btn" to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link id="signin_btn" to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link id="cart_btn" to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
          <a id="logout_btn" onClick={logout}>
            <MenuItem>LOGOUT</MenuItem>
          </a>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

