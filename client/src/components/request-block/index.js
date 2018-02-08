import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";

import { fetchGithubUser } from "../../actions/example-github";

import "./request-block.css";

export class RequestBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleClick() {
    console.log("Click event: " + this.state.username);
    this.props.fetchGithubUser(this.state.username);
  }

  render() {
    return (
      <div className="ui grid">
        <div className="row">
          <div className="four wide column" />
          <div className="eight wide column">
            <Input
              fluid
              className="example-input"
              label="http://localhost:3001/github/"
              placeholder="username"
              action={{
                color: "teal",
                content: "GET",
                onClick: this.handleClick,
              }}
              onChange={this.handleChange}
            />
          </div>
          <div className="four wide column" />
        </div>
        <div className="row">
          <div className="four wide column" />
          <div className="eight wide column">
            <div className="ui segment code-block">
              <code>
                <pre>{JSON.stringify(this.props.response, null, 2)}</pre>
              </code>
            </div>
          </div>
          <div className="four wide column" />
        </div>
      </div>
    );
  }
}

// TODO: components should remain dumb; containers should connect
const mapStateToProps = state => ({
  error: state.githubUser.error,
  response: state.githubUser.response,
  isFetchingGithubUser: state.githubUser.fetchingGithubUser,
});

const mapDispatchToProps = dispatch => ({
  fetchGithubUser: username => dispatch(fetchGithubUser(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestBlock);
