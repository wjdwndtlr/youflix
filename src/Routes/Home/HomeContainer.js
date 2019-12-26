import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      this.setState({ nowPlaying });
    } catch (error) {
      this.setState({
        error: "영화 정보를 찾을 수 없습니다."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const { nowPlaying, error, loading } = this.state;
    return (
      <HomePresenter nowPlaying={nowPlaying} error={error} loading={loading} />
    );
  }
}
