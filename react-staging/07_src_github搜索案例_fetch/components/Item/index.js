import React, { Component } from "react";

export default class index extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="card">
        <a rel="noreferrer" href={user.homepage} target="_blank">
          <img alt="图片呀" src={user.avatarUrl} style={{ width: "100px" }} />
        </a>
        <p className="card-text">{user.username}</p>
      </div>
    );
  }
}
