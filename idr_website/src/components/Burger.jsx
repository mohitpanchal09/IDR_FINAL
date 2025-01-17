import React, { useState, useRef } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  // position: fixed;
  opacity: 100;
  top: 15px;
  right: 2000px;
  z-index: 2000;
  display: none;
  margin: 0px 10px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;

    background-color: ${({ open }) => (open ? "white" : "white")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      // z-index:200;
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  const productRef = useRef();

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div className="cross" />
        <div className="cross" />
        <div className="cross" />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
