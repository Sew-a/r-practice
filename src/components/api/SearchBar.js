import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmitForm} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
