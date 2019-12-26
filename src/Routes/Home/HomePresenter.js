import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 20px;
`;

const Creator = styled.div`
  margin-top: 100px;
`;

const HomePresenter = ({ nowPlaying, error, loading }) => (
  <>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="현재 상영 영화">
            {nowPlaying.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date}
                overview={movie.overview}
              />
            ))}
          </Section>
        )}
        <Creator>wdntlr1024@gmail.com</Creator>
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;
