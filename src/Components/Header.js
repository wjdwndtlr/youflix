import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 50px;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0px 10px;
  z-index: 10;
  border-bottom: 1px solid #e2e2e2;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.2);
  background-color: black;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 100px;
  text-align: center;
  border-bottom: 2px solid
    ${props => (props.current ? "#FF382E" : "transparent")};
  & {
    ${props => props.current}
  }
  color: ${props => (props.current ? "#FF382E" : "#a3a3a3")};
  transition: border-bottom 0.5s ease-in-out;
  :hover {
    border-bottom: 2px solid #ff382e;
    color: #ff382e;
  }
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
