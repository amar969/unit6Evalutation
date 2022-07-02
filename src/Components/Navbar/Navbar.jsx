import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const NavbarWrapper = styled.div`
  background-color: #377d71;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const Navbar = () => {
  const navigate = useNavigate();

  let user = localStorage.getItem("user");
  console.log("navbar", user)

  return (
    <>
      <NavbarWrapper>
       {user ? <Link to="/" style={{ color: "white", textDecoration: "none" }}> 
          <h4>Home</h4>
        </Link> : <Link to="/Login" style={{ color: "white", textDecoration: "none" }} > <h4>Home</h4> </Link> }
        <Link to="/Booking" style={{ color: "white", textDecoration: "none" }}>
          <h4>Booking</h4>
        </Link>
        <Link to="/Login" style={{ color: "white", textDecoration: "none" }}>
          <h4>Login </h4>
        </Link>
      </NavbarWrapper>
    </>
  );
};
