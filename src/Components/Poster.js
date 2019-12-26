import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  color: white;
  font-weight: bold;
  font-size: 15px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
  color: yellow;
`;

const PreviewContainer = styled.div`
  bottom: 5px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
  width: 125px;
  height: 180px;
`;

const Preview = styled.p`
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s linear;
  color: red;
  font-size: 12px;
  top: 7px;
  color: #b0b0b0;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${PreviewContainer} {
      opacity: 1;
    }
    ${Preview} {
      opacity: 1;
    }
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
  color: 040404;
  font-size: 14px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, overview }) => (
  <Link to={`/movie/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/noPosterSmall.png")
          }
        />
        <PreviewContainer>
          <Preview>
            {overview.length > 50
              ? `${overview.substring(0, 50)}...`
              : overview}
          </Preview>
        </PreviewContainer>
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
