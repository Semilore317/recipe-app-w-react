import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div className="icon-div">
      <List>
        <NavLink to={"./cuisine/Italian"}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </NavLink>

        <NavLink to={"./cuisine/American"}>
          <FaHamburger />
          <h4>American</h4>
        </NavLink>

        <NavLink to={"./cuisine/Thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </NavLink>

        <NavLink to={"./cuisine/Japanese"}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </NavLink>
      </List>
    </div>
  );
}

const List = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0rem;
  /*background: red;*/
  width: 40rem;

  * {
    cursor: pointer;
  }
`;

export default Category;
