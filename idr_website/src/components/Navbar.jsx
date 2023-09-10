import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { mobile6 } from "../responsive";
const Image = styled.img`
  width: 100px;
  height: 100px;
`;
const Nav = styled.nav`
  width: 100%;
  height: 75px;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  z-index: 10;
  .logo {
    padding: 15px 0;
  }
`;

const Container = styled.div`
  // margin-right:auto;
  // margin-right:-20%;

  display: flex;
`;

const Right = styled.div`
  // flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile6({ display: "none" })}
`;

const MenuItem = styled.div`
  // margin-left:25px;
  // font-size:16px;
  // cursor:pointer;
  color: white;
`;

const Imge = styled.img`
  height: 30px;
  width: 30px;
  margin: 0px 10px;
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Image src="https://media.discordapp.net/attachments/1036195620693749825/1150308841972572250/image.png?width=1018&height=1018" />
      </div>
      <Container>
        <Burger />
      </Container>
      <Right>
        <MenuItem>Made in India</MenuItem>
        <Imge src="https://media.discordapp.net/attachments/1036195620693749825/1150310271441719348/image.png?width=176&height=178" />
      </Right>
    </Nav>
  );
};

export default Navbar;
