import React from "react";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  padding: 50px;
  position: relative;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center center;
  width: 30%;
  height: 100%;
`;

const Data = styled.div`
  margin-left: 10px;
  width: 75%;
`;

const Title = styled.span`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  font-size: 15px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Imdb = styled.a`
  background-image: url(${props => props.src});
  background-position: center center;
  background-size: cover;
  position: relative;
  display: inline-block;
  top: 4px;
  width: 50px;
  height: 25px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
  margin-bottom: 18px;
`;

const VideoContainer = styled.div``;

const Video = styled.iframe``;

const CloseBtn = styled.button`
  float: right;
  margin-top: -30px;
  margin-right: -30px;
  cursor: pointer;
  color: #fff;
  border: 1px solid #aeaeae;
  border-radius: 30px;
  background: #605f61;
  font-size: 31px;
  font-weight: bold;
  display: inline-block;
  line-height: 0px;
  padding: 11px 3px;
  &:hover {
    color: red;
  }
`;

const DetailPresenter = ({ result, error, loading, handleClose }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        />
        <Data>
          <CloseBtn onClick={handleClose}>X</CloseBtn>
          <Title>{result.title}</Title>
          <ItemContainer>
            <Item>{result.release_date.substring(0, 4)}</Item>
            <Divider>•</Divider>
            <Item>{result.runtime}분</Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Item>
              {result.imdb_id && (
                <>
                  <Divider>•</Divider>
                  <Imdb
                    target={"_black"}
                    href={`http://www.imdb.com/title/${result.imdb_id}`}
                    src={require("../../assets/imDb.png")}
                  />
                </>
              )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <VideoContainer>
            <Video
              src={`https://www.youtube.com/embed/${result.videos.results[0].key}`}
              frameBorder="0"
              allow="fullscreen"
              width="700px"
              height="400px"
              marginWidth="0"
              marginHeight="0"
              scrolling=""
            />
          </VideoContainer>
        </Data>
      </Content>
    </Container>
  );

export default DetailPresenter;
