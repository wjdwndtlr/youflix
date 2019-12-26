import React from "react";
import styled from "styled-components";
import ProTypes from "prop-types";

const Container = styled.div`
  margin-top: 50px;
  color: white;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;
const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.prototype = {
  title: ProTypes.string.isRequired,
  children: ProTypes.oneOfType([ProTypes.arrayOf(ProTypes.node), ProTypes.node])
};

export default Section;
