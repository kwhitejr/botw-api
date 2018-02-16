import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Input, Message } from "semantic-ui-react";

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
    this.props.fetchGithubUser(this.state.username);
  }

  render() {
    return (
      <div className="ui grid">
        {/* <div className="row">
          <div className="three wide column" />
          <div className="ten wide column">
          </div>
          <div className="three wide column" />
        </div> */}

        <div className="row">
          <div className="three wide column" />
          <div className="ten wide column">
            <h1 className="input-request-caption">Try it now!</h1>
            <Input
              fluid
              className="input-request"
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
          <div className="three wide column" />
        </div>
        {this.props.error && (
          <div className="row">
            <div className="three wide column" />
            <div className="ten wide column">
              <Message negative>
                <Message.Header>404: User not found</Message.Header>
                <p>Please try another search</p>
              </Message>
            </div>
            <div className="three wide column" />
          </div>
        )}
        <div className="row">
          <div className="three wide column" />
          <div className="ten wide column">
            <h3 className="code-block-title">Resource for a Thing</h3>
            <div className="ui segment">
              <pre className="code-block">
                <samp>{JSON.stringify(this.props.response, null, 2)}</samp>
              </pre>
            </div>
          </div>
          <div className="three wide column" />
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
