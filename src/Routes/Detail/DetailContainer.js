import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      error: null,
      loading: true
    };
  }

  handleClose = event => {
    this.props.history.goBack();
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      ({ data: result } = await moviesApi.movieDetail(parsedId));
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;

    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        handleClose={this.handleClose}
      />
    );
  }
}
